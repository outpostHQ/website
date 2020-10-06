The **shadow** property sets shadow effect the element.

## Syntax

```
[ <integer> | <length>{2,4} ] && <color>?
```

## Examples

If a single `<integer>` value is provided it denotes a size of the shadow (or depth if you like).

```html
<split/>
<nu-card shadow="1">CARD</nu-card>
```

If the color is not specified then shadow with default intensity is used.

* [Decorations - Shadows](../../storybook/decorations/shadows.md)

## CSS Reference

* [MDN: box-shadow](!https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)
