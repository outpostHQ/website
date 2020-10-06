## Create entire theme from a single hue param

Use [nu-theme](../../reference/decorators/nu-theme.md) element with `"hue"` property to declare a basic theme.

```html
<split/>
<nu-card gap fill="subtle">
  <nu-theme #[[hue="250"]]#></nu-theme>
  <nu-block>A BLUE CARD.</nu-block>
  <nu-block><nu-btn special>Special button</nu-btn></nu-block>
</nu-card>
```

==NOTE:== By default theme uses special (primary) color to highlight important parts of the page, or slightly color the decorations like borders or secondary background color (`"subtle"`).

## Create theme from a sample color

Provide any valid CSS color to `"hue"` property.

```html
<split/>
<nu-card gap fill="subtle">
  <nu-theme #[[hue="#33bb66"]]#></nu-theme>
  <nu-block>A GREEN CARD.</nu-block>
  <nu-block><nu-btn special>Special button</nu-btn></nu-block>
</nu-card>
```

## Set saturation for theme

Use `"saturation"` property to set saturation of theme.

```html
<split/>
<nu-card gap fill="subtle">
  <nu-theme hue="250" #[[saturation="30"]]#></nu-theme>
  <nu-block>A BLUE CARD.</nu-block>
  <nu-block><nu-btn special>Special button</nu-btn></nu-block>
</nu-card>
```

## Use pastel colorspace

Set `"pastel"` property to make themes that have perceptual uniformity of saturation.

```html
<preview/>
<nu-flow gap="2x">

<nu-attrs for="card" border="0"></nu-attrs>

<nu-h3>Normal palette</nu-h3>

<nu-flex gap>
  <nu-card gap fill="subtle">
    <nu-theme hue="250" saturation="100" mod="special"></nu-theme>
    <nu-block>Card text</nu-block>

    <nu-block><nu-btn special>Special</nu-btn></nu-block>
  </nu-card>

  <nu-card gap fill="subtle">
    <nu-theme hue="320" saturation="100" mod="special"></nu-theme>
    <nu-block>Card text</nu-block>

    <nu-block><nu-btn special>Special</nu-btn></nu-block>
  </nu-card>

  <nu-card gap fill="subtle">
    <nu-theme hue="200" saturation="100" mod="special"></nu-theme>
    <nu-block>Card text</nu-block>

    <nu-block><nu-btn special>Special</nu-btn></nu-block>
  </nu-card>

  <nu-card gap fill="subtle">
    <nu-theme hue="150" saturation="100" mod="special"></nu-theme>
    <nu-block>Card text</nu-block>

    <nu-block><nu-btn special>Special</nu-btn></nu-block>
  </nu-card>
</nu-flex>

<nu-h3>Pastel palette</nu-h3>

<nu-flex gap>
  <nu-card gap fill="subtle">
    <nu-theme hue="250" saturation="100" mod="special" #[[pastel]]#></nu-theme>
    <nu-block>Card text</nu-block>

    <nu-block><nu-btn special>Special</nu-btn></nu-block>
  </nu-card>

  <nu-card gap fill="subtle">
    <nu-theme hue="300" saturation="100" mod="special" #[[pastel]]#></nu-theme>
    <nu-block>Card text</nu-block>

    <nu-block><nu-btn special>Special</nu-btn></nu-block>
  </nu-card>

  <nu-card gap fill="subtle">
    <nu-theme hue="50" saturation="100" mod="special" #[[pastel]]#></nu-theme>
    <nu-block>Card text</nu-block>

    <nu-block><nu-btn special>Special</nu-btn></nu-block>
  </nu-card>

  <nu-card gap fill="subtle">
    <nu-theme hue="150" saturation="100" mod="special" #[[pastel]]#></nu-theme>
    <nu-block>Card text</nu-block>

    <nu-block><nu-btn special>Special</nu-btn></nu-block>
  </nu-card>
</nu-flex>

</nu-flow>
```

==NOTE:== Cards with palette colorspace looks harmoniously as they have the same visual saturation and lightness.

## Use modifiers to change type of your theme

Type modifiers: `"tint"`, `"tone"`, `"swap"`, `"special"`.

```html
<preview/>
<nu-flex gap="2x">
  <nu-card gap fill="subtle">
    <nu-theme hue="250" #[[mod="tint"]]#></nu-theme>
    <nu-block>Card text</nu-block>

    <nu-block><nu-btn special>Special</nu-btn></nu-block>
  </nu-card>

  <nu-card gap fill="subtle">
    <nu-theme hue="250" #[[mod="tone"]]#></nu-theme>
    <nu-block>Card text</nu-block>

    <nu-block><nu-btn special>Special</nu-btn></nu-block>
  </nu-card>

  <nu-card gap fill="subtle">
    <nu-theme hue="250" #[[mod="swap"]]#></nu-theme>
    <nu-block>Card text</nu-block>

    <nu-block><nu-btn special>Special</nu-btn></nu-block>
  </nu-card>

  <nu-card gap fill="subtle">
    <nu-theme hue="250" #[[mod="special"]]#></nu-theme>
    <nu-block>Card text</nu-block>

    <nu-block><nu-btn special>Special</nu-btn></nu-block>
  </nu-card>
</nu-flex>
```
