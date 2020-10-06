<template>
  <iframe
    ref="frame"
    :src="`/preview/index.html#${encodedData}`"
    frameborder="0"
    scrolling="yes"
    width="100%"
    height="100%"
    :style="iframeStyles"
  ></iframe>
</template>

<script>
import LZString from 'lz-string';
import Theme from '@/services/theme';

export default {
  name: 'PreviewEmbed',
  props: {
    markup: String,
    repl: Boolean,
  },
  data() {
    return {
      timerId: null,
      contentWindow: null,
    };
  },
  computed: {
    computedOptions() {
      const { hue, saturation, pastel, scheme, contrast } = Theme;

      return {
        hue,
        saturation,
        pastel,
        scheme,
        contrast,
      };
    },
    encodedData() {
      return LZString.compressToEncodedURIComponent(
        JSON.stringify({
          markup:
            this.markup && this.markup.trim()
              ? this.markup.replace(/#\[\[|!\[\[|]]#|]]!/g, '')
              : undefined,
          options: this.computedOptions,
        })
      );
    },
    iframeStyles() {
      return {
        display: 'block',
        transition: 'height var(--nu-transition) linear',
        'max-width': '100%',
        height: this.repl ? '100%' : '58px',
        'flex-grow': 1,
      };
    },
  },
  watch: {
    encodedData() {
      const { frame } = this.$refs;

      setTimeout(() => {
        frame.contentWindow.location.reload();
      }, 100);
    },
  },
};
</script>
