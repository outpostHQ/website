<template>
  <nu-block ref="root" box="y">
    <nu-inputgroup
      radius
      fill="^root #subtle :dark[#input]"
      border="hidden :hover[#special.50]"
      transition="all"
      use-hover
    >
      <nu-icon name="search" opacity=".5" padding="0 1x" />
      <nu-search
        ref="input"
        grow="1"
        fill="#clear"
        :placeholder="`Search${hotkey ? ' (Press \'/\' to focus)' : ''}`"
        :use-hotkey="hotkey ? '/' : null"
        :value="value"
        @input="value = $event.detail"
      >
        <input
          :id="hotkey ? 'docsearch' : 'docsearch-sidebar'"
          autocorrect="off"
          autocomplete="off"
          autocapitalize="none"
          spellcheck="false"
        />
      </nu-search>
    </nu-inputgroup>
    <!--    <nu-card-->
    <!--      v-show="isActive"-->
    <!--      place="outside-bottom -1px"-->
    <!--      width="100%"-->
    <!--      radius="1r"-->
    <!--      shadow-->
    <!--      padding="1x 0"-->
    <!--      overflow="hidden auto"-->
    <!--      height="max 20"-->
    <!--      z="front"-->
    <!--    >-->
    <!--      <nu-block v-if="!results.length && !loading" padding="0 1x">-->
    <!--        No results found-->
    <!--      </nu-block>-->
    <!--      <nu-block v-if="loading" padding="0 1x">Loading...</nu-block>-->
    <!--      <nu-flow-->
    <!--        v-for="(result, i) of results"-->
    <!--        :key="result.path"-->
    <!--        width="100%"-->
    <!--        padding="1x 2x"-->
    <!--        mark="hover :current[y]"-->
    <!--        color="text :current[special]"-->
    <!--        :is-current="i === index"-->
    <!--        cursor="pointer"-->
    <!--        use-hover-->
    <!--        gap-->
    <!--        @click="goTo(i)"-->
    <!--      >-->
    <!--        <nu-block text="b" size="lg">-->
    <!--          {{ result.fullTitle }}-->
    <!--        </nu-block>-->
    <!--        <nu-block v-if="result.description" size="sm" padding="left">-->
    <!--          {{ result.description }}-->
    <!--        </nu-block>-->
    <!--      </nu-flow>-->
    <!--    </nu-card>-->
  </nu-block>
</template>

<script>
import { SECTION_MAP } from '@/helpers/config';
// import { preparePage } from '@/helpers/prepare-page';
// import WindowService from '@/services/window';

const ALL_SECTIONS = [];

Object.keys(SECTION_MAP).forEach((siteSection) => {
  SECTION_MAP[siteSection].forEach((section) => {
    ALL_SECTIONS.push(`${siteSection}/${section.slug}`);
  });

  ALL_SECTIONS.push(siteSection);
});

// function uniqueResults(results) {
//   return results.filter((res, i) => {
//     const otherResult = results.find((res2) => res.path === res2.path);
//
//     return results.indexOf(otherResult) === i;
//   });
// }

export default {
  name: 'SearchBar',
  props: {
    siteSection: String,
    sections: Array,
    hotkey: Boolean,
  },
  data() {
    return {
      value: '',
      results: [],
      index: 0,
      focused: false,
      inc: 0,
      loading: false,
    };
  },
  mounted() {
    window.docsearch({
      // real config
      apiKey: '81d936007fd01723a9b8662a3359fde3',
      indexName: 'numl',
      // test config
      // apiKey: '25626fae796133dc1e734c6bcaaeac3c',
      // indexName: 'docsearch',
      inputSelector: `#${this.hotkey ? 'docsearch' : 'docsearch-sidebar'}`,
      debug: true, // Set debug to true if you want to inspect the dropdown
    });

    setTimeout(() => {
      if (this.$refs.root) {
        const input = this.$refs.root.querySelector('input');

        input.autocomplete = 'off';
      }
    }, 1000);
  },
};
</script>
