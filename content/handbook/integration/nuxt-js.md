---
title: Nuxt.js integration with Numl
menuTitle: Nuxt.js
description: A guide to add Numl Design to your Nuxt.js project.
menuIndex: 100
---

For simplicity, this guide will provide instructions on how to add Numl.Design to the new Nuxt.js project.

If you don't need any explanation you can just clone the [Nuxt.js+Numl Template](!https://github.com/numldesign/nuxtjs-numl-template).

## Create Nuxt.js project

Before we start, please, follow [the official instruction](!https://nuxtjs.org/docs/2.x/get-started/installation) to create a new Nuxt.js project.

We chose the following configuration:

```
Programming language: JavaScript
Package manager: Npm
UI Framework: None 
Linting tools: ESLint, Prettier, Lint staged files, Commitlint
Rendering mode: Universal (SSR / SSG)
Deployment target: Static (Static/JAMStack hosting)
Development tools: jsconfig.json
Version control system: Git 
```

You can choose a different configuration but make sure you don't use any UI Framework. This can complicate things.

## Integration

### Config

Numl is a browser-side library, and it's only possible to load it in the browser. Nuxt.js projects have the ability to be executed on the backend (SSR - server-side rendering). So we should load Numl in the client environment and prevent it from initialization until the main App is fully loaded. It's the only way to use Numl with Nuxt.js by now.

To achieve this we should tune our `nuxt.config.js` file.

```jsx
/* nuxt.config.js */
export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'en',
      'data-nu-prevent': '', // disable auto-initialization of Numl.Design
    },
    title: 'nuxtjs-numl-example',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src: 'https://cdn.jsdelivr.net/npm/numl@1.0.0-beta.10/dist/index.js',
        type: 'module',
      },
    ],
  },
  
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/global.css'],
  
  /* other options */
}
```

We added `data-nu-prevent` attribute to the `html` tag to prevent **Numl** auto-initialization. Then we added Numl script and CSS file.

The CSS file is required to prevent a flash-of-unstyled-content. Let's create it here `assets/global.css`:

```css
:not(:defined) {
  visibility: hidden;
}
```

### Root component

Numl application should have `<nu-root>` element at the top level. It would be convenient to create a `Root` component that will wrap our markup inside `<nu-root>` element and trigger Numl initialization.

At first, we add the template.

```vue
/* components/Root.vue */
<template>
  <nu-root padding="3x" font="Quicksand">
    <slot></slot>
  </nu-root>
</template>
```

Then, we have to declare the component itself and add names of all Numl custom elements to the Vue ignore list:

```vue
<script>
import Vue from 'vue'

Vue.config.ignoredElements = [/^nu-/]

export default {
  name: 'Root',
}
</script>
``` 

Now, in the script path we have to declare a little helper that will await the Numl initialization:

```js
function requireNude() {
  if (typeof window === 'undefined') return new Promise(() => {})

  if (window.Nude) {
    return Promise.resolve(window.Nude)
  } else {
    return new Promise((resolve) => {
      window.addEventListener('nudeReady', () => {
        resolve(window.Nude)
      })
    })
  }
}
```

Also, we need a function that will manually initialize Numl with our custom settings:

```js
function initNude(router) {
  const { Nude } = window

  Nude.routing.setRouter((url, openNewTab) => {
    // skip outside links and links that open in new tabs
    if (
      openNewTab ||
      url.startsWith('https://') ||
      url.includes('//') ||
      url.startsWith('mailto:') ||
      url.includes('/api/')
    ) {
      return true
    }

    router.push(url) // handle routing by Vue Router

    return false
  })

  // OPTIONAL: define custom units
  Nude.units.define('gp', 'var(--nu-grid-gap)')

  // OPTIONAL: define new elements
  Nude.define('nu-meme', {
    styles: {
      display: 'block',
      padding: '1x',
      bg: '#mark',
    },
  })

  // OPTIONAL: assign new options to the existing elements
  Nude.define('nu-card', {
    styles: {
      padding: '.5x 1x',
    },
  })

  // manually trigger Nude initialization
  Nude.init()
}
```

Read comments in the snippet to understand what it does. Optional parts of the code are marked with the ==OPTIONAL== comment block.

The `initNude()` function should receive an actual router from the App.

Finally, we can connect our helpers to the component:

```js
export default {
  name: 'Root',
  async mounted() {
    await requireNude()

    initNude(this.$router)
  },
}
```

## Change template

We have to include our `Root` component to all pages at the top-level. To do so, we need to change `layouts/default.vue` file:

```vue
<template>
  <Root>
    <Nuxt />
  </Root>
</template>
```

## Playing with markup

Let's replace the Index (`pages/index.vue`) page with the Numl version.

```vue
<template>
  <nu-flex flow="column" gap="3x" items="center" padding="5x top">
    <Logo />
    <nu-h1>nuxtjs-numl-example</nu-h1>
    <nu-pane>
      <nu-btn to="!https://nuxtjs.org/">Documentation</nu-btn>
      <nu-btn to="!https://github.com/nuxt/nuxt.js">GitHub</nu-btn>
    </nu-pane>
  </nu-flex>
</template>
```

## Template

You can also use Nuxt.js+Numl template that can be downloaded here:

[github.com/numldesign/nuxtjs-numl-template](!https://github.com/numldesign/nuxtjs-numl-template)
