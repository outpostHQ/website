<template>
  <nu-block display="flex" flow="column" items="stretch">
    <nu-h2
      v-if="items.length >= 2"
      size="sm"
      text="up b"
      color="#text.60"
      padding="0 0 2x 1x"
    >
      Table of contents
    </nu-h2>

    <nu-btn
      v-for="heading in items"
      :key="heading.i"
      :to="`#${heading.slug}`"
      padding=".5x 1x"
      border="0 left outside #clear :current[1ow left outside #special]"
      color="text :current[special]"
      move="--offset :hover.current[(1ow + --offset) 0]"
      mark="no"
      inset="no"
      radius="no"
      content="start"
      transition="all"
      fill="#clear"
      z="above"
      :use-current="spy"
      :size="navSizes[heading.lvl]"
      :opacity="`${heading.lvl > 2 ? 0.8 : 1} :current[1]`"
    >
      <nu-props :offset="`${heading.lvl - 2} * 1x`" />
      {{ heading.content }}
    </nu-btn>
    <nu-block show="y|||n">
      <nu-spacer size="4x" />
      <nu-block padding="0 1x" size="sm">
        Help us to improve this page by
        <nu-link
          :to="`!https://github.com/numldesign/website/edit/master/content${$route.path}.md`"
        >
          sending a pull request
        </nu-link>
      </nu-block>
    </nu-block>
  </nu-block>
</template>

<script>
export default {
  name: 'TableOfContents',
  props: {
    items: Array,
    spy: Boolean,
  },
  data() {
    return {
      navSizes: {
        1: 'lg',
        2: 'md',
        3: 'sm',
        4: 'sm',
        5: 'sm',
        6: 'sm',
      },
    };
  },
};
</script>
