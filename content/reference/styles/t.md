The **t** utility property sets the inner text content of the element but it works like style property. It means you can make text responsive or bind it to the state.

```html
<split/>
<nu-btn
  toggle width="min 10" special
  t="'No state' :pressed['Pressed']"></nu-btn>
```

Click the button to change its text.

## CSS Reference

* [MDN: Element.innerText](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText)
