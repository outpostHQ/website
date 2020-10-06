Use **trigger** property to change behavior of *Control System*. If the widget has this property then whenever its value is changed (or set) it will trigger control action.

## Usage

Control without trigger:

```html
<split/>
<nu-pane>
  <nu-btn toggle control="#icon[name=sun|moon]">
    Toggle icon
  </nu-btn>

  <nu-icon id="icon" name="sun"></nu-icon>
</nu-pane>
```

The user action (click on the button) is required to activate control action.

Control with trigger:

```html
<split/>
<nu-pane>
  <nu-btn
    toggle control="#icon[name=sun|moon]"
    #[[trigger]]#>
    Toggle icon
  </nu-btn>

  <nu-icon id="icon" name="sun"></nu-icon>
</nu-pane>
```

Trigger behavior forces the button to initially control the icon's name without user action.
