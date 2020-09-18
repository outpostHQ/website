<template>
  <nu-flow
    id="preview"
    padding="2x 4x 4x||2x"
    fill="subtle"
    gap="2x"
    transition="fill"
    overflow="visible|hidden auto|visible|hidden auto"
    height="100% 37|||stretch"
    place="static|||fixed cover"
    z="|||front"
  >
    <nu-theme
      :hue="settings.hue"
      :mod="settings.allMods"
      :pastel="settings.isPastel"
      :saturation="settings.saturation"
    />

    <nu-flow
      place="static|||sticky top"
      gap
      z="|||front"
      fill="subtle"
      move="0|||0 -2x"
      space="0|||2x 2x 0 2x"
      padding="0|||1x 2x 0 2x"
      shadow="0|||1"
    >
      <nu-pane content="space-between">
        <nu-h3>Preview</nu-h3>
        <nu-flex gap>
          <nu-btn special padding=".5x 1x" to="!/storybook">
            More elements
            <nu-icon name="search" />
          </nu-btn>
          <nu-btn special padding=".5x" show="n|||y" @tap="onClose">
            <nu-icon name="close" />
          </nu-btn>
        </nu-flex>
      </nu-pane>
      <nu-line space="0|||0 2x" />
    </nu-flow>
    <nu-grid columns="1pr 1pr|1fr|1pr 1pr|1fr">
      <nu-props
        error-color="hue(1)"
        :radius="`${props.borderRadius}rem`"
        :gap="`${props.gap}rem`"
        :icon-size="`${props.iconSize}em`"
        :transition="`${props.transition}ms`"
      />
      <nu-card clear padding="0" overflow="no" radius="2r" fill="bg" gap="0">
        <nu-block height="10" color="white" box="y">
          <nu-img
            width="100%"
            height="100%"
            fit="cover"
            place="cover"
            src="https://d13k13wj6adfdf.cloudfront.net/urban_areas/san-francisco-bay-area_web-f17b1f60e6.jpg"
          />
          <nu-badge
            place="left bottom 2x"
            radius=""
            size="xs"
            border="n"
            text="up sb"
          >
            United states
          </nu-badge>
        </nu-block>
        <nu-markdown padding="2x">
          <textarea>
            #### San Francisco

            Officially the **City and County of San Francisco** and colloquially known as **The City**, **SF**, or **Frisco and San Fran**, is the cultural, commercial, and financial center of [Northern California](!https://en.wikipedia.org/wiki/Northern_California).
          </textarea>
        </nu-markdown>
        <nu-line />
        <nu-pane padding="2x">
          <nu-btn special>
            <nu-icon name="star-outline" />
            Favorite
          </nu-btn>
          <nu-btn clear>
            <nu-icon name="question-mark-circle-outline" />
            Learn more
          </nu-btn>
        </nu-pane>
      </nu-card>
      <nu-flow gap="2x">
        <nu-grid
          flow="column"
          border="bottom #special"
          gap="1x"
          items="end stretch"
          padding="1x 1x 0 1x"
          box="y"
          radius="1r 1r 0 0"
          :fill="settings.darkChart ? 'dark' : null"
        >
          <nu-attrs for="line" radius=".5r .5r 0 0" />

          <nu-block
            v-for="(hue, i) in hues"
            :key="hue"
            as="line"
            :fill="`hue(${hue} ${hueOptions.saturation} ${hueOptions.contrast})`"
            :height="heights[i]"
          />

          <nu-block
            shadow="0 1x 1x #shadow.40"
            place="bottom 0"
            width="100% - 2x"
            height="1"
            interactive="no"
          >
          </nu-block>
        </nu-grid>

        <nu-progressbar value="100" />

        <nu-block padding="1x 0">
          <nu-slider value="50" />
        </nu-block>

        <nu-block>
          <nu-radiogroup value="one" gap="2x">
            <nu-label>Radio Group</nu-label>
            <nu-pane>
              <nu-radio value="one" />
              <nu-label>Option 1</nu-label>
            </nu-pane>
            <nu-pane>
              <nu-radio value="two" />
              <nu-label>Option 2</nu-label>
            </nu-pane>
          </nu-radiogroup>
        </nu-block>

        <nu-pane content="space-between">
          <nu-pane>
            <nu-switch id="switch" />
            <nu-label for="switch">Switch</nu-label>
          </nu-pane>

          <nu-pane>
            <nu-checkbox id="bool" />
            <nu-label for="bool">Checkbox</nu-label>
          </nu-pane>
        </nu-pane>

        <nu-card gap="0" clear fill="bg">
          <nu-form>
            <nu-field>
              <nu-label for="input">
                Field label
              </nu-label>
              <nu-input id="input" placeholder="Email" />
              <nu-check for="input" assert="required" color="error">
                This input is required
              </nu-check>
            </nu-field>
            <nu-btn special>Submit</nu-btn>
          </nu-form>
        </nu-card>
      </nu-flow>
    </nu-grid>
  </nu-flow>
</template>

<script>
export default {
  name: 'ThemePreview',
  props: {
    settings: Object,
    hues: Array,
    props: Object,
    hueOptions: Object,
  },
  data() {
    return {
      heights: [1, 4, 3, 9, 8, 5, 7, 4],
    };
  },
  methods: {
    onClose() {
      this.$emit('close');
    },
  },
};
</script>
