The **id** property sets the identifier for the element.

You can use non-unique identifiers for elements. NUML will guarantee internally that the finite HTML-identifier will be unique.

You can refer to the elements using initial ID value. It will be stored in `nu-id` attribute.

## Usage

```html
<split/>
<nu-flow gap>
  <nu-card #[[id="mycard"]]#>Card with id "mycard"</nu-card>
  <nu-card #[[id="mycard"]]#>Card with id "mycard--2"</nu-card>
</nu-flow>
```
