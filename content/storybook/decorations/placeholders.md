Use [nu-ph](../../reference/elements/nu-ph.md) element to create placeholders.

## Simple card

```html
<split/>
<nu-card fill="#special-bg.04" clear>
  <nu-grid columns="auto 1fr" gap="2x">
    <nu-ph size="5x" is-circle></nu-ph>
    <nu-flow gap="3x" padding="top 1.5x">
      <nu-ph width="15x"></nu-ph>
      <nu-flow gap="2x">
        <nu-ph></nu-ph>
        <nu-ph></nu-ph>
        <nu-ph></nu-ph>
        <nu-ph></nu-ph>
      </nu-flow>
    </nu-flow>
  </nu-grid>
</nu-card>
```

## Content page

```html
<split/>
<nu-ph size="h4" opacity=".24" width="20x"></nu-ph>
<nu-spacer size="3x"></nu-spacer>
<nu-flow gap="2x">
  <nu-ph></nu-ph>
  <nu-ph></nu-ph>
  <nu-ph></nu-ph>
</nu-flow>
```

## Chart

```html
<split/>
<nu-grid content="end stretch" items="end stretch" columns="repeat(8, 4x)" gap>
  <nu-ph height="4x"></nu-ph>
  <nu-ph height="6x"></nu-ph>
  <nu-ph height="10x"></nu-ph>
  <nu-ph height="8x"></nu-ph>
  <nu-ph height="14x"></nu-ph>
  <nu-ph height="16x"></nu-ph>
  <nu-ph height="10x"></nu-ph>
  <nu-ph height="2x"></nu-ph>
</nu-grid>
```
