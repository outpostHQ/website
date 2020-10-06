---
title: Images
description: Examples for images
---

Use ==src== attribute to specify URL to the image.

```html
<split/>
<nu-img
  src="https://d13k13wj6adfdf.cloudfront.net/urban_areas/san-francisco-bay-area_web-f17b1f60e6.jpg"
  width="100%"></nu-img>
```

## Image fit

Using ==fit== attribute you can specify fit strategy of the image. This attribute has the same specification as `object-fit` CSS style.

```html
<split/>
<nu-flow gap text="monospace">
  <nu-attrs
    for="nu-card"
    display="grid" rows="auto 1fr"
    width="300px" height="200px"></nu-attrs>
  <nu-heading level="5">
    300x200 containers
  </nu-heading>
  <nu-card>
    <nu-block>fit="fill"</nu-block>
    <nu-img
      src="https://d13k13wj6adfdf.cloudfront.net/urban_areas/san-francisco-bay-area_web-f17b1f60e6.jpg"
      width="100%"
      fit="fill"></nu-img>
  </nu-card>
  <nu-card>
    <nu-block>fit="none"</nu-block>
    <nu-img
      src="https://d13k13wj6adfdf.cloudfront.net/urban_areas/san-francisco-bay-area_web-f17b1f60e6.jpg"
      width="100%"
      fit="none"></nu-img>
  </nu-card>
</nu-flow>
```

## Accessibility

[nu-img](/reference/elements/nu-img.md) uses native `img` element under-the-hood. So you can be sure that all images will be accessible. Don't forget to specify `label` attribute to describe image.

Be aware that in Dark Scheme every image is slightly dimmed.

## Inline SVG

You can inline any SVG using [nu-svg](/reference/elements/nu-svg.md) element.

It's useful if you want to use some colors from your application to color an SVG.

```html
<split/>
<nu-attrs for="nu-svg" width="4" height="4" border radius="1.25" overflow="no"></nu-attrs>
<nu-flex flow="row wrap" gap="2x">
  <nu-svg theme="tint" src="/img/icon.svg"></nu-svg>
  <nu-svg theme="swap" src="/img/icon.svg"></nu-svg>
  <nu-svg theme="special" src="/img/icon.svg"></nu-svg>
</nu-flex>
```
