<template>
  <nu-flow :opacity="loaded ? '1' : '0'" transition="opacity" size="md">
    <nu-props diff-color="#main-bg"></nu-props>
    <nu-spacer height="1x"></nu-spacer>
    <nu-grid
      id="split-preview"
      radius
      shadow
      fill="#bg"
      transition="opacity"
      columns="1pr 1pr||||1pr"
      gap="1bw"
      items="stretch"
      content="stretch"
      box="y"
    >
      <nu-attrs for="heading" padding="0" space="no"></nu-attrs>
      <nu-grid
        place="relative"
        box="y"
        fill="#dark"
        radius="1x 0 0 1x||||1x 1x 0 0"
      >
        <nu-code
          padding="2x"
          overflow="auto"
          grow="1"
          radius="1x 0 0 1x||||1x 1x 0 0"
          size="md"
        >
          <textarea ref="textarea"></textarea>
        </nu-code>
        <nu-badge
          size="xxs"
          text="b"
          place="center-top left 2x"
          border="0"
          shadow=".5x"
        >
          <nu-icon name="code-outline"></nu-icon>
          CODE
        </nu-badge>
      </nu-grid>
      <nu-flow
        padding="2x 2x 3x"
        box="y"
        fill="#subtle"
        radius="0 1x 1x 0||||0 0 1x 1x"
        border="left||||top"
      >
        <nu-block v-html="markup" />
        <nu-pane gap place="right center-bottom 2x">
          <nu-attrs
            for="btn"
            radius="round"
            padding
            shadow="yes :hover[#shadow.60]"
            fill="bg"
          ></nu-attrs>
          <nu-btn clear @tap="copy">
            <nu-icon :name="copied ? 'checkmark-outline' : 'copy-outline'" />
            <nu-tooltip :show="copied ? 'y' : 'n'">
              Copied!
            </nu-tooltip>
          </nu-btn>
          <nu-btn clear :to="`!/repl#${storeHash}`">
            <nu-icon name="edit-2-outline"></nu-icon>
          </nu-btn>
          <nu-btn clear @tap="showPreviewWindow">
            <nu-icon name="browser-outline"></nu-icon>
          </nu-btn>
          <nu-btn clear :to="`!/preview/#${storeHash}`">
            <nu-icon name="external-link-outline"></nu-icon>
          </nu-btn>
        </nu-pane>
        <nu-badge
          size="xxs"
          text="b"
          place="center-top right 2x|||center-bottom left 2x"
          border="0"
          shadow=".5x"
        >
          <nu-icon name="eye-outline"></nu-icon>
          PREVIEW
        </nu-badge>
      </nu-flow> </nu-grid
    ><nu-spacer height="2x"></nu-spacer>
  </nu-flow>
</template>

<script>
import copy from 'clipboard-copy';
import Preview, { getSharableLink, getStoreHash } from '@/services/preview';

export default {
  name: 'SplitPreview',
  props: {
    snippet: String,
    markup: String,
  },
  data() {
    return {
      loaded: false,
      copied: false,
      Preview,
    };
  },
  computed: {
    storeHash() {
      return getStoreHash(this.snippet);
    },
  },
  mounted() {
    this.$refs.textarea.textContent = this.snippet;

    setTimeout(() => {
      this.loaded = true;
    }, 300);
  },
  methods: {
    showPreviewWindow() {
      Preview.show(this.markup);
    },
    copy() {
      const link = getSharableLink(this.markup);

      copy(link);

      this.copied = true;

      setTimeout(() => {
        this.copied = false;
      }, 2000);
    },
  },
};
</script>
