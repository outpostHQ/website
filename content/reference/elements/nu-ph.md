---
title: nu-ph
type: element
description: A placeholder element to indicate that there is an upcoming content that is not loaded yet.
---

## Usage

`nu-ph` is a block element. Use [size](../styles/size.md) style to change its size. Use `is-circle` modifier to change the shape of the placeholder to a circle. Use `is-static` modifier to prevent animation.

Default size of the element is `2x`.

```html
<split/>
<nu-ph size="4x"></nu-ph>
<nu-spacer></nu-spacer>
<nu-ph size="4x" is-static></nu-ph>
<nu-spacer></nu-spacer>
<nu-ph size="6x" is-circle></nu-ph>
<nu-spacer></nu-spacer>
<nu-ph radius="2r" size="6x"></nu-ph>
```

## Examples

A placeholder for a simple card.

```html
<split/>
<nu-card fill="#special-bg.04" clear>
  <nu-grid columns="auto 1fr" gap="2x">
    <nu-ph size="5x" is-circle></nu-ph>
    <nu-flow gap="3x" padding="top 1.5x">
      <nu-ph width="15x"></nu-ph>
      <nu-flow gap="2x">
        <nu-ph></nu-ph>
        <nu-ph></nu-ph>
        <nu-ph></nu-ph>
        <nu-ph></nu-ph>
      </nu-flow>
    </nu-flow>
  </nu-grid>
</nu-card>
```

Default opacity of a placeholder is `.18`, you can increase it to highlight some placeholders (for example headers).

```html
<split/>
<nu-ph size="h4" opacity=".24" width="20x"></nu-ph>
<nu-spacer size="3x"></nu-spacer>
<nu-flow gap="2x">
  <nu-ph></nu-ph>
  <nu-ph></nu-ph>
  <nu-ph></nu-ph>
</nu-flow>
```