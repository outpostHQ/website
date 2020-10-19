## Outer shadow

Outer shadow with default size and intensity using [shadow](../../reference/styles/shadow.md) style.

```html
<split/>
<nu-card shadow>Card</nu-card>
```

### Protruding effect

```html
<split/>
<nu-flow gap="2x">
  <nu-card shadow=".25">CARD</nu-card>
  <nu-card shadow=".5">CARD</nu-card>
  <nu-card shadow="1">CARD</nu-card>
  <nu-card shadow="2">CARD</nu-card>
</nu-flow>
```

This creates a 3D effect of protruding cards.

The intensity of the shadow adapts to the background color automatically in the most of the cases.

```html
<split/>
<nu-flow gap="2x">
  <nu-card shadow=".25" fill="special-bg" color="special-text" border="0">CARDBTN</nu-card>
  <nu-card shadow=".5" fill="special-bg" color="special-text" border="0">CARDBTN</nu-card>
  <nu-card shadow="1" fill="special-bg" color="special-text" border="0">CARDBTN</nu-card>
  <nu-card shadow="2" fill="special-bg" color="special-text" border="0">CARDBTN</nu-card>
</nu-flow>
```

Special cards looks like they have the same shadow intensity as basic cards, but their shadows much more intensive to compensate bold background color.

### Custom shadows

It's possible to create custom shadows, like:

```html
<split/>
<nu-card shadow=".25x .25x 1x #special-bg.20 :hover[1x 1x 4x #special-bg.50]">
  CARD
</nu-card>
```

Hover over card to see the transition effect.

## Inner shadow

Inner shadow with default size and intensity using [inset](../../reference/styles/inset.md) style.

```html
<split/>
<nu-card inset>Card</nu-card>
```

You can customize the size of the shadow:

```html
<split/>
<nu-flow gap>
  <nu-card inset="2">Card</nu-card>
  <nu-card inset=".5">Card</nu-card>
</nu-flow>
```
