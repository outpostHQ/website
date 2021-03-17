You can use **Numl** to create simple content arrangement without using **flex** or **grid** layouts.

You can even create **gaps** between elements with ease.

## Vertical layout

Use [nu-flow](../../reference/elements/nu-flow.md) element or any element with `flow="column"`.

```html
<split/>
<#[[nu-flow]]# fill="subtle" padding>
  <nu-attrs
    for="card"
    space="around"
    width="5 100% 15"></nu-attrs>

  <nu-card>
    Card content
  </nu-card>

  <nu-card>
    Card content
  </nu-card>
</nu-flow>
```

### Center the blocks

Suitable for landings. Use `space="around"`.

```html
<split/>
<nu-flow fill="subtle" padding>
  <nu-attrs
    for="card"
    #[[space="around"]]#
    width="5 100% 15"></nu-attrs>

  <nu-card>
    Card content
  </nu-card>

  <nu-card>
    Card content
  </nu-card>
</nu-flow>
```

### Add gaps

Add `gap` attribute. Default value is `1x`.

```html
<split/>
<nu-flow fill="subtle" padding #[[gap]]#>
  <nu-attrs
    for="card"
    space="around"
    width="5 100% 15"></nu-attrs>

  <nu-card>
    Card content
  </nu-card>

  <nu-card>
    Card content
  </nu-card>
</nu-flow>
```

## Horizontal layout

You can achieve the horizontal layout with default gap using inline flow.

```html
<split/>
<nu-flow fill="subtle" #[[flow="row"]] padding>
  <nu-attrs
    for="card"
    inline></nu-attrs>

  <nu-card>
    Card content
  </nu-card>

  <nu-card>
    Card content
  </nu-card>
</nu-flow>
```

### Custom gap

Remove space between item elements and add `gap` style.

```html
<split/>
<nu-flow
  fill="subtle" flow="row"
  padding #[[gap="2x"]]#>
  <nu-attrs
    for="card"
    inline></nu-attrs>

  <nu-card>
    Card content
  </nu-card><nu-card>
    Card content
  </nu-card>
</nu-flow>
```

