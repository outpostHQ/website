## Input

```html
<split/>
<nu-flex flow="row wrap" gap>
  <nu-input width="12" placeholder="Default input"></nu-input>
  <nu-input width="12" placeholder="Special input" special></nu-input>
</nu-flex>
```

## Input states
```html
<split/>
<nu-attrs for="input" width="12"></nu-attrs>
<nu-flow gap="2x">
<nu-h5>Default</nu-h5>
<nu-flex flow="row wrap" gap>
  <nu-input placeholder="Normal"></nu-input>
  <nu-input is-focus outline="y" placeholder="Focus"></nu-input>
  <nu-input disabled placeholder="Disabled"></nu-input>
</nu-flex>

<nu-h5>Special</nu-h5>
<nu-flex flow="row wrap" gap>
  <nu-input special placeholder="Normal"></nu-input>
  <nu-input special is-focus outline="y" placeholder="Focus"></nu-input>
  <nu-input special disabled placeholder="Disabled"></nu-input>
</nu-flex>
```

## Input with icon and button

```html
<split/>
<nu-inputgroup border radius width="15em" fill="input">
  <nu-icon name="person-outline" width="2.5em"></nu-icon>
  <nu-input border="0" placeholder="Input with icon"></nu-input>
  <nu-btn border="left" padding="1x .5x">
    <nu-icon name="close-outline" label="Circle"></nu-icon>
  </nu-btn>
</nu-inputgroup>
```

==@TODO==
