---
title: control
description: Use control utility property to active Control System. This allows widgets to control other elements.
---

Use **control** utility property to active *Control System*. This allows widgets to control other elements.

## Syntax

The control action is triggered each time the widget changes its value unless the `trigger` modifier is specified. In that case action will be triggered on initial assignment of the value.

Control boolean attribute (`hidden`):

```html
<split/>
<nu-card gap>
  <nu-btn toggle control="paragraph[!hidden]" trigger>
    Click me!
  </nu-btn>

  <nu-block id="paragraph" effect="collapse" hidden>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </nu-block>
</nu-card>
```

Control attribute:

```html
<split/>
<nu-pane>
  <nu-btn toggle control="icon[name=sun|moon]" trigger>
    Toggle icon
  </nu-btn>

  <nu-icon id="icon" name="sun"></nu-icon>
</nu-pane>
```

Control custom property:

```html
<split/>
<nu-flow gap id="root">
  <nu-slider
    min="0" max="1" value=".5" step="0.01" trigger
    control="root[@opacity]"></nu-slider>

  <nu-block box>
    <nu-svg opacity="@opacity" src="/img/icon.svg"></nu-svg>
  </nu-block>
</nu-flow>
```
