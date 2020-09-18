import { Remarkable } from 'remarkable';
import { linkify as linkifyPlugin } from 'remarkable/linkify';
import numlPlugin from 'remarkable-numl';
import metaPlugin from 'remarkable-meta';
import tocParser from 'markdown-toc';
import removeMD from 'remove-markdown';
import unified from 'unified';
import jsonCompiler from '@nuxt/content/parsers/markdown/compilers/json';
import parse from 'rehype-parse';

function parseHTML(content) {
  return new Promise((resolve, reject) => {
    const stream = unified().use(parse);

    stream.use(jsonCompiler).process(content, (error, file) => {
      /* istanbul ignore if */
      if (error) {
        return reject(error);
      }
      resolve(file.result);
    });
  });
}

export default async function Markdown(fileContent) {
  const md = new Remarkable('full', {
    typographer: true,
  });

  md.use(numlPlugin);
  md.use(metaPlugin);
  md.use(linkifyPlugin);

  // Compile markdown from file content to JSON
  const content = md.render(fileContent);
  const body = {
    type: 'root',
    children: (await parseHTML(content)).children[0].children[1].children,
  };
  // Retrieve data from MD file
  const data = md.meta;
  // Generate toc from body
  const toc = tocParser(fileContent).json;

  return {
    ...data,
    toc,
    body,
    text: removeMD(fileContent),
    // dir: '/storybook',
    // path: '/storybook/test',
    // extension: '.md',
    // slug: 'test',
    // createdAt: '2020-08-13T09:33:28.915Z',
    // updatedAt: '2020-08-13T09:34:26.590Z',
  };
}
