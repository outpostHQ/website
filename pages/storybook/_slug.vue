<template>
  <Root fill="bg">
    <MarkdownPage section="storybook" :pages="pages" :toc="page.toc">
      <nu-article gap>
        <template v-if="page.title">
          <nu-h1>
            {{ page.title }}
          </nu-h1>
          <nu-spacer />
        </template>

        <nu-block>
          <nu-attrs for="heading" space="8x top" padding="!(8x + 1em) top" />
          <nuxt-content :document="page" />
        </nu-block>
      </nu-article>
    </MarkdownPage>
  </Root>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    // params.slug
    const page = await $content('storybook', params.slug).fetch();
    const pages = await $content('storybook').fetch();

    return { page, pages };
  },
  mounted() {
    window.$content = this.$content;
  },
};
</script>
