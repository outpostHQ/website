---
title: font
type: style
description: The font property specifies a prioritized list of one or more font family names and/or generic family names for the selected element. 
---

It's always fallbacked by serif family set of fonts: 

```css
'Avenir Next', 'Avenir', Helvetica, Ubuntu, 'DejaVu Sans', Arial, sans-serif`.
```

Import your fonts to the page and then use them like in this [REPL example](!https://numl.design/repl#600ff4c66cd202483f3a8798).

## Syntax

```
<font>{1,*}
```

## Usage

```html
<split/>
<nu-block font="monospace">
  Monospaced text.
</nu-block>
```

## CSS Reference

* [MDN: font-family](!https://developer.mozilla.org/en-US/docs/Web/CSS/font-family)
