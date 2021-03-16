---
title: Button groups
description: Interactive example of various button groups implemented with Numl
---

## Simple button groups

```html
<split/>
<nu-flow gap>
  <nu-btngroup>
    <nu-btn>Action 1</nu-btn>
    <nu-btn>Action 2</nu-btn>
    <nu-btn>Action 3</nu-btn>
  </nu-btngroup>
</nu-flow>
```

## Radio button groups

```html
<split/>
<nu-flow gap>
  <nu-block>
    <nu-btngroup use-radiogroup value="second">
      <nu-btn value="first">First</nu-btn>
      <nu-btn value="second">Second</nu-btn>
      <nu-btn value="third">Third</nu-btn>
    </nu-btngroup>
  </nu-block>
  <nu-block>
    <nu-btngroup 
      use-radiogroup
      value="second" flow="column" 
      width="15" group-radius="column">
      <nu-btn value="first">First</nu-btn>
      <nu-btn value="second">Second</nu-btn>
      <nu-btn value="third">Third</nu-btn>
    </nu-btngroup>
  </nu-block>
  <nu-block>
    <nu-btngroup use-radiogroup disabled value="third">
      <nu-btn value="first">First</nu-btn>
      <nu-btn value="second">Second</nu-btn>
      <nu-btn value="third">Third</nu-btn>
    </nu-btngroup>
  </nu-block>
</nu-flow>

```
