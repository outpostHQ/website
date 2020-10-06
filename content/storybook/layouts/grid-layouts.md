Grid layouts are for cases when need to arrange a group of elements or regions inside a perfect grid.

## Simple layout

By default **Grid** layout has a single column.

```html
<split/>
<#[[nu-grid]]#>
  <nu-attrs for="card" width="min 3" height="4" size="xl" text="b center"></nu-attrs>

  <nu-card>A</nu-card>
  <nu-card>B</nu-card>
  <nu-card>C</nu-card>
  <nu-card>D</nu-card>
</nu-grid>
```

## With more columns

Use [columns](../../reference/attributes/columns.md) style according to specification. [MDN Examples](!https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns).

```html
<split/>
<nu-grid #[[columns="repeat(4, auto)"]]#>
  <nu-attrs for="card" width="min 3" height="4" size="xl" text="b center"></nu-attrs>

  <nu-card>A</nu-card><nu-card>B</nu-card><nu-card>C</nu-card><nu-card>D</nu-card>
</nu-grid>
```

## With gap

Use [gap](../../reference/attributes/gap.md) style. Default value is `1x`.

```html
<split/>
<nu-grid columns="repeat(4, auto)" #[[gap]]#>
  <nu-attrs for="card" width="min 3" height="4" size="xl" text="b center"></nu-attrs>

  <nu-card>A</nu-card><nu-card>B</nu-card><nu-card>C</nu-card><nu-card>D</nu-card>
</nu-grid>
```

## Row flow

Use [flow](../../reference/attributes/flow.md) style to set different flow. Use [rows](../../reference/attributes/rows.md) to set number of rows.

```html
<split/>
<nu-grid
  #[[rows="auto auto"]]# #[[flow="row"]]#
  columns="auto auto" gap>
  <nu-attrs for="card" width="min 3" height="4" size="xl" text="b center"></nu-attrs>

  <nu-card>A</nu-card><nu-card>B</nu-card><nu-card>C</nu-card><nu-card>D</nu-card>
</nu-grid>
```

## Variable number of columns (or rows)

Use `"auto-fill"` or `"auto-fit"` value of `repeat()` method.

```html
<split/>
<nu-grid
  columns="repeat(auto-fit, 6rem)" gap>
  <nu-attrs for="card" height="4" size="xl" text="b center"></nu-attrs>

  <nu-card>A</nu-card><nu-card>B</nu-card><nu-card>C</nu-card><nu-card>D</nu-card>
</nu-grid>
```

## Equally-sized columns

Use the `"pr"` custom grid unit. It's similar to the `"fr"` grid unit and is a shorthand for `"minmax(0, 1fr)"`.

```html
<split/>
<nu-flow gap>
  <nu-attrs for="card" size="lg" text="b center nowrap"></nu-attrs>

  <nu-h4>FR unit</nu-h4>
  <nu-grid columns="1fr 1fr" gap>
    <nu-card>A</nu-card>
    <nu-card>B. Over-sized card</nu-card>
  </nu-grid>
  <nu-h4>PR unit</nu-h4>
  <nu-grid columns=#[["1pr 1pr"]]# gap>
    <nu-card>A</nu-card>
    <nu-card>B. Over-sized card</nu-card>
  </nu-grid>
</nu-flow>
```

Also, you can just use **minimum width** for each grid item to achive the same effect.

```html
<split/>
<nu-flow gap>
  <nu-attrs
    for="card" size="lg" text="b center nowrap"
    #[[width="min 3"]]#></nu-attrs>

  <nu-grid columns="1fr 1fr" gap>
    <nu-card>A</nu-card>
    <nu-card>B. Over-sized card</nu-card>
  </nu-grid>
</nu-flow>
```

## Positioning

### Content positioning

Use [content](../../reference/attributes/content.md) style with `"space-between"`, `"space-around"`, `"space-evenly"`, `"center"` and `"stretch"` modifiers.

```html
<split/>
<nu-grid
  columns="auto auto" height="12" fill="subtle"
  #[[content="space-between"]]#>
  <nu-attrs for="card" width="3" height="4" size="xl" text="b"></nu-attrs>

  <nu-card>A</nu-card><nu-card>B</nu-card><nu-card>C</nu-card><nu-card>D</nu-card>
</nu-grid>
```

### Items positioning

Use [items](../../reference/attributes/items.md) style with `"start"`, `"end"`, `"center"` and `"stretch"` modifiers.

```html
<split/>
<nu-grid
  columns="auto auto" gap fill="subtle"
  #[[items="end"]]#>
  <nu-attrs for="card" width="3" height="4" size="xl" text="b"></nu-attrs>

  <nu-card>A</nu-card><nu-card>B</nu-card><nu-card>C</nu-card><nu-card>D</nu-card>
</nu-grid>
```
