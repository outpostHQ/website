---
title: Core concepts of Numl
menuIndex: 15
description: This is a quick introduction to Numl core concepts. 
---

## Custom Elements

Numl is providing so-called HTML Custom Elements that is the part of [Web Components](!https://developer.mozilla.org/en-US/docs/Web/Web_Components) – standard for creating reusable pieces of UI.

While using Numl you don't have to use native HTML tags (with few exceptions). Also, you don't have to write CSS to style your elements. Just use custom tags and specific attributes.

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
padding: var(--nu-gap) calc(var(--nu-gap) * 2);
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

This modifier will apply `--nu-special-color` value to the color of your border. Also, you can use classic hash colors and color functions (like `rgba`, `hsla` and etc). Use `hue()` color function to assign an Adaptive color.

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
</nu-block>
```

> Click the button or press ==o== to open this site in a new tab.

## Widgets

There are lots of widget elements in Numl. They can receive `value` (sometimes also `checked` property) and emit the `input` event with a changed value. All widgets are implemented using **Behaviors**.

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
