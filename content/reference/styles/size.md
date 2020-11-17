Use this style to specify font-size and line-height. Many elements use this styles to calculate their size.

## Syntax

```
[ <length> | <preset> ]{1,2}
```

You can use preset names, values or mix.

If you use preset names (for example: `xs`) then you will get the following CSS:

```css
font-size: var(--xs-font-size);
line-height: var(--xs-line-height);
```

So you can define your own preset with [nu-props](../decorators/nu-props.md) definition or plain CSS. For example:

```html
<split/>
<nu-props
  my-font-size="3rem"
  my-line-height="4rem"></nu-props>
<nu-block size="my">
  Paragraph
</nu-block>
```

## Presets

*All units are in rem.*

|Preset|Font-size|Line-height|
|-----|-----|-----|
|==xxs==  |.66  |1    |
|==xs==   |.75  |1    |
|==sm==   |.875 |1.5  |
|==md==   |1    |1.5  |
|==lg==   |1.25 |2    |
|==xl==   |1.5  |2    |
|==xl==   |2    |2.5  |
|==h1==   |2    |2.5  |
|==h2==   |1.8  |2.5  |
|==h3==   |1.6  |2    |
|==h4==   |1.4  |2    |
|==h5==   |1.2  |1.5  |
|==h6==   |1    |1.5  |

## Usage

* [Typography - Text size](../../storybook/typography/text-size.md)

## CSS References

* [MDN: font-size](!https://developer.mozilla.org/en-US/docs/Web/CSS/font-size)
* [MDN: line-height](!https://developer.mozilla.org/en-US/docs/Web/CSS/line-height)
