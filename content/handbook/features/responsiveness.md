---
title: Responsive system
description: "To make your site responsive with Numl is very simple. Any element has [responsive](../../reference/attributes/responsive.md) attribute that can be used to declare responsive points in its context. Every responsive point split a set of screen width values into two zones. So `N` responsive points will split that set into `N + 1` zones. Let's take a look at the example where we declare three values of the attribute for each responsive zone:"
---

```html
<nu-block responsive="980px|640px">
  <nu-badge size="xl|md|sm"></nu-badge>
</nu-block>
```

So here we have three responsive zones and three corresponding value for the attribute:

```preview
<nu-gridtable columns="auto auto" border radius>
  <nu-columnheader>Media query</nu-columnheader>
  <nu-columnheader>Attribute value</nu-columnheader>

  <nu-cell>(min-width: 980px)</nu-cell>
  <nu-cell>"md"</nu-cell>

  <nu-cell>(max-width: 979px) and (min-width: 640px)</nu-cell>
  <nu-cell>md</nu-cell>

  <nu-cell>(max-width: 639px)</nu-cell>
  <nu-cell>xs</nu-cell>
</nu-gridtable>
```

So just in few symbols we created element with responsive size. WOW! It would require a batch of lines in CSS and would be static while Numl implementation let you dynamically change responsive points which is **impossible in plain CSS**.

### How to skip attribute values

Sometimes there is no need to define all values for the attribute. And there are some tricks to archive that. Here is few example to understand that mechanic. All examples provided for responsive points from the first example.

#### Various attribute values

```preview
<nu-gridtable columns="auto auto auto auto auto auto auto" border radius>
  <nu-attrs for="nu-cell" text="monospace"></nu-attrs>

  <nu-columnheader>Window \ Attribute</nu-columnheader>
  <nu-columnheader>"xl"</nu-columnheader>
  <nu-columnheader>"xl|md"</nu-columnheader>
  <nu-columnheader>"||xs"</nu-columnheader>
  <nu-columnheader>"xl||xs"</nu-columnheader>
  <nu-columnheader>"xl| |sm"</nu-columnheader>
  <nu-columnheader>"xl|md|sm"</nu-columnheader>

  <nu-cell>> 980px</nu-cell>
  <nu-cell>"xl"</nu-cell>
  <nu-cell>"xl"</nu-cell>
  <nu-cell>""</nu-cell>
  <nu-cell>"xl"</nu-cell>
  <nu-cell>"xl"</nu-cell>
  <nu-cell>"xl"</nu-cell>

  <nu-cell>> 979px AND > 640px</nu-cell>
  <nu-cell>"xl"</nu-cell>
  <nu-cell>"md"</nu-cell>
  <nu-cell>""</nu-cell>
  <nu-cell>"xl"</nu-cell>
  <nu-cell>""</nu-cell>
  <nu-cell>"md"</nu-cell>

  <nu-cell>< 639px</nu-cell>
  <nu-cell>"xl"</nu-cell>
  <nu-cell>"md"</nu-cell>
  <nu-cell>"xs"</nu-cell>
  <nu-cell>"xs"</nu-cell>
  <nu-cell>"xs"</nu-cell>
  <nu-cell>"xs"</nu-cell>
</nu-gridtable>
```

## Tips

If you are developing a website then for the start you can specify only attribute values for desktop or mobile version. Later you can add more responsive points and additional attribute values to make your site responsive. **It's super quick and easy!**
