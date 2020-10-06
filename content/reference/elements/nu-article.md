---
title: nu-article
description: A **semantic** element. Represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable (e.g., in syndication).
---

Examples do include: a forum post, a magazine or newspaper article, or a blog entry.

A given document can have multiple articles in it; for example, on a blog that shows the text of each article one after another as the reader scrolls, each post would be contained in an `<nu-article>` element, possibly with one or more `<nu-section>`s within.

You can add `role="article"` on other elements to change their role.

```html
<split/>
<nu-attrs
  for="icon"
  name="umbrella-outline" place="right 0 2x" size="6x"></nu-attrs>

<nu-article gap="2x">
  <nu-attrs
    for="article" padding="1x 2x"
    shadow radius box="y"></nu-attrs>
  <nu-h3 size="h5">Weather forecast for Seattle</nu-h3>
  <nu-article>
    <nu-flow gap>
      <nu-h6>03 March 2018</nu-h6>
      <nu-description>Rain.</nu-description>
    </nu-flow>
    <nu-icon></nu-icon>
  </nu-article>
  <nu-article>
    <nu-flow gap>
      <nu-h6>04 March 2018</nu-h6>
      <nu-description>Periods of rain.</nu-description>
    </nu-flow>
    <nu-icon></nu-icon>
  </nu-article>
  <nu-article>
    <nu-flow gap>
      <nu-h6>05 March 2018</nu-h6>
      <nu-description>Heavy rain.</nu-description>
    </nu-flow>
    <nu-icon></nu-icon>
  </nu-article>
</nu-article>
```

## See also

* [Layouts – Semantic markup](../../storybook/layouts/semantic-markup.md)
* [MDN: <article> element](!https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article)
