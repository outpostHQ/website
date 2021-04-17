---
title: height
type: style attribute
description: "Use this style to set the height of the element. Also, you can set minimum and maximum height."
githubLink: https://github.com/numl.design/numl/blob/master/src/helpers.js#L152
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
|`"10"`|Set height to size of 10x|
|`"min 10x"`|Set minimum height to 10x|
|`"max 10x"`|Set miximum height to 10x|
|`"min 10x"`|Set minimum height to 10x|
|`"10x 20x"`|Set minimum height to 10x and maximum height to 20x|
|`"10x 20x 100%"`|Set minimum height to 10x, base height to 20x, and maximum height to 100%|

## CSS References

* [MDN: height](!https://developer.mozilla.org/en-US/docs/Web/CSS/height)
* [MDN: min-height](!https://developer.mozilla.org/en-US/docs/Web/CSS/min-height)
* [MDN: max-height](!https://developer.mozilla.org/en-US/docs/Web/CSS/max-height)
