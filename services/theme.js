import Lockr from 'lockr';

const htmlEl = document.documentElement;
const dataset = htmlEl.dataset;
const SCHEME_OPTIONS = ['auto', 'light', 'dark'];
const CONTRAST_OPTIONS = ['auto', 'low', 'high'];
const DEFAULT_SETTINGS = {
  hue: 272,
  saturation: 70,
  pastel: false,
  scheme: 'auto',
  contrast: 'auto',
  type: 'main',
};

const Theme = {
  ...DEFAULT_SETTINGS,
  isDefaultSettings: true,
  set(settings) {
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

      Lockr.set(`settings:${key}`, value);
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

Theme.set({
  hue: Lockr.get('settings:hue') || 272,
  saturation: Lockr.get('settings:saturation') || '70',
  pastel: Lockr.get('settings:pastel') || false,
  scheme: Lockr.get('settings:scheme') || 'auto',
  contrast: Lockr.get('settings:contrast') || 'auto',
});

export default Theme;
