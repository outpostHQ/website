<template>
  <nu-block overflow="no" place="cover">
    <nu-props header-color="hue(266 70)"></nu-props>
    <nu-props quote-color="hue(128 70)"></nu-props>
    <nu-props negative-color="hue(12 70)"></nu-props>
    <nu-props positive-color="hue(128 70)"></nu-props>
    <nu-props keyword-color="hue(298 70)"></nu-props>
    <nu-props atom-color="hue(267 70)"></nu-props>
    <nu-props number-color="hue(148 70)"></nu-props>
    <nu-props def-color="hue(266 70)"></nu-props>
    <nu-props variable-color="hue(255 70)"></nu-props>
    <nu-props type-color="hue(145 70)"></nu-props>
    <nu-props comment-color="hue(31 70)"></nu-props>
    <nu-props string-color="hue(12 70)"></nu-props>
    <nu-props string-2-color="hue(19 70)"></nu-props>
    <nu-props meta-color="hue(0 70)"></nu-props>
    <nu-props builtin-color="hue(269 70)"></nu-props>
    <nu-props bracket-color="hue(86 70)"></nu-props>
    <nu-props tag-color="hue(127 70)"></nu-props>
    <nu-props attribute-color="hue(266 70)"></nu-props>
    <nu-props hr-color="hue(0 70 low)"></nu-props>
    <nu-props link-color="hue(266 70)"></nu-props>
    <nu-props error-color="hue(12 70)"></nu-props>

    <nu-flex
      flow="column"
      width="max @content-width"
      space="around"
      content="stretch"
      padding="@topbar-offset top"
      height="100%"
    >
      <nu-pane padding box="y">
        <nu-attrs for="btn" padding=".5x 1x" />
        <nu-btn :disabled="saveDisabled" @tap="save">
          <nu-icon :name="saved ? 'checkmark-outline' : 'save-outline'" />
          Save
        </nu-btn>
        <nu-btn :disabled="saveDisabled" @tap="copyReplLink">
          <nu-icon :name="copied ? 'checkmark-outline' : 'share-outline'" />
          Share
        </nu-btn>
        <nu-btn v-if="!Preview.shown" @tap="Preview.show(currentMarkup)">
          <nu-icon name="eye-outline" />
          Preview
        </nu-btn>
        <nu-el
          :hidden="!copied"
          transition="opacity"
          opacity="1 :hidden[0]"
          text="nowrap ellipsis||||nowrap b"
          place="||||outside-top 1x"
          fill="#clear||||bg"
          border="n||||y"
          padding="||||.5x"
          size="md xs||||xs"
          z="||||max"
        >
          Link is copied to the clipboard.
        </nu-el>
        <nu-el
          :hidden="!saved"
          transition="opacity"
          opacity="1 :hidden[0]"
          text="nowrap ellipsis||||nowrap b"
          place="||||outside-top 1x"
          fill="#clear||||bg"
          border="n||||y"
          padding="||||.5x"
          size="md xs||||xs"
          z="||||max"
        >
          The snippet is saved.
        </nu-el>
      </nu-pane>
      <no-ssr>
        <codemirror
          ref="editor"
          v-model="currentMarkup"
          :options="editorOptions"
        ></codemirror>
      </no-ssr>
    </nu-flex>
    <PreviewWindow ref="preview" />
  </nu-block>
</template>

<script>
import LZString from 'lz-string';
import copy from 'clipboard-copy';
import Snippets from '@/services/snippets';
import Preview, { getStoreHash } from '@/services/preview';

// window.Repl = {
//   convertToEmbedded() {
//     const hash = window.location.hash.slice(1);
//     const obj = JSON.parse(LZString.decompressFromEncodedURIComponent(hash));
//
//     obj.embed = true;
//
//     const data = LZString.compressToEncodedURIComponent(JSON.stringify(obj));
//
//     return `https://numl.design/repl#${data}`;
//   },
// };

export default {
  name: 'Repl',
  props: {
    markup: {
      type: String,
      required: false,
    },
    embed: Boolean,
  },
  // components: {
  //   Preview,
  //   Splitter,
  // },
  data() {
    return {
      mode: 'editor',
      currentMarkup: '',
      editorOptions: {
        mode: 'text/html',
        tabSize: 2,
        indentUnit: 2,
        lineNumbers: true,
        autoCloseTags: true,
        styleActiveLine: true,
        extraKeys: {
          'Ctrl-E': 'autocomplete',
          'Cmd-E': 'autocomplete',
        },
      },
      valid: true,
      timerId: null,
      copied: false,
      saved: false,
      currentEmbed: false,
      Preview,
      savedMarkup: '',
    };
  },
  computed: {
    encodedData() {
      const ref = this.$refs.preview;

      if (!ref) return '';

      return ref.encodedData;
    },
    isDirty() {
      return this.savedMarkup !== Preview.markup;
    },
    saveDisabled() {
      return !this.currentMarkup || !this.currentMarkup.trim();
    },
  },
  watch: {
    currentMarkup() {
      if (this.timerId) {
        clearTimeout(this.timerId);
      }

      this.timerId = setTimeout(() => {
        this.updatePreview();
      }, 800);
    },
  },
  mounted() {
    setTimeout(async () => {
      if (this.markup) {
        this.currentMarkup = this.markup || '';
        this.currentEmbed = !!this.embed;
      } else {
        const hash = window.location.hash.slice(1);

        if (hash.length === 24) {
          this.currentMarkup = (await Snippets.get(hash)) || '';
          this.currentEmbed = false;
        } else {
          let data;
          let successParsing = false;

          if (hash) {
            try {
              data = JSON.parse(decodeURIComponent(hash));
            } catch (e) {
              try {
                data = JSON.parse(
                  LZString.decompressFromEncodedURIComponent(hash)
                );
                successParsing = true;
              } catch (e2) {
                // do nothing
              }
              // do nothing
            }

            this.currentMarkup = data.markup || '';
            this.currentEmbed = data.embed || false;

            this.updatePreview(true);

            setTimeout(() => {
              if (!successParsing) {
                this.save();
              }
            }, 100);
          }
        }

        if (!this.checkMarkup()) return;

        this.updatePreview(true);
      }

      setTimeout(() => {
        if (this.$refs.editor) {
          this.$refs.editor.codemirror.refresh();
        }
      }, 500);
    });
  },
  methods: {
    updatePreview(force) {
      Preview[force ? 'show' : 'change'](
        (this.currentMarkup && this.currentMarkup.trim()) || ' '
      );
      this.savedMarkup = Preview.markup;
    },
    toggleMode() {
      this.mode = this.mode === 'editor' ? 'preview' : 'editor';
    },
    checkMarkup() {
      // @TODO: replace with working code
      return true;
      // const html = this.markup.trim();
      // const doc = document.createElement('div');
      // doc.innerHTML = html;
      // const newHtml = doc.innerHTML.trim().replace(/=""/g, '');
      // const check = newHtml === html;
      //
      // this.valid = check;
      //
      // return check;
    },
    copyReplLink() {
      if (this.saveDisabled) return;

      this.updatePreview();

      setTimeout(async () => {
        const hash = await this.save(true);

        await copy(`https://numl.design/repl#${hash}`);

        this.saved = false;
        this.copied = true;

        setTimeout(() => {
          this.copied = false;
        }, 2000);
      }, 300);
    },
    async save(withoutHash) {
      if (this.saveDisabled) return;

      this.updatePreview();

      let hash;

      try {
        hash = await Snippets.save(this.currentMarkup);
      } catch (e) {
        hash = getStoreHash(this.currentMarkup);
      }

      if (withoutHash !== true) {
        window.location.hash = hash;

        this.copied = false;
        this.saved = true;

        setTimeout(() => {
          this.saved = false;
        }, 2000);
      }

      return hash;
    },
  },
};
</script>

<style>
.vue-codemirror {
  display: flex;
  flex-flow: column;
  width: calc(100% + 2 * var(--content-padding));
  flex-grow: 1;
  margin-left: calc(-1 * var(--content-padding));
  margin-right: calc(-1 * var(--content-padding));
}

.CodeMirror {
  background: var(--main-bg-color);
  color: var(--main-text-color);
  flex-grow: 1;
}

.CodeMirror-scroll {
  box-sizing: content-box;
  height: calc(
    100 * var(--window-height) - 12.5 * var(--gap) + var(--border-width)
  );
}

.cm-s-default .cm-header {
  color: var(--header-text-color);
}

.cm-s-default .cm-quote {
  color: var(--quote-text-color);
}

.cm-negative {
  color: var(--negative-text-color);
}

.cm-positive {
  color: var(--positive-text-color);
}

.cm-header,
.cm-strong {
  font-weight: bold;
}

.cm-em {
  font-style: italic;
}

.cm-link {
  text-decoration: underline;
}

.cm-strikethrough {
  text-decoration: line-through;
}

.cm-s-default .cm-keyword {
  color: var(--keyword-color);
}

.cm-s-default .cm-atom {
  color: var(--atom-color);
}

.cm-s-default .cm-number {
  color: var(--number-color);
}

.cm-s-default .cm-def {
  color: var(--def-color);
}

.cm-s-default .cm-variable,
.cm-s-default .cm-punctuation,
.cm-s-default .cm-property,
.cm-s-default .cm-operator {
}

.cm-s-default .cm-variable-2 {
  color: var(--variable-color);
}

.cm-s-default .cm-variable-3,
.cm-s-default .cm-type {
  color: var(--type-color);
}

.cm-s-default .cm-comment {
  color: var(--comment-color);
}

.cm-s-default .cm-string {
  color: var(--string-color);
}

.cm-s-default .cm-string-2 {
  color: var(--string-2-color);
}

.cm-s-default .cm-meta {
  color: var(--meta-color);
}

.cm-s-default .cm-qualifier {
  color: var(--meta-color);
}

.cm-s-default .cm-builtin {
  color: var(--builtin-color);
}

.cm-s-default .cm-bracket {
  color: var(--bracket-color);
}

.cm-s-default .cm-tag {
  color: var(--tag-color);
}

.cm-s-default .cm-attribute {
  color: var(--attribute-color);
}

.cm-s-default .cm-hr {
  color: var(--hr-color);
}

.cm-s-default .cm-link {
  color: var(--link-color);
}

.cm-s-default .cm-error {
  color: var(--cm-error-color);
}

.cm-invalidchar {
  color: var(--cm-error-color);
}

.CodeMirror-composing {
  border-bottom: 2px solid;
}

.CodeMirror-gutters {
  border-right: 1px solid var(--main-border-color);
  background-color: var(--main-subtle-color);
  white-space: nowrap;
}

.CodeMirror-linenumbers {
}

.CodeMirror-linenumber {
  padding: 0 3px 0 5px;
  min-width: 20px;
  text-align: right;
  color: #999;
  white-space: nowrap;
}

.CodeMirror-guttermarker {
  color: var(--main-text-color);
}

.CodeMirror-guttermarker-subtle {
  color: #999;
}

.CodeMirror-selected {
  background: rgba(
    var(--main-outline-color-rgb, var(--outline-color-rgb)),
    0.3
  );
}

.CodeMirror-focused .CodeMirror-selected {
  background: rgba(
    var(--main-outline-color-rgb, var(--outline-color-rgb)),
    0.3
  );
}

.CodeMirror-crosshair {
  cursor: crosshair;
}

.CodeMirror-line::selection,
.CodeMirror-line > span::selection,
.CodeMirror-line > span > span::selection {
  background: rgba(
    var(--main-outline-color-rgb, var(--outline-color-rgb)),
    0.3
  );
}

.CodeMirror-line::-moz-selection,
.CodeMirror-line > span::-moz-selection,
.CodeMirror-line > span > span::-moz-selection {
  background: rgba(
    var(--main-outline-color-rgb, var(--outline-color-rgb)),
    0.3
  );
}

.CodeMirror-cursor {
  background: var(--main-hover-color);
  border-left: 1px solid var(--main-text-color);
}

.CodeMirror-hscrollbar::-webkit-scrollbar,
.CodeMirror-vscrollbar::-webkit-scrollbar {
  width: var(--gap);
  height: var(--gap);
}

.CodeMirror-hscrollbar::-webkit-scrollbar-track,
.CodeMirror-vscrollbar::-webkit-scrollbar-track {
  background-color: var(--local-bg-color, var(--subtle-color));
}

.CodeMirror-hscrollbar::-webkit-scrollbar-thumb,
.CodeMirror-vscrollbar::-webkit-scrollbar-thumb {
  background-color: rgba(var(--text-color-rgb), 0.5);
  border-radius: var(--radius);
  border: var(--border-width) solid var(--subtle-color);
}

.CodeMirror-hscrollbar::-webkit-scrollbar-corner,
.CodeMirror-vscrollbar::-webkit-scrollbar-corner {
  background-color: transparent;
}

.CodeMirror-hscrollbar,
.CodeMirror-vscrollbar {
  scrollbar-width: thin;
  scrollbar-color: var(--subtle-color) rgba(var(--text-color-rgb), 0.5);
}

.CodeMirror-scrollbar-filler {
  background-color: transparent;
}

.CodeMirror-activeline-background {
  background: var(--subtle-color);
}
</style>
