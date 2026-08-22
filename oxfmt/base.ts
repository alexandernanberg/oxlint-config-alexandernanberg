import { defineConfig } from 'oxfmt'

export default defineConfig({
  semi: false,
  singleQuote: true,
  // Matches the original `.prettierrc`'s implicit default (Prettier's
  // default is 80; oxfmt's default is 100).
  printWidth: 80,

  // Replaces `import/order` from oxlint/base.ts, which has no oxlint
  // equivalent yet — import sorting is a formatter concern here instead of
  // a lint rule.
  sortImports: {
    groups: [
      ['builtin', 'external', 'internal', 'subpath'],
      ['parent', 'sibling', 'index'],
    ],
  },
})
