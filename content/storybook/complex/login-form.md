```html
<split/>
<nu-card>
  <nu-props radius=".5x"></nu-props>
  <nu-theme hue="250" mod="tone"></nu-theme>
  <nu-theme name="error" hue="1" mod="tint"></nu-theme>
  <nu-attrs for="field" theme=":invalid[error]"></nu-attrs>
  <nu-attrs
    for="label"
    place="top left 1x 2x" z="above" text="w5" origin="top left"
    scale="^:focus[.75] :placeholder[1] .75"
    move="^:focus[0] :placeholder[0 1.25x] 0"
    color="^:focus[text-soft] :placeholder[text 50%] text-soft"
    interactive="n"
    transition="theme, transform"></nu-attrs>
  <nu-form control="output[.value]" gap="1x">
    <nu-field>
      <nu-inputgroup height="8x" padding="2.5x 1x 1x 1x">
        <nu-label>Username</nu-label>
        <nu-input id="username" placeholder="" grow="1"></nu-input>
      </nu-inputgroup>
      <nu-check for="username" assert="required">
        Username is required
      </nu-check>
    </nu-field>
    <nu-field>
      <nu-inputgroup height="8x" padding="2.5x 1x 1x 1x">
        <nu-label>Password</nu-label>
        <nu-password id="password" placeholder="" grow="1"></nu-password>
      </nu-inputgroup>
      <nu-check for="password" assert="required">
        Password is required
      </nu-check>
    </nu-field>
    <nu-btn special action="submit">Submit</nu-btn>
  </nu-form>
  <nu-block overflow="auto" scrollbar width="max">
    <nu-value id="output"></nu-value>
  </nu-block>
</nu-card>
```
