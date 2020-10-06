---
title: Code snippets
description: How to create and style code snippets using Numl
---

All code snippets in this Storybook are rendered in runtime using this converter.

It's required to use `<pre>` or `<textarea>` tag inside [nu-markdown](../../reference/elements/nu-markdown.md). This prevents the rendering of content by the browser.

## Block code snippets

By default, there is no decoration styles for code blocks.

```html
<split/>
<nu-code padding="1x 2x">
  <pre>
    var str = 'Code snippet';

    render(str);
  </pre>
</nu-code>
```

## Inline code snippets

```html
<split/>
Inline <nu-cd><pre>var str = 'Code snippet';</pre></nu-cd> works!
```

## Highlight some parts

Use `#[[` and `]]#` special sequences to mark parts of your code you want to highlight.

```html
<nu-code>
  <pre>
    var str1 = 'Code snippet';

    #[[var str2 = 'Attention here';]]#

    render(str1, #[[str2]]#);
  </pre>
</nu-code>
```

Use `![[` and `]]!` sequences for the most important parts.

```html
<nu-code>
  <pre>
    var str1 = 'Code snippet';

    #[[var str2 = 'Attention here';]]#

    render(str1, ![[str2]]!);
  </pre>
</nu-code>
```

## Dark mode

Add **special** modifier for the classic dark mode.

```html
<split/>
<nu-code special padding="1x 2x">
  <pre>
    var str = 'Code snippet';
    var num = 123;
    var rex = /\.(js|jsx)$/g;

    render(str);
  </pre>
</nu-code>
```
