<template>
  <nu-root
    id="root"
    responsive="100rem|90rem|65rem|40rem|30rem"
    height="min 100vh"
    box="n"
  >
    <nu-theme
      id="main-theme"
      :hue="Theme.hue"
      :saturation="Theme.saturation"
      :pastel="Theme.pastel"
    />
    <nu-theme
      name="secondary"
      :hue="Theme.subtleHue"
      :saturation="Theme.saturation"
      :pastel="Theme.pastel"
    />
    <nu-props
      subtle-color="--secondary-subtle-color"
      shadow-color="--secondary-shadow-color"
      border-color="--secondary-border-color"
      special-shadow-color="--secondary-special-shadow-color"
      page-bg-color="^root #bg :dark[#subtle]"
      second-bg-color="^root #subtle :dark[#bg]"
      diff-color="#second-bg"
      topbar-offset="8.75x|||6.75x"
      sidebar-width="32x||26x"
      max-content-width="100rem - (--content-padding * 2)"
      grid-gap="3x"
      content-padding="6x||3x|6x|3x"
      column-number="12||||2"
      column-width="((--max-content-width - (--grid-gap * 11)) / 12)|((100vw - (--content-padding * 2) - (--grid-gap * (--column-number - 1))) / --column-number)"
      content-width="12sp||||2sp"
    />

    <nu-block
      v-if="siteSection"
      border="bottom"
      padding="1.5x 0|||.5x 0"
      place="fixed top"
      width="100vw"
      z="10001"
      fill="#page-bg"
    >
      <nu-props grid-gap="8x||4x" />
      <nu-pane
        gap="1gp"
        width="--content-width"
        space="around"
        content="space-between"
      >
        <nu-block id="logo">
          <nu-pane text="nowrap" width="--sidebar-width" gap="1x">
            <nu-btn clear color="text :hover.focus[special]" padding="0" to="/">
              <nu-svg
                src="/images/nude-logo-small.svg"
                height="4x"
                width="min 4x"
                color="text-soft"
              />
            </nu-btn>
            <nu-h2 size="xl">
              Numl<nu-btn
                padding="1x right"
                clear
                :value="siteSection"
                @input="changeSection"
              >
                <nu-el>.<nu-value list>Storybook</nu-value></nu-el>
                <nu-dropdownicon />
                <nu-popuplistbox size="md" gap="0" place="top -1x">
                  <nu-option value="storybook">Storybook</nu-option>
                  <nu-option value="handbook">Handbook</nu-option>
                  <nu-option value="reference">Reference</nu-option>
                  <nu-option value="repl">REPL</nu-option>
                </nu-popuplistbox>
              </nu-btn>
            </nu-h2>
          </nu-pane>
        </nu-block>

        <nu-block grow="1" show="y|||n">
          <SearchBar hotkey />
        </nu-block>

        <nu-pane
          content="space-between"
          width="--sidebar-width|||auto"
          size="lg"
          gap="1x"
        >
          <nu-block size="lg||sm" show="y|||n"> v{{ App.version }} </nu-block>

          <nu-pane gap="0">
            <nu-attrs for="btn" color="text :hover[special]" />
            <nu-btn
              toggle
              padding
              clear
              use-hotkey="s"
              :checked="showSettings"
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
              :checked="App.showNav"
              @input="toggleNav"
            >
              <nu-icon name="^ menu-outline :pressed[close]" />
            </nu-btn>
          </nu-pane>
        </nu-pane>
      </nu-pane>
    </nu-block>

    <slot></slot>

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
  </nu-root>
</template>

<script>
import Vue from 'vue';
import ContrastIcon from '@/assets/icons/contrast.svg';
import Theme from '@/services/theme';
import App from '@/services/app';
import Preview from '@/services/preview';
import SplitPreviewLoader from '@/elements/splitpreview';
import PreviewLoader from '@/elements/preview';
import requireNude from '@/helpers/require-nude';
import { SECTION_MAP } from '@/helpers/config';
import initDraggable from '@/behaviors/movable';

Vue.config.ignoredElements = [/^nu-/];

function loadIcon(url) {
  return fetch(url).then((response) => response.text());
}

function spanWidth(num) {
  return `((${num} * var(--nu-column-width)) + (${
    num - 1
  } * var(--nu-grid-gap)))`;
}

async function initNude() {
  const { Nude } = window;

  Nude.icons.setLoader((name) => {
    switch (name) {
      case 'contrast':
        return loadIcon(ContrastIcon);
      default:
        return Nude.icons.loaders.eva(name);
    }
  });

  Nude.units.define('sp', spanWidth);
  Nude.units.define('cp', 'var(--nu-content-padding)');
  Nude.units.define('gp', 'var(--nu-grid-gap)');

  Nude.assign('nu-list', {
    styles: {
      position: 'inside',
    },
  });

  Nude.assign('nu-root', {
    styles: {
      font: 'Quicksand',
      text: 'n',
      size: 'md',
      '--normal-font-weight': '500',
      '--semi-bold-font-weight': '600',
      '--bold-font-weight': '700',
      '--xxs-line-height': '20rp',
      '--xs-line-height': '20rp',
      '--sm-line-height': '24rp',
      '--md-line-height': '26rp',
      '--lg-line-height': '30rp',
      '--xl-line-height': '34rp',
      '--xxl-line-height': '38rp',
    },
  });

  Nude.assign('nu-code', {
    styles: {
      font: 'Roboto Mono',
      '--mrk-color': '#white',
      '--mrk-bg-color': '#special-bg',
    },
  });

  Nude.assign('nu-cd', {
    behaviors: {
      code: null,
    },
  });

  Nude.assign('nu-btn', {
    styles: {
      border:
        '1bw :clear[hidden] :hover[1bw] :clear:hover[#mark] :special[#clear] :hover:special[#clear]',
    },
  });

  await initDraggable(Nude);

  const [NuSplitPreview, NuPreview] = await Promise.all([
    SplitPreviewLoader(),
    PreviewLoader(),
  ]);

  customElements.define(NuSplitPreview.nuTag, NuSplitPreview);
  customElements.define(NuPreview.nuTag, NuPreview);

  Nude.init();
}

export default {
  name: 'Root',
  data() {
    return {
      Theme,
      App,

      showSettings: false,
    };
  },
  computed: {
    siteSection() {
      return this.$route.path.split('/')[1];
    },
    sections() {
      if (this.siteSection) {
        return SECTION_MAP[this.siteSection] || [];
      } else {
        return [];
      }
    },
  },
  watch: {
    '$route.path'() {
      App.showNav = false;
      this.showSettings = false;
      Preview.hide();
    },
  },
  async mounted() {
    const Nude = await requireNude();

    await initNude();

    const { routing } = Nude;

    App.version = Nude.version;

    routing.setRouter((url, openNewTab) => {
      // skip outside links and links that open in new tabs
      if (
        openNewTab ||
        url.startsWith('https://') ||
        url.includes('//') ||
        url.startsWith('mailto:') ||
        url.includes('/api/')
      ) {
        return true;
      }

      this.$router.push(url); // handle routing by yourself

      return false;
    });

    App.isDev = location.host.includes('localhost');
  },
  methods: {
    toggleNav() {
      App.showNav = !App.showNav;
      this.showSettings = false;
    },
    toggleSettings() {
      this.showSettings = !this.showSettings;
      App.showNav = false;
    },
    changeSection(event) {
      this.$router.push(`/${event.detail}`);
    },
  },
};
</script>
