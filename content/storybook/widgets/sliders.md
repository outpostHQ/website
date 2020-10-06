# Sliders

Default minimum value: `0`.

Default maximum value: `100`.

Default step: `1`.

## Horizontal slider

```html
<split/>
<nu-flow gap="2x">
  <nu-slider
    value="20"></nu-slider>
  <nu-slider
    value="20" disabled></nu-slider>
</nu-flow>
```

## Vertical slider

```html
<split/>
<nu-flex gap="4x">
  <nu-slider
    value="20"
    height="5"
    orient="v"></nu-slider>
  <nu-slider
    value="20"
    height="5"
    orient="v"
    disabled></nu-slider>
</nu-flex>
```

## Min, max options

```html
<split/>
<nu-slider
  value="15"
  min="10" max="20"
  control="value[value]" trigger></nu-slider>
<nu-value id="value" padding></nu-value>
```

## Step option

```html
<split/>
<nu-slider
  value="15"
  min="0" max="100" step="10"
  control="value[value]" trigger></nu-slider>
<nu-value id="value" padding></nu-value>
```

==@TODO==
