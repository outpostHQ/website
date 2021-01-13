Use this style to specify border radius.

## Syntax

```
<length>{1,4} || [ round | ellipse ] || [ leaf | backleaf ] || [ top | bottom | left | right ]
```

## Usage

```html
<split/>
<nu-flow gap="2x">
  <nu-card radius="4x">
  Card with 4x "default gap" radius.
	</nu-card>
  <nu-card radius="top 1">
    Card with top radius.
  </nu-card>
  <nu-card radius="bottom 1">
    Card with bottom radius.
  </nu-card>
  <nu-card radius="left 1">
    Card with left radius.
  </nu-card>
  <nu-card radius="right 1">
    Card with right radius.
  </nu-card>
</nu-flow>
```

## Introducing Leaf and Backleaf

```html
<split/>
<nu-flow gap="2x">
  <nu-card radius="leaf">
    Card with default Leaf radius.
  </nu-card>
  <nu-card radius="backleaf">
    Card with default Backleaf radius.
  </nu-card>
  <nu-btn special radius="leaf">
    Leaf Button
  </nu-btn>
  <nu-btn special radius="backleaf">
    BackLeaf Button
  </nu-btn>
</nu-flow>
```

## Modifiers

|Modifier|Description|
|----|----|
|`"round"`|Make radius as big as possible and keep them equal|
|`"ellipse"`|Make the biggest border radius possible on each corner|

## Usage

* [Decorations - Borders](../../storybook/decorations/borders.md).

## CSS References

* [MDN: border-radius](!https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius)
