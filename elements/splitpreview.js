import LZString from 'lz-string';

if (typeof window !== 'undefined') {
  window.addEventListener('nudeReady', () => {
    class NuSplitPreview extends window.Nude.elements.NuElement {
      static get nuTag() {
        return 'nu-splitpreview';
      }

      static get nuStyles() {
        return {
          display: 'block',
        };
      }

      static nuCSS({ tag, css }) {
        return [
          ...css,

          `${tag} > pre, ${tag} > textarea {
        display: none;
      }`,
        ];
      }

      nuConnected() {
        super.nuConnected();

        setTimeout(() => {
          if (this.nuRef) return;

          const nuRef = this.querySelector('textarea, pre');

          if (!nuRef) {
            return;
          }

          this.nuRef = nuRef;

          nuRef.setAttribute('role', 'none');
          nuRef.setAttribute('aria-hidden', 'true');

          const container = document.createElement('nu-block');

          this.appendChild(container);

          this.nuContainer = container;

          this.nuContent =
            nuRef.tagName === 'TEXTAREA' ? nuRef.textContent : nuRef.innerHTML;

          this.nuPreview = this.nuContent.replace(/#\[\[|!\[\[|]]#|]]!/g, '');

          // <nu-icon name="eye-outline" place="center-top left 2x" radius="round" padding=".5x 1x" size="xs" border fill="#bg"></nu-icon>
          container.innerHTML = `<nu-grid
  radius shadow fill="#bg"
  columns="1pr 1pr||||1pr" gap="1bw" items="stretch" content="stretch" box="y" fill="#special-bg">
  <nu-flow place="relative" gap box="y" fill="#bg" radius="1x 0 0 1x">
    <nu-code padding="2x" overflow="auto" grow="1" height="max 49.5x||||max 30x"><textarea>${this.nuContent}</textarea></nu-code>
  </nu-flow>
  <nu-flow padding="2x 2x 3x" box="y" fill="#subtle" radius="0 1x 1x 0">
    <nu-block>
      ${this.nuPreview}
    </nu-block>
    <nu-pane gap place="right center-bottom 2x">
      <nu-attrs for="btn" radius="round" padding shadow fill="bg"></nu-attrs>
      <nu-btn clear>
        <nu-icon name="copy-outline"></nu-icon>
      </nu-btn>
      <nu-btn clear>
        <nu-icon name="edit-2-outline"></nu-icon>
      </nu-btn>
      <nu-btn clear>
        <nu-icon name="eye-outline"></nu-icon>
      </nu-btn>
      <nu-btn clear>
        <nu-icon name="external-link-outline"></nu-icon>
      </nu-btn>
    </nu-pane>
  </nu-flow>
</nu-grid><nu-spacer height="2x"></nu-spacer>`;
        });
      }

      get nuEncodedData() {
        return LZString.compressToEncodedURIComponent(
          JSON.stringify({ markup: this.nuPreview })
        );
      }
    }

    customElements.define(NuSplitPreview.nuTag, NuSplitPreview);
  });
}
