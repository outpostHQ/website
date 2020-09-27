<template>
  <nu-flow fill="#page-bg">
    <nu-props
      page-bg-color="^root #bg :dark[#subtle]"
      second-bg-color="^root #subtle :dark[#bg]"
      sidebar-width="32x||26x"
      main-width="--content-width - 2gp - (2 * --sidebar-width)"
      grid-gap="8x||4x"
      transition="120ms"
      topbar-offset="8.75x|||6.75x"
    />
    <nu-attrs for="list" position="inside" />

    <nu-block
      border="bottom"
      padding="1.5x 0|||.5x 0"
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
          <nu-pane text="nowrap" width="--sidebar-width" gap="1x">
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
                <nu-popuplistbox size="md" gap="0" place="top -1x">
                  <nu-option value="storybook">Storybook</nu-option>
                  <nu-option value="handbook">Handbook</nu-option>
                  <nu-option value="reference">Reference</nu-option>
                </nu-popuplistbox>
              </nu-btn>
            </nu-h2>
          </nu-pane>
        </nu-block>

        <nu-block grow="1" show="y|||n">
          <SearchBar :section="section" hotkey />
        </nu-block>

        <nu-pane
          content="space-between"
          width="--sidebar-width|||auto"
          size="lg"
          gap="1x"
        >
          <nu-block size="lg||sm" show="y|||n">
            {{ version }}
          </nu-block>

          <nu-pane gap="0">
            <nu-attrs for="btn" color="text :hover[special]" />
            <nu-btn
              toggle
              padding
              clear
              use-hotkey="s"
              :value="showSettings"
              @tap="toggleSettings"
            >
              <nu-icon name="color-palette-outline" />
            </nu-btn>
            <nu-btn
              show="y|||n"
              to="!https://github.com/tenphi/numl"
              padding
              clear
              use-hotkey="g"
            >
              <nu-icon name="github-outline" />
            </nu-btn>
            <!--            <nu-btn-->
            <!--              to="!https://twitter.com/numldesign"-->
            <!--              padding-->
            <!--              clear-->
            <!--              use-hotkey="Control+t"-->
            <!--            >-->
            <!--              <nu-icon name="twitter-outline" />-->
            <!--            </nu-btn>-->
            <nu-btn
              toggle
              inset="n"
              show="n|||y"
              clear
              padding
              color="text :hover[special]"
              @input="toggleNav"
            >
              <nu-icon name="^ menu-outline :pressed[close]" />
            </nu-btn>
          </nu-pane>
        </nu-pane>
      </nu-pane>
    </nu-block>

    <nu-spacer height="--topbar-offset" />

    <nu-grid
      space="around"
      width="--content-width"
      columns="--sidebar-width 1fr|||1fr"
      gap="1gp"
      height="min 100vh"
    >
      <nu-block
        fill="#page-bg"
        place="static|||fixed top --topbar-offset"
        width="auto|||100%"
        height="auto|||stretch"
        z="no|||front"
        :show="showNav ? 'y' : 'y|||n'"
      >
        <nu-block
          show="n|||y"
          space="around"
          width="--content-width"
          padding="2x 0"
        >
          <SearchBar :section="section" />
        </nu-block>
        <nu-nav
          label="Main"
          display="flex"
          flow="column"
          items="stretch"
          gap="0"
          place="sticky top --topbar-offset"
          overflow="hidden auto"
          height="max (100vh - --topbar-offset)"
          padding="4x 0|||0x 1cp 4x"
        >
          <nu-h2
            show="n|||y"
            size="sm"
            text="up b"
            color="#text.60"
            padding="0 0 1x 1x"
          >
            Pages
          </nu-h2>
          <nu-btn
            v-for="(page, i) in pages"
            :key="i"
            :to="`/${section}${
              page.slug !== 'introduction' ? `/${page.slug}` : ''
            }`"
            padding=".5x 1x"
            color="text :current.hover.focus[special]"
            fill="#clear"
            mark="no :current[y]"
            inset="no"
            border="0"
            content="start"
            use-current
          >
            {{ page.title }}
          </nu-btn>
        </nu-nav>
      </nu-block>

      <nu-flex gap="1gp" flow="row|||column-reverse">
        <nu-block padding="4x 0 12x" grow="1">
          <slot></slot>
        </nu-block>

        <nu-block width="min --sidebar-width">
          <nu-block
            display="flex"
            flow="column"
            items="stretch"
            gap="0"
            place="sticky top --topbar-offset"
            overflow="hidden auto"
            height="max (100vh - --topbar-offset)"
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
              use-current
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

    <nu-region
      label="Settings"
      display="flex"
      flow="column"
      items="stretch"
      gap="1x"
      place="fixed top right --topbar-offset 0"
      overflow="hidden auto"
      height="100vh - --topbar-offset"
      width="initial 40x 100vw"
      radius="0"
      shadow
      fill="#second-bg"
      padding="2x 3x"
      z="front"
      move=":hidden[100% 0]"
      transition="move, opacity"
      interactive="yes :hidden[no]"
      :hidden="!showSettings"
    >
      <Settings />
    </nu-region>

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
import SearchBar from '@/components/global/SearchBar';
import Theme from '@/services/theme';

export default {
  name: 'MarkdownPage',
  components: { SearchBar },
  props: {
    section: String,
    pages: Array,
    toc: Array,
  },
  data() {
    return {
      navSizes: {
        1: 'lg',
        2: 'md',
        3: 'sm',
        4: 'xs',
        5: 'xs',
        6: 'xs',
      },
      showNav: false,
      showSettings: false,
      Theme,
      version: '',
    };
  },
  mounted() {
    const hash = location.hash.replace('#', '');

    if (hash) {
      setTimeout(() => {
        WindowService.scrollIntoView(this.nuIdSelector(hash), true);
      }, 100);
    }

    this.version = window.Nude.version;
  },
  methods: {
    nuIdSelector(id) {
      return `[nu-id="${id}"]`;
    },
    toggleNav() {
      this.showNav = !this.showNav;
    },
    toggleSettings() {
      this.showSettings = !this.showSettings;
    },
  },
};
</script>

<style>
.nuxt-content > *:not(:last-child) {
  margin-bottom: calc(var(--nu-gap) * 2);
}
.nuxt-content-container > textarea {
  color: var(--nu-text-color);
  background-color: var(--nu-bg-color);
  padding: var(--nu-gap);
  border: var(--nu-border-width) solid var(--nu-border-color);
  border-radius: var(--nu-border-radius);
}
</style>
