---
title: Base syntax
description: An in-depth look at the syntax of the language
---

**Numl** is based on the so-called **Atomic approach**. But instead of atomic classes (like in popular framework **Tailwind**) it uses attributes and allows ==any value== you provide. You can even use custom units like ==x== (default gap) for short.

## Formulate a task

Let's create a simple button from scratch. Of course, we can just use predefined element ==nu-btn==, but in **Numl** almost everything can be created using a single tag: [nu-el](../../reference/elements/nu-el.md). It's the base element that the other elements are inherited from, but with different defaults. So it's a good start to learn the basics:

```html
<split/>
<nu-el>Button</nu-el>
```

We see just text, 'cause by default, the element doesn't have any styling. It's time to add some.

## Add base styles

A simple button should have a border, rounded corners, and sufficient padding inside to make sure it's easy to be clicked.

```html
<split/>
<nu-el
  radius
  border
  padding>
  Button
</nu-el>
```

We added some required attributes without values. It means a default value should be used for each attribute.

Here are these defaults:

* ==border== – Border with ==1bw== (One default **b**order **w**idth `1px`) width and default color ==#border==.
* ==radius== – ==1r== (One default **r**adius `.5rem`).
* ==padding== – ==1x== (One default gap `.5rem`).

Values from the right are ==Custom Units==. It's built-in units that are used in **Numl**. We will learn about them later.

## Customize styles

It seems that our button is not enough internal space. We can add it by increasing a horizontal padding.

Also, it would be nice to have a ==pointer== cursor on the button:

```html
<split/>
<nu-el
  radius
  border
  padding#[[="1x 2x"]]#
  #[[cursor="pointer"]]#>
  Button
</nu-el>
```

Well, now it looks great, but it isn't interactive. :(

## Make it active

To be able to click on it we must inject ==active== behavior. To do so, we add an attribute whose name consists of the name of the behavior and the suffix `use-`. It's not what you will do often using **Numl**, but it's a great demonstration of the **Behavior System**.

```html
<split/>
<nu-el
  radius
  border
  padding="1x 2x"
  cursor="pointer"
  #[[use-active]]#>
  Button
</nu-el>
```

If you tried to click on the button you saw that there is no visual feedback. That's because **active** behavior just adds a new state to the button, and we didn't style it yet.

## Add styles for states

For example, we can use attribute `inset` (that creates inner shadow and is suitable for styling the **active** state) and bind it to the state:

```html
<split/>
<nu-el
  radius
  border
  padding="1x 2x"
  cursor="pointer"
  use-active
  #[[inset="n :active[y]"]]#>
  Button
</nu-el>
```

Great! Now we can actually press the button! Try to click on the button to see the effect.

We used a definition `inset="n :active[y]"` that means:

* if element **isn't** in **active** state then `"n"` value is used.
* Otherwise, if element **is** in **active** state then `"y"` value is used.

For the attribute `inset`: `"y"` and `"n"` are shorthands that indicate whether or not to apply the inset effect.

Also, we forgot to add **hover** state and styles for it. Let's inject ==hover== behavior that controls **hover** state. To visualize it we will use the `mark` attribute which highlights the element.

```html
<split/>
<nu-el
  radius
  border
  padding="1x 2x"
  cursor="pointer"
  use-active
  use-hover
  inset="n :active[y]"
  #[[mark="hover"]]#>
  Button
</nu-el>
```

Now we can hover over the button to see a background change.

We used `mark` without explicit state binding. That's because `mark="hover"` is a shorthand for `mark="n :hover[y]"`. To learn more about available shorthands you have to read a documentation page of the attribute you use.

## Make it focusable

We made an interactive button, but still missing something very important: our button can't be focused. It prevents the element from being selected or activated via the keyboard.

Let's fix it by injecting a behavior called **focusable**. Also, we can add the `outline` attribute to style the **focus** state:

```html
<split/>
<nu-el
  radius
  border
  padding="1x 2x"
  cursor="pointer"
  use-active
  use-hover
  #[[use-focus]]#
  #[[outline="focus"]]#
  inset="n :active[y]"
  mark="hover">
  Button
</nu-el>
```

Well done! Now we can select our button using the keyboard! Try to click on the button and then press ==␣ Space== to click the button again with the keyboard.

We use the `outline` attribute with similar shorthand as we used the `mark` attribute before. So **outline** style will be applied only if the element is in ==focus== state.

By default, using an `outline="focus"` style means we need _polite focus_ for an outline. The **focus** effect will be visible while **using the keyboard only**.

## Add some motion

Our button looks great, but if any state applies then styles change instantly. It would be nice to animate `inset` and `mark` styles, isn't it?

```html
<split/>
<nu-el
  radius
  border
  padding="1x 2x"
  cursor="pointer"
  use-active
  use-hover
  use-focus
  outline="focus"
  inset="n :active[y]"
  mark="hover"
  #[[transition="inset, mark"]]#>
  Button
</nu-el>
```

By default, the style transition takes **80 milliseconds**. We will learn how to change this option later.

_**If you still don't see the transition** it means it's disabled globally on your machine. Click the **Settings** button in the right bottom corner of the screen and set option **Reduce Motion** to **On**._

## Make it accessible

Great job! We have a great button now but there is still room for improvement. The modern web requires a little more work to make a button usable. We have to add the correct role, other ARIA attributes, and make sure our button emits correct events. That's why we should add ==action== behavior to our element.

```html
<split/>
<nu-el
  radius
  border
  padding="1x 2x"
  cursor="pointer"
  #[[use-action]]#
  outline="focus"
  inset="n :active[y]"
  mark="hover"
  transition="inset, mark">
  Button
</nu-el>
```

We removed ==active==, ==hover==, and ==focus== behaviors 'cause ==action== behavior will inject them automatically as they required.

## Propagate styles

Our button is ready, but what if we need to add more buttons to our application. It would be a mess to write so many attributes for each button. In **Numl** there is a definition element [nu-attrs](../../reference/elements/nu-attrs.md) that allows to propagate a set of attributes inside specific context. As definition is set we can declare `as` attribute to use it:

```html
<split/>
<#[[nu-attrs]]#
  #[[for="btn"]]#
  radius
  border
  padding="1x 2x"
  cursor="pointer"
  use-action
  outline="focus"
  inset="n :active[y]"
  mark="hover"
  transition="inset, mark">
</nu-attrs>
<nu-pane gap>
  <nu-el #[[as="btn"]]#>Button</nu-el>

  <nu-el #[[as="btn"]]#>Button</nu-el>
</nu-pane>
```

## Use built-ins instead!

In the real application we suggest you use a built-in [nu-btn](../../reference/elements/nu-btn.md) element as it has all needed attributes by default and includes few more perks for accessibility.

```html
<split/>
<nu-btn>Button</nu-btn>
```

Pretty easy, isn't it? And **Numl** has dozens of elements with different defaults for various scenarios.

If you want to change a look of the default button you can use style attributes as we did it with the **nu-el** element above.

You can always create a new custom element with different defaults using **JavaScript API**.

## Conclusion

Our introduction is almost over. We hope you enjoyed it. It was a simple example of how **Numl** syntax looks like.

You can learn more about specific styling attribute by looking at the **Reference Section**. In the example above we used the following attributes:

* [radius](../../reference/attributes/radius.md)
* [size](../../reference/attributes/size.md)
* [border](../../reference/attributes/border.md)
* [text](../../reference/attributes/text.md)
* [outline](../../reference/attributes/outline.md)
* [transition](../../reference/attributes/transition.md)
* [cursor](../../reference/attributes/cursor.md)
* [mark](../../reference/attributes/mark.md)
* [inset](../../reference/attributes/inset.md)

Each page will give you a detailed description of an attribute, syntax overview, examples, and links, where you can find more examples.

You can also open pages of elements like [nu-btn](../../reference/elements/nu-btn.md) and [nu-attrs](../../reference/elements/nu-attrs.md) to learn more about their default values, behaviors, and check out examples of their usage.
