With **nu-props** use can customize built-in properties and declare your own:

* **gap** `--gap` (default: `.5rem`) – Base indent (padding|gap).
* **border-width** `--border-width` (default: `1px`) – Base border width.
* **outline-width** `--outline-width` (default: `calc(1rem / 16 * 3)`) – Base outline width.
* **radius** `--radius` (default: `.5rem`) – Base border radius.
* **transition** `--transition` (default: `0.08s`) – Base transition time.

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
