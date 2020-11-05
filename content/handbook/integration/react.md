---
title: Integration with React
description: React works well with Numl but has few nuances.
menuIndex: 30
---

If you use [Gatsby](https://www.gatsbyjs.org/) you can add Numl to the project using [gatsby-plugin-numl](https://github.com/tenphi/gatsby-plugin-numl). But you still have to complete the following steps.

React don't support native events. So to bind event handler we have to use `elRef.addEventListener` or install the **jsx-native-events** plugin. We advise you to choose the latter.

Install [jsx-native-events](!https://github.com/calebdwilliams/jsx-native-events) as a dependency:

```bash
npm install jsx-native-events --save-dev
```

You have to include the following declaration in each **jsx** file.

```jsx
/** @jsx jsx */
import jsx from 'jsx-native-events';
```

Now you are ready to go.

## Attribute binding

Bind `string` attribute:

```html
<nu-btn padding={padding}></nu-btn>
```

Bind `boolean` attribute:

```html
<nu-btn special={isSpecial ? '' : null}></nu-btn>
```

React casts all booleans to the string while attribute binding. So we have to explicitly set corresponding values.

You can use simplified `boolean` binding for the most of the style properties.

```html
<nu-block border={hasBorder}></nu-block>
```

## Bind event handlers

Use the following syntax to bind handlers.

**tap** event binding:

```html
<nu-btn
  onEventTap={onTap}>
  Button
</nu-btn>
```

**input** event binding:

```html
<nu-switch onEventInput={(event) => onInput(event.detail)}></nu-switch>

<nu-input onEventInput={(event) => onInput(event.detail)}></nu-input>
```

## Real-world examples (repositories)

### Websites

* [Cube Dev Landing](!https://cube.dev/)
* [Cube.js UIKit](!https://cubejs-uikit.vercel.app/)

### Repositories

* [Cube.js UIKit](!https://github.com/cube-js/cubejs-ui-kit)
