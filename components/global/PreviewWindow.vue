<template>
  <nu-card
    v-if="Preview.shown"
    display="flex"
    flow="column"
    width="320rp 40vw 100vw"
    height="240rp 60vh 100vh"
    place="fixed top right (--topbar-offset + 1x)"
    z="max"
    cursor="pointer"
    border="y :moving[#special]"
    padding="0"
    overflow="hidden"
    shadow="4x #main-shadow.50 :moving[4x #main-special-shadow.30]"
    style="resize: both;"
    use-movable="holder(heading)"
  >
    <nu-pane
      id="heading"
      padding="1x"
      fill="subtle"
      width="100%"
      radius="(1r - 1bw) (1r - 1bw) 0 0"
      border="bottom"
      transition="border"
    >
      <nu-action
        fill="hue(12 100 25)"
        border="hue(12 100 1 pastel) outside :hover[outside .5x hue(12 100 1 pastel)]"
        radius="round"
        width="1.75x"
        height="1.75x"
        @tap="close"
      ></nu-action>
      <nu-action
        fill="hue(50 100 15)"
        border="hue(50 100 1 pastel) outside :hover[outside .5x hue(50 100 1 pastel)]"
        radius="round"
        width="1.75x"
        height="1.75x"
        @tap="minimize"
      ></nu-action>
      <nu-action
        fill="hue(120 100 20)"
        border="hue(120 100 1 pastel) outside :hover[outside .5x hue(120 100 1 pastel)]"
        radius="round"
        width="1.75x"
        height="1.75x"
        @tap="maximize"
      ></nu-action>
      <nu-el size="xs" text="b" color="#text.70">
        PREVIEW
      </nu-el>
    </nu-pane>
    <nu-flex flow="column" box="y" grow="1">
      <PreviewEmbed ref="embed" :markup="Preview.markup" />
      <nu-block place="cover" show="^card n :moving[y]" />
    </nu-flex>
  </nu-card>
</template>

<script>
import Preview from '@/services/preview';

export default {
  name: 'PreviewWindow',
  data() {
    return {
      Preview,
    };
  },
  computed: {
    markup() {
      return Preview.markup;
    },
    encodedData() {
      const ref = this.$refs.embed;

      if (!ref) return '';

      return ref.encodedData;
    },
  },
  methods: {
    close() {
      Preview.hide();
    },
    minimize() {},
    maximize() {},
  },
};
</script>
