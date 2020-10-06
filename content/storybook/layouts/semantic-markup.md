It's important for screen-reader and crawlers to see correct semantic structure of your page.

Like in **HTML**, there are many semantic in **Numl**: [nu-main](../../reference/elements/nu-main.md), [nu-header](../../reference/elements/nu-header.md), [nu-footer](../../reference/elements/nu-footer.md), [nu-aside](../../reference/elements/nu-aside.md), [nu-section](../../reference/elements/nu-section.md), [nu-region](../../reference/elements/nu-region.md), [nu-article](../../reference/elements/nu-article.md).

## Typical blog layout

```html
<split/>
<nu-grid columns="1fr 8" text="monospace" gap>
  <nu-attrs
    for="region" display="grid" flow="row"
    radius border fill="bg" padding></nu-attrs>

  <nu-header column="span 2">
    nu-header
  </nu-header>

  <nu-main gap>
    nu-main (optional)

    <nu-article gap>
      nu-article

      <nu-section>
        nu-section
      </nu-section>

      <nu-section>
        nu-section
      </nu-section>
    </nu-article>
  </nu-main>

  <nu-aside>
    nu-aside
  </nu-aside>

  <nu-header column="span 2">
    nu-footer
  </nu-header>
</nu-grid>
```

## Typical landing layout

```html
<split/>
<nu-flow text="monospace" gap>
  <nu-attrs
    for="region" display="grid" flow="row"
    radius border fill="bg" padding></nu-attrs>

  <nu-header>
    nu-header
  </nu-header>

  <nu-main gap>
    nu-main (optional)
    <nu-section>
      nu-section
    </nu-section>

    <nu-section>
      nu-section
    </nu-section>
  </nu-main>

  <nu-header column="span 2">
    nu-footer
  </nu-header>
</nu-flow>
```
