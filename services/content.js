export function extractRawText(body) {
  if (body.type === 'text') {
    return body.value;
  }

  if (body.children) {
    return body.children.reduce((str, child) => {
      str += extractRawText(child);

      return str;
    }, '');
  }

  return '';
}
