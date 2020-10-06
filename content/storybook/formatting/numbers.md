```html
<split/>
<nu-flow gap>
  <nu-block>
    <nu-num
      value="1234"></nu-num>
  </nu-block>
  <nu-block>
    <nu-num
      notation="compact long"
      value="1234"></nu-num>
  </nu-block>
  <nu-block>
    <nu-num
      decimal="2"
      value="1234"></nu-num>
  </nu-block>
  <nu-block>
    <nu-num
      integer="6"
      value="1234"></nu-num>
  </nu-block>
  <nu-block>
    <nu-num
      significant="2"
      value="1234"></nu-num>
  </nu-block>
</nu-flow>
```

## Percents
```html
<split/>
<nu-flow gap>
  <nu-block>
    <nu-num
      type="percent"
      value="1234"></nu-num>
  </nu-block>
</nu-flow>
```

## Currency

```html
<split/>
<nu-flow gap>
  <nu-block>
    <nu-num
      type="currency"
      value="1234"
      code="USD"></nu-num>
  </nu-block>
  <nu-block>
    <nu-num
      type="currency"
      notation="compact long"
      value="1234"
      code="USD"></nu-num>
  </nu-block>
  <nu-block>
    <nu-num
      type="currency"
      sign="accounting"
      value="-1234"
      code="USD"></nu-num>
  </nu-block>
</nu-flow>
```

## Units

```html
<split/>
<nu-flow gap>
  <nu-block>
    <nu-num
      unit="kilometer short"
      value="1234"></nu-num>
  </nu-block>
  <nu-block>
    <nu-num
      unit="kilometer long"
      value="1234"></nu-num>
  </nu-block>
  <nu-block>
    <nu-num
      unit="day"
      value="5"></nu-num>
  </nu-block>
</nu-flow>
```

## Localized

```html
<split/>
<nu-flow gap lang="ru">
  <nu-heading level="5">Russian locale</nu-heading>
  <nu-block>
    <nu-num
      value="1234"></nu-num>
  </nu-block>
  <nu-block>
    <nu-num
      notation="compact long"
      value="1234"></nu-num>
  </nu-block>
  <nu-block>
    <nu-num
      decimal="2"
      value="1234"></nu-num>
  </nu-block>
  <nu-block>
    <nu-num
      integer="6"
      value="1234"></nu-num>
  </nu-block>
  <nu-block>
    <nu-num
      significant="2"
      value="1234"></nu-num>
  </nu-block>
</nu-flow>
```
