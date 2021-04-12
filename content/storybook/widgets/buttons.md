## Button types

```html
<split/>
<nu-pane flow="row wrap">
  <nu-btn>Default button</nu-btn>
  <nu-btn special>Special button</nu-btn>
  <nu-btn clear>Clear button</nu-btn>
</nu-pane>
```

## Button states

```html
<split/>
<nu-flow gap="2x">
<nu-h5>Default</nu-h5>
<nu-pane flow="row wrap">
  <nu-btn use-action="no">Normal</nu-btn>
  <nu-btn use-action="n" is-hover mark>Hover</nu-btn>
  <nu-btn use-action="n" is-active>Pressed</nu-btn>
  <nu-btn use-action="n" is-pressed>Toggled</nu-btn>
  <nu-btn use-action="n" outline="focus" is-focus>Focused</nu-btn>
  <nu-btn use-action="n" disabled>Disabled</nu-btn>
</nu-pane>

<nu-h5>Special</nu-h5>
<nu-pane flow="row wrap">
  <nu-btn special use-action="no">Normal</nu-btn>
  <nu-btn special use-action="n" is-hover mark>Hover</nu-btn>
  <nu-btn special use-action="n" is-active>Pressed</nu-btn>
  <nu-btn special use-action="n" is-pressed>Toggled</nu-btn>
  <nu-btn special use-action="n" outline="focus" is-focus>Focused</nu-btn>
  <nu-btn special use-action="n" disabled>Disabled</nu-btn>
</nu-pane>

<nu-h5>Clear</nu-h5>
<nu-pane flow="row wrap">
  <nu-btn clear use-action="no">Normal</nu-btn>
  <nu-btn clear use-action="n" is-hover mark>Hover</nu-btn>
  <nu-btn clear use-action="n" is-active>Pressed</nu-btn>
  <nu-btn clear use-action="n" is-pressed>Toggled</nu-btn>
  <nu-btn clear use-action="n" outline="focus" is-focus>Focused</nu-btn>
  <nu-btn clear use-action="n" disabled>Disabled</nu-btn>
</nu-pane>
</nu-flow>
```

## Special button

```html
<split/>
<nu-pane>
  <nu-btn special>
    Button
  </nu-btn>
  <nu-btn special disabled>
    Button
  </nu-btn>
</nu-pane>
```

## Toggle button

```html
<split/>
<nu-pane flow="row wrap">
  <nu-btn toggle>
    Button
  </nu-btn>
</nu-pane>
```

## Loading button

```html
<split/>
<nu-btn special loading>Submit</nu-btn>
```

## Card buttons

```html
<split/>
<nu-flex flow="row wrap" gap>
  <nu-cardbtn>
    <nu-heading level="4">Card button</nu-heading>
    <nu-line></nu-line>
    <nu-block>Content</nu-block>
  </nu-cardbtn>
  <nu-cardbtn special>
    <nu-heading level="4">Special card button</nu-heading>
    <nu-line></nu-line>
    <nu-block>Content</nu-block>
  </nu-cardbtn>
  <nu-cardbtn clear>
    <nu-heading level="4">Clear card button</nu-heading>
    <nu-line></nu-line>
    <nu-block>Content</nu-block>
  </nu-cardbtn>
</nu-flex>
```
