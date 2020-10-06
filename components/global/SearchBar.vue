<template>
  <nu-block ref="root" box="y">
    <nu-inputgroup
      radius
      fill="^root #subtle :dark[#input]"
      border="hidden :hover[#special.50]"
      transition="all"
      use-hover
      @keydown="onKeyDown"
    >
      <nu-icon name="search" opacity=".5" />
      <nu-search
        ref="input"
        grow="1"
        fill="#clear"
        :placeholder="`Search${hotkey ? ' (Press \'/\' to focus)' : ''}`"
        :use-hotkey="hotkey ? '/' : null"
        :value="value"
        @input="value = $event.detail"
      >
        <input @blur="onBlur" @focus="onFocus" />
      </nu-search>
    </nu-inputgroup>
    <nu-card
      v-show="isActive"
      place="outside-bottom"
      width="100%"
      radius="1r"
      shadow
      padding="1x 0"
      overflow="hidden auto"
      height="max 20"
      z="front"
    >
      <nu-flow
        v-for="(result, i) of results"
        :key="result.path"
        width="100%"
        padding="1x 2x"
        mark="hover :current[y]"
        color="text :current[special]"
        :is-current="i === index"
        cursor="pointer"
        use-hover
        gap
        @click="goTo(i)"
      >
        <nu-block text="b" size="lg">
          {{ result.fullTitle }}
        </nu-block>
        <nu-block v-if="result.description" size="sm" padding="left">
          {{ result.description }}
        </nu-block>
      </nu-flow>
    </nu-card>
  </nu-block>
</template>

<script>
import { SECTION_MAP } from '@/helpers/config';
import { preparePage } from '@/helpers/prepare-page';

const ALL_SECTIONS = [];

Object.keys(SECTION_MAP).forEach((siteSection) => {
  SECTION_MAP[siteSection].forEach((section) => {
    ALL_SECTIONS.push(`${siteSection}/${section.slug}`);
  });

  ALL_SECTIONS.push(siteSection);
});

function uniqueResults(results) {
  return results.filter((res, i) => {
    const otherResult = results.find((res2) => res.path === res2.path);

    return results.indexOf(otherResult) === i;
  });
}

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
    };
  },
  computed: {
    isActive() {
      return this.value.trim().length >= 2 && this.focused;
    },
  },
  watch: {
    async value(val) {
      val = val.trim();

      if (this.isActive) {
        this.results = uniqueResults(
          (
            await Promise.all(
              ALL_SECTIONS.map((name) => {
                return this.$content(name)
                  .search('title', val)
                  .fetch()
                  .then((results) => results.map((page) => preparePage(page)));
              })
            )
          )
            .concat(
              await Promise.all(
                ALL_SECTIONS.map((name) => {
                  return this.$content(name)
                    .search('text', val)
                    .fetch()
                    .then((results) =>
                      results.map((page) => preparePage(page))
                    );
                })
              )
            )
            .reduce((list, results) => {
              list.push(...results.map(preparePage));

              return list;
            }, [])
        );
      } else {
        this.results = [];
      }

      this.index = 0;
    },
    index() {
      // scroll to current element
      setTimeout(() => {
        const current = this.$refs.root.querySelector('[is-current]');

        if (current) {
          current.scrollIntoView();
        }
      });
    },
  },
  methods: {
    onKeyDown(event) {
      switch (event.key) {
        case 'ArrowUp':
          if (this.index > 0) {
            this.index -= 1;
          }
          break;
        case 'ArrowDown':
          if (this.index < this.results.length - 1) {
            this.index += 1;
          }

          break;
        case 'Enter':
          this.goTo(this.index);

          break;
        default:
          return;
      }

      event.preventDefault();
    },
    goTo(index) {
      const path = this.results[index].path;

      this.$router.push(path);

      this.clear();
    },
    clear() {
      this.value = '';
      this.results = [];
      this.index = 0;
      this.$refs.input.nuRef.blur();
    },
    onBlur() {
      this.focused = false;
    },
    onFocus() {
      this.focused = true;
    },
  },
};
</script>
