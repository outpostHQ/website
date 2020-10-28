---
title: columns
type: style attribute
description: "Use this style to define the line names and track sizing functions of the grid columns."
githubLink: false
---

## Syntax

```
none | <track-list> | <auto-track-list> | subgrid <line-name-list>?
where
<track-list> = [ <line-names>? [ <track-size> | <track-repeat> ] ]+ <line-names>?
<auto-track-list> = [ <line-names>? [ <fixed-size> | <fixed-repeat> ] ]* <line-names>? <auto-repeat>
[ <line-names>? [ <fixed-size> | <fixed-repeat> ] ]* <line-names>?
<line-name-list> = [ <line-names> | <name-repeat> ]+

where
<line-names> = '[' <custom-ident>* ']'
<track-size> = <track-breadth> | minmax( <inflexible-breadth> , <track-breadth> ) | fit-content( [ <length> | <percentage> ] )
<track-repeat> = repeat( [ <positive-integer> ] , [ <line-names>? <track-size> ]+ <line-names>? )
<fixed-size> = <fixed-breadth> | minmax( <fixed-breadth> , <track-breadth> ) | minmax( <inflexible-breadth> , <fixed-breadth> )
<fixed-repeat> = repeat( [ <positive-integer> ] , [ <line-names>? <fixed-size> ]+ <line-names>? )
<auto-repeat> = repeat( [ auto-fill | auto-fit ] , [ <line-names>? <fixed-size> ]+ <line-names>? )

where
<track-breadth> = <length-percentage> | <flex> | min-content | max-content | auto
<inflexible-breadth> = <length> | <percentage> | min-content | max-content | auto
<fixed-breadth> = <length-percentage>

where
<length-percentage> = <length> | <percentage>
```

Style has custom unit called `"pr"` that is equal to `minmax(0, 1fr)`. It is used to create equally-sized columns. For example: `"1pr 1pr"` for two columns.

## Examples

* [Layouts - Grid layouts](../../storybook/layouts/grid-layouts.md)

## CSS References

* [MDN: grid-template-columns](!https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns)
