<template>
  <nu-code
    :padding="padding || '1x 2x'"
    radius
    shadow
    text="left"
    overflow="auto hidden"
    width="max --content-width"
  >
    <textarea ref="textarea" />
  </nu-code>
</template>

<script>
export default {
  name: 'Snippet',
  props: {
    code: {
      type: String,
      default: '',
    },
    padding: String,
  },
  watch: {
    code(val) {
      this.update(val);
    },
  },
  mounted() {
    this.update(this.code);
  },
  methods: {
    update(val) {
      const ref = this.$refs.textarea;

      ref.textContent = val;
    },
  },
};
</script>
