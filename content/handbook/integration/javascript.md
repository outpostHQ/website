---
title: Plain Javascript integration
description: Integration guide for plain Javascript.
menuIndex: 10
---

## Installation

In [Getting started](../getting-started.md) section we learned how to add **Numl** to your site using `<script>` tag. Of course, you can also use Javascript for that.

Let's install the **numl** package using **npm**:

```bash
$ npm install numl --save
```

Now, in your `main.js` file add the following code:

```javascript
import 'numl';
```

It will activate **Numl** and add the script to your bundle.

## Manual initialization

If you want to control the moment **Numl** starts initialization you should add `data-nu-prevent` attribute to the html element.

```html
<html lang="en" data-nu-prevent>...
```

Then you will be able to manually call the init() method.

```javascript
import Nude from 'numl';

// do some preparations

Nude.init();
```

## Connect router

You can connect your router to **Numl** links.

Import `router` instance and replace set the **Numl-router**. It's a simple function that returns `true` if a default behavior should be used or `false` to prevent navigation.

```javascript
import { routing } from 'numl';
import router from './router'; // Your router

routing.setRouter((url, openNewTab) => {
  // skip outside links and links that open in new tabs
  if (openNewTab || url.startsWith('https://') || url.includes('//') || url.startsWith('mailto:') || url.includes('/api/')) {
    return true;
  }

  router.push(url); // handle routing by yourself

  return false;
});
```

## Change icons

You can integrate **Numl** with any SVG-based icon library.

Import `icons` instance and replace the **Icon-loader**. It's an async function that accepts the icon name and returns an SVG as a string.

```javascript
import { icons } from 'numl';

icons.setLoader((iconName) => {
  return import('some-icon-library')
    .then(icons => {
      // return a string that contains SVG
      return icons[iconName];
    });
});
```
