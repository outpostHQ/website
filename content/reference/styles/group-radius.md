---
title: group-radius
description: The **group-radius** property sets a border radius of the group of elements.
---

## Example

```html
<split/>
<nu-flex group-radius="1r">
  <nu-btn>A</nu-btn>
  <nu-btn>B</nu-btn>
</nu-flex>
<nu-spacer></nu-spacer>
<nu-flex group-radius="1r column" flow="column">
  <nu-btn>A</nu-btn>
  <nu-btn>B</nu-btn>
</nu-flex>
<nu-spacer></nu-spacer>
<nu-flex group-radius="1r reverse" flow="row-reverse">
  <nu-btn>A</nu-btn>
  <nu-btn>B</nu-btn>
</nu-flex>
```

If you want to implement a thin border between elements you can use the following pattern:

```html
<split/>
<nu-attrs
  for="btn"
  shadow="0 0 0 1bw #border"
  border="n"></nu-attrs>
<nu-radiogroup
  display="inline-flex"
  group-radius="1r" border="#clear" gap="1bw">
  <nu-btn>A</nu-btn>
  <nu-btn>B</nu-btn>
  <nu-btn>C</nu-btn>
</nu-radiogroup>
```
