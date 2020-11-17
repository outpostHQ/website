By default Numl uses [Feather Icons](https://github.com/feathericons/feather) for icons.

## Static icons

```html
<split/>
<nu-block>
  <nu-icon name="sun-outline"></nu-icon>
  <nu-icon name="alert-triangle-outline"></nu-icon>
  <nu-icon name="message-square-outline"></nu-icon>
  <nu-icon name="menu-outline"></nu-icon>
</nu-block>
```

## Dynamic icons

You can change icon (with transition) depending on the element state like:

```html
<split/>
<nu-props transition=".2s"></nu-props>
<nu-flex gap="2x" flow="row wrap">
  <nu-btn padding>
    <nu-icon name="gift-outline ^:hover.focus[gift]"></nu-icon>
    Package
  </nu-btn>

  <nu-btn padding toggle>
    Dropdown
    <nu-icon name="chevron-down ^:pressed[chevron-up]"></nu-icon>
  </nu-btn>
</nu-flex>
```

Hover on the first button and click on the second to see the effect.

As you see all icons are perfectly aligned with the text in any context.

## Dropdown icon

There is the built-in element [nu-dropdownicon](../../reference/elements/nu-dropdownicon.md).

```html
<split/>
<nu-btn toggle>
  Dropdown
  <nu-dropdownicon></nu-dropdownicon>
  <nu-popup>Content</nu-popup>
</nu-btn>
```
