The **outline** property sets an outline for the element.

## Syntax

```
y | yes | n | no | [ [ focus | focus-inside | focus-outside ] || inset || intrusive ]
```

## Modifiers

|Modifier|Description|
|----|----|
|yes|Permanent outline|
|no|Hide outline|
|focus|Show outline if the element is in **focus** state|
|focus-inside|Show outline if the element or any element inside is in **focus** state|
|focus-outside|Show outline if any parent of the element is in **focus** state|
|intrusive|Show outline even if user uses mouse|
|inset|Show outline inside element|

All `focus` modifiers works in **polite mode**. It means user see an outline only if he uses keyboard. Use additional `intrusive` modifier to enable the outline in **focus** state.

## Examples

```html
<split/>
<nu-card outline="y">
  Let me get your attention.
</nu-card>
```

```html
<split/>
<nu-flex padding="1bw" gap="1bw" fill="border">
  <nu-attrs for="action" padding fill="bg"></nu-attrs>
  <nu-action outline="focus inset intrusive">
    Inside outline
  </nu-action>
  <nu-action outline="focus intrusive">
    Outside outline
  </nu-action>
</nu-flex>
```

## See also

* [Decorations - Oultine & Focus](../../storybook/decorations/outline-and-focus.md)

## CSS Reference

* [MDN: box-shadow](!https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)
* [MDN: pseudo-elements](!https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)
