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
      />
    </nu-inputgroup>
    <nu-card
      v-show="results.length"
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
        :key="result.slug"
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
          {{ result.title }}
        </nu-block>
        <nu-block v-if="result.description" size="sm" padding="left">
          {{ result.description }}
        </nu-block>
      </nu-flow>
    </nu-card>
  </nu-block>
</template>

<script>
export default {
  name: 'SearchBar',
  props: {
    section: String,
    hotkey: Boolean,
  },
  data() {
    return {
      value: '',
      results: [],
      index: 0,
    };
  },
  watch: {
    async value(val) {
      val = val.trim();

      if (val.length >= 3) {
        this.results = await this.$content(this.section)
          .search('text', val)
          .fetch();
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

      if (path === window.location.pathname) {
        this.clear();
      }
    },
    clear() {
      this.value = '';
      this.results = [];
      this.index = 0;
      this.$refs.input.nuRef.blur();
    },
  },
};
</script>
