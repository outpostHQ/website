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
<nu-btn special={isSpecial ? '' : undefined}></nu-btn>
```

React casts all booleans to the string while attribute binding. So we have to explicitly set corresponding values.

In the most of the cases, it's safe enough to use short version:

```html
<nu-btn special={isSpecial || undefined}></nu-btn>
<nu-btn disabled={isDisabled || undefined}></nu-btn>
```

...but it's not recommended.

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

### Without jsx-native-events

```
import React, { useEffect, useRef } from 'react';

export default function Button({ onTap, ...props }) {
  const btn = useRef();

  useEffect(() => {
    btn.current.addEventListener('tap', onTap);

    return () => {
      btn.current.removeEventListener('tap', onTap);
    };
  }, [btn]);

  return <nu-btn ref="btn" {...props}>
    {children}
  </nu-btn>
};
```

### Converters

There are two converters in Numl by default: for code snippets and markdown. To use them in plain HTML we need to inject input via `<textarea/>` element but with React we can do it directly via `value` property:

```
import React, { useEffect, useRef } from 'react';

export default function CodeSnippet({ value, ...props }) {
  const code = useRef();

  useEffect(() => {
    // make sure Numl is initialized before this line is executed
    code.current.value = value;
  }, [value]);

  return <nu-code ref="code" {...props}/>
};
```

## Real-world examples

### Websites

* [Cube Dev Landing](!https://cube.dev/)
* [Cube.js UIKit](!https://cubejs-uikit.vercel.app/)

### Repositories

* [Numl React UIKit](!https://github.com/numldesign/numl-react)
* [Cube.js UIKit](!https://github.com/cube-js/cubejs-ui-kit)
