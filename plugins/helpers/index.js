import Vue from 'vue';

Vue.prototype.$html = (html) => {
  const multiline = html.includes('\\n');

  return `${multiline ? '<nu-block>' : ''}${html
    .replace(/\\n\\n\s*/g, '</nu-block><nu-block>')
    .replace(/\\s\s*/g, '&nbsp;')
    .replace(/\\n\s*/g, '<br/>')}${multiline ? '</nu-block>' : ''}`;
};
