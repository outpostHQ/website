---
title: nu-theme
type: element
description: The definition element that declares a theme in the context of its parent.
---

|Attribute|Description|
|-----|-----|
|`hue`|Hue (integer 0-255) or CSS color to make a theme from. **Required**|
|`name`|Name of the theme to apply it via [theme](../styles/theme.md) attribute. If not specified, theme will be applied to the parent|
|`saturation`|Saturation level (integer 0-100)|
|`pastel`|If presented then use pastel color space [HPLuv](!https://www.hsluv.org/comparison/)|
|`mod`|A list of modifiers separated by `Space`. See **below**.|

|Modifier|Description|
|-----|-----|
|`tint`|**Tint** type. Use special color for base text|
|`tone`|**Tone** type. Use special color for base text and subtle special color for the background|
|`swap`|**Swap** type. Same as **Tone** but with swapped text and background colors|
|`special`|**Special** type. Use special color for background. Use white color for base text|
|`soft`|Opposite to `strong`. Decreases contrast between background color and text color|
|`strong`|Opposite to `soft`. Increases contrast between background color and text color|
|`dim`|Opposite to `bold`. Decreases contrast between main background color and theme background color|
|`bold`|Opposite to `dim`. Increases contrast between main background color and theme background color|

## Usage

```html
<split/>

<nu-theme name="cyan" hue="180" mod="tone dim"></nu-theme>
<nu-theme name="Magenta" hue="300" mod="special strong"></nu-theme>

<nu-flow gap>
  <nu-card theme="cyan">
    Cyan Tone Dim Theme Card
  </nu-card>

  <nu-card theme="Magenta">
    Magenta Special Strong Theme Card
  </nu-card>
</nu-flow>
```

## Examples

```html
<split/>

<nu-flow gap="1">
  <nu-card theme="warning tone dim">
    <nu-icon name="alert-triangle-outline"></nu-icon>
    WARNING: Place your warning message here!
  </nu-card>
  
  <nu-card theme="danger tone dim">
    <nu-icon name="close-outline"></nu-icon>
    DANGER: Place your error/danger message here!
  </nu-card>
  
  <nu-card theme="success tone dim">
   	<nu-icon name="checkmark-outline"></nu-icon>
    SUCCESS: Place your success message here!
  </nu-card>
</nu-flow>
```

* [Colors - Basics themes](../../storybook/colors/basic-themes.md)

## See also

* [theme](../styles/theme.md)
* [color](../styles/color.md)
* [fill](../styles/fill.md)
* [hue()](../functions/hue.md)

## CSS Reference

* [MDN: color](!https://developer.mozilla.org/en-US/docs/Web/CSS/color)
* [MDN: background-color](!https://developer.mozilla.org/en-US/docs/Web/CSS/background-color)
