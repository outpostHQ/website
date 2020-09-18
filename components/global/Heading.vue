<template>
  <component
    :is="level ? `nu-h${level}` : 'nu-h2'"
    role="heading"
    :level="level || 2"
    :aria-level="level || 2"
  >
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'Heading',
  props: {
    level: [String, Number],
  },
};
</script>
