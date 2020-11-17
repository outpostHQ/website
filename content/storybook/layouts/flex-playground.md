---
title: Flex playground
description: Example of flex layout usage in Numl
---

```html
<split/>
<nu-flow gap>
  <nu-heading>FLEX Playground</nu-heading>
  <nu-attrs for="value" color="special"></nu-attrs>

  <nu-block>Place content:</nu-block>
  <nu-pane>
    <nu-btn toggle value="stretch" control="flex[@align-content]" trigger>
      <nu-pane>
        <nu-strong>Align:</nu-strong>
        <nu-value list></nu-value>
      </nu-pane>
      <nu-popuplistbox text="nowrap">
        <nu-option value="stretch">Stretch</nu-option>
        <nu-option value="space-between">Space between</nu-option>
        <nu-option value="space-around">Space around</nu-option>
        <nu-option value="space-evenly">Space evenly</nu-option>
        <nu-option value="center">Center</nu-option>
        <nu-option value="flex-start">Flex start</nu-option>
        <nu-option value="flex-end">Flex end</nu-option>
      </nu-popuplistbox>
    </nu-btn>
    <nu-btn
			id="justify-content"
			toggle value="stretch" control="flex[@justify-content]" trigger>
      <nu-pane>
        <nu-strong>Justify:</nu-strong>
        <nu-value list></nu-value>
      </nu-pane>
      <nu-popuplistbox text="nowrap">
        <nu-option value="stretch">Stretch</nu-option>
        <nu-option value="space-between">Space between</nu-option>
        <nu-option value="space-around">Space around</nu-option>
        <nu-option value="space-evenly">Space evenly</nu-option>
        <nu-option value="center">Center</nu-option>
        <nu-option value="flex-start">Flex start</nu-option>
        <nu-option value="flex-end">Flex end</nu-option>
      </nu-popuplistbox>
    </nu-btn>
  </nu-pane>

  <nu-block>Place items:</nu-block>
  <nu-pane>
    <nu-btn toggle value="stretch" control="flex[@align-items]" trigger>
      <nu-pane>
        <nu-strong>Align:</nu-strong>
        <nu-value list></nu-value>
      </nu-pane>
      <nu-popuplistbox text="nowrap">
        <nu-option value="stretch">Stretch</nu-option>
        <nu-option value="center">Center</nu-option>
        <nu-option value="flex-start">Flex start</nu-option>
        <nu-option value="flex-end">Flex end</nu-option>
      </nu-popuplistbox>
    </nu-btn>
  </nu-pane>

  <nu-pane>
    <nu-block>Grow items:</nu-block>
    <nu-switch
			value="1" off-value="0" trigger
			control="flex-attrs[grow] justify-content[disabled]"></nu-btngroup>
  </nu-pane>

  <nu-props align-content="stretch"></nu-props>
  <nu-props justify-content="stretch"></nu-props>
  <nu-props align-items="stretch"></nu-props>

  <nu-card
    padding="2x" radius="3x" border fill="border">
    <nu-flex
            id="flex" gap="2x" height="30" flow="row wrap"
      content="@align-content @justify-content"
      items="@align-items">
      <nu-attrs id="flex-attrs" for="card" height="min 3" border="color(special)"></nu-attrs>

      <nu-card width="min 2"></nu-card>
      <nu-card width="min 4"></nu-card>
      <nu-card width="min 5"></nu-card>
      <nu-card width="min 3"></nu-card>

      <nu-card width="min 7"></nu-card>
      <nu-card width="min 4"></nu-card>
      <nu-card width="min 6"></nu-card>
      <nu-card width="min 2"></nu-card>

      <nu-card width="min 8"></nu-card>
      <nu-card width="min 10"></nu-card>
      <nu-card width="min 3"></nu-card>
      <nu-card width="min 5"></nu-card>
      </nu-flex>
  </nu-card>
</nu-flow>
```
