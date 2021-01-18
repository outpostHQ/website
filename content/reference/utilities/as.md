---
title: Utility attribute [as]
description: The as property sets the additional "name" to the element that can be used when you declare styles in context via nu-attrs
---

The **as** property sets the additional "name" to the element that can be used when you declare styles in context via [nu-attrs](../definitions/nu-attrs.md).

## Usage

```html
<split/>
<nu-attrs #[[for="mybtn"]]# special padding="2x 4x"></nu-attrs>

<nu-flex flow="column" gap>
  <nu-btn #[[as="mybtn"]]#>My button</nu-btn>
  <nu-btn #[[as="mybtn"]]#>My second button</nu-btn>
  <nu-btn as="otherbtn">Other button</nu-btn>
</nu-flex>
```
