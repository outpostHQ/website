---
title: Borders
description: Examples of how to add borders to Numl elements
---

## Physical border

Border with default width.

```html
<split/>
<nu-attrs for="nu-block" height="3" width="3" fill="diff"></nu-attrs>

<nu-flex gap>
  <nu-block border></nu-block>
  <nu-block border="top"></nu-block>
  <nu-block border="right"></nu-block>
  <nu-block border="bottom"></nu-block>
  <nu-block border="left"></nu-block>
</nu-flex>
```

Border with double default width.

```html
<split/>
<nu-attrs for="nu-block" height="3" width="3" fill="diff"></nu-attrs>

<nu-flex gap>
  <nu-block border="2bw"></nu-block>
  <nu-block border="2bw top"></nu-block>
  <nu-block border="2bw right"></nu-block>
  <nu-block border="2bw bottom"></nu-block>
  <nu-block border="2bw left"></nu-block>
</nu-flex>
```

Border with different color.

```html
<split/>
<nu-attrs for="nu-block" height="3" width="3" fill="diff"></nu-attrs>

<nu-flex gap>
  <nu-block border="2bw #special"></nu-block>
  <nu-block border="2bw top #special"></nu-block>
  <nu-block border="2bw right #special"></nu-block>
  <nu-block border="2bw bottom #special"></nu-block>
  <nu-block border="2bw left #special"></nu-block>
</nu-flex>
```

Border on several sides.

```html
<split/>
<nu-attrs for="nu-block" height="3" width="3" fill="diff"></nu-attrs>

<nu-flex gap>
  <nu-block border="2bw top right #special"></nu-block>
</nu-flex>
```

## Border radius

Border with default radius.

```html
<split/>
<nu-attrs for="nu-block" height="3" width="3" fill="diff"></nu-attrs>

<nu-flex gap>
  <nu-block radius="1r" border="2bw #special"></nu-block>
  <nu-block radius="1r" border="2bw top #special"></nu-block>
  <nu-block radius="1r" border="2bw right #special"></nu-block>
  <nu-block radius="1r" border="2bw bottom #special"></nu-block>
  <nu-block radius="1r" border="2bw left #special"></nu-block>
</nu-flex>
```

Border with custom radius.

```html
<split/>
<nu-attrs for="nu-block" height="3" width="3" fill="diff"></nu-attrs>

<nu-flex gap>
  <nu-block radius=".5r" border="2bw #special"></nu-block>
  <nu-block radius=".5r" border="2bw top #special"></nu-block>
  <nu-block radius=".5r" border="2bw right #special"></nu-block>
  <nu-block radius=".5r" border="2bw bottom #special"></nu-block>
  <nu-block radius=".5r" border="2bw left #special"></nu-block>
</nu-flex>
```

Round blocks.

```html
<split/>
<nu-flow gap>
  <nu-flex gap>
    <nu-attrs for="nu-block" height="3" width="3" fill="diff"></nu-attrs>

    <nu-block radius="round" border="1x #special"></nu-block>
    <nu-block radius="round" border="1x top #special"></nu-block>
    <nu-block radius="round" border="1x right #special"></nu-block>
    <nu-block radius="round" border="1x bottom #special"></nu-block>
    <nu-block radius="round" border="1x left #special"></nu-block>
  </nu-flex>

  <nu-flex gap>
    <nu-attrs for="nu-block" height="5" width="3" fill="diff"></nu-attrs>
    <nu-block radius="round" border="1x #special"></nu-block>
    <nu-block radius="round" border="1x top #special"></nu-block>
    <nu-block radius="round" border="1x right #special"></nu-block>
    <nu-block radius="round" border="1x bottom #special"></nu-block>
    <nu-block radius="round" border="1x left #special"></nu-block>
  </nu-flex>
</nu-flow>
```

Ellipse blocks.

```html
<split/>
<nu-attrs for="nu-block" height="5" width="3" fill="diff"></nu-attrs>

<nu-flex gap>
  <nu-block radius="ellipse" border="1x #special"></nu-block>
  <nu-block radius="ellipse" border="1x top #special"></nu-block>
  <nu-block radius="ellipse" border="1x right #special"></nu-block>
  <nu-block radius="ellipse" border="1x bottom #special"></nu-block>
  <nu-block radius="ellipse" border="1x left #special"></nu-block>
</nu-flex>
```

## Visual border

### Inside

Border inside the block. It is drawn inward and is not taken into account when calculating the block size. It becomes invisible while using non-transparent **fill** style.

```html
<split/>
<nu-attrs for="nu-block" height="3" width="3" fill="diff"></nu-attrs>

<nu-flex gap>
  <nu-block border="1x inside"></nu-block>
  <nu-block border="1x inside top"></nu-block>
  <nu-block border="1x inside right"></nu-block>
  <nu-block border="1x inside bottom"></nu-block>
  <nu-block border="1x inside left"></nu-block>
</nu-flex>
```

### Outside

Border outside the block. It is drawn outside and is not taken into account when calculating the block size. It becomes invisible while using non-transparent **fill** style.

```html
<split/>
<nu-attrs for="nu-block" height="3" width="3" fill="diff"></nu-attrs>

<nu-flex gap="2x">
  <nu-block border="1x outside"></nu-block>
  <nu-block border="1x outside top"></nu-block>
  <nu-block border="1x outside right"></nu-block>
  <nu-block border="1x outside bottom"></nu-block>
  <nu-block border="1x outside left"></nu-block>
</nu-flex>
```

### Center

Border is drawn on the edge of the block and is not taken into account when calculating the block size. It becomes invisible while using non-transparent **fill** style.

```html
<split/>
<nu-attrs for="nu-block" height="3" width="3" fill="diff"></nu-attrs>

<nu-flex gap="2x">
  <nu-block border="1x center"></nu-block>
  <nu-block border="1x center top"></nu-block>
  <nu-block border="1x center right"></nu-block>
  <nu-block border="1x center bottom"></nu-block>
  <nu-block border="1x center left"></nu-block>
</nu-flex>
```
