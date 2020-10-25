import { Remarkable } from 'remarkable';
import { linkify as linkifyPlugin } from 'remarkable/linkify';
import numlPlugin from 'remarkable-numl';
import metaPlugin from 'remarkable-meta';
import tocParser from 'markdown-toc';
import removeMD from 'remove-markdown';
import unified from 'unified';
import jsonCompiler from '@nuxt/content/parsers/markdown/compilers/json';
import parse from 'rehype-parse';
import { ELEMENTS } from '../helpers/config';

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

export default async function Markdown(fileContent, other, other2) {
  const md = new Remarkable('full', {
    typographer: true,
  });

  md.use(numlPlugin);
  md.use(metaPlugin);
  md.use(linkifyPlugin);

  // Compile markdown from file content to JSON
  fileContent = fileContent
    .replace(/```html\n<Preview\/>\n/gi, '```nu-preview\n')
    .replace(/```html\n<Preview\/>\n/gi, '```nu-preview\n')
    .replace(/```html\n<Split\/>\n/gi, '```nu-splitpreview\n')
    .replace(/```html\n<Repl\/>\n/gi, '```nu-repl\n')
    .replace(/\.md\)/g, ')');

  let content = md.render(fileContent);

  // Retrieve data from MD file
  const data = md.meta;

  if (data.type === 'behavior') {
    const relatedElements = ELEMENTS.filter((el) =>
      Object.keys(el.behaviors).includes(data.title)
    );

    if (relatedElements.length) {
      fileContent += `

## Related elements

This behavior is used by default in the following elements:

${relatedElements
  .map((el) => `* [${el.tag}](/reference/elements/${el.tag})`)
  .join('\n')}`;
    }
  }

  if (data.type === 'element') {
    const definition = ELEMENTS.find((el) => el.tag === data.title);

    if (definition) {
      fileContent += `

## Defaults`;

      if (Object.keys(definition.behaviors).length) {
        fileContent += `

### Behaviors
|Behavior|Params|
|----|----|
${Object.entries(definition.behaviors)
  .map(
    ([behavior, params]) =>
      `|[${behavior}](/reference/behaviors/${behavior})|${
        params === true ? '–' : `\`${JSON.stringify(params)}\``
      }|`
  )
  .join('\n')}`;
      }

      if (Object.keys(definition.styles).length) {
        fileContent += `

### Styles
|Style|Value|
|----|----|
${Object.entries(definition.styles)
  .map(
    ([style, value]) =>
      `|[${style}](/reference/styles/${style})|\`"${value}"\`|`
  )
  .join('\n')}`;
      }
    }
  }

  content = md
    .render(fileContent)
    .replace(
      /(<nu-h.) padding="1em top"/g,
      (s, s1) => `${s1} space="8x top" padding="!(8x + 1em) top"`
    );

  const body = {
    type: 'root',
    children: (await parseHTML(content)).children[0].children[1].children,
  };
  // Generate toc from body
  const toc = tocParser(fileContent).json;

  data.htmlDescription = data.description
    ? md.render(data.description)
    : data.description;

  if (data.title) {
    data.title = removeMD(data.title);
  }

  if (data.description) {
    data.description = removeMD(data.description);
  }

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
