import LZString from 'lz-string';

import('./numl/index').then(() => {
  let hash;
  let scale;
  let markup;
  let size;

  const root = document.getElementById('content');
  const theme = document.querySelector('nu-theme');
  const props = document.querySelector('nu-props');
  const html = document.querySelector('html');
  const { dataset } = html;
  const LIGHT_SCHEME = 'nu-scheme-light';
  const DARK_SCHEME = 'nu-scheme-dark';
  const HIGH_CONTRAST = 'nu-contrast-high';
  const LOW_CONTRAST = 'nu-contrast-low';
  const REDUCE_MOTION = 'nu-reduce-motion';

  function clearSchemeSwitch() {
    [LIGHT_SCHEME, DARK_SCHEME].forEach((cls) => html.classList.remove(cls));
  }

  function clearContrastSwitch() {
    [HIGH_CONTRAST, LOW_CONTRAST].forEach((cls) => html.classList.remove(cls));
  }

  function clearReducedMotionSwitch() {
    [REDUCE_MOTION].forEach((cls) => html.classList.remove(cls));
  }

  function setScheme(type) {
    clearSchemeSwitch();

    switch (type) {
      case 'light':
      case 'dark':
        dataset.nuScheme = type;
        break;
      default:
        delete dataset.nuScheme;
    }
  }

  function setContrast(type) {
    clearContrastSwitch();

    switch (type) {
      case 'high':
      case 'normal':
        dataset.nuContrast = type;
        break;
      default:
        delete dataset.nuContrast;
    }
  }

  function setReducedMotion(type) {
    clearReducedMotionSwitch();

    switch (type) {
      case 'yes':
        dataset.nuReduceMotion = '';
        break;
      default:
        delete dataset.nuReduceMotion;
    }
  }

  function applyOptions(options = {}) {
    theme.setAttribute('hue', 'hue' in options ? options.hue : 270);

    if (options.saturationType === 'auto') {
      theme.removeAttribute('saturation');
    } else {
      theme.setAttribute('saturation', options.saturation || 50);
    }

    if (options.themeType !== 'main') {
      theme.setAttribute('mod', options.themeType);
    } else {
      theme.removeAttribute('mod');
    }

    if (options.pastel) {
      theme.setAttribute('pastel', '');
    } else {
      theme.removeAttribute('pastel');
    }

    props.setAttribute('gap', `${options.gap || '.5'}rem`);
    props.setAttribute('radius', `${options.radius || '.5'}rem`);
    props.setAttribute('border-width', `${options.borderWidth || '1'}px`);
    props.setAttribute('transition', `${options.transitionTime || '80'}ms`);

    setScheme(options.scheme || 'auto');
    setContrast(options.contrast || 'auto');
    setReducedMotion(options.reducedMotion || false);

    if (window.location === window.parent.location) {
      document.body.style.backgroundColor = 'var(--nu-main-bg-color)';
    }
  }

  // const DEFAULT_OPTIONS = {
  //   themeType: 'main',
  //   hue: 272,
  //   pastel: false,
  //   saturation: 80,
  //   saturationType: 'auto',
  //   gap: 0.5,
  //   borderWidth: 1,
  //   radius: 0.5,
  //   transitionTime: 80,
  //   scheme: 'auto',
  //   contrast: 'auto',
  //   reducedMotion: 'auto',
  // };
  //
  // function getStored(key, defaults) {
  //   let data;
  //
  //   try {
  //     data = JSON.parse(localStorage.getItem(key)).data;
  //   } catch (e) {
  //     data = defaults;
  //   }
  //
  //   return data;
  // }

  function preview() {
    const currentHash = window.location.hash.slice(1);

    if (currentHash === hash) return;

    let data = {};

    try {
      data = JSON.parse(decodeURIComponent(currentHash));
    } catch (e) {
      // do nothing

      try {
        data = JSON.parse(
          LZString.decompressFromEncodedURIComponent(currentHash)
        );
      } catch (e) {
        // do nothing

        /* eslint-disable-next-line */
        console.log('parsing error', e);

        return;
      }
    }

    size = data.size || 'md';
    scale = data.scale || 1;
    markup = data.markup || '';

    markup = markup.replace(/responsive="[^"]+?"/g, (str) =>
      str.replace(/[\d.]+/g, (n) => String(Number(n) * scale))
    );

    const { body } = document;

    body.style.width = `${100 / scale}%`;
    body.style.height = `${100 / scale}%`;
    body.style.transform = `scale(${scale}, ${scale})`;
    body.style.transformOrigin = 'left top';

    markup = markup.replace(/<script>[^]+?<\/script>/gm, (s) => {
      try {
        /* eslint-disable-next-line */
        eval(s.slice(8, -9));
      } catch (e) {
        /* eslint-disable-next-line */
        console.log('preview:', e.toString());
      }

      return '';
    });

    setTimeout(() => {
      root.innerHTML = markup;
    });

    root.setAttribute('size', size);

    hash = currentHash;

    applyOptions(data.options);
  }

  // window.addEventListener('hashchange', preview);

  window.addEventListener('beforeunload', (event) => {
    const element = document.querySelector(
      '[nu-id="redirect-url"], #redirect-url'
    );
    const { href } = document.activeElement;

    if (!element || !href) return;

    element.hidden = true;
    element.textContent = href;

    event.preventDefault();
    event.returnValue = '';
  });

  preview();
});
