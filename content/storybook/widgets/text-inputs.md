## Simple input

```html
<split/>
<nu-flex flow="row wrap" gap>
  <nu-input width="15" label="Simple input">
  </nu-input>

  <nu-input width="15" label="Simple disabled input" disabled>
  </nu-input>
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
