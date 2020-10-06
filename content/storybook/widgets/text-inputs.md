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
<nu-group border radius width="15em" fill="input">
  <nu-icon name="user" width="2.5em"></nu-icon>
  <nu-input border="0" grow="1" label="Input with icon">

  </nu-input>
  <nu-btn border="left">
    <nu-icon name="x" label="Circle"></nu-icon>
  </nu-btn>
</nu-group>
```

==@TODO==
