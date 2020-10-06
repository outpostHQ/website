```html
<split/>
<nu-flow gap>
  <nu-block>
    <nu-datetime date value="2010-02-04"></nu-datetime>
  </nu-block>

  <nu-block>
    <nu-datetime month day value="2010-02-04"></nu-datetime>
  </nu-block>

  <nu-block>
    <nu-datetime year month="short" value="2010-02-04"></nu-datetime>
  </nu-block>
</nu-flow>
```

## Timer

```html
<split/>
<nu-flow gap>
  <nu-block>
    <nu-datetime time value="now"></nu-datetime>
  </nu-block>

  <nu-block>
    <nu-datetime hour minute value="now"></nu-datetime>
  </nu-block>

  <nu-block>
    <nu-datetime time hourcycle="h24" value="now"></nu-datetime>
  </nu-block>
</nu-flow>
```

## Localized

```html
<split/>
<nu-flow gap lang="ru">
  <nu-heading level="5">Russian locale</nu-heading>

  <nu-block>
    <nu-datetime date value="2010-02-04"></nu-datetime>
  </nu-block>

  <nu-block>
    <nu-datetime month day value="2010-02-04"></nu-datetime>
  </nu-block>

  <nu-block>
    <nu-datetime year month="short" value="2010-02-04"></nu-datetime>
  </nu-block>
</nu-flow>
```
