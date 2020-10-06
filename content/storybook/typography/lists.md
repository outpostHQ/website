---
title: Lists
menuIndex: 40
description: Examples of lists using Numl
---

Use [nu-list](../../reference/elements/nu-list.md) and [nu-listitem](../../reference/elements/nu-listitem.md) elements.

## Basic list

```html
<split/>
<nu-list>
  <nu-listitem>Item 1</nu-listitem>
  <nu-listitem>Item 2</nu-listitem>
  <nu-listitem>Item 3</nu-listitem>
</nu-list>
```

## Ordered list

```html
<split/>
<nu-list enumerate>
  <nu-listitem>Item 1</nu-listitem>
  <nu-listitem>Item 2</nu-listitem>
  <nu-listitem>Item 3</nu-listitem>
</nu-list>
```

## Markers

Possible values: `"disc"`, `"circle"`, `"square"`, `"decimal"`, `"georgian"`, `"trad-chinese-informal"`, `"kannada"` and more... See [MDN: list-style-type](!https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type).

```html
<split/>
<nu-list type="georgian">
  <nu-listitem>Item 1</nu-listitem>
  <nu-listitem>Item 2</nu-listitem>
  <nu-listitem>Item 3</nu-listitem>
</nu-list>
```

Use `"none"` value to remove markers.

```html
<split/>
<nu-list type="none">
  <nu-listitem>Item 1</nu-listitem>
  <nu-listitem>Item 2</nu-listitem>
  <nu-listitem>Item 3</nu-listitem>
</nu-list>
```

## Custom markers

```html
<split/>
<nu-list type="'> '">
  <nu-listitem>Item 1</nu-listitem>
  <nu-listitem>Item 2</nu-listitem>
  <nu-listitem>Item 3</nu-listitem>
</nu-list>
```

## Outside markers

```html
<split/>
<nu-card padding="1x 2x 1x 4x">
  <nu-list position="outside" fill="subtle">
    <nu-listitem>Item 1</nu-listitem>
    <nu-listitem>Item 2</nu-listitem>
    <nu-listitem>Item 3</nu-listitem>
  </nu-list>
</nu-card>
```

## Nested lists

```html
<split/>
<nu-list enumerate>
  <nu-listitem>Item 1</nu-listitem>
  <nu-listitem>Item 2</nu-listitem>
  <nu-listitem>Item 3</nu-listitem>
  <nu-list enumerate>
    <nu-listitem>Item 1</nu-listitem>
    <nu-listitem>Item 2</nu-listitem>
    <nu-listitem>Item 3</nu-listitem>
  </nu-list>
</nu-list>
```
