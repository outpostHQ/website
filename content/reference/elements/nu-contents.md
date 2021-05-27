---
title: nu-contents
type: element
description: A container element with `display` style equal `contents`.
---

## Usage

Wrap a group of elements inside an element without affecting the layout.

```html
<split/>
<nu-grid columns="1fr 1fr">
  <nu-contents id="header-row">
    <nu-attrs for="cell" text="sb"></nu-attrs>
    <nu-cell>Header 1</nu-cell>
    <nu-cell>Header 2</nu-cell>
  </nu-contents>
  <nu-contents id="content-row">
    <nu-cell>Content 1</nu-cell>
    <nu-cell>Content 2</nu-cell>
  </nu-contents>
</nu-grid>
```
