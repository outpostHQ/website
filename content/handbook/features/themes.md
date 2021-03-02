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
* **dark** `--dark-color` – A dark color with the main hue.
* **light** `--light-color` – A light color with the main hue.

You can use these custom property names in your elements.

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
    <nu-theme name="my-red" hue="1"></nu-theme>
    <nu-theme name="my-blue" hue="262"></nu-theme>
    <nu-theme name="my-green" hue="152"></nu-theme>

    <nu-card theme="my-blue special">
        BLUE
    </nu-card>
    <nu-card theme="my-red special">
        RED
    </nu-card>
    <nu-card theme="my-green special">
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

If you need custom **saturation** you can set `[saturation]` attribute to the specific value or set `auto` for optimal saturation.

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

Or use the empty value to apply the main theme.

## Theme modifiers
You can use a lot of modifiers to tweak your theme:

* **Type modifiers**: `main`, `common`, `toned`, `swap`, `special` – Several predefined types of theme.
* **Contrast modifiers**: `soft`, `strong` – Change contrast of theme.
* **Intensity modifiers**: `dim`, `bold` – Change the visual intensity of theme.

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

With NUDE you automatically get **Dark** and **High-contrast** modes for your site.

Each theme variant generates four sets of colors for each scenario:

* **Light Theme** with **Normal contrast**
* **Dark Theme** with **Normal contrast**
* **Light Theme** with **High contrast**
* **Dark Theme** with **High contrast**

### Prefers color scheme

There is an attribute that you should add to the `html` tag for the following scenarios:

* Add `nu-scheme="light"` to force Light Theme.
* Add `nu-scheme="dark"` to force Dark Theme.
* Do nothing or set `nu-scheme="auto"` to activate auto-switching depending on system preference.

### Prefers contrast

There is also an attribute that you should add to the `html` tag for the following scenarios:

* Add `nu-contrast="no-preference"` to force default contrast.
* Add `nu-contrast="more"` to force high contrast mode.
* Do nothing or set `nu-contrast="auto"` to use system contrast preference.

### Prefers reduced motion

You can use attribute `nu-reduce-motion` to the `html` element to control over `reduced-motion` preference.

* Add `nu-reduce-motion` attribute to reduce motion in the user interface.
* Do nothing to reduce motion depending on system preference.

## Built-in themes & colors

There are 3 role-based and 8 color-based themes in Numl:

### Role-based themes

Activate them using `success`, `danger` and `warning` attributes. That would be an alias for `theme="{roleTheme}"`.

```html
<split/>
<nu-pane flow="row wrap">
  <nu-btn success>Success</nu-btn>
  <nu-btn danger>Danger</nu-btn>
  <nu-btn warning>Warning</nu-btn>
</nu-pane>
```

### Color-based themes

Use `theme="{color}"` to activate these themes:

```html
<split/>
<nu-pane flow="row wrap">
  <nu-btn theme="blue">Blue</nu-btn>
  <nu-btn theme="cyan">Cyan</nu-btn>
  <nu-btn theme="green">Green</nu-btn>
  <nu-btn theme="yellow">Yellow</nu-btn>
  <nu-btn theme="orange">Orange</nu-btn>
  <nu-btn theme="red">Red</nu-btn>
  <nu-btn theme="purple">Purple</nu-btn>
  <nu-btn theme="violet">Violet</nu-btn>
</nu-pane>
```

### Built-in colors

There are also built-in colors. You can change them using [nu-props](../../reference/definitions/nu-props.md) definition.

```html
<split/>
<nu-pane flow="row wrap">
  <nu-label color="#blue">Blue</nu-label>
  <nu-label color="#cyan">Cyan</nu-label>
  <nu-label color="#green">Green</nu-label>
  <nu-label color="#yellow">Yellow</nu-label>
  <nu-label color="#orange">Orange</nu-label>
  <nu-label color="#red">Red</nu-label>
  <nu-label color="#purple">Purple</nu-label>
  <nu-label color="#violet">Violet</nu-label>
</nu-pane>
```
