## Simple button

```html
<split/>
<nu-flex flow="column" gap items="start" theme="tint">
  <nu-btn>Button</nu-btn>
  <nu-btn mark="y">Hover</nu-btn>
  <nu-btn inset="#shadow.50">Pressed</nu-btn>
  <nu-btn inset="#shadow">Toggled</nu-btn>
  <nu-btn outline>Focus</nu-btn>
  <nu-btn disabled>Disabled</nu-btn>
</nu-flex>
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
  <nu-btn disabled>
    Button
  </nu-btn>
  <nu-btn toggle pressed>
    Button
  </nu-btn>
  <nu-btn disabled pressed>
    Button
  </nu-btn>
</nu-pane>
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
</nu-flex>
```
