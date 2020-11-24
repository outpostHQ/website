---
title: Control system
description: "Usage example of the [control](../../reference/utilities/control) utility attribute."
---

## Toggle visibility

Toggle [hidden](../../reference/styles/hidden.md) attribute.

```html
<split/>
<nu-flow gap>
  <nu-btn
    toggle trigger
    #[[control="paragraph"]]#>
    Click me!
  </nu-btn>

  <nu-block id="paragraph" effect="collapse" hidden>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </nu-block>
</nu-flow>
```

## Toggle attribute

Toggle [special](../../reference/utilities/special.md) attribute.

```html
<split/>
<nu-btn
  toggle trigger
  #[[control=":self[special]"]]#>
  Click me!
</nu-btn>
```

## Change attribute value

Change icon name.

```html
<split/>
<nu-pane>
  <nu-btn
    toggle trigger
    #[[control="icon[name=sun|moon]"]]#>
    Toggle icon
  </nu-btn>

  <nu-icon id="icon" name="sun"></nu-icon>
</nu-pane>
```

## Change custom property

Change the opacity of the image.

```html
<split/>
<nu-flow gap id="root">
  <nu-slider
    min="0" max="1" value=".5" step="0.01" trigger
    #[[control="root[@opacity]"]]#></nu-slider>

  <nu-block box>
    <nu-svg opacity="@opacity" src="/images/icon.svg"></nu-svg>
  </nu-block>
</nu-flow>
```
