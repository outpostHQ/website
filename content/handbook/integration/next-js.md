---
title: Next.js integration with Numl
menuTitle: Next.js
description: A guide to add Numl Design to your Next.js project.
menuIndex: 100
---

For simplicity, this guide will provide instructions on how to add Numl.Design to the new Next.js project.

If you don't need any explanation you can just clone the [Next.js+Numl Template](!https://github.com/numldesign/nextjs-numl-template).

## Create Next.js project

Before we start, please, follow [the official instruction](!https://nextjs.org/learn/basics/create-nextjs-app/setup) to create a demo Next.js project.

## Integration

### Document Component

Numl is a browser-side library and it's only possible to load it in the browser. Next.js projects have the ability to be executed on the backend (SSR - server-side rendering). So we should load Numl in the client environment and prevent it from initialization until the main App is fully loaded. It's the only way to use Numl with Next.js by now.

To achieve this we should redefine the root **Document** component.

```jsx
/* pages/_document.js */
import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html data-nu-prevent>
        <Head>
          <script
            src="https://cdn.jsdelivr.net/npm/numl@1.0.0-beta.10/dist/index.js"
            type="module"
          />
          <style dangerouslySetInnerHTML={{
            __html: `:not(:defined) {visibility: hidden;}`
          }}/>
          <link rel="preload" href="/vercel.svg" as="image"/>
          <link rel="preload" href="/numl.svg" as="image"/>
        </Head>
        <body>
          <Main/>
          <NextScript/>
        </body>
      </Html>
    );
  };
}

export default MyDocument;
```

We added `data-nu-prevent` attribute to the `html` tag to prevent **Numl** auto-initialization. Then we added Numl script and some CSS to prevent a flash-of-unstyled-content.

Also, we added two preload links to static images so Next.js can handle them.

### Numl initializer

Let's create a helper to init Numl so we can call it inside our application.

```jsx
/* helpers/init-numl.js */
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function requireNude() {
  return new Promise((resolve) => {
    if (window.Nude) {
      return resolve(Nude);
    }

    window.addEventListener('nudeReady', resolve);
  });
}

export default function initNuml() {
  const router = useRouter();

  // `useEffect` guaranties that code will be executed
  // only in the client environment
  useEffect(() => {
    requireNude()
      .then(Nude => {
        // get root dataset
        const html = document.querySelector(':root');
        const dataset = html.dataset;

        // prevent Numl auto-initialization
        dataset.nuPrevent = '';

        // all stuff we need to do before init

        // connect Next.js router to Numl links
        Nude.routing.setRouter((url, openNewTab) => {
          // skip outside links and links that open in new tabs
          if (
            openNewTab ||
            url.startsWith('https://') ||
            url.includes('//') ||
            url.startsWith('mailto:')
          ) {
            return true; // tell Numl to apply default behavior
          }

          router.push(url); // delegate routing to next/router

          return false; // tell Numl to do nothing with the link
        });

        // OPTIONAL: define custom units
        Nude.units.define('gp', 'var(--nu-grid-gap)');

        // OPTIONAL: define new elements
        Nude.define('nu-meme', {
          styles: {
            display: 'block',
            padding: '1x',
            bg: '#mark',
          },
        });

        // OPTIONAL: assign new options to the existing elements
        Nude.define('nu-card', {
          styles: {
            padding: '.5x 1x',
          },
        });

        // manually trigger Nude initialization
        Nude.init();
      });
  }, []);
}
```

Read comments in the snippet to understand what it does. Optional parts of the code are marked with the ==OPTIONAL== comment block.

### Root component

Numl application should have `<nu-root>` element at the top level. It would be convenient to create a `Root` component that will wrap our markup inside `<nu-root>` element and trigger Numl initialization.

```jsx
/* components/Root.jsx */
import React from 'react';
import initNuml from '../helpers/init-numl';

export default function NudeProvider({ children }) {
  initNuml();

  return <nu-root padding="10x 2x" width="max 800px" space="around" gap="5x" flow="column">
    {children}
  </nu-root>;
}
```

## Playing with markup

Let's replace the `index.js` page with the Numl version.

```jsx
/* pages/index.jsx */
import Head from 'next/head';
import Root from '../components/Root';

export default function Home() {
  return (
    <Root>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <nu-theme hue="272"/>

      <nu-main display="flex" gap="2x" items="center">
        <nu-h1>
          Welcome to <nu-link to="!https://nextjs.org">Next.js!</nu-link>
        </nu-h1>

        <nu-block size="lg">
          Get started by editing <code>pages/index.js</code>
        </nu-block>

        <nu-grid columns="1pr 1pr" gap="2x 3x">
          <nu-cardbtn to="!https://nextjs.org/docs">
            <nu-h3>Documentation &rarr;</nu-h3>
            <nu-block>Find in-depth information about Next.js features and API.</nu-block>
          </nu-cardbtn>

          <nu-cardbtn to="!https://nextjs.org/learn">
            <nu-h3>Learn &rarr;</nu-h3>
            <nu-block>Learn about Next.js in an interactive course with quizzes!</nu-block>
          </nu-cardbtn>

          <nu-cardbtn to="!https://github.com/vercel/next.js/tree/master/examples">
            <nu-h3>Examples &rarr;</nu-h3>
            <nu-block>Discover and deploy boilerplate example Next.js projects.</nu-block>
          </nu-cardbtn>

          <nu-cardbtn
            to="!https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
            <nu-h3>Deploy &rarr;</nu-h3>
            <nu-block>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </nu-block>
          </nu-cardbtn>
        </nu-grid>
      </nu-main>

      <nu-line/>

      <nu-footer text="center">
        <nu-pane content="center">
          <nu-el>Powered by{' '}</nu-el>
          <nu-link
            to="!https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
            <nu-svg src="/vercel.svg" height="2.5x" label="Vercel Logo"/>
          </nu-link>
          <nu-el>&</nu-el>
          <nu-link
            to="!https://numl.design?utm_source=create-next-app&utm_medium=numl-template&utm_campaign=create-next-app">
            <nu-pane>
              <nu-svg src="/numl.svg" height="3x" label="Numl Logo"/>
              <nu-el>Numl.Design</nu-el>
            </nu-pane>
          </nu-link>
        </nu-pane>
      </nu-footer>
    </Root>
  );
};
```

## Template

You can also use Next.js+Numl template that can be downloaded here:

[github.com/numldesign/nextjs-numl-template](!https://github.com/numldesign/nextjs-numl-template)