---
title: nu-code
type: element
description: A code snippet element.
---

## Usage

```html
<split/>
<nu-code padding="1x 2x">
  <pre>
    var a = 'Some text';
    var b = 123; // number
    
    function namedFunc(str) {
      return str.match(/^[a-z]/);
    }
  </pre>
</nu-code>
```

Use `special` attribute to get a dark version of the code snippet.

```html
<split/>
<nu-code special padding="1x 2x">
  <pre>
    var a = 'Some text';
    var b = 123; // number
    
    function namedFunc(str) {
      return str.match(/^[a-z]/);
    }
  </pre>
</nu-code>
```
