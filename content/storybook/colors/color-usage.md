## Change text color

Use [color](../../reference/styles/color.md) property to set text (base) color.

```html
<split/>
<nu-el color="special">Special text</nu-el>
```

Set transparency for the color using the following syntax:

```html
<split/>
<nu-el color="special 60%">Special text</nu-el>
```

## Fill element with color

Use [fill](../../reference/styles/fill.md) property to fill element with color.

```html
<split/>
<nu-el fill="special-bg">Special element</nu-el>
```

**Numl** tries to adapt text color if you changes background. So there is no need to specify `color="special-text"` property.

## Set color of the property

If you want to change, for example, color of the border, then you should use `#` syntax to specify color.

```html
<split/>
<nu-card border="1x #special" radius="2x">
  Special card
</nu-card>
```

Set transparency for the border color using the following syntax:

```html
<split/>
<nu-card border="1x #special.60" radius="2x">
  Special card
</nu-card>
```

Set custom color (red).

```html
<split/>
<nu-card border="1x hue(1)" radius="2x">
  Special card
</nu-card>
```

Shadow with custom color.

```html
<split/>
<nu-card shadow="1x 1x 3x hue(320 70 high 50)">

</nu-card>
```

> It is possible to use **CSS** color definitions to set the colors. But we strongly recommend you to use `hue()` definitions only. It creates an adaptive color that will look great in **Dark Scheme** and **High Contrast Mode**. See the [hue() reference page](../../reference/functions/hue.md) to learn more.

## Declare named colors

Use [nu-props](../../reference/decorators/nu-props.md) definition element to declare custom color with name.

```html
<split/>
<nu-props fancy-color="hue(320 100 low special)"></nu-props>

<nu-card fill="fancy" color="special-text" text="b">Fancy card</nu-card>
<nu-spacer></nu-spacer>
<nu-card border="#fancy" color="fancy" text="b">Fancy card</nu-card>
```
