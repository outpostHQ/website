Flex layouts are very useful when need to arrange a group of similar elements.

## Simple layout

Use [nu-flex](../../reference/elements/nu-flex.md).

```html
<split/>
<#[[nu-flex]]#>
  <nu-attrs for="card" width="3" height="4" size="xl" text="b"></nu-attrs>

  <nu-card>A</nu-card>
  <nu-card>B</nu-card>
  <nu-card>C</nu-card>
  <nu-card>D</nu-card>
</nu-flex>
```

## With gap

Use [gap](../../reference/attributes/gap.md) style. Default value is `1x`.

```html
<split/>
<nu-flex #[[gap]]#>
  <nu-attrs for="card" width="3" height="4" size="xl" text="b"></nu-attrs>

  <nu-card>A</nu-card><nu-card>B</nu-card><nu-card>C</nu-card><nu-card>D</nu-card>
</nu-flex>
```

## With wrapping

Use [flow](../../reference/attributes/flow.md) style with `wrap` modifier.

Use first the value of `gap` style to set a vertical gap, and the second to set a horizontal gap.

```html
<split/>
<nu-flex
  #[[gap="1x 2x"]]#
  #[[flow="row wrap"]]#>
  <nu-attrs for="card" width="3" height="4" size="xl" text="b"></nu-attrs>

  <nu-card>A</nu-card><nu-card>B</nu-card><nu-card>C</nu-card><nu-card>D</nu-card><nu-card>E</nu-card><nu-card>F</nu-card><nu-card>G</nu-card><nu-card>H</nu-card>
</nu-flex>
```

## Positioning

### Content positioning

Use [content](../../reference/attributes/content.md) style with `"space-between"`, `"space-around"`, `"space-evenly"`, `"center"`, `"flex-start"`, `"flex-end"` and `"stretch"` modifiers.

```html
<split/>
<nu-flex gap #[[content="space-between"]]#>
  <nu-attrs for="card" width="3" height="4" size="xl" text="b"></nu-attrs>

  <nu-card>A</nu-card><nu-card>B</nu-card><nu-card>C</nu-card><nu-card>D</nu-card>
</nu-flex>
```

### Items positioning

Use [items](../../reference/attributes/items.md) style with `"flex-start"`, `"flex-end"`, `"center"` and `"stretch"` modifiers.

```html
<split/>
<nu-flex
  gap #[[items="flex-end"]]#
  height="6" fill="subtle">
  <nu-attrs for="card" width="3" height="4" size="xl" text="b"></nu-attrs>

  <nu-card>A</nu-card><nu-card>B</nu-card><nu-card>C</nu-card><nu-card>D</nu-card>
</nu-flex>
```
