import { capitalize } from '@/helpers';

function getGithubLink(file) {
  return `https://github.com/numldesign/numl/blob/master/src/${file}`;
}

export function preparePage(page) {
  const siteSection = page.path.split('/')[1];
  const section = page.path.split('/')[2];

  page.siteSection = siteSection;
  page.section = section;

  let title = page.title;
  let menuTitle = page.menuTitle;

  switch (section) {
    case 'behaviors':
      title = `${page.slug}`;
      menuTitle = `${page.slug}`;
      page.type = 'behavior';
      page.githubLink = getGithubLink(`behaviors/${page.slug}.js`);
      break;
    case 'functions':
      title = `${page.slug}()`;
      menuTitle = `${page.slug}()`;
      page.type = 'function';
      break;
    case 'styles':
      title = `${page.slug}`;
      menuTitle = `[${page.slug}]`;
      page.type = 'style attribute';

      if (!('githubLink' in page)) {
        page.githubLink = getGithubLink(`styles/${page.slug}.js`);
      }
      break;
    case 'utilities':
      title = `${page.slug}`;
      menuTitle = `[${page.slug}]`;
      page.type = 'utility attribute';
      break;
    case 'elements':
      title = page.slug;
      menuTitle = `<${page.slug}/>`;
      page.type = 'element';
      if (!('githubLink' in page)) {
        page.githubLink = getGithubLink(
          `elements/${page.slug.replace('nu-', '')}.js`
        );
      }
      break;
    case 'definitions':
      title = page.slug;
      menuTitle = `<${page.slug}/>`;
      page.type = 'definition';

      if (!('githubLink' in page)) {
        page.githubLink = getGithubLink(
          `definitions/${page.slug.replace('nu-', '')}.js`
        );
      }
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

  page.fullTitle = `${capitalize(siteSection)} – ${page.title}${
    page.type ? ` – ${page.type}` : ''
  }`;

  if (!page.description) {
    page.description =
      "Content page of Numl.Design. It doesn't have description yet.";
  }

  return page;
}
