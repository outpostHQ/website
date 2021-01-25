Use this style to specify border radius.

## Syntax

```
<length>{1,4} || [ round | ellipse ] || [ leaf | backleaf ] || [ top | bottom | left | right ]
```

## Usage

```html
<split/>
<nu-flow gap="2x">
  <nu-card radius="4x" border="#special">
  Card with 4x "default gap" radius.
	</nu-card>
  <nu-card radius="top 1" border="#special">
    Card with top radius.
  </nu-card>
  <nu-card radius="bottom 1" border="#special">
    Card with bottom radius.
  </nu-card>
  <nu-card radius="left 1" border="#special">
    Card with left radius.
  </nu-card>
  <nu-card radius="right 1" border="#special">
    Card with right radius.
  </nu-card>
</nu-flow>
```

## Introducing Leaf and Backleaf

```html
<split/>
<nu-flow gap="2x">
  <nu-card radius="2r leaf" border="#special">
    Card with default Leaf radius.
  </nu-card>
  <nu-card radius="2r backleaf" border="#special">
    Card with default Backleaf radius.
  </nu-card>
  <nu-btn special radius="leaf" border="#special">
    Leaf Button
  </nu-btn>
  <nu-btn special radius="backleaf" border="#special">
    BackLeaf Button
  </nu-btn>
</nu-flow>
```

## Modifiers

|Modifier|Description|
|----|----|
|`"round"`|Make radius as big as possible and keep them equal|
|`"ellipse"`|Make the biggest border radius possible on each corner|
|`"leaf"`|Make leaf-shaped border radius|
|`"backleaf"`|Make inverted leaf-shaped border radius|
|`"top"`, `"right"`, `"bottom"`, `"left"`|Make border radius only on the specified side of the block|

## Usage

* [Decorations - Borders](../../storybook/decorations/borders.md).

## CSS References

* [MDN: border-radius](!https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius)
