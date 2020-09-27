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
      :pastel="Theme.pastel ? '' : null"
    />
    <nu-props
      max-content-width="100rem - (--content-padding * 2)"
      grid-gap="3x"
      content-padding="6x||3x|6x|3x"
      column-number="12||||2"
      column-width="((--max-content-width - (--grid-gap * 11)) / 12)|((100vw - (--content-padding * 2) - (--grid-gap * (--column-number - 1))) / --column-number)"
      content-width="12sp||||2sp"
    />

    <slot></slot>
  </nu-root>
</template>

<script>
import Vue from 'vue';
import ContrastIcon from '@/assets/icons/contrast.svg';
import Theme from '@/services/theme';
import '@/elements/splitpreview';

Vue.config.ignoredElements = [/^nu-/];

function loadIcon(url) {
  return fetch(url).then((response) => response.text());
}

function spanWidth(num) {
  return `((${num} * var(--nu-column-width)) + (${
    num - 1
  } * var(--nu-grid-gap)))`;
}

function initNude() {
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

  Nude.assign('nu-btn', {
    styles: {
      border:
        '1bw :clear[hidden] :hover[1bw] :clear:hover[#mark] :special[#clear] :hover:special[#clear]',
    },
  });

  Nude.init();
}

if (process.client) {
  setTimeout(() => {
    if (window.Nude) {
      initNude();
    } else {
      window.addEventListener('nudeReady', () => {
        initNude();
      });
    }
  });
}

export default {
  name: 'Root',
  data() {
    return {
      Theme,
    };
  },
  mounted() {
    const { Nude } = window;
    const { routing } = Nude;

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
  },
};
</script>
