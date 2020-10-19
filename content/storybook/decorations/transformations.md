## Move

Use [move](../../reference/styles/move.md) property.

```html
<split/>
<nu-el fill="subtle" size="xl">
  <nu-icon #[[move="1x 1x"]]# name="gift"></nu-icon>
</nu-el>
```

## Scale

Use [scale](../../reference/styles/scale.md) property.

```html
<split/>
<nu-el fill="subtle" size="xl">
  <nu-icon #[[scale=".5"]]# name="gift"></nu-icon>
  <nu-icon #[[scale="1.5"]]# name="gift"></nu-icon>
</nu-el>
```

## Rotate

Use [rotate](../../reference/styles/rotate.md) property.

```html
<split/>
<nu-el fill="subtle" size="xl">
  <nu-icon #[[rotate="-45deg"]]# name="gift"></nu-icon>
  <nu-icon #[[rotate="45deg"]]# name="gift"></nu-icon>
</nu-el>
```

## Combined

Use all properties together!

```html
<split/>
<nu-el fill="subtle" size="xl">
  <nu-icon
    name="gift"
    #[[move="3x 3x"]]#
    #[[scale="1.5"]]#
    #[[rotate="-45deg"]]#></nu-icon>
</nu-el>
```

## Complex

Use [transform](../../reference/styles/transform.md) property.

```html
<split/>
<nu-el fill="subtle" size="xl">
  <nu-icon #[[transform="skew(15deg, 15deg)"]]# name="gift"></nu-icon>
</nu-el>
```
