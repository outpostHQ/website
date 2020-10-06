<template>
  <MarkdownPage
    :section="section"
    :pages="pages"
    :page="page"
    :toc="page.toc"
    :sections="sections"
  />
</template>

<script>
import MarkdownPage from '@/helpers/markdown-page';

export default MarkdownPage('storybook/components');
</script>
