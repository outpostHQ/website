---
title: Markdown to Numl converter
menuTitle: Markdown converter
description: How to convert Markdown markup to Numl
---

This whole Storybook is rendered in runtime using this converter.

It's required to use tag `<pre>` or `<textarea>` inside [nu-markdown](../../reference/elements/nu-markdown.md). This prevents the rendering of content by the browser.

## Base syntax

```html
<split/>
<nu-markdown>
  <pre>
    #### Markdown example

    Use **CommonMark** syntax as you are *used to*.

    [Learn CommonMark in 60 seconds](!https://commonmark.org/help/)

    Also, the advanced syntax is allowed like ==marks==.
  </pre>
</nu-markdown>
```

## Image

```html
<split/>
<nu-markdown>
  <pre>
    ![Image](https://via.placeholder.com/500)
  </pre>
</nu-markdown>
```

## Blockquotes

```html
<split/>
<nu-markdown>
  <pre>
    > No preview possible
  </pre>
</nu-markdown>
```

## Lists

```html
<split/>
<nu-markdown>
  <pre>
    * List
    * List
    * List

    1. One
    2. Two
    3. Three
  </pre>
</nu-markdown>
```

## Code snippets

```html
<split/>
<nu-markdown>
  <pre>
    #### Block snippet

    ```javascript
    var a = 'Sample string';
    ```

    #### Inline snippet

    Insert the code `var a = 'Sample string';`.
  </pre>
</nu-markdown>
```


## Tables

```html
<split/>
<nu-markdown>
  <pre>
    |Header |Header |
    |-------|-------|
    |Content|Content|
  </pre>
</nu-markdown>
```

## Footnotes

```html
<split/>
<nu-markdown>
  <pre>
    This requires an explanation ^[And here is the explanation].
  </pre>
</nu-markdown>
```
