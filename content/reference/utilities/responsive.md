The **responsive** property declares style responsive breakpoints in the context of the element. Values must go from greater to less.

## Usage

**Three** breakpoints create **four** zones in which we can declare individual style value:

```html
<preview/>
<nu-root #[[responsive="1200px|900px|600px"]]#>
  <nu-grid columns=#[["repeat(6, 1fr)|repeat(4, 1fr)|1fr 1fr|1fr"]]# gap>
    <nu-card></nu-card>
    <nu-card></nu-card>
    <nu-card></nu-card>
    <nu-card></nu-card>
    <nu-card></nu-card>
    <nu-card></nu-card>
  </nu-grid>
</nu-root>
```

**Zoom in** and **Zoom out** in *Preview Controls* to change the width of the screen and see how the number of columns changes.

You can skip some values. In that case the previous value will be used:
```html
<preview/>
<nu-root responsive="1200px|900px|600px">
  <nu-grid columns=#[["repeat(6, 1fr)|||1fr"]]# gap>
    <nu-card></nu-card>
    <nu-card></nu-card>
    <nu-card></nu-card>
    <nu-card></nu-card>
    <nu-card></nu-card>
    <nu-card></nu-card>
  </nu-grid>
</nu-root>
```
