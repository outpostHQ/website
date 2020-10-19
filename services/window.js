if (process.client) {
  window.addEventListener('hashchange', () => {
    updateHash();
  });
}

function updateHash() {
  if (process.client) {
    WindowService.hash = location.hash.replace(/^#/, '');
  }
}

function updateSlug() {
  if (process.client) {
    WindowService.slug = location.pathname.split('/').slice(-1)[0];
  }
}

function scrollIntoView(selector, instant, options = {}) {
  const el =
    typeof selector === 'string' ? document.querySelector(selector) : selector;

  if (el) {
    el.scrollIntoView({
      behavior: instant ? 'smooth' : 'auto',
      block: 'start',
      ...options,
    });
  }
}

const WindowService = {
  hash: '',
  slug: '',
  updateHash,
  updateSlug,
  scrollIntoView,
};

updateHash();
updateSlug();

export default WindowService;
