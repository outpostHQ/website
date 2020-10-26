---
title: nu-fileinput
type: element
description: Form widget to upload files.
---

```html
<split/>
<nu-form type="formdata">
  <nu-field>
    <nu-label>Attachment:</nu-label>
    <nu-fileinput></nu-fileinput>
  </nu-field>
  <nu-btn action="submit" special>Submit</nu-btn>
</nu-form>
```

Use the `multiple` attribute to allow multiple file uploads.

```html
<split/>
<nu-form type="formdata">
  <nu-field>
    <nu-label>Attachment:</nu-label>
    <nu-fileinput multiple></nu-fileinput>
  </nu-field>
  <nu-btn action="submit" special>Submit</nu-btn>
</nu-form>
```
