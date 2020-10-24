<template>
  <nu-pane>
    <nu-btn
      padding="1x 2x 1x 1.5x|||1x"
      label="Scheme"
      radius="round"
      @tap="toggleScheme"
    >
      <nu-icon name="^root :light[sun-outline] :dark[moon-outline]" />
      <nu-el show="y|||n">
        {{ capitalize(Theme.scheme) }}
      </nu-el>
      <nu-tooltip text="nowrap">
        Scheme: {{ capitalize(Theme.scheme) }}
      </nu-tooltip>
    </nu-btn>

    <nu-btn
      padding="1x 2x 1x 1.5x|||1x"
      label="Contrast Mode"
      radius="round"
      @tap="toggleContrast"
    >
      <nu-icon
        name="contrast"
        rotate="^root :high-contrast[180deg]"
        transition="rotate"
      />
      <nu-el show="y|||n">
        {{ capitalize(Theme.contrast) }}
      </nu-el>
      <nu-tooltip text="nowrap">
        Contrast Mode: {{ capitalize(Theme.contrast) }}
      </nu-tooltip>
    </nu-btn>
  </nu-pane>
</template>

<script>
import Theme, { SCHEME_OPTIONS, CONTRAST_OPTIONS } from '@/services/theme';
import { capitalize } from '@/helpers';

export default {
  name: 'InlineSettings',
  data() {
    return {
      Theme,
    };
  },
  methods: {
    toggleScheme() {
      const scheme = Theme.scheme;
      const index = SCHEME_OPTIONS.indexOf(scheme);

      Theme.set({
        scheme: SCHEME_OPTIONS[(index + 1) % SCHEME_OPTIONS.length],
      });
    },
    toggleContrast() {
      const contrast = Theme.contrast;
      const index = CONTRAST_OPTIONS.indexOf(contrast);

      Theme.set({
        contrast: CONTRAST_OPTIONS[(index + 1) % CONTRAST_OPTIONS.length],
      });
    },
    capitalize,
  },
};
</script>
