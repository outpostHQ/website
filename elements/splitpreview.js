import Vue from 'vue';
import SplitPreview from '@/components/widgets/SplitPreview.vue';
import requireNude from '@/helpers/require-nude';

const Loader = () => {
  if (process.client) {
    return requireNude().then((Nude) => {
      return class NuSplitPreview extends window.Nude.elements.NuElement {
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
              nuRef.tagName === 'TEXTAREA'
                ? nuRef.textContent
                : nuRef.innerHTML;

            this.nuPreview = this.nuContent.replace(/#\[\[|!\[\[|]]#|]]!/g, '');

            this.nuRender();
          });
        }

        nuRender() {
          this.nuComponent = new Vue({
            render: (h) =>
              h(SplitPreview, {
                props: {
                  snippet: this.nuContent,
                  markup: this.nuPreview,
                },
              }),
          }).$mount(this.nuContainer);
        }
      };
    });
  }
};

export default Loader;
