## Label based on state

Framework automatically generates CSS based on states without style overlapping.

```html
<split/>
<nu-btn
  width="16"
  toggle
  t="'DEFAULT' :pressed['PRESSED'] :hover['HOVERED'] :hover:pressed['PRESSED & HOVERED']">
</nu-btn>
```

## Styling based on parent state

```html
<split/>
<nu-btn
  width="10"
  toggle
  text="left :pressed[right]"
  display="flex" flow="row :pressed[row-reverse]">
  <nu-icon name="^ align-left :pressed[align-right]"></nu-icon>
  <nu-el grow="1" t="'Align left' ^:pressed['Align right']"></nu-el>
</nu-btn>
```

## Styling based on state of element in the context

```html
<split/>
<nu-btn
  id="tile"
  width="12"
  flow="row"
  toggle
  content="stretch">
  <nu-pane>
    <nu-heading level="6">Total sales</nu-heading>
    <nu-icon
      name="chevron-down"
      scale="^#tile :pressed[flip-y]"
      size="2.5x"></nu-icon>
  </nu-pane>
  <nu-line></nu-line>
  <nu-block text="w7 h4">
    $92,439
  </nu-block>
  <nu-popup>
    Additional information
  </nu-popup>
</nu-btn>
```
