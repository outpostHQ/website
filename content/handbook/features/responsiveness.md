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

|Media query|Attribute value|
|----|----|
|`(min-width: 980px)`|`"xl"`|
|`(max-width: 979px) and (min-width: 640px)`|`"md"`|
|`(max-width: 639px)`|`"xs"`|

So just in a few symbols, we created an element with responsive size. WOW! It would require a batch of lines in CSS and would be static while Numl implementation will let you dynamically change responsive points which are **impossible in plain CSS**.

## How to skip attribute values

Sometimes there is no need to define all values for the attribute. And there are some tricks to archive that. Here is a few examples to understand that mechanic. All examples provided for responsive points from the first example.

## Various attribute values

```html
<preview/>
<nu-block overflow="auto" width="max 100%">
<nu-gridtable columns="auto auto auto auto auto auto auto">
  <nu-attrs for="cell" text="monospace nowrap" shadow="0 1bw 0 #border"></nu-attrs>
  <nu-columnheader>Window \ Attribute</nu-columnheader>
  <nu-columnheader><nu-cd>"xl"</nu-cd></nu-columnheader>
  <nu-columnheader><nu-cd>"xl|md"</nu-cd></nu-columnheader>
  <nu-columnheader><nu-cd>"||xs"</nu-cd></nu-columnheader>
  <nu-columnheader><nu-cd>"xl||xs"</nu-cd></nu-columnheader>
  <nu-columnheader><nu-cd>"xl| |sm"</nu-cd></nu-columnheader>
  <nu-columnheader><nu-cd>"xl|md|sm"</nu-cd></nu-columnheader>

  <nu-cell><nu-cd>> 980px</nu-cd></nu-cell>
  <nu-cell><nu-cd>"xl"</nu-cd></nu-cell>
  <nu-cell><nu-cd>"xl"</nu-cd></nu-cell>
  <nu-cell><nu-cd>""</nu-cd></nu-cell>
  <nu-cell><nu-cd>"xl"</nu-cd></nu-cell>
  <nu-cell><nu-cd>"xl"</nu-cd></nu-cell>
  <nu-cell><nu-cd>"xl"</nu-cd></nu-cell>

  <nu-cell><nu-cd>> 979px AND > 640px</nu-cd></nu-cell>
  <nu-cell><nu-cd>"xl"</nu-cd></nu-cell>
  <nu-cell><nu-cd>"md"</nu-cd></nu-cell>
  <nu-cell><nu-cd>""</nu-cd></nu-cell>
  <nu-cell><nu-cd>"xl"</nu-cd></nu-cell>
  <nu-cell><nu-cd>""</nu-cd></nu-cell>
  <nu-cell><nu-cd>"md"</nu-cd></nu-cell>

  <nu-cell><nu-cd>< 639px</nu-cd></nu-cell>
  <nu-cell><nu-cd>"xl"</nu-cd></nu-cell>
  <nu-cell><nu-cd>"md"</nu-cd></nu-cell>
  <nu-cell><nu-cd>"xs"</nu-cd></nu-cell>
  <nu-cell><nu-cd>"xs"</nu-cd></nu-cell>
  <nu-cell><nu-cd>"xs"</nu-cd></nu-cell>
  <nu-cell><nu-cd>"xs"</nu-cd></nu-cell>
</nu-gridtable>
</nu-block>
```

## Tips

If you are developing a website then for the start you can specify only attribute values for desktop or mobile version. Later you can add more responsive points and additional attribute values to make your site responsive. **It's super quick and easy!**
