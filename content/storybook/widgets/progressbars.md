---
title: Progress Bars
menuTitle: Progress Bars
description: Examples of nu-progressbar element usage.
---

Progress bars uses `#special-text` and `#special-bg` colors to create inclined gradient with animation.

## Loading

```html
<split/>
<nu-flow gap="2x">
  <nu-progressbar></nu-progressbar>
  <nu-progressbar height="2x"></nu-progressbar>
</nu-flow>
```

## Show progress

Use `value`, `min` and `max` attributes to show exact progress:

```html
<split/>
<nu-progressbar min="0" max="1000" value="689"></nu-progressbar>
```
