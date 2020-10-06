Use [outline](../../reference/attributes/outline.md) style property.

Remove `intrusive` modifier from examples to use **polite** focus mode where outline is only visibly when user navigate via keyboard.

## Simple outline effect

```html
<split/>
<nu-card outline="y">Let me get your attention.</nu-card>
```

## Outline effect on focus

```html
<split/>
<nu-btn outline="focus intrusive">Tap me!</nu-btn>
```

## Outline effect on focus within

```html
<split/>
<nu-card outline="focus-inside intrusive">
  <nu-btn outline="n">Tap me!</nu-btn>
</nu-card>
```

## Outline effect on focus outside

```html
<split/>
<nu-cardbtn outline="n">
  <nu-card outline="focus-outside intrusive">
    Card inside
  </nu-card>
</nu-cardbtn>
```
