## Basic menu

Only a single item is focusable at a single moment. Use arrows to navigate between items.

```html
<split/>
<nu-menu padding="1x 0" border radius>
  <nu-menuitem>Item 1</nu-menuitem>
  <nu-menuitem>Item 2</nu-menuitem>
  <nu-menuitem>Item 3</nu-menuitem>
</nu-menu>
```

## Nested menu

```html
<split/>
<nu-menu padding="1x 0" border radius>
  <nu-menuitem>Item 1</nu-menuitem>
  <nu-menuitem>Item 2</nu-menuitem>
  <nu-menuitem columns="1fr auto">
    Item 3
    <nu-dropdownicon></nu-dropdownicon>
    <nu-popup
      use-menu
      display="flex" padding="1x 0" flow="column">
      <nu-menuitem>Item 3.1</nu-menuitem>
      <nu-menuitem>Item 3.2</nu-menuitem>
    </nu-popup>
  </nu-menuitem>
</nu-menu>
```
