---
title: appear
type: behavior
description: A standalone behavior to change element styles when it appears on the user screen. It adds the `appear` modifier to the element when the user scrolls to it.
---

## Example

Scroll down the preview to see the effect.

```html
<split/>
<nu-props transition="1s"></nu-props>
<nu-block height="110vh"></nu-block>
<nu-btn 
  special
  use-appear
  opacity="0 :appear[1]"
  move="10x 0 :appear[0]"
  transition="opacity linear, move ease-out">
  Magic Button
</nu-btn>
```
