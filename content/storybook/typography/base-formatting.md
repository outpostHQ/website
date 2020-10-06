---
title: Text formatting
description: Text formatting examples
---

## Plain

No formatting. `"inline-block"` display.

```html
<split/>
<nu-el>No styles</nu-el>
```

No formatting. `"inline"` display.

```html
<split/>
<nu-in>No styles</nu-in>
```

Other elements in this section have `"inline"` display style as well.

## Strong

**nu-strong** elements or **text** style with `"b"` (shorthand for `"bold"`) modifier.

```html
<split/>
<nu-strong>Bold</nu-strong> |
<nu-el text="b">
  Styled as bold
</nu-el>
```

## Emphasis

**nu-em** elements or **text** style with `"i"` (shorthand for `"italic"`) modifier.

```html
<split/>
<nu-em>Italic</nu-em> |
<nu-el text="i">
  Styled as italic
</nu-el>
```

## Superscript

`"sup"` modifier.

```html
<split/>
<nu-sup>Superscript</nu-sup> |
<nu-el text="sup" size=".75em 1em">
  Styled as superscript
</nu-el>
```

## Subscript

`"sub"` modifier.

```html
<split/>
<nu-sub>Subscript</nu-sub> |
<nu-el text="sub" size=".75em 1em">
  Styled as subscript
</nu-el>
```

## Marks

Normal and special marks.

```html
<split/>
Text <nu-mark>Normal mark</nu-mark>,
<nu-mark special>Special mark</nu-mark>.
```

## Reset styles

`"n"` (shorthand for `"normal"`) modifier.

```html
<split/>
<nu-el text="b i del">
  Text <nu-el text="n">reset</nu-el> text
</nu-el>
```
