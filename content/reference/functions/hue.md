---
title: hue
type: function
description: The `hue` color function creates an adaptive color that uses custom **HSC(A)** (*Hue, Saturation, Contrast, Alpha*) color space with **variable finite contrast** that adapts to the color scheme and contrast mode. So basically it creates **four** colors for each case.
githubLink: https://github.com/numldesign/numl/blob/master/src/themes.js#L618
---

Change scheme or contrast mode in **Settings** (floating button in the right bottom corner of the page) to see the difference.

## Syntax

```
<hue> <saturation> [ <contrast> | high | low | auto ] <alpha> || special || pastel

where
<hue> = 0..359
<saturation> = 0..100
<contrast> = 0..100
<alpha> = 0..100
```

## Examples

Different saturation

```html
<split/>
<nu-h5>Different saturation</nu-h5>
<nu-block color="hue(1)">
  Full saturation
</nu-block>
<nu-block color="hue(1 50)">
  Reduced saturation
</nu-block>
<nu-block color="hue(1 0)">
  Desaturated color
</nu-block>
```

Different contrast.

```html
<split/>
<nu-block color="hue(1)">
  Auto contrast
</nu-block>
<nu-block color="hue(1 100 low)">
  Low contrast
</nu-block>
<nu-block color="hue(1 100 high)">
  High contrast
</nu-block>
<nu-block color="hue(1 100 50)">
  Custom contrast
</nu-block>
```

Different opacity.

```html
<split/>
<nu-block color="hue(1)">
  Full opacity
</nu-block>
<nu-block color="hue(1 100 auto 50)">
  Reduced opacity
</nu-block>
<nu-spacer></nu-spacer>
```

Different color spaces. HSLuv and HPLuv (pastel).

```html
<split/>
<nu-block color="hue(1)">
  HSLuv color space
</nu-block>
<nu-block color="hue(1 pastel)">
  HPLuv color space
</nu-block>
<nu-block color="hue(230)">
  HSLuv color space
</nu-block>
<nu-block color="hue(230 pastel)">
  HPLuv color space
</nu-block>
```

Normal and special hues. Use `"special"` modifier for backgrounds with special (white) text. It will create predictable contrast.

```html
<split/>
<nu-card color="special-text" fill="hue(1 high)">
  Normal hue.
</nu-card>
<nu-spacer></nu-spacer>
<nu-card color="special-text" fill="hue(1 high special)">
  Special hue.
</nu-card>
```

> Use **Dark Scheme** to see the difference in the last example.

## Predefined colors

There are few predefined colors. They all are **adaptive** and have **special** modifier.

```html
<split/>
<nu-gridtable columns="auto auto 1fr" border>
  <nu-attrs for="cell" padding></nu-attrs>
  <nu-columnheader>Name</nu-columnheader>
  <nu-columnheader>Contrast</nu-columnheader>
  <nu-columnheader></nu-columnheader>
  <nu-cell>black</nu-cell>
  <nu-cell>100</nu-cell>
  <nu-cell fill="black"></nu-cell>
  <nu-cell>darkgrey</nu-cell>
  <nu-cell>high</nu-cell>
  <nu-cell fill="darkgrey"></nu-cell>
  <nu-cell>grey</nu-cell>
  <nu-cell>auto</nu-cell>
  <nu-cell fill="grey"></nu-cell>
  <nu-cell>lightgrey</nu-cell>
  <nu-cell>low</nu-cell>
  <nu-cell fill="lightgrey"></nu-cell>
  <nu-cell>light</nu-cell>
  <nu-cell>5</nu-cell>
  <nu-cell fill="light"></nu-cell>
  <nu-cell>white</nu-cell>
  <nu-cell>0</nu-cell>
  <nu-cell fill="white"></nu-cell>
</nu-gridtable>
```
