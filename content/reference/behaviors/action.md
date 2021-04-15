---
title: action
type: behavior
description: A universal action behavior. It can be used to create links, buttons, toggle buttons, checkboxes, radio buttons, tabs and more.
---

## Properties

|Name|Description|
|----|----|
|`pressed` (alias: `checked`, `selected`)|If specified then it means toggle state is `true` (checked)|
|`value`|Changes payload of `input` event or sets an id inside a group|

## Events

|Name|Description|
|----|----|
|`input`|Triggered if widget is changed. Payload contains the current value of the widget.|
