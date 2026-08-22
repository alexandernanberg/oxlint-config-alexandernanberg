import { defineConfig } from 'oxfmt'

export default defineConfig({
  semi: false,
  singleQuote: true,
  // Matches the original `.prettierrc`'s implicit default (Prettier's
  // default is 80; oxfmt's default is 100).
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
})
