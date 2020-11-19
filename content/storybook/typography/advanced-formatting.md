---
title: Advanced text formatting
menuTitle: Advanced formatting
menuIndex: 50
description: Examples of advanced text formatting using Numl
---

## Blockquotes

Element [nu-blockquote](../../reference/elements/nu-blockquote.md).

```html
<split/>
<nu-blockquote>
  The greatest glory in living lies not in never falling, but in rising every time we fall.
  <nu-block>– Nelson Mandela</nu-block>
</nu-blockquote>
```

## Text align

Modifiers: `"left"`, `"right"`, `"center"`, `"justify"`.

```html
<split/>
<nu-flow gap>
  <nu-attrs for="nu-block" fill="subtle" padding></nu-attrs>
  <nu-block text="left">Left</nu-block>
  <nu-block text="right">Right</nu-block>
  <nu-block text="center">Center</nu-block>
  <nu-block text="justify">Justify</nu-block>
</nu-flow>
```

## Decoration

Modifiers: `"underline"`, `"del"`, `"dotted"`, `"wavy"`, `"dashed"`.

```html
<split/>
<nu-flow gap>
  <nu-block text="underline">Underline</nu-block>
  <nu-block text="del">Line-through or deleted</nu-block>
  <nu-block text="overline">Overline</nu-block>
  <nu-block text="underover">Underover</nu-block>
  <nu-block text="dotted">Dotted underline</nu-block>
  <nu-block text="dashed">Dashed underline</nu-block>
  <nu-block text="wavy">Wavy underline</nu-block>
  <nu-block text="dashed underover">Dashed underover</nu-block>
</nu-flow>
```

## Transform

Modifiers: `"up"` (`"uppercase"`), `"low"` (`"lowercase"`), `"cap"` (`"capitalize"`).

```html
<split/>
<nu-block text="n">Normal</nu-block>
<nu-block text="up">Upper-cased</nu-block>
<nu-block text="low">Lower-cased</nu-block>
<nu-block text="cap">capitalized</nu-block>
```

## Vertical align

Modifiers: `"baseline"`, `"middle"`, `"sup"`, `"sub"`, `"top"`, `"bottom"`, `"text-top"`, `"text-bottom"`, `"v-middle"` (custom vertical align modifier for inline-blocks).

```html
<split/>
<nu-block text="lowercase" size="xl">
  <nu-attrs for="nu-el" size="xs"></nu-attrs>
  Baseline |
  <nu-el text="baseline">baseline</nu-el>
  <nu-el text="middle">middle</nu-el>
  <nu-el text="sup">super</nu-el>
  <nu-el text="top">top</nu-el>
  <nu-el text="text-top">text-top</nu-el>
  <nu-el text="sub">sub</nu-el>
  <nu-el text="bottom">bottom</nu-el>
  <nu-el text="text-bottom">text-bottom</nu-el>
  <nu-el text="v-middle">v-middle</nu-el>
</nu-block>
```

## Bolder or lighter

Modifiers: `"normal"`, `"semi-bold"`, `"bold"`, `"light"`, `"heading"`:

```html
<split/>
<nu-block text="n">
  Normal
</nu-block>
<nu-block text="semi-bold">
  Semi bold
</nu-block>
<nu-block text="h" size="h1">
  Heading
</nu-block>
<nu-block text="semi-bold">
  Bold
  <nu-el text="bolder">
    and bolder
  </nu-el>
  <nu-el text="lighter">
    and lighter
  </nu-el>
</nu-block>
<nu-block text="light" size="hero">
  Light
</nu-block>
```

### Customize font-weight presets

Props: `"normal-font-weight"`, `"semi-bold-font-weight"`, `"bold-font-weight"`, `"light-font-weight"`, `"heading-font-weight"`:

```html
<split/>
<nu-props
  semi-bold-font-weight="500"
  bold-font-weight="600"
  light-font-weight="300"
  normal-font-weight="400"
  heading-font-weight="700"></nu-props>
<nu-block text="n">
  <nu-block text="n">
    Normal
  </nu-block>
  <nu-block text="semi-bold">
    Semi bold
  </nu-block>
  <nu-block text="h" size="h1">
    Heading
  </nu-block>
  <nu-block text="semi-bold">
    Bold
    <nu-el text="bolder">
      and bolder
    </nu-el>
    <nu-el text="lighter">
      and lighter
    </nu-el>
  </nu-block>
  <nu-block text="light" size="hero">
  Light
  </nu-block>
</nu-block>
```
