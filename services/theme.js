import Lockr from 'lockr';
import GlobalEvents from './global-events';

export const SCHEME_OPTIONS = ['auto', 'light', 'dark'];
export const CONTRAST_OPTIONS = ['auto', 'low', 'high'];
const DEFAULT_SETTINGS = {
  hue: 300,
  subtleHue: 248,
  saturation: 75,
  pastel: false,
  scheme: 'auto',
  contrast: 'auto',
  type: 'main',
};

const Theme = {
  ...DEFAULT_SETTINGS,
  isDefaultSettings: true,
  set(settings) {
    const dataset = process.client ? document.documentElement.dataset : {};

    if (!settings || typeof settings !== 'object') {
      this.set(DEFAULT_SETTINGS);

      return;
    }

    Object.keys(settings).forEach((key) => {
      const value = settings[key];

      let hue, saturation;

      switch (key) {
        case 'scheme':
          if (!SCHEME_OPTIONS.includes(value)) return;

          dataset.nuScheme = value;
          break;
        case 'contrast':
          if (!CONTRAST_OPTIONS.includes(value)) return;

          dataset.nuContrast = value;
          break;
        case 'hue':
          hue = parseInt(value);

          if (!(hue >= 0 && hue < 360)) return;

          break;
        case 'subtleHue':
          hue = parseInt(value);

          if (!(hue >= 0 && hue < 360)) return;

          break;
        case 'saturation':
          saturation = parseInt(value);

          if (!(saturation >= 0 && saturation <= 100)) return;

          break;
        case 'pastel':
          if (typeof value !== 'boolean') return;

          break;
        default:
          return;
      }

      this[key] = value;
      this.isDefaultSettings = areSettingsDefault();

      if (process.client) {
        Lockr.set(`settings:${key}`, value);
      }

      GlobalEvents.$emit('theme:change', this);
    });
  },
};

function areSettingsDefault() {
  return (
    JSON.stringify(DEFAULT_SETTINGS) ===
    JSON.stringify(
      Object.keys(DEFAULT_SETTINGS).reduce((map, key) => {
        map[key] = Theme[key];

        return map;
      }, {})
    )
  );
}

Theme.set(
  Object.keys(DEFAULT_SETTINGS).reduce((map, key) => {
    map[key] = DEFAULT_SETTINGS[key];

    return map;
  }, {})
);

if (process.client) {
  setTimeout(() => {
    Theme.set(
      Object.keys(DEFAULT_SETTINGS).reduce((map, key) => {
        map[key] = Lockr.get(`settings:${key}`) || DEFAULT_SETTINGS[key];

        return map;
      }, {})
    );
  });
}

export default Theme;
