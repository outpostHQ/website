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

## Converters

There are two converters in Numl by default: for code snippets and markdown. To use them in plain HTML we need to inject input via `<textarea/>` element but with Svelte we can do it simply via `value` property:

```
<nu-code value={codeExample}/>
<nu-markdown value={markupExample}/>
```

Before rendering such template make sure that Numl is initialized. Othwerwise, Svelte will bind variable to the attribute `value`, not property. It might cause you some trouble. Use [requireNuml](!https://gist.github.com/tenphi/87a76d29bb534e74dbf4c7359670219b) helper to avoid such scenario.

```
// example.svelte
<nu-root>
  {#if loaded}
    <nu-code value={codeExample}/>
  {/if}
</nu-root>

<script>
import { onMount } from 'svelte';
import { requireNuml } from 'require-numl.js';

let loaded = false;

onMount(() => {
  requireNuml().then(() => {
    loaded = true;
  });
});

const codeExample = `var a = '123';`;
</script>
```

## Real-world examples

### Repositories

* [Numl Playground](!https://github.com/numldesign/numl/blob/master/components/playground.svelte).
