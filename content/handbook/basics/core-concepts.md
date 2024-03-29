---
title: Core concepts of Numl
menuIndex: 15
description: This is a quick introduction to Numl core concepts. 
---

## Custom Elements

Numl is providing so-called HTML Custom Elements that is the part of [Web Components](!https://developer.mozilla.org/en-US/docs/Web/Web_Components) – standard for creating reusable pieces of UI.

While using Numl you don't have to use native HTML tags (with few exceptions). Also, you don't have to write CSS to style your elements. Just use custom tags and specific attributes.

### Definitions

Some of the elements called **definitions** that don't represent actual elements. Instead, they are used to define some properties of the parent element. There are only a few definitions:

* [nu-theme](../../reference/definitions/nu-theme.md) - to define theme.
* [nu-attrs](../../reference/definitions/nu-attrs.md) - to define attributes (including styles) for specific elements in the context.
* [nu-props](../../reference/definitions/nu-props.md) - to define custom properties.
* [nu-base](../../reference/definitions/nu-base.md) - to define base font size of the website.

## Styling

Styling via attributes is pretty straightforward. It may seem a little old fashioned at first, but we assure you that you won't have any trouble with that.

```html
<split/>
<nu-card padding=".5rem 1rem">
  Simple card
</nu-card>
```

This combination of element, attribute, and attribute value will generate the following CSS:

```css
nu-card[padding=".5rem 1rem"] {
  padding: .5rem 1rem;
}
```

Numl supports automatic `calc` insertion to simplify syntax:

```html
<split/>
<nu-card width="1rem * 10">
  Simple card
</nu-card>
```

If you have several calc-expressions then you can isolate them using brackets:

```html
<split/>
<nu-card padding="(@gap * 2) (@gap * 3)">
  Simple card
</nu-card>
```

It's compiled to:

```css
padding: calc(var(--gap) * 2) calc(var(--gap) * 3);
```

### Properties

Define [Custom Properties](!https://developer.mozilla.org/en-US/docs/Web/CSS/--*) in the context of the element using [nu-props](../../reference/definitions/nu-props.md) or plain CSS. Then use it inside style values:

```html
<split/>
<nu-block>
  <nu-props grid-gap="3x"></nu-props>
  <nu-grid gap="@grid-gap" columns="1fr 1fr">
    <nu-card>A</nu-card>
    <nu-card>B</nu-card>
  </nu-grid>
</nu-block>
```

In that example `@grid-gap` means `var(--grid-gap)`. You can also provide a fallback value with the following syntax: `@(grid-gap, 1rem)`.

Define colors using [nu-props](../../reference/definitions/nu-props.md) and `-color` suffix to allow transparency syntax:

```html
<split/>
<nu-block>
  <nu-props my-color="hue(10)"></nu-props>
  <nu-card fill="#my.10">
    Card
  </nu-card>
</nu-block>
```

### Modifiers

Many style attributes accept not only values but also modifiers, which makes styling easier. For example, you can use directional modifiers to apply the style to the specific side of the element. Use **color modifier** (`#` plus the name of the color) to change the color of the style.

```html
<split/>
<nu-block
  border="1ow left #special"
  padding="1x left">
  Block
</nu-block>
```

### Custom units

In addition to CSS units (like `px`, `rem`...), Numl has its own set of custom units: 

|Unit|Description|Default value|
|----|----|----|
|`x`|default gap|.5rem|
|`r`|default border radius|.5rem|
|`bw`|default border width|1px|
|`ow`|default outline width|1rem / 16 * 3|
|`rp`|rem pixel|1rem / 16|

This example...

```html
<nu-card padding="1x 2x">
  Simple card
</nu-card>
```

...will generate the following CSS style:

```css
padding: var(--gap) calc(var(--gap) * 2);
```

You can add your own custom units using Numl Javascript API.

### Color modifier

Some attributes accept a color modifier. For example, if you want to change the color of your `border` just add such modifier to your attribute value:

```html
<split/>
<nu-card border="1ow #special">
  Simple card
</nu-card>
```

This modifier will apply `--special-color` value to the color of your border. Also, you can use classic hash colors and color functions (like `rgba`, `hsla` and etc). Use `hue()` color function to assign an Adaptive color.

```html
<split/>
<nu-block height="1x" fill="rgba(128,100,200,1)"></nu-block>
<nu-block height="1x" fill="hsla(1, 70%, 80%, 1)"></nu-block>
<nu-block height="1x" fill="hue(1)"></nu-block>
```

## Behaviors

In Numl there are many behaviors that can be injected into any element. Some elements have built-in behaviors like `button` or `listbox`. There are behaviors for various tasks: accessibility, syntax highlighting, markdown conversion, hotkey management, and more... And yes, you can make your own behaviors with ease.

Behavior can be injected using the following syntax:

```html
<split/>
<nu-btn use-hotkey="o" to="!/">
  Click me
</nu-btn>
```

> Click the button or press ==o== to open this site in a new tab.

## Widgets

There are lots of widget elements in Numl. They can receive `value` (sometimes also `pressed` or `checked` property) via attribute or property and emit the `input` custom event with a changed value inside `detail` property. All widgets are implemented using **Behaviors**.

```html
<split/>
<nu-flow gap="2x">
  <nu-btn>Button</nu-btn>
  <nu-radiogroup value="0" gap>
    <nu-radio value="0"></nu-radio>
    <nu-radio value="1"></nu-radio>
  </nu-radiogroup>
  <nu-slider></nu-slider>
  <nu-checkbox></nu-checkbox>
  <nu-input placeholder="Input"></nu-input>
  <nu-switch></nu-switch>
</nu-flow>
```
