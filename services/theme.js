import Lockr from 'lockr';
import GlobalEvents from './global-events';

export const SCHEME_OPTIONS = ['auto', 'light', 'dark'];
export const CONTRAST_OPTIONS = ['auto', 'no-preference', 'more'];
const DEFAULT_SETTINGS = {
  hue: 290,
  subtleHue: 240,
  saturation: 75,
  pastel: false,
  scheme: 'auto',
  contrast: 'auto',
  type: 'main',
};

const Theme = {
  ...DEFAULT_SETTINGS,
  isDefaultSettings: true,
  set(settings, dontSave) {
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

      if (process.client && !dontSave) {
        Lockr.set(`settings:${key}`, value);
      }

      GlobalEvents.$emit('theme:change', this);
    });
  },
  init() {
    Theme.set(
      Object.keys(DEFAULT_SETTINGS).reduce((map, key) => {
        let storedValue = Lockr.get(`settings:${key}`);

        if (key === 'contrast') {
          if (storedValue === 'high') {
            storedValue = 'more';
          } else if (storedValue === 'low') {
            storedValue = 'no-preference';
          }
        }

        map[key] = storedValue != null ? storedValue : DEFAULT_SETTINGS[key];

        return map;
      }, {})
    );
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
  }, {}),
  true
);

export default Theme;
