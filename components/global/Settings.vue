<template>
  <nu-flow gap>
    <nu-h2 size="h5">Global settings</nu-h2>

    <nu-flow padding="1x 0" gap>
      <nu-attrs for="btn" padding=".5x 1x" />

      <nu-flow gap>
        <nu-pane content="space-between">
          <nu-label>Accent Hue</nu-label>
          <nu-el>{{ Theme.hue }}</nu-el>
        </nu-pane>
        <nu-slider
          min="0"
          max="359"
          image="linear(to right, hue(0 s), hue(90 s), hue(180 s), hue(270 s), hue(0 s))"
          :value="Theme.hue"
          @input="Theme.set({ hue: $event.detail })"
        />
      </nu-flow>

      <nu-flow gap>
        <nu-pane content="space-between">
          <nu-label>Base Hue</nu-label>
          <nu-el>{{ Theme.subtleHue }}</nu-el>
        </nu-pane>
        <nu-slider
          min="0"
          max="359"
          image="linear(to right, hue(0 s), hue(90 s), hue(180 s), hue(270 s), hue(0 s))"
          :value="Theme.subtleHue"
          @input="Theme.set({ subtleHue: $event.detail })"
        />
      </nu-flow>

      <nu-flow gap>
        <nu-pane content="space-between">
          <nu-label>Saturation</nu-label>
          <nu-el>{{ Theme.saturation }}</nu-el>
        </nu-pane>
        <nu-slider
          :value="Theme.saturation"
          min="0"
          max="100"
          :image="`linear(to right, hue(${Theme.hue} 0 s), hue(${Theme.hue} 100 s))`"
          @input="Theme.set({ saturation: $event.detail })"
        />
      </nu-flow>

      <nu-flow gap>
        <nu-pane>
          <nu-label>Pastel</nu-label>
          <nu-checkbox
            :checked="Theme.pastel"
            @input="Theme.set({ pastel: $event.detail })"
          />
        </nu-pane>
      </nu-flow>

      <nu-flow gap>
        <nu-label>Scheme</nu-label>
        <nu-btngroup
          use-radiogroup
          :value="Theme.scheme"
          @input="Theme.set({ scheme: $event.detail })"
        >
          <nu-btn value="auto">Auto</nu-btn>
          <nu-btn value="light">Light</nu-btn>
          <nu-btn value="dark">Dark</nu-btn>
        </nu-btngroup>
      </nu-flow>

      <nu-flow gap>
        <nu-label>Contrast</nu-label>
        <nu-btngroup
          use-radiogroup
          :value="Theme.contrast"
          @input="Theme.set({ contrast: $event.detail })"
        >
          <nu-btn value="auto">Auto</nu-btn>
          <nu-btn value="no-preference">Normal</nu-btn>
          <nu-btn value="more">More</nu-btn>
        </nu-btngroup>
      </nu-flow>
    </nu-flow>

    <nu-btn special :disabled="Theme.isDefaultSettings" @tap="Theme.set()">
      Reset
    </nu-btn>
  </nu-flow>
</template>

<script>
import Theme from '@/services/theme';

export default {
  name: 'Settings',
  data() {
    return {
      Theme,
    };
  },
};
</script>
