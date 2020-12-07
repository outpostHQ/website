---
title: Themes
description: "It's very difficult to manage colors in a modern web application. There are many nuances of color contrast ratio, shadow intensity, and color inversion (for the dark mode). Lucky for you, NUDE can solve most of such problems by generating colors from a single hue value!. It's really simple, check it out!"
---

## Theme generation

### Generate colors from hue

At first, let's define a theme for the element. This theme will be applied to the element and all inside elements by default.

```html
<nu-card>
  <nu-theme hue="250"></nu-theme>
</nu-card>
```

Well, that's all! NUDE automatically find the best saturation for that hue and generate a bunch of colors for your site:

* **text** `--text-color` – Base color of text and icons.
* **text-soft** `--text-soft-color` – Color of text and icons with soft contrast. Usable for text with big weight or size and bold icons.
* **text-strong** `--text-strong-color` – Color of text and icons with high contrast. You can use it to highlight some parts of the text.
* **bg** `--bg-color` – Base background color.
* **border** `--border-color` – Border color.
* **mark** `--mark-color` – Overlay background color for the mark (or hover) effect with transparency.
* **outline** `--outline-color` – Color for outline effects (like focus).
* **shadow** `--shadow-color` – Color for shadows.
* **subtle** `--subtle-color` – Color that is slightly different from the background color to differentiate similar blocks.
* **special** `--special-color` – Text color to highlight special parts of the content.
* **special-text** `--special-text-color` – Text color for special elements that also have special background color applied.
* **special-bg** `--special-bg-color` – Background color for special elements that also have special text color applied.
* **special-mark** `--special-mark-color` – Overlay background color for hover effect on special elements.
* **special-shadow** `--special-shadow-color` – Color for shadows of special elements.
* **input** `--input-color` – Background color of inputs and some active elements like Dropdown.
* **dark** `--dark-color` – Dark color with main hue.

You can use this custom properties names in your elements.

As you see in NUDE we **name colors by their role**, not by their visual characteristics or by their specific usage. It keeps the number of colors minimal but helps NUDE understand their purpose and do some automation to generate various modes for your theme!

### Generate colors from hue and saturation

If you want you can provide exact **saturation** you need:

```html
<nu-theme hue="250" saturation="20"></nu-theme>
```

### Use pastel palette

If you want archive consistent saturation over themes you can use pastel palette:

```html
<nu-theme hue="250" saturation="100" pastel></nu-theme>
<nu-theme hue="1" saturation="100" pastel></nu-theme>
```

```html
<split/>
<nu-grid flow="row" gap columns="1fr 1fr 1fr" text="w6">
    <nu-theme name="red" hue="1"></nu-theme>
    <nu-theme name="blue" hue="262"></nu-theme>
    <nu-theme name="green" hue="152"></nu-theme>

    <nu-card theme="blue special">
        BLUE
    </nu-card>
    <nu-card theme="red special">
        RED
    </nu-card>
    <nu-card theme="green special">
        GREEN
    </nu-card>
</nu-grid>
```

### Generate colors from color

Also you can use any hex/rgb/rgba/hsl declaration to provide base color:

```html
<nu-theme from="#3366ee"></nu-theme>
```

The **hue** will be extracted from that color.

If you need custom **saturation** you can set `[saturation]` attribute to specific value or set `auto` for optimal saturation.

## Named themes
You can name each theme:

```html
<nu-theme name="red" hue="8"></nu-theme>
```

### Apply theme
To apply theme use `[theme]` attribute:

```html
<nu-card theme="red"></nu-card>
```

Or use empty value to apply main theme.

## Theme modifiers
You can use a lot of modifiers to tweak your theme:

* **Type modifiers**: `main`, `common`, `toned`, `swap`, `special` – Several predefined types of theme.
* **Contrast modifiers**: `soft`, `strong` – Change contrast of theme.
* **Intensity modifiers**: `dim`, `bold` – Change visual intensity of theme.

Use modifiers in `[theme]` attribute:
```html
<nu-card theme="toned soft"></nu-card>
```

or use named `red` theme:

```html
<nu-card theme="red strong dim"></nu-card>
```

Let's see all possible variants:

```html
<split/>
<nu-flex flow="row wrap" gap="2x" content="space-around">
  <nu-card gap="1x" theme>
    <nu-heading level="3" size="h5" inline>Blue - Main theme</nu-heading>
    <nu-block>Text and
      <nu-mark>mark</nu-mark>
    </nu-block>
    <nu-card fill="subtle" border="0">Subtle card with
      <nu-mark>mark</nu-mark>
    </nu-card>
    <nu-block>
      <nu-input value="Input data"></nu-input>
    </nu-block>
    <nu-block>
      <nu-special>Special text.</nu-special>
    </nu-block>
    <nu-btn>Simple Button</nu-btn>
    <nu-btn special>Special Button</nu-btn>
  </nu-card>
  <nu-card gap="1x" theme="tint">
    <nu-heading level="3" size="h5" inline>Blue - Tint theme</nu-heading>
    <nu-block>Text and
      <nu-mark>mark</nu-mark>
    </nu-block>
    <nu-card fill="subtle" border="0">Subtle card with
      <nu-mark>mark</nu-mark>
    </nu-card>
    <nu-block>
      <nu-input value="Input data"></nu-input>
    </nu-block>
    <nu-block>
      <nu-special>Special text.</nu-special>
    </nu-block>
    <nu-btn>Simple Button</nu-btn>
    <nu-btn special>Special Button</nu-btn>
  </nu-card>
  <nu-card gap="1x" theme="tone">
    <nu-heading level="3" size="h5" inline>Blue - Tone theme</nu-heading>
    <nu-block>Text and
      <nu-mark>mark</nu-mark>
    </nu-block>
    <nu-card fill="subtle" border="0">Subtle card with
      <nu-mark>mark</nu-mark>
    </nu-card>
    <nu-block>
      <nu-input value="Input data"></nu-input>
    </nu-block>
    <nu-block>
      <nu-special>Special text.</nu-special>
    </nu-block>
    <nu-btn>Simple Button</nu-btn>
    <nu-btn special>Special Button</nu-btn>
  </nu-card>
  <nu-card gap="1x" theme="swap">
    <nu-heading level="3" size="h5" inline>Blue - Swap theme</nu-heading>
    <nu-block>Text and
      <nu-mark>mark</nu-mark>
    </nu-block>
    <nu-card fill="subtle" border="0">Subtle card with
      <nu-mark>mark</nu-mark>
    </nu-card>
    <nu-block>
      <nu-input value="Input data"></nu-input>
    </nu-block>
    <nu-block>
      <nu-special>Special text.</nu-special>
    </nu-block>
    <nu-btn>Simple Button</nu-btn>
    <nu-btn special>Special Button</nu-btn>
  </nu-card>
  <nu-card gap="1x" theme="special">
    <nu-heading level="3" size="h5" inline>Blue - Special theme</nu-heading>
    <nu-block>Text and
      <nu-mark>mark</nu-mark>
    </nu-block>
    <nu-card fill="subtle" border="0">Subtle card with
      <nu-mark>mark</nu-mark>
    </nu-card>
    <nu-block>
      <nu-input value="Input data"></nu-input>
    </nu-block>
    <nu-block>
      <nu-special>Special text.</nu-special>
    </nu-block>
    <nu-btn>Simple Button</nu-btn>
    <nu-btn special>Special Button</nu-btn>
  </nu-card>
</nu-flex>
```

## Accessibility

With NUDE it you can automatically get **Dark** and **High-contrast** modes for your site.

Each theme variant generates four sets of colors for each scenario:

* **Light Theme** with **Normal contrast**
* **Dark Theme** with **Normal contrast**
* **Light Theme** with **High contrast**
* **Dark Theme** with **High contrast**

### Prefers color scheme

There are some classes that you should add to the `html` tag for the following scenarios:

* Add `nu-scheme-light` to activate Light Theme.
* Add `nu-scheme-dark` to activate Dark Theme.
* Do nothing to activate auto-switching depending on system preference.

### Prefers contrast

There are also some classes that you should add to the `html` tag for the following scenarios:

* Add `nu-contrast-low` to use default contrast.
* Add `nu-contrast-high` to use high contrast.
* Do nothing to use system contrast preference.

### Prefers reduced motion

You can add classes to the `html` element to control over `reduced-motion` preference.

* Add `nu-reduce-motion` to reduce motion in user interface.
* Do nothing to reduce motion depending on system preference.
