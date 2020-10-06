Every active element can be a link.

## Simple links

Link without navigation, just styling.

```html
<split/>
<nu-link>Simple link</nu-link>
```

## Current tab behavior

Use `to` attribute to specify **href**.

```html
<split/>
<nu-link
  to="https://github.com/tenphi/numl">
  Visit our repository
</nu-link>
```

## New tab behavior

Use `!` prefix for `to` attribute.

```html
<split/>
<nu-link
  to="!https://github.com/tenphi/numl">
  Visit our repository
</nu-link>
```

## Email link

```html
<split/>
<nu-link to="mailto:tenphi@gmail.com?subject=NUDE%20Elements%20feedback">Email us</nu-link>
```

## Accessibility

**Numl** creates real link inside element so right mouse click works as expected. Use [prerender](https://github.com/prerender/prerender) (or alternatives) to make sure your site will be parsed correctly by Search Bots.
