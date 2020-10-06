The **flow** property sets the flow direction for various layouts. Also this property is required if you want to create **gaps** between elements in **any layout**.

## Syntax

For **grid** layouts:

```
[ row | column ] || dense
```

For **flex** layouts:

```
[ row | column | row-reverse | column-reverse ] [ wrap | nowrap | wrap-reverse ]?
```

For **other** layouts:

```
row | column
```

## Usage

* [Layouts - Basic layouts](../../storybook/layouts/basic-layouts.md)
* [Layouts - Flex layouts](../../storybook/layouts/flex-layouts.md)
* [Layouts - Grid layouts](../../storybook/layouts/grid-layouts.md)

## See also

* [gap](./gap.md)

## CSS Reference

* [MDN: flex-flow](!https://developer.mozilla.org/en-US/docs/Web/CSS/flex-flow)
* [MDN: grid-auto-flow](!https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow)
