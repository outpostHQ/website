Use this style to specify a grid item’s size and location within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.

## Syntax

```
<grid-line> [ / <grid-line> ]?

where
<grid-line> = auto | <custom-ident> | [ <integer> && <custom-ident>? ] | [ span && [ <integer> || <custom-ident> ] ]
```

## Examples

* [Layouts - Grid layouts](../../storybook/layouts/grid-layouts.md)

## CSS References

* [MDN: grid-row](!https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row)
