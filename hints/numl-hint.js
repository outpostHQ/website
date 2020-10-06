import CodeMirror from 'codemirror';
import BASE_ATTRIBUTES from './base-attributes';

const s = { attrs: {} }; // Simple tag, reused for a whole lot of tags

const data = {
  'nu-el': {
    attrs: [
      'width',
      'height',
      'sizing',
      'radius',
      'items-radius',
      'padding',
      'items-padding',
      'overflow',
      'space',
      'border',
      'shadow',
      'flow',
      'gap',
      'order',
      'grow',
      'shrink',
      'basis',
      'items-basis',
      'items-grow',
      'items-shrink',
      'place-content',
      'place-items',
      'content',
      'items',
      'template-areas',
      'areas',
      'auto-flow',
      'template-columns',
      'template-rows',
      'columns',
      'rows',
      'column',
      'row',
      'area',
      'contain',
      'place',
      'z',
      'interactive',
      'color',
      'fill',
      'filter',
      'image',
      'transform',
      'scale',
      'rotate',
      'move',
      'text',
      'cursor',
      'size',
      'hide',
      'show',
      'opacity',
      'transition',
      'scrollbar',
      'before',
      'after',
      'toggle',
      'focusable',
      'hoverable',
      'expand',
      'fade',
      'drop',
      'direction',
      'controls',
      'label',
      'level',
      'labelledby',
      'describedby',
      'valuemin',
      'valuemax',
      'valuenow',
      'setsize',
      'posinset',
      'expanded',
      'owns',
      'flowto',
      'haspopup',
      'activedescendant',
      't',
    ],
  },
  'nu-grid': { attrs: [] },
  'nu-block': { attrs: [] },
  'nu-heading': { attrs: ['level'] },
  'nu-activeelement': {
    attrs: [
      'disabled',
      'pressed',
      'checked',
      'selected',
      'href',
      'target',
      'controls',
      'value',
      'to',
    ],
  },
  'nu-btn': {
    attrs: [
      'disabled',
      'pressed',
      'checked',
      'selected',
      'href',
      'target',
      'controls',
      'value',
      'to',
    ],
  },
  'nu-tab': { attrs: ['disabled', 'controls', 'value'] },
  'nu-card': { attrs: [] },
  'nu-icon': { attrs: ['name'] },
  'nu-flow': { attrs: [] },
  'nu-line': { attrs: [] },
  'nu-pane': { attrs: [] },
  'nu-gridtable': { attrs: ['padding'] },
  'nu-badge': { attrs: ['border', 'radius', 'shadow'] },
  'nu-input': {
    attrs: [
      'autofocus',
      'disabled',
      'placeholder',
      'value',
      'maxlength',
      'name',
      'padding',
    ],
  },
  'nu-switch': { attrs: ['disabled', 'checked'] },
  'nu-flex': { attrs: [] },
  'nu-btngroup': { attrs: ['padding', 'value', 'flow', 'border'] },
  'nu-tablist': { attrs: [] },
  'nu-listbox': { attrs: [] },
  'nu-option': { attrs: [] },
  'nu-link': { attrs: [] },
  'nu-blocklink': { attrs: [] },
  'nu-triangle': { attrs: [] },
  'nu-tooltip': { attrs: [] },
  'nu-cell': { attrs: [] },
  'nu-columnheader': { attrs: [] },
  'nu-rowheader': { attrs: [] },
  'nu-row': { attrs: [] },
  'nu-rowgroup': { attrs: [] },
  'nu-table': { attrs: ['gap', 'border', 'padding', 'radius'] },
  'nu-popup': { attrs: ['place'] },
  'nu-popuplistbox': { attrs: [] },
  'nu-group': { attrs: ['flow'] },
  'nu-checkbox': { attrs: [] },
  'nu-radiogroup': { attrs: ['value'] },
  'nu-radio': { attrs: ['fill'] },
  'nu-label': { attrs: [] },
  'nu-numinput': { attrs: ['prefix', 'suffix', 'precision', 'type'] },
  'nu-special': { attrs: [] },
  'nu-mark': { attrs: [] },
  'nu-svg': { attrs: ['src'] },
  'nu-img': { attrs: ['src'] },
  'nu-code': { attrs: [] },
  'nu-progressbar': { attrs: ['value', 'min', 'max'] },
  'nu-slider': { attrs: [] },
  'nu-markdown': { attrs: [] },
  'nu-md': { attrs: [] },
  'nu-list': { attrs: ['type', 'position'] },
  'nu-listitem': { attrs: [] },
  'nu-root': { attrs: [] },
  'nu-decorator': { attrs: ['theme', 'responsive', 'as'] },
  'nu-theme': { attrs: [] },
  'nu-vars': { attrs: [] },
  'nu-props': { attrs: [] },
  'nu-attrs': { attrs: [] },
};

const globalAttrs = BASE_ATTRIBUTES;

function populate(obj) {
  Object.keys(globalAttrs).forEach((attr) => {
    obj.attrs[attr] = globalAttrs[attr];
  });
}

populate(s);

Object.keys(data).forEach((tag) => {
  if (data[tag] !== s) populate(data[tag]);
});

CodeMirror.htmlSchema = data;

function htmlHint(cm, options) {
  const local = { schemaInfo: data };
  if (options) {
    Object.keys(options).forEach((opt) => {
      local[opt] = options[opt];
    });
  }
  return CodeMirror.hint.xml(cm, local);
}

CodeMirror.registerHelper('hint', 'html', htmlHint);
