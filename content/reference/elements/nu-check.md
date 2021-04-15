---
title: nu-check
type: element
description: A validation element. It's used in form to provide validation for various inputs.
---

## Usage

```html
<split/>
<nu-form>
  <nu-field>
    <nu-label>Username</nu-label>
    <nu-input id="username"></nu-input>
    <nu-check for="username" assert="required">This field is required</nu-check>
    <nu-check for="username" assert="minlength:3">Username should contain at least 3 characters</nu-check>
  </nu-field>
</nu-form>
```

## Built-in validators

There are a few built-in validators:

- required
- minlength
- maxlength
- email

## Custom validators

You can assign a custom validation function to the `assert` property of the element.

```javascript
const checkEl = document.querySelector('#custom-check');

checkEl.assert = (val) => val && val.length > 3 && val.length < 8;
```

A validation function can be asynchronous.