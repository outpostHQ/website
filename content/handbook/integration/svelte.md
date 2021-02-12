---
title: Integration with Svelte
description: Svelte requires no additional steps to use **Numl**. It works pretty well with Web Components.
menuIndex: 40
---

## Attribute binding

Bind `string` attribute:

```html
<nu-btn padding={padding}></nu-btn>
```

Bind `boolean` attribute:

Since v1.0.0-beta.19:

```html
<nu-btn special={isSpecial}></nu-btn>
<nu-btn disabled={isDisabled}></nu-btn>
```

Before v1.0.0-beta.19:

```html
<nu-btn special={isSpecial || null}></nu-btn>
<nu-btn disabled={isDisabled || null}></nu-btn>
```

## Bind event handlers

Bind event handlers as you do it with other Svelte Components.

**tap** event binding:

```html
<nu-btn
  on:tap={onTap}>
  Button
</nu-btn>
```

**input** event binding:

```html
<nu-switch on:input={(event) => onInput(event.detail)}></nu-switch>

<nu-input on:input={(event) => onInput(event.detail)}></nu-input>
```

## Real-world examples

### Repositories

* [Numl Playground](!https://github.com/numldesign/numl/blob/master/components/playground.svelte).
