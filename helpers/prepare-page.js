import { capitalize } from '@/helpers';

export function preparePage(page) {
  const siteSection = page.path.split('/')[1];
  const section = page.path.split('/')[2];

  page.siteSection = siteSection;
  page.section = section;

  let title = page.title;
  let menuTitle = page.menuTitle;

  switch (section) {
    case 'styles':
      title = `[${page.slug}] – style attribute`;
      menuTitle = `[${page.slug}]`;
      page.type = 'style attribute';
      break;
    case 'utilities':
      title = `[${page.slug}] – utility attribute`;
      menuTitle = `[${page.slug}]`;
      page.type = 'utility attribute';
      break;
    case 'elements':
      title = page.slug;
      menuTitle = `<${page.slug}/>`;
      page.type = 'element';
      break;
    case 'definitions':
      title = page.slug;
      menuTitle = `<${page.slug}/>`;
      page.type = 'definition';
      break;
    default:
      title = capitalize(page.slug).replace(/-/g, ' ');
      menuTitle = title;
  }

  if (!page.title) {
    page.title = title;
  }

  if (!page.menuTitle) {
    page.menuTitle = menuTitle;
  }

  page.fullTitle = `${capitalize(siteSection)} – ${page.title}`;

  if (!page.description) {
    page.description =
      "Content page of Numl.Design. It doesn't have description yet.";
  }

  return page;
}
