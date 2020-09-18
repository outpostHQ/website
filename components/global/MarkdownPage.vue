<template>
  <nu-flow fill="#page-bg">
    <nu-props
      page-bg-color="^root #bg :dark[#subtle]"
      sidebar-width="32x||26x"
      main-width="--content-width - 2gp - (2 * --sidebar-width)"
      grid-gap="8x||4x"
      transition="120ms"
    />
    <nu-attrs for="list" position="inside" />

    <nu-block
      border="bottom"
      padding="1x 0"
      place="fixed top"
      width="100vw"
      z="above"
      fill="#page-bg"
    >
      <nu-pane
        gap="1gp"
        width="--content-width"
        space="around"
        content="space-between"
      >
        <nu-block id="logo">
          <nu-pane text="nowrap" width="--sidebar-width">
            <nu-svg
              src="/images/nude-logo-small.svg"
              height="4x"
              width="min 4x"
              color="text-soft"
            />
            <nu-h2 size="xl">
              Numl<nu-btn padding="1x right" clear :value="section">
                <nu-el>.<nu-value list>Storybook</nu-value></nu-el>
                <nu-dropdownicon />
                <nu-popuplistbox size="md" border="0" gap="0" place="top -1x">
                  <nu-option value="storybook">Storybook</nu-option>
                  <nu-option value="handbook">Handbook</nu-option>
                  <nu-option value="reference">Reference</nu-option>
                </nu-popuplistbox>
              </nu-btn>
            </nu-h2>
          </nu-pane>
        </nu-block>

        <nu-block grow="1" show="y|||n">
          <nu-inputgroup radius fill="^root #subtle :dark[#input]" border="0">
            <nu-icon name="search" opacity=".5" />
            <nu-search
              grow="1"
              fill="#clear"
              placeholder="Search (Press '/' to focus)"
            />
          </nu-inputgroup>
        </nu-block>

        <nu-pane
          content="space-between"
          width="--sidebar-width|||auto"
          size="lg"
        >
          <nu-block size="lg||sm">v1.0.0-beta.2</nu-block>

          <nu-pane show="y|||n">
            <nu-attrs for="btn" color="text :hover.focus[special]" />
            <nu-btn to="!https://github.com/tenphi/numl" padding clear>
              <nu-icon name="github-outline" />
            </nu-btn>
            <nu-btn to="!https://twitter.com/numldesign" padding clear>
              <nu-icon name="twitter-outline" />
            </nu-btn>
          </nu-pane>

          <nu-btn
            toggle
            inset="n"
            show="n|||y"
            clear
            padding
            color="text :hover.focus[special]"
            @input="toggleNav"
          >
            <nu-icon name="^ menu-outline :pressed[close]" />
          </nu-btn>
        </nu-pane>
      </nu-pane>
    </nu-block>

    <nu-spacer height="7.5x" />

    <nu-grid
      space="around"
      width="--content-width"
      columns="--sidebar-width 1fr|||1fr"
      gap="1gp"
      height="min 100vh"
    >
      <nu-block
        fill="#page-bg"
        place="static|||fixed top 7.75x"
        width="auto|||100%"
        height="auto|||stretch"
        z="no|||front"
        :show="showNav ? 'y' : 'y|||n'"
      >
        <nu-nav
          label="Main"
          display="flex"
          flow="column"
          items="stretch"
          gap="0"
          place="sticky top 7.75x"
          overflow="hidden auto"
          height="max (100vh - 7.75x)"
          padding="4x 0|||4x 1cp"
        >
          <nu-btn
            v-for="(page, i) in pages"
            :key="i"
            :to="`/${section}/${page.slug}`"
            padding=".5x 1x"
            color="text :current.hover.focus[special]"
            fill="#clear"
            mark="no :current[y]"
            inset="no"
            border="0"
            content="start"
          >
            {{ page.title }}
          </nu-btn>
        </nu-nav>
      </nu-block>

      <nu-flex gap="1gp" flow="row|||column-reverse">
        <nu-block padding="4x 0" grow="1">
          <slot></slot>
        </nu-block>

        <nu-block width="min --sidebar-width">
          <nu-block
            display="flex"
            flow="column"
            items="stretch"
            gap="0"
            place="sticky top 7.75x"
            overflow="hidden auto"
            height="max (100vh - 7.75x)"
            padding="3x 0|||4x 0 0"
            move="-1x 0"
          >
            <nu-h2 size="sm" text="up b" color="#text.60" padding="0 0 2x 1x">
              Table of contents
            </nu-h2>

            <nu-btn
              v-for="heading in toc"
              :key="heading.i"
              :to="`#${heading.slug}`"
              padding=".5x 1x"
              border="0 left outside #clear :current[1ow left outside #special]"
              color="text :current[special]"
              move="--offset :hover.current[(1ow + --offset) 0]"
              mark="no"
              inset="no"
              radius="no"
              content="start"
              transition="all"
              fill="#clear"
              z="above"
              :size="navSizes[heading.lvl]"
              :opacity="`${heading.lvl > 2 ? 0.8 : 1} :current[1]`"
            >
              <nu-props :offset="`${heading.lvl - 2} * 1x`" />
              {{ heading.content }}
            </nu-btn>
          </nu-block>
        </nu-block>
      </nu-flex>
    </nu-grid>

    <nu-block border="top" padding="2x 0">
      <nu-block space="around" width="--content-width">
        <nu-pane content="space-between">
          <nu-pane>
            <nu-btn padding="1x 2x 1x 1.5x|||1x" label="Scheme" radius="round">
              <nu-icon name="sun" />
              <nu-el show="y|||n">Light</nu-el>
              <nu-tooltip>Scheme</nu-tooltip>
            </nu-btn>

            <nu-btn
              padding="1x 2x 1x 1.5x|||1x"
              label="Contrast Mode"
              radius="round"
            >
              <nu-icon name="contrast" />
              <nu-el show="y|||n">low</nu-el>
              <nu-tooltip text="nowrap">Contrast Mode</nu-tooltip>
            </nu-btn>
          </nu-pane>

          <nu-svg
            src="/images/nude-logo-small.svg"
            height="4x"
            width="min 4x"
            color="text-soft"
          />

          <nu-btn
            to="!https://github.com/numldesign/website"
            padding="1x 2x 1x 1.5x|||1x"
            label="theme"
            radius="round"
          >
            <nu-icon name="github" />
            <nu-el show="y|||n">Website repo</nu-el>
          </nu-btn>
        </nu-pane>
      </nu-block>
    </nu-block>
  </nu-flow>
</template>

<script>
import WindowService from '@/services/window';

export default {
  name: 'MarkdownPage',
  props: {
    section: String,
    pages: Array,
    toc: Array,
  },
  data() {
    return {
      window: WindowService,
      navSizes: {
        1: 'lg',
        2: 'md',
        3: 'sm',
        4: 'xs',
        5: 'xs',
        6: 'xs',
      },
      showNav: false,
    };
  },
  mounted() {
    const hash = location.hash.replace('#', '');

    if (hash) {
      setTimeout(() => {
        this.window.scrollIntoView(this.nuIdSelector(hash), true);
      }, 100);
    }
  },
  methods: {
    nuIdSelector(id) {
      return `[nu-id="${id}"]`;
    },
    toggleNav() {
      this.showNav = !this.showNav;
    },
  },
};
</script>

<style>
.nuxt-content > *:not(:last-child) {
  margin-bottom: calc(var(--nu-gap) * 2);
}
</style>
