The **theme** utility property sets the theme (declared via [nu-theme](../decorators/nu-theme.md)) to the element by the name. Also, you can add some modifiers to customize the theme. This utility property behaves like style.

## Usage

Basic syntax:

```html
<split/>
<nu-theme name="red" hue="1"></nu-theme>

<nu-btn theme="red">
  Themed button
</nu-btn>
```

Change type of the theme:

```html
<split/>
<nu-theme name="red" hue="1"></nu-theme>

<nu-flex flow="row wrap" gap>
  <nu-btn theme="red tint">Tint</nu-btn>
  <nu-btn theme="red tone">Tone</nu-btn>
  <nu-btn theme="red swap">Swap</nu-btn>
  <nu-btn theme="red special">Special</nu-btn>
</nu-flex>
```

Change various modifiers:

```html
<split/>
<nu-theme name="red" hue="1"></nu-theme>

<nu-flex flow="row wrap" gap>
  <nu-btn theme="red tone dim">Tone Dim</nu-btn>
  <nu-btn theme="red tone">Tone</nu-btn>
  <nu-btn theme="red tone bold">Tone Bold</nu-btn>
  <nu-btn theme="red special soft">Special Soft</nu-btn>
  <nu-btn theme="red special">Special</nu-btn>
  <nu-btn theme="red special strong">Special Strong</nu-btn>
</nu-flex>
```

Use `"dim"` and `"bold"` modifiers to change contrast between main background color and theme background color.

Use `"soft"` and `"strong"` modifiers to change contrast between background and foreground colors.

## See also

* [nu-theme](../decorators/nu-theme.md)
* [color](./color.md)
* [fill](./fill.md)
* [hue()](../functions/hue.md)
