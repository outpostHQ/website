<template>
  <SiteBlock
    badge="colorful and adaptive"
    heading="Runtime theming"
    description="Numl provides an innovative theming system that can&nbsp;be&nbsp;customized\n in&nbsp;runtime at&nbsp;any&nbsp;level you&nbsp;need."
  >
    <nu-block>
      <nu-attrs for="btn" color="text :pressed[special]" padding="1x 2x|||1x" />
      <nu-btngroup
        use-radiogroup
        size="lg"
        :value="themeSection"
        @input="themeSection = $event.detail"
      >
        <nu-btn value="modes" label="Modes">
          <nu-icon name="contrast" />
          <nu-el show="y|||n">Modes</nu-el>
        </nu-btn>
        <nu-btn value="palette" label="Palette">
          <nu-icon name="color-palette-outline" />
          <nu-el show="y|||n">Palette</nu-el>
        </nu-btn>
        <nu-btn value="colors" label="Colors">
          <nu-icon name="brush-outline" />
          <nu-el show="y|||n">Colors</nu-el>
        </nu-btn>
        <nu-btn value="properties" label="Properties">
          <nu-icon name="options-2-outline" />
          <nu-el show="y|||n">Properties</nu-el>
        </nu-btn>
        <!--        <nu-btn value="styles">-->
        <!--          <nu-icon name="code-outline" />-->
        <!--          Styles-->
        <!--        </nu-btn>-->
      </nu-btngroup>
    </nu-block>

    <nu-block width="auto||||--content-width">
      <nu-card
        padding="0"
        overflow="no"
        clear
        responsive="80rem|60rem|40rem|30rem"
        space="0||||0 3x"
        radius="1r||||0"
      >
        <nu-grid
          width="80|55|--content-width||100%"
          gap="0"
          flow="row"
          columns="30 50|30 25|1fr"
          text="left"
        >
          <nu-attrs
            for="tab-content"
            flow="column"
            padding="2x 4x 4x||2x"
            gap="2x"
          />
          <nu-attrs for="region" gap="2x" />
          <nu-btn
            special
            place="right top 2x"
            padding
            show="n|||y"
            @tap="togglePreview"
          >
            <nu-icon name="eye" />
            Preview
          </nu-btn>
          <nu-flex v-if="themeSection === 'modes'" as="tab-content">
            <nu-h3>Modes</nu-h3>

            <nu-description>
              Numl has built-in support for Dark Scheme and High Contrast Mode.
            </nu-description>

            <nu-region>
              <nu-pane content="space-between">
                <nu-h4>Dark theme</nu-h4>
                <nu-switch
                  size="lg"
                  :pressed="scheme === 'dark'"
                  value="dark"
                  off-value="light"
                  @input="(evt) => changeScheme(evt.detail)"
                />
              </nu-pane>

              <nu-description>
                Make your users happy with Dark Scheme that is perfect for
                low-light conditions with sufficient contrast and adaptive
                colors.
              </nu-description>
            </nu-region>

            <nu-region>
              <nu-pane content="space-between">
                <nu-h4>High contrast mode</nu-h4>
                <nu-switch
                  size="lg"
                  :pressed="contrast === 'high'"
                  value="high"
                  off-value="low"
                  @input="(evt) => changeContrast(evt.detail)"
                />
              </nu-pane>
              <nu-description>
                Increase the contrast of your site to help people with low
                vision.
              </nu-description>
            </nu-region>
          </nu-flex>

          <nu-flow v-if="themeSection === 'palette'" gap="2x" as="tab-content">
            <nu-h3>Palette</nu-h3>

            <nu-description>
              Get a full palette for your website including
              <nu-strong>special</nu-strong>, <nu-strong>border</nu-strong>,
              <nu-strong>outline</nu-strong>,
              <nu-strong>mark</nu-strong>
              and
              <nu-strong>shadow</nu-strong>
              colors using a simple declaration. Numl will take care of
              <nu-strong>sufficient contrast ratio</nu-strong>. No build step is
              required.
            </nu-description>

            <nu-grid
              columns="auto 1fr"
              items="center stretch"
              gap="1x 2x"
              width="max 28"
            >
              <nu-attrs for="label" text="right nowrap" size="md 4x" />
              <nu-attrs
                for="option"
                border="n :pressed[bottom inside 1ow #special]"
                padding="1x"
              />

              <nu-label>
                Hue
              </nu-label>
              <nu-block padding="0 1x">
                <nu-slider
                  :value="hue"
                  min="0"
                  max="359"
                  image="linear(to right, hue(0 s), hue(90 s), hue(180 s), hue(270 s), hue(0 s))"
                  @input="hue = $event.detail"
                />
              </nu-block>

              <nu-label>
                Saturation
              </nu-label>
              <nu-block padding="0 1x">
                <nu-slider
                  :value="saturation"
                  min="0"
                  max="100"
                  :image="`linear(to right, hue(${hue} 0 s), hue(${hue} 100 s))`"
                  @input="saturation = $event.detail"
                />
              </nu-block>

              <nu-label>
                Type
              </nu-label>
              <nu-radiogroup
                :value="themeType"
                @input="themeType = $event.detail"
              >
                <nu-attrs for="option" padding=".5x .5x||||.5x .25x" />
                <nu-attrs
                  for="block"
                  fill
                  padding=".5x 1x"
                  border
                  radius="1ow"
                />
                <nu-action as="option" value="main">
                  <nu-block t="'Main'||||'Ma'"></nu-block>
                </nu-action>
                <nu-action as="option" value="tint">
                  <nu-block theme="tint" t="'Tint'||||'Ti'"></nu-block>
                </nu-action>
                <nu-action as="option" value="tone">
                  <nu-block theme="tone" t="'Tone'||||'To'"></nu-block>
                </nu-action>
                <nu-action as="option" value="swap">
                  <nu-block theme="swap" t="'Swap'||||'Sw'"></nu-block>
                </nu-action>
                <nu-action as="option" value="special">
                  <nu-block theme="special" t="'Special'||||'Sp'"></nu-block>
                </nu-action>
              </nu-radiogroup>

              <nu-label>
                Contrast
              </nu-label>
              <nu-radiogroup
                :value="contrastType"
                @input="contrastType = $event.detail"
              >
                <nu-action as="option" value="soft">
                  Soft
                </nu-action>
                <nu-action as="option" value="normal">
                  Normal
                </nu-action>
                <nu-action as="option" value="strong">
                  Strong
                </nu-action>
              </nu-radiogroup>

              <nu-label>
                Stand out
              </nu-label>
              <nu-radiogroup
                :value="standOutType"
                gap="1x"
                :disabled="
                  themeType !== 'tone' && themeType !== 'swap' ? '' : null
                "
                @input="standOutType = $event.detail"
              >
                <nu-action as="option" value="dim">
                  Dim
                </nu-action>
                <nu-action as="option" value="normal">
                  Normal
                </nu-action>
                <nu-action as="option" value="bold">
                  Bold
                </nu-action>
              </nu-radiogroup>

              <nu-label>
                Pastel
              </nu-label>
              <nu-block padding="0 1x">
                <nu-checkbox
                  :pressed="isPastel"
                  @input="isPastel = $event.detail"
                />
              </nu-block>

              <nu-label place="start end">
                HTML
              </nu-label>
              <Snippet padding=".5x 1x" :code="themeSnippet" />
            </nu-grid>
          </nu-flow>

          <nu-flex v-if="themeSection === 'colors'" as="tab-content">
            <nu-h3>Colors</nu-h3>
            <nu-description>
              Customize theme colors or create your own using Numl Adaptive
              Colors. It provides colors that adapt current mode whether it's a
              <nu-strong>dark theme</nu-strong>
              or
              <nu-strong>high contrast mode</nu-strong>
              .
            </nu-description>

            <!--          <nu-block>-->
            <!--            <nu-btn special @tap="randomizeHues">-->
            <!--              Randomize-->
            <!--            </nu-btn>-->
            <!--          </nu-block>-->

            <nu-grid
              columns="auto 1fr"
              items="center stretch"
              gap="1x 2x"
              width="max 28"
            >
              <nu-attrs for="label" text="right nowrap" size="md 4x" />

              <nu-label>
                Saturation
              </nu-label>
              <nu-block padding="0 1x">
                <nu-slider
                  :value="hueOptions.saturation"
                  min="0"
                  max="100"
                  @input="hueOptions.saturation = $event.detail"
                />
              </nu-block>

              <nu-label>
                Contrast
              </nu-label>
              <nu-block padding="0 1x">
                <nu-slider
                  :value="hueOptions.contrast"
                  min="0"
                  max="100"
                  @input="hueOptions.contrast = $event.detail"
                />
              </nu-block>
            </nu-grid>

            <nu-h6>Declaration / Usage</nu-h6>
            <Snippet :code="hueDeclarationSnippet" />
            <Snippet :code="hueUsageSnippet" />
          </nu-flex>

          <nu-flex v-if="themeSection === 'properties'" as="tab-content">
            <nu-h3>Properties</nu-h3>
            <nu-description>
              Change <nu-strong>defaults</nu-strong> like border radius and
              border width using properties.
            </nu-description>

            <nu-grid
              columns="auto 1fr 6"
              items="center stretch"
              gap="1x 2x"
              width="max 28"
            >
              <nu-attrs for="label" text="right nowrap" size="md 4x" />

              <nu-label>
                Border radius
              </nu-label>
              <nu-block padding="0 1x">
                <nu-slider
                  :value="props.borderRadius"
                  min="0"
                  max="1.5"
                  step="0.125"
                  @input="props.borderRadius = $event.detail"
                />
              </nu-block>
              <nu-block text="tabular-nums">
                {{ props.borderRadius.toFixed(4) }}rem
              </nu-block>

              <nu-label>
                Base gap
              </nu-label>
              <nu-block padding="0 1x">
                <nu-slider
                  :value="props.gap"
                  min=".25"
                  max=".5"
                  step="0.0675"
                  @input="props.gap = $event.detail"
                />
              </nu-block>
              <nu-block text="tabular-nums">
                {{ props.gap.toFixed(4) }}rem
              </nu-block>

              <nu-label>
                Icon size
              </nu-label>
              <nu-block padding="0 1x">
                <nu-slider
                  :value="props.iconSize"
                  min="0.8"
                  max="1.5"
                  step="0.1"
                  @input="props.iconSize = $event.detail"
                />
              </nu-block>
              <nu-block text="tabular-nums">
                {{ props.iconSize.toFixed(1) }}em
              </nu-block>

              <nu-label>
                Transition
              </nu-label>
              <nu-block padding="0 1x">
                <nu-slider
                  :value="props.transition"
                  min="20"
                  max="300"
                  step="20"
                  @input="props.transition = $event.detail"
                />
              </nu-block>
              <nu-block text="tabular-nums">
                {{ props.transition }}ms
              </nu-block>

              <nu-label place="start end">
                HTML
              </nu-label>
              <nu-block padding="0 1x" column="span 2">
                <Snippet padding=".5x 1x" :code="propsSnippet" />
              </nu-block>

              <nu-spacer />

              <nu-block column="1 / -1" text="right||left">
                And much more...
              </nu-block>
            </nu-grid>
          </nu-flex>

          <!--        <nu-flex v-if="themeSection === 'styles'" as="tab-content">-->
          <!--          <nu-h3>Your Styles</nu-h3>-->
          <!--          <nu-description>-->
          <!--            Change look of any element, typography presets, fonts and more using-->
          <!--            Numl Style Definitions.-->
          <!--          </nu-description>-->
          <!--        </nu-flex>-->

          <ThemePreview
            :show="`y|||${showPreview ? '' : 'n'}`"
            :settings="themeSettings"
            :hues="hues"
            :props="props"
            :hue-options="hueOptions"
            @close="togglePreview"
          />
        </nu-grid>
      </nu-card>
    </nu-block>
  </SiteBlock>
</template>

<script>
import ThemePreview from '@/components/landing/Preview';
import Snippet from '@/components/global/Snippet';

export default {
  name: 'RuntimeTheming',
  components: { Snippet, ThemePreview },
  data() {
    return {
      showPreview: false,
      hue: 272,
      scheme: 'light',
      contrast: 'low',
      saturation: 60,
      themeSection: 'modes',
      themeType: 'main',
      contrastType: 'normal',
      standOutType: 'normal',
      isPastel: false,
      hues: [0, 45, 90, 140, 225, 250, 275, 300],
      hueOptions: {
        saturation: 70,
        contrast: 20,
      },
      props: {
        borderRadius: 0.5,
        gap: 0.5,
        iconSize: 1.5,
        transition: 80,
      },
    };
  },
  computed: {
    pastelMod() {
      return this.isPastel ? 'pastel' : '';
    },
    themeTypeMod() {
      return this.themeType === 'main' ? '' : this.themeType;
    },
    contrastMod() {
      return this.contrastType === 'normal' ? '' : this.contrastType;
    },
    standOutMod() {
      return this.standOutType === 'normal' ||
        (this.themeType !== 'tone' && this.themeType !== 'swap')
        ? ''
        : this.standOutType;
    },
    allMods() {
      return `${this.themeTypeMod} ${this.contrastMod} ${this.standOutMod}`
        .trim()
        .replace(/\s+/g, ' ');
    },
    propsSnippet() {
      const { borderRadius, gap, iconSize, transition } = this.props;
      const fixedIconSize = parseFloat(iconSize.toFixed(1));

      return `
<nu-props
  radius="${borderRadius}rem"
  gap="${gap}rem"
  icon-size="${fixedIconSize}em"
  transition="${transition}ms">
</nu-props>`;
    },
    themeSnippet() {
      return `
<nu-theme
  hue="${this.hue}"
  saturation="${this.saturation}"${this.isPastel ? '\n  pastel' : ''}${
        this.allMods ? `\n  mod="${this.allMods}"` : ''
      }>
</nu-theme>`;
    },
    themeSettings() {
      const { hue, saturation, isPastel, allMods, themeType } = this;

      return {
        hue,
        saturation,
        isPastel,
        allMods,
        darkChart: themeType === 'swap' || themeType === 'special',
      };
    },
    hueDeclarationSnippet() {
      return `<nu-props my-color="hue(${this.hues[1]} ${this.hueOptions.saturation} ${this.hueOptions.contrast})"/>`;
    },
    hueUsageSnippet() {
      return `<nu-block fill="#my-color"/>`;
    },
  },
  mounted() {
    const html = document.documentElement;
    const dataset = html.dataset;

    setTimeout(() => {
      this.scheme = dataset.nuSchemeIs;
      this.contrast = dataset.nuContrastIs;
    });
  },
  methods: {
    randomizeHues() {
      const hues = [];

      while (hues.length < 8) {
        const hue = Math.floor(Math.random() * 360);

        if (!hues.find((h) => Math.abs(hue - h) < 30)) {
          hues.push(hue);
        }
      }

      this.hues = hues;
    },
    changeScheme(scheme) {
      const html = document.documentElement;

      html.dataset.nuScheme = scheme;
      this.scheme = scheme;
    },
    changeContrast(contrast) {
      const html = document.documentElement;

      html.dataset.nuContrast = contrast;
      this.contrast = contrast;
    },
    togglePreview() {
      this.showPreview = !this.showPreview;
    },
  },
};
</script>
