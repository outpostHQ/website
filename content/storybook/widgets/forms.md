## Basic form

```html
<split/>
<nu-card gap>
  <nu-h3>Login</nu-h3>
  <nu-form control="output[.value]" gap="1x">
    <nu-field>
      <nu-label>Email</nu-label>
      <nu-input id="email" grow="1"></nu-input>
    </nu-field>
    <nu-field>
      <nu-label>Password</nu-label>
      <nu-password id="password" grow="1"></nu-password>
    </nu-field>
    <nu-btn special action="submit">Submit</nu-btn>
  </nu-form>
  <nu-block overflow="auto" scrollbar width="max 16">
    <nu-value id="output"></nu-value>
  </nu-block>
</nu-card>
```
