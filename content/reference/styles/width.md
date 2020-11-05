---
title: width
type: style attribute
description: "Use this style to set the width of the element. Also, you can set minimum and maximum width."
githubLink: https://github.com/numldesign/numl/blob/master/src/helpers.js#L152
---

## Syntax

```
auto | <value>{1,3} | min-content | max-content | fit-content(<value>) | min <value> | max <value>

where
<value> = <length> | <percentage>
```

## Example values

|Value|Description|
|----|----|
|`"10"`|Set width to size of 10rem|
|`"min 10x"`|Set minimum width to 10rem|
|`"max 10x"`|Set miximum width to 10rem|
|`"min 10x"`|Set minimum width to 10rem|
|`"10x 20x"`|Set minimum width to 10rem and maximum width to 20rem|
|`"10x 20x 100%"`|Set minimum width to 10rem, base width to 20x, and maximum width to 100%|

## CSS References

* [MDN: width](!https://developer.mozilla.org/en-US/docs/Web/CSS/width)
* [MDN: min-width](!https://developer.mozilla.org/en-US/docs/Web/CSS/min-width)
* [MDN: max-width](!https://developer.mozilla.org/en-US/docs/Web/CSS/max-width)
