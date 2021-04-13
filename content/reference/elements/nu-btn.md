---
title: nu-btn
type: element
description: A universal button element. It can be used as a basic button, toggle button and a trigger for a dropdown.
---

## Usage

There are three types of button: `default`, `clear`, and `special`.

```html
<split/>
<nu-btn>Default</nu-btn>
<nu-btn clear>Clear</nu-btn>
<nu-btn special>Special</nu-btn>
```

Add `toggle` attribute to make a toggle button:

```html
<split/>
<nu-btn toggle>Click me!</nu-btn>
```

Insert a popup inside the button to make a dropdown:

```html
<split/>
<nu-btn>
  Dropdown
  <nu-dropdownicon></nu-dropdownicon>
  <nu-popup>
    Popup content
  </nu-popup>
</nu-btn>
```

See more examples in our [Storybook](../../storybook/widgets/buttons.md).