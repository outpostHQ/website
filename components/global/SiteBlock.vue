<template>
  <Section
    display="flex"
    :padding="padding || '12x 0||8x 0'"
    text="center"
    :items="items || 'center'"
    :fill="fill ? fill : special ? 'dark' : 'bg'"
    :color="special ? 'white' : null"
    :border="border ? border : special ? 'top bottom outside #white.50' : null"
    :width="width"
    :gap="gap"
  >
    <nu-flex
      v-if="heading || description || badge"
      flow="column"
      :items="items || 'center'"
      width="min-content --heading-width 46||min-content --heading-width"
      gap="2x"
    >
      <nu-props
        heading-width="6sp|8sp|10sp|--content-width"
        max-width="50rem"
      />
      <nu-badge
        v-if="badge"
        border="n"
        special
        text="up bold"
        size="md|||xs"
        v-html="$html(badge)"
      />
      <Heading v-if="heading" :level="level" :size="headingSize || null">
        <nu-el v-html="$html(heading)" />
      </Heading>
      <nu-description
        v-if="description"
        size="xl||lg"
        text="sb"
        v-html="$html(description)"
      />
    </nu-flex>
    <slot></slot>
  </Section>
</template>

<script>
export default {
  props: {
    heading: String,
    description: String,
    badge: String,

    fill: String,
    color: String,
    special: Boolean,
    items: String,
    level: [String, Number],
    headingSize: [String, Number],
    width: String,
    gap: String,
    padding: String,
    border: String,
  },
};
</script>
