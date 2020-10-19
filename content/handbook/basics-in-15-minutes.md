---
title: Learn Numl basics in 15 minutes
menuTitle: Basics in 15 minutes
menuIndex: 20
description: This is a quick introduction to the Numl syntax and capabilities. Learning will be really fast for those who already know modern CSS (Basics, Flex & Grid layouts, Custom Properties). Take just 15 minutes of your time and you can start creating high-quality and accessible interfaces using Numl. 
---

## Basic concepts

First of all, we need to get a basic understanding of how it works.

### Custom Elements

Numl is providing so-called HTML Custom Elements that is the part of [Web Components](!https://developer.mozilla.org/en-US/docs/Web/Web_Components) – standard for creating reusable pieces of UI.

While using Numl you don't have to use native HTML tags (with few exceptions). Also, you don't have to write CSS to style your elements. Just use custom tags and needed attributes.

### Styling via attributes

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

### Behaviors

In Numl there are many behaviors that can be injected into any element. Some elements have built-in behaviors like `button` or `listbox`. There are behaviors for various tasks: accessibility, syntax highlighting, markdown conversion, hotkey management, and more... And yes, you can make your own behaviors with ease.

Behavior can be injected using the following syntax:

```html
<split/>
<nu-btn use-hotkey="o" to="!/">
  Click me
</nu-block>
```

> Click the button or press ==o== to open this site in a new tab.

### Widgets

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


## Typography

There are two style attributes that are in charge of typography in Numl: [`text`](../reference/styles/text.md) and [`size`](../reference/styles/size.md).

Use `size` style to change the font size and the line-height of the text. Use `text` attribute to change any other text property like alignment or font-weight. Let's take a look at how it works...

### Font size and line-height

There are several presents: `xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl`. Also, there are six presents for each heading size: `h1`, `h2`, `h3`, `h4`, `h5`, `h6`.

```html
<split/>
<nu-el size="xxs">Xxs</nu-el>
<nu-el size="xs">Xs</nu-el>
<nu-el size="sm">Sm</nu-el>
<nu-el size="md">Md</nu-el>
<nu-el size="lg">Lg</nu-el>
<nu-el size="xl">Xl</nu-el>
<nu-el size="xxl"Xxl></nu-el>
<nu-el size="h1">H1</nu-el>
```

Use specific values if you have to. You can provide two values for `size` attribute. The first one is for font size and the second one is for line-height.

```html
<split/>
<nu-block size="1.5rem 2.5rem">
  Custom-sized paragraph<br/>
  1.5rem - font size, 2.5rem - line height
</nu-block>
```

Many inline elements are affected by `size` style.

```html
<split/>
<nu-block size="xl">
  Switcher
  <nu-switch><nu-switch>
</nu-block>
```

You can change default presents according to your Design System. See the [full reference](../reference/styles/size.md) to learn more.

### Text properties

You can change almost any text property using `text` style attribute. Combine various modifiers and functions to get the specific text look.

```html
<split/>
<nu-block text="italic bold">
  Italic bold text
</nu-block>
```

Here are a few examples compared to CSS analogs:

|Numl attribute|CSS style|
|----|----|
|`text="bold"` or `text="b"`|`text-weight: bold;`|
|`text="italic"` or `text="i"`|`font-style: italic;`|
|`text="center"`|`text-align: center;`|
|`text="underline"` or `text="u"`|`text-decoration: underline;`|
|`text="uppercase"` or `text="up"`|`text-transform: uppercase;`|
|`text="spacing(1px)"`|`letter-spacing: 1px;`|

See the [full reference](../reference/styles/text.md) to learn more.

### Semantic elements

There are many semantic elements for typography in Numl:

```html
<split/>
<nu-heading>Heading</nu-heading>
<nu-description>
  Description of the block.
  <nu-mark>Marked text</nu-mark>, 
  <nu-badge>Badge</nu-badge>, 
  <nu-badge special>Special badge</nu-badge>, 
  <nu-link to="!https://github.com/tenphi/numl">Link</nu-link>, 
  <nu-strong>Strong</nu-strong>, 
  <nu-em>Emphasis</nu-em>, 
  <nu-sub>Subscript</nu-sub>, 
  <nu-sup>Superscript</nu-sup>.
</nu-description>
```

Learn more: [nu-heading](../reference/elements/nu-heading.md),
[nu-description](../reference/elements/nu-description.md),
[nu-mark](../reference/elements/nu-mark.md),
[nu-badge](../reference/elements/nu-badge.md),
[nu-link](../reference/elements/nu-link.md),
[nu-strong](../reference/elements/nu-strong.md),
[nu-em](../reference/elements/nu-em.md),
[nu-sub](../reference/elements/nu-sub.md),
[nu-sup](../reference/elements/nu-sup.md)


## Color management

Use `color` style attribute to change the text color and `fill` to change the background color of the element.

```html
<split/>
<nu-block fill="hsl(250, 70%, 55%)" color="#fff">
  Sample text
</nu-block>
```

### Adaptive colors

In case you want your colors to be more accessible, you should consider using the [hue()](../reference/functions/hue.md) helper to create adaptive colors.

Adaptive colors are colors that change based on the current user scheme and contrast mode.

```html
<split/>
<nu-block fill="hue(250 70 10)" color="hue(250 70 80)">
  Sample text
</nu-block>
```

**Press "s"** to open **Settings panel** and try to change the scheme to see the difference.

### Predefined colors

There some predefined adaptive colors like `black` and `white`.

```html
<split/>
<nu-block fill="black" color="white">
  Sample text
</nu-block>
```

### Themes

Use `nu-theme` definition to create a set of colors for various scenarios, schemes and modes.

```html
<split/>
<nu-theme hue="12" saturation="100"></nu-theme>
<nu-pane flow="row wrap">
  <nu-btn outline>Focused button</nu-btn>
  <nu-btn inset>Pressed button</nu-btn>
  <nu-card shadow>Card with shadow</nu-card>
  <nu-input placeholder="Input"></nu-input>
</nu-pane>
```

All generated colors are adaptive and inherit base hue and saturation.

You can also apply modifiers to your theme to make it more suitable for the specific case:

```html
<split/>
<nu-card gap>
  <nu-theme hue="1" saturation="70" mod="tone"></nu-theme>
  <nu-h5>
    <nu-icon name="alert-circle-outline"></nu-icon>
    Warning
  </nu-h5>
  <nu-description>
    Something went really wrong!
  </nu-description>
</nu-card>
```

You can create named themes and mix them using [nu-props](../reference/definitions/nu-props.md) definition. To learn more see the full reference of [nu-theme](../reference/definitions/nu-theme.md) definition and [theme](../reference/styles/theme.md) style attribute.


## Element styling

Almost everything you do with CSS can be accomplished using Numl.

### Paddings

Use [padding](../reference/styles/padding.md) style attribute to add padding to your element:

```html
<split/>
<nu-btn padding="3x 4x">
  Button
</nu-btn>
```

It's very similar to CSS `padding` style but can additionally accept modifiers:

```html
<split/>
<nu-btn padding="1x right left">
  Button
</nu-btn>
```

### Borders

Use [border](../reference/styles/border.md) style attribute to create physical/virtual borders and [radius](../reference/styles/radius.md) to set border radius.

```html
<split/>
<nu-block 
  border="3px dashed hue(320)" 
  radius="1r">
  Block with default border
</nu-block>
```

|Numl attribute|CSS style|
|----|----|
|`border=""`|`border: var(--nu-border-width) solid var(--nu-border-color)`|
|`border="3px #f39"`|`border: 3px solid #f39`|
|`border="hue(320) left right"`|`border-left: 1px rgb(216, 0, 186); border-right: 1px rgb(216, 0, 186);`|
|`border="3px #f39 outside left"`|`box-shadow: -3px 0 0 #f39`|
|`border=""` or `border="1r"`|`border-radius: var(--nu-radius)`|
|`border="2rem"`|`border-radius: 2rem`|
|`border="round"`|`border-radius: 9999rem`|
|`border="ellipse"`|`border-radius: 50%`|

### Shadows

Use [shadow](../reference/styles/shadow.md) style attribute to add outer shadows and [inset](../reference/styles/inset.md) to add inner shadows.

```html
<split/>
<nu-pane flow="row wrap">
  <nu-card shadow>A</nu-card>
  <nu-card shadow="1x">B</nu-card>
  <nu-card shadow="1x 1x 1ow #special-shadow">C</nu-card>
</nu-pane>
<nu-spacer size="3x"></nu-spacer>
<nu-pane flow="row wrap">
  <nu-card inset>A</nu-card>
  <nu-card inset="1x">B</nu-card>
  <nu-card inset="1x 1x 1ow #special-shadow">C</nu-card>
</nu-pane>
```