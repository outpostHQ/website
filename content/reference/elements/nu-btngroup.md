---
title: nu-btngroup
type: element
description: A group of generic buttons or a group of radio buttons.
---

## Usage

Group buttons in a single panel:

```html
<split/>
<nu-btngroup>
  <nu-btn>One</nu-btn>
  <nu-btn>Two</nu-btn>
  <nu-btn>Three</nu-btn>
</nu-btngroup>
```

Create a radio group by injecting `radiogroup` behavior:

```html
<split/>
<nu-btngroup use-radiogroup value="one">
  <nu-btn value="one">One</nu-btn>
  <nu-btn value="two">Two</nu-btn>
  <nu-btn value="three">Three</nu-btn>
</nu-btngroup>
```

See more examples in our [Storybook](../../storybook/widgets/button-groups.md).
