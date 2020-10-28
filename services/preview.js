import LZString from 'lz-string';

export function getStoreHash(markup, options) {
  return LZString.compressToEncodedURIComponent(
    JSON.stringify({
      markup: markup
        ? markup.trim()
          ? markup.replace(/#\[\[|!\[\[|]]#|]]!/g, '')
          : undefined
        : undefined,
      options,
    })
  );
}

/**
 * @param {String} markup
 * @param {Object} [options]
 * @return {string}
 */
export function getSharableLink(markup, options) {
  const hash = getStoreHash(markup, options);

  return `https://numl.design/repl#${hash}`;
}

const Preview = {
  markup: '',
  shown: false,
  show(markup) {
    this.markup = markup;
    this.shown = true;
  },
  change(markup) {
    this.markup = markup;
  },
  hide() {
    this.shown = false;
    this.markup = '';
  },
};

export default Preview;
