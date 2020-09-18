<template>
  <nu-section box="y" color="white">
    <nu-flex
      flow="column"
      space="around"
      :items="items || 'center'"
      :width="
        width || 'min-content (--max-content-width + (--content-padding * 2))'
      "
      :padding="padding || '0 --content-padding'"
      :gap="gap || '4x'"
    >
      <slot></slot>
    </nu-flex>
  </nu-section>
</template>

<script>
export default {
  name: 'Section',
  props: {
    width: String,
    gap: String,
    padding: String,
    items: String,
  },
};
</script>
