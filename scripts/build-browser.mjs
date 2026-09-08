// Browser global bundle for static consumers (Claude Code Design `x-import`,
// deck-system, content-system). Exposes the foundation and local helper exports on
// `window.LOCALDS`. React and ReactDOM are NOT inlined: the DC runtime
// (support.js) provides `window.React` / `window.ReactDOM` (React 18 UMD),
// and components must share that instance or hooks break.
import { createHash } from 'node:crypto';
import { createRequire } from 'node:module';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const packageRequire = createRequire(
  new URL('../packages/local-design/package.json', import.meta.url),
);
const { build } = packageRequire('esbuild');

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const require = packageRequire;
const NAMESPACE = 'LOCALDS';
const outFile = resolve(root, 'shared/local-design.global.js');

// Named-export lists come from the locally installed packages so the shims
// stay complete when React is upgraded. Missing names resolve to undefined at
// runtime on an older window.React — only a problem if a component calls them.
const reactNames = Object.keys(require('react')).filter(
  (k) => /^[A-Za-z_$][\w$]*$/.test(k) && k !== 'default',
);
const reactDomNames = Object.keys(require('react-dom')).filter(
  (k) => /^[A-Za-z_$][\w$]*$/.test(k) && k !== 'default',
);

const shim = (globalName, names, guard) => `
  const G = window.${globalName};
  if (!G) throw new Error('@local/design browser bundle requires window.${globalName} (load the DC runtime or a React UMD build first)');
  ${guard ?? ''}
  export default G;
  ${names.map((n) => `export const ${n} = G.${n};`).join('\n')}
`;

const jsxRuntimeShim = `
  const R = window.React;
  if (!R) throw new Error('@local/design browser bundle requires window.React');
  export const Fragment = R.Fragment;
  function make(type, props, key) {
    const { children, ...rest } = props || {};
    if (key !== undefined) rest.key = key;
    return children === undefined ? R.createElement(type, rest) : R.createElement(type, rest, children);
  }
  export const jsx = make;
  export const jsxs = make;
  export const jsxDEV = make;
`;

const globalsPlugin = {
  name: 'local-design-window-react',
  setup(esbuild) {
    esbuild.onResolve(
      { filter: /^react(\/jsx-runtime|\/jsx-dev-runtime)?$/ },
      (args) => ({ path: args.path, namespace: 'local-design-global' }),
    );
    esbuild.onResolve({ filter: /^react-dom(\/client)?$/ }, (args) => ({
      path: args.path,
      namespace: 'local-design-global',
    }));
    esbuild.onLoad(
      { filter: /.*/, namespace: 'local-design-global' },
      (args) => {
        if (args.path === 'react')
          return { loader: 'js', contents: shim('React', reactNames) };
        if (args.path.startsWith('react/jsx'))
          return { loader: 'js', contents: jsxRuntimeShim };
        return { loader: 'js', contents: shim('ReactDOM', reactDomNames) };
      },
    );
  },
};

const entry = `
  import * as foundation from './packages/wds/dist/index.mjs';
  import * as icons from './packages/wds-icon/dist/index.mjs';
  import * as additions from './packages/local-design/dist/index.mjs';
  const designSystem = { ...foundation, ...icons, ...additions };
  window.${NAMESPACE} = Object.assign(window.${NAMESPACE} || {}, designSystem);
`;

const result = await build({
  stdin: {
    contents: entry,
    loader: 'js',
    resolveDir: root,
    sourcefile: 'scripts/generated-browser-entry.js',
  },
  absWorkingDir: root,
  bundle: true,
  write: false,
  format: 'iife',
  platform: 'browser',
  target: ['es2020'],
  charset: 'utf8',
  legalComments: 'inline',
  treeShaking: true,
  minify: true,
  define: { 'process.env.NODE_ENV': '"production"' },
  conditions: ['browser', 'import', 'module', 'default'],
  mainFields: ['browser', 'module', 'main'],
  plugins: [globalsPlugin],
  logLevel: 'warning',
});

const pkg = JSON.parse(await readFile(resolve(root, 'package.json'), 'utf8'));
const code = result.outputFiles[0].text;
const hash = createHash('sha256').update(code).digest('hex').slice(0, 12);
const header = `/* @local/design ${pkg.version || 'snapshot'} browser bundle — window.${NAMESPACE}; requires window.React/ReactDOM (React 18+ UMD); build: scripts/build-browser.mjs; sha256:${hash} */\n`;
const bundle = header + code;

// Smoke: executes against a stub window; verifies the namespace and the
// exports static consumers depend on.
const smokeWindow = {
  React: {
    createElement() {},
    forwardRef: (f) => f,
    memo: (f) => f,
    createContext: () => ({}),
    Fragment: 'f',
    useContext() {},
    useMemo() {},
    useState() {},
    useEffect() {},
    useLayoutEffect() {},
    useRef() {},
    useCallback() {},
    useId() {},
    Children: {},
    isValidElement() {},
    cloneElement() {},
    useInsertionEffect() {},
    useReducer() {},
    useImperativeHandle() {},
    useSyncExternalStore() {},
    version: '18.3.1',
  },
  ReactDOM: { createPortal: (n) => n, flushSync: (f) => f() },
  document: undefined,
};
smokeWindow.window = smokeWindow;
vm.runInNewContext(
  bundle,
  {
    window: smokeWindow,
    globalThis: smokeWindow,
    self: smokeWindow,
    console,
    document: undefined,
    navigator: { userAgent: 'node' },
  },
  { filename: 'local-design.global.js' },
);
const exported = smokeWindow[NAMESPACE] || {};
const required = [
  'Button',
  'ContentBadge',
  'Switch',
  'Icon',
  'IconStarFill',
  'Gradient',
  'StatRow',
  'ThemeProvider',
  'Typography',
];
const missing = required.filter((n) => !(n in exported));
if (missing.length)
  throw new Error(`Bundle is missing exports: ${missing.join(', ')}`);

await mkdir(dirname(outFile), { recursive: true });
await writeFile(outFile, bundle);
console.log(
  `shared/local-design.global.js: ${Object.keys(exported).length} exports, ${(bundle.length / 1024).toFixed(0)} KB, sha256:${hash}`,
);
