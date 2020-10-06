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
</nu-btn>
```

This combination of element, attribute, and attribute value will generate the following CSS:

```css
nu-card[padding=".5rem 1rem"] {
  padding: .5rem 1rem;
}
```

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

### Custom units

In addition to CSS units (like `px`, `rem`...), Numl has its own set of custom units: `x` (default gap), `r` (default radius), `bw` (default border width), `ow` (default outline width) and other.

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


## Typography

There are two style attributes that are in charge of typography in Numl: [`text`](../reference/styles/text.md) and [`size`](../reference/styles/size.md).

Use `size` style to change the font size and the line-height of the text. Use `text` attribute to change any other text property like alignment or font-weight. Let's take a look at how it works...

### Font size and line-height

There are several presents: `xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl`. Also, there six presents for each heading size: `h1`, `h2`, `h3`, `h4`, `h5`, `h6`.

```hmtl
<split/>
<nu-block size="xl">
  Text with XL size.
</nu-block>
```

Use specific values if you have to. You can provide two values for `size` attribute. The first one is for font size and the second one is for line-height.

```html
<split/>
<nu-block size="1.5rem 2.5rem">
  Custom-sized paragraph<br/>
  1.5rem - font size, 2.5rem - line height
</nu-block>
```

You can change default presents according to your Design System. See the [full reference](../reference/styles/size.md) to learn more.

### Text properties

```html
<split/>
<nu-block text="italic bold">
  Italic bold text
</nu-block>
```
