With **nu-props** use can customize built-in properties and declare your own:

* **gap** `--nu-gap` (default: `.5rem`) – Base indent (padding|gap).
* **border-width** `--nu-border-width` (default: `1px`) – Base border width.
* **radius** `--nu-radius` (default: `.5rem`) – Base border radius.
* **transition** `--nu-transition` (default: `0.08s`) – Base transition time.

Example of declaration:

```html
<nu-props
  gap=".5"
  radius=".5"
  border-width="1px"
  transition="0.08s"
  your-custom-property="(100vw - 2rem)"></nu-props>
```

Custom properties will be declared in parent element context.

You can also use state and responsive operators to declare dynamic property:

```html
<nu-props
  radius="1|.5"
  transition="0.08s :hover[0.2s]"></nu-props>
```
