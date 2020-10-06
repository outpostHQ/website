See [size](../../reference/elements/) style details page to learn more about default sizes and syntax.

## Default base sizes

```html
<split/>
<nu-block size="xxs">XX small</nu-block>
<nu-block size="xs">extra small</nu-block>
<nu-block size="sm">small</nu-block>
<nu-block size="md">medium</nu-block>
<nu-block size="lg">large</nu-block>
<nu-block size="xl">extra large</nu-block>
<nu-block size="xxl">XX large</nu-block>
```

## Default heading sizes

```html
<split/>
<nu-block size="h1">Heading level 1</nu-block>
<nu-block size="h2">Heading level 2</nu-block>
<nu-block size="h3">Heading level 3</nu-block>
<nu-block size="h4">Heading level 4</nu-block>
<nu-block size="h5">Heading level 5</nu-block>
<nu-block size="h6">Heading level 6</nu-block>
<nu-block size="hero">Hero</nu-block>
```

## Custom sizes

```html
<split/>
<nu-el size="1.4 1.8">font-size: 1.4rem; line-height: 1.8rem;</nu-el>
```

```html
<split/>
<nu-el size="lg md">Large font-size with medium line-height</nu-el>
```

## Define a size

Define a `"my"` size preset.

```html
<split/>
<nu-props
  my-font-size="1.4rem"
  my-line-height="1.8rem"></nu-props>
<nu-el size="my">font-size: 1.4rem; line-height: 1.8rem;</nu-el>
```
