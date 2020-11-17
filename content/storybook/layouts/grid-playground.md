---
title: Grid playground
description: Interactive example of a grid layout implemented with Numl
---

```html
<split/>
<nu-flow gap>
  <nu-heading>GRID Playground</nu-heading>
  <nu-attrs for="value" color="special"></nu-attrs>

  <nu-block text="nowrap">Place content:</nu-block>
  <nu-pane>
    <nu-btn toggle value="stretch" control="grid[@align-content]" trigger>
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
        <nu-option value="start">Start</nu-option>
        <nu-option value="end">End</nu-option>
      </nu-popuplistbox>
    </nu-btn>
    <nu-btn toggle value="stretch" control="grid[@justify-content]" trigger>
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
        <nu-option value="start">Start</nu-option>
        <nu-option value="end">End</nu-option>
      </nu-popuplistbox>
    </nu-btn>
  </nu-pane>

  <nu-block text="nowrap">Place items:</nu-block>
  <nu-pane>
    <nu-btn toggle value="stretch" control="grid[@align-items]" trigger>
      <nu-pane>
        <nu-strong>Align:</nu-strong>
        <nu-value list></nu-value>
      </nu-pane>
      <nu-popuplistbox text="nowrap">
        <nu-option value="stretch">Stretch</nu-option>
        <nu-option value="center">Center</nu-option>
        <nu-option value="start">Start</nu-option>
        <nu-option value="end">End</nu-option>
      </nu-popuplistbox>
    </nu-btn>
    <nu-btn toggle value="stretch" control="grid[@justify-items]" trigger>
      <nu-pane>
        <nu-strong>Justify:</nu-strong>
        <nu-value list></nu-value>
      </nu-pane>
      <nu-popuplistbox text="nowrap">
        <nu-option value="stretch">Stretch</nu-option>
        <nu-option value="center">Center</nu-option>
        <nu-option value="start">Start</nu-option>
        <nu-option value="end">End</nu-option>
      </nu-popuplistbox>
    </nu-btn>
  </nu-pane>

  <nu-pane>
    <nu-el text="nowrap">Columns:</nu-el>
    <nu-btngroup value="auto auto auto" width="min-content" control="grid[columns]" trigger>
      <nu-btn value="auto auto auto auto">4</nu-btn>
      <nu-btn value="auto auto auto">3</nu-btn>
      <nu-btn value="auto auto">2</nu-btn>
    </nu-btngroup>
  </nu-pane>

  <nu-props align-content="stretch"></nu-props>
  <nu-props justify-content="stretch"></nu-props>
  <nu-props align-items="stretch"></nu-props>
  <nu-props justify-items="stretch"></nu-props>

  <nu-grid id="grid" columns="auto auto auto" gap="2x" height="40x"
           content="@align-content @justify-content"
           items="@align-items @justify-items" padding="2x" radius="3x" border fill="border">
    <nu-attrs for="card" border="color(special)"></nu-attrs>

    <nu-card></nu-card>
    <nu-card></nu-card>
    <nu-card></nu-card>
    <nu-card></nu-card>

    <nu-card></nu-card>
    <nu-card></nu-card>
    <nu-card></nu-card>
    <nu-card></nu-card>

    <nu-card></nu-card>
    <nu-card></nu-card>
    <nu-card></nu-card>
    <nu-card></nu-card>
  </nu-grid>
</nu-flow>
```
