window.addEventListener('hashchange', () => {
  updateHash();
});

function updateHash() {
  WindowService.hash = location.hash.replace(/^#/, '');
}

function updateSlug() {
  WindowService.slug = location.pathname.split('/').slice(-1)[0];
}

function scrollIntoView(selector, instant) {
  const el = document.querySelector(selector);

  if (el) {
    el.scrollIntoView({
      behavior: instant ? 'smooth' : 'auto',
      block: 'start',
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
