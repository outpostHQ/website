Definition element to declare attributes for elements by name in parent context.

## Usage

## Basic example

Using `<nu-attrs>` we declare that in parent `<nu-pane>` all child elements should have attribute `color="special"` in case they don't have `color` attribute initially.

```html
<split/>
<nu-pane>
  <nu-attrs for="btn" color="special"></nu-attrs>
  <nu-btn>Button</nu-btn>
  <nu-btn>Button</nu-btn>
  <nu-btn color="text">Button</nu-btn>
</nu-pane>
```

## Rewrite attribute value

Use `!` symbol at the start of the attribute value to rewrite existing attributes.

```html
<split/>
<nu-pane>
  <nu-attrs for="btn" color="!special"></nu-attrs>
  <nu-btn>Button</nu-btn>
  <nu-btn>Button</nu-btn>
  <nu-btn color="text">Button</nu-btn>
</nu-pane>
```

## Cascade

Use multiple `<nu-attrs>` elements. The closer definition to the element the more priority its attributes have.

```html
<split/>
<nu-flow gap>
  <nu-attrs for="btn" border="#special" color="hue(20)"></nu-attrs>
  <nu-pane>
    <nu-attrs for="btn" color="special"></nu-attrs>
    <nu-btn>Button</nu-btn>
    <nu-btn>Button</nu-btn>
  </nu-pane>
  <nu-block>
    <nu-btn>Button</nu-btn>
  </nu-block>
</nu-flow>
```

## Dynamic change

You can dynamically change attributes on `<nu-attrs>`. All changes will be tranferred to the corresponding elements.

```html
<split/>
<nu-flow gap>
  <nu-block>
    <nu-btn
      toggle
      control="attrs[color]" trigger
      value="special" off-value="text">
      Toggle color
    </nu-btn>
  </nu-block>
  <nu-pane>
    <nu-attrs id="attrs" for="btn"></nu-attrs>
    <nu-btn>Button</nu-btn>
    <nu-btn>Button</nu-btn>
  </nu-pane>
</nu-flow>
```
