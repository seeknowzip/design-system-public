# `@wanteddev/wds`

Powered by [Emotion](https://github.com/emotion-js/emotion).

[English](./README.md) | [한국어](./README.ko.md)

## Install

이 저장소는 독립 로컬 스냅샷입니다. `@wanteddev/*` 패키지명은 Wanted
레지스트리에서 내려받는 패키지가 아니라 내부 workspace 식별자입니다. 로컬
workspace 또는 검증된 로컬 패키지 세트를 사용하세요. Local Design System 소비 설정은
저장소 루트의 `README.md`를 참고하세요.

> **⚠️ 주의:** `@wanteddev/wds-*` 관련 패키지(예: `@wanteddev/wds`, `@wanteddev/wds-icon`, `@wanteddev/wds-nextjs`)는 모두 **동일한 버전**으로 설치해야 합니다. 버전이 일치하지 않으면 theme context가 중복으로 생성되어 예기치 않은 스타일 문제가 발생할 수 있습니다.

## Usage

Pretendard 를 사용하기 때문에 폰트를 불러와야 합니다.

```html
<link rel="preconnect" href="https://cdn.jsdelivr.net" />
<link
  rel="stylesheet"
  as="style"
  crossorigin
  href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-jp-dynamic-subset.min.css"
/>
<link
  rel="stylesheet"
  as="style"
  crossorigin
  href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css"
/>
```

### React

```tsx
// App.tsx
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@wanteddev/wds';

import App from './App';

import '@wanteddev/wds/global.css';

const root = createRoot(document.getElementById('app')!);

root.render(
  <ThemeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
);
```

만약, scss 혹은 styled-components 등을 사용한다면

[Pretend 옵션](https://emotion.sh/docs/@emotion/cache#prepend)을 사용하면 스타일 태그를 DOM 노드에 앞부분에 추가할지 여부를 설정할 수 있습니다.

```tsx
// App.tsx
import { createRoot } from 'react-dom/client';
import { ThemeProvider, CacheProvider, createCache } from '@wanteddev/wds';

import App from './App';

import '@wanteddev/wds/global.css';

const root = createRoot(document.getElementById('app')!);

const cache = createCache({ key: 'wds', prepend: true });

root.render(
  <CacheProvider value={cache}>
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </CacheProvider>,
);
```

### Next.js App router

```sh
pnpm --filter YOUR_APP add @wanteddev/wds-nextjs@workspace:*
```

```tsx
// app/layout.tsx
'use client';
import { ThemeProvider } from '@wanteddev/wds';
import { AppRouterCacheProvider } from '@wanteddev/wds-nextjs';

import type { PropsWithChildren } from 'react';

import '@wanteddev/wds/global.css';

const RootLayout = (props: PropsWithChildren) => {
  return (
    <html suppressHydrationWarning>
      <head>{/* Load Pretendard JP font */}</head>
      <body>
        <ThemeProvider>
          <AppRouterCacheProvider>{props.children}</AppRouterCacheProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
```

만약, scss 혹은 styled-components 등을 사용한다면

[Pretend 옵션](https://emotion.sh/docs/@emotion/cache#prepend)을 사용하면 스타일 태그를 DOM 노드에 앞부분에 추가할지 여부를 설정할 수 있습니다.

```tsx
// app/layout.tsx
'use client';
import { ThemeProvider } from '@wanteddev/wds';
import { AppRouterCacheProvider } from '@wanteddev/wds-nextjs';
import { ThemeProvider as StyledComponentsProvider } from 'styled-components';

import type { PropsWithChildren } from 'react';

import '@wanteddev/wds/global.css';

const RootLayout = (props: PropsWithChildren) => {
  return (
    <html suppressHydrationWarning>
      <head>
        <Head />
      </head>
      <body>
        <ThemeProvider provider={StyledComponentsProvider}>
          <AppRouterCacheProvider options={{ prepend: true }}>
            {props.children}
          </AppRouterCacheProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
```

### Next.js Page router

```sh
pnpm --filter YOUR_APP add @wanteddev/wds-nextjs@workspace:*
```

```tsx
// _app.tsx
import { ThemeProvider } from '@wanteddev/wds';
import { AppCacheProvider } from '@wanteddev/wds-nextjs';

import type { AppProps } from 'next/app';
import type { EmotionCacheProviderProps } from '@wanteddev/wds-nextjs';

import '@wanteddev/wds/global.css';

const MyApp = ({
  Component,
  pageProps,
  emotionCache,
}: AppProps & EmotionCacheProviderProps) => {
  return (
    <AppCacheProvider emotionCache={emotionCache}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </AppCacheProvider>
  );
};

export default MyApp;
```

```tsx
// _document.tsx
import {
  DocumentHeadTags,
  documentGetInitialProps,
} from '@wanteddev/wds-nextjs';
import Document, { Head, Html, Main, NextScript } from 'next/document';

import type { DocumentHeadTagsProps } from '@wanteddev/wds-nextjs';
import type { DocumentContext, DocumentInitialProps } from 'next/document';

class MyDocument extends Document<DocumentHeadTagsProps> {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const initialProps = await documentGetInitialProps(Document, ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <DocumentHeadTags {...this.props} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
```

만약, scss 혹은 styled-components 등을 사용한다면

[Pretend 옵션](https://emotion.sh/docs/@emotion/cache#prepend)을 사용하면 스타일 태그를 DOM 노드에 앞부분에 추가할지 여부를 설정할 수 있습니다.

```tsx
// _document.tsx
import {
  createCache,
  DocumentHeadTags,
  documentGetInitialProps,
} from '@wanteddev/wds-nextjs';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet, ThemeProvider } from 'styled-components';

import type { DocumentHeadTagsProps } from '@wanteddev/wds-nextjs';
import type { DocumentContext, DocumentInitialProps } from 'next/document';

const createEmotionCache = () => {
  let insertionPoint;

  if (typeof document !== 'undefined') {
    const emotionInsertionPoint = document.querySelector<HTMLMetaElement>(
      'meta[name="emotion-insertion-point"]',
    );
    insertionPoint = emotionInsertionPoint ?? undefined;
  }

  return createCache({ key: 'wds', insertionPoint, prepend: true });
};

const emotionCache = createEmotionCache();

class MyDocument extends Document<DocumentHeadTagsProps> {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const styledComponentsSheet = new ServerStyleSheet();

    try {
      const initialProps = await documentGetInitialProps(Document, ctx, {
        emotionCache,
        plugins: [
          {
            enhanceApp: (App) => (props) =>
              styledComponentsSheet.collectStyles(<App {...props} />),
            resolveProps: async (props) => {
              return {
                ...props,
                styles: (
                  <>
                    {props.styles}
                    {styledComponentsSheet.getStyleElement()}
                  </>
                ),
              };
            },
          },
        ],
      });

      return initialProps;
    } finally {
      styledComponentsSheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <DocumentHeadTags {...this.props} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
```

```tsx
// _app.tsx
import { ThemeProvider } from '@wanteddev/wds';
import { AppCacheProvider } from '@wanteddev/wds-nextjs';
import { ThemeProvider as StyledComponentsProvider } from 'styled-components';

import type { AppProps } from 'next/app';
import type { EmotionCacheProviderProps } from '@wanteddev/wds-nextjs';

import '@wanteddev/wds/global.css';

const MyApp = ({
  Component,
  pageProps,
  emotionCache,
}: AppProps & EmotionCacheProviderProps) => {
  return (
    <AppCacheProvider emotionCache={emotionCache}>
      <ThemeProvider provider={StyledComponentsProvider}>
        <Component {...pageProps} />
      </ThemeProvider>
    </AppCacheProvider>
  );
};

export default MyApp;
```
