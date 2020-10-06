Each theme has the following list of colors. You can test them all in this playground.

```html
<split/>
<nu-flow gap padding="17 bottom">
  <nu-attrs for="btn" text="monospace" width="min 10" fill="input" columns="1fr auto"></nu-attrs>

  <nu-card id="card">
		<nu-card id="inner-card" fill="text" height="min 8"></nu-card>
  </nu-card>

  <nu-flow gap="2x">
    <nu-pane>
      <nu-el>Background:</nu-el>

      <nu-btn toggle value="bg" control="card[fill]" trigger>
        <nu-value list></nu-value>
        <nu-dropdownicon></nu-dropdownicon>
        <nu-popuplistbox text="nowrap">
          <nu-option value="text">text</nu-option>
          <nu-option value="text-soft">text-soft</nu-option>
          <nu-option value="text-strong">text-strong</nu-option>
          <nu-option value="special">special</nu-option>
          <nu-option value="special-bg">special-bg</nu-option>
          <nu-option value="special-text">special-text</nu-option>
          <nu-option value="mark">mark</nu-option>
          <nu-option value="focus">focus</nu-option>
          <nu-option value="bg">bg</nu-option>
          <nu-option value="subtle">subtle</nu-option>
          <nu-option value="border">border</nu-option>
          <nu-option value="input">input</nu-option>
          <nu-option value="shadow">shadow</nu-option>
          <nu-option value="special-shadow">special-shadow</nu-option>
        </nu-popuplistbox>
      </nu-btn>
    </nu-pane>

    <nu-pane>
      <nu-el>Foreground:</nu-el>

      <nu-btn toggle value="text" control="inner-card[fill]" trigger>
        <nu-value list></nu-value>
        <nu-dropdownicon></nu-dropdownicon>
        <nu-popuplistbox text="nowrap">
          <nu-option value="text">text</nu-option>
          <nu-option value="text-soft">text-soft</nu-option>
          <nu-option value="text-strong">text-strong</nu-option>
          <nu-option value="special">special</nu-option>
          <nu-option value="special-bg">special-bg</nu-option>
          <nu-option value="special-text">special-text</nu-option>
          <nu-option value="mark">mark</nu-option>
          <nu-option value="focus">focus</nu-option>
          <nu-option value="bg">bg</nu-option>
          <nu-option value="subtle">subtle</nu-option>
          <nu-option value="shadow">shadow</nu-option>
          <nu-option value="special-shadow">special-shadow</nu-option>
        </nu-popuplistbox>
      </nu-btn>
    </nu-pane>
  </nu-flow>

</nu-flow>
```
