import { defineConfig } from 'oxlint'

export default defineConfig({
  plugins: ['import', 'typescript'],

  // Roughly equivalent to `eslint.configs.recommended` +
  // `tseslint.configs.recommendedTypeChecked`.
  categories: {
    correctness: 'error',
  },

  // Requires the `oxlint-tsgolint` package to be installed by the consumer.
  options: {
    typeAware: true,
  },

  rules: {
    // require let or const instead of var
    'no-var': 'error',

    // require method and property shorthand syntax for object literals
    'object-shorthand': [
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true,
      },
    ],

    // detect variables that shadow variables in an outer scope
    'no-shadow': 'error',

    'no-unused-vars': [
      'error',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        caughtErrors: 'all',
        caughtErrorsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],

    // https://oxc.rs/docs/guide/usage/linter/rules/import/namespace.html
    'import/namespace': ['error', { allowComputed: true }],

    // https://oxc.rs/docs/guide/usage/linter/rules/import/no-cycle.html
    'import/no-cycle': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/import/consistent-type-specifier-style.html
    'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],

    // NOTE: `import/order` and `import/no-extraneous-dependencies` have no
    // oxlint equivalent yet. Import ordering is instead handled by oxfmt's
    // `sortImports` (see ../oxfmt/base.ts) rather than the linter.

    'typescript/consistent-type-imports': [
      'error',
      { prefer: 'type-imports', fixStyle: 'separate-type-imports' },
    ],

    'typescript/no-empty-object-type': ['error', { allowInterfaces: 'always' }],

    'typescript/no-misused-promises': [
      'error',
      { checksVoidReturn: { attributes: false } },
    ],

    'typescript/no-unnecessary-condition': 'error',
  },
})
