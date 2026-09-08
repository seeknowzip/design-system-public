import { defineConfiguration } from '../../.tsdown/define-configuration.ts';
import { injectUseClient } from '../../.tsdown/inject-use-client.ts';

export default defineConfiguration({
  deps: {
    neverBundle: [
      'react',
      'react-dom',
      'next',
      '@emotion/utils',
      '@emotion/serialize',
    ],
  },
  dts: {
    compilerOptions: { paths: {} },
    resolver: 'tsc',
  },
  entry: ['src/**/*.ts', 'src/**/*.tsx'],
  onSuccess: () => injectUseClient(['./dist/**/*.{js,mjs}']),
});
