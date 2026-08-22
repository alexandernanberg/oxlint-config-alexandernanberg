import { defineConfig } from 'oxfmt'

export default defineConfig({
  semi: false,
  singleQuote: true,

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
