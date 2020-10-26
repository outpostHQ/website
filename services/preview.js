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
 * Get
 * @param {String} markup
 * @param {Object} [options]
 * @return {string}
 */
export function getSharableLink(markup, options) {
  const hash = getStoreHash(markup, options);

  return `https://numl.design/repl#${hash}`;
}
