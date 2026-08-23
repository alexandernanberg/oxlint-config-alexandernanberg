/** @type {import('oxfmt').OxfmtConfig} */
export default {
  semi: false,
  singleQuote: true,
  printWidth: 80,

  sortImports: {
    groups: [
      ['type-import', 'value-builtin', 'value-external'],
      ['type-internal', 'value-internal'],
      ['type-parent', 'type-sibling', 'type-index'],
      ['value-parent', 'value-sibling', 'value-index'],
      'unknown',
    ],
    sortSideEffects: false,
    partitionByNewline: false,
    newlinesBetween: false,
  },

  sortPackageJson: true,
}
