import { defineConfig } from 'oxlint'

export default defineConfig({
  plugins: ['import', 'typescript'],

  categories: {
    correctness: 'error',
  },

  // Requires the `oxlint-tsgolint` package to be installed by the consumer.
  options: {
    typeAware: true,
  },

  rules: {
    'no-var': 'error',

    'object-shorthand': [
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true,
      },
    ],

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

    'import/namespace': ['error', { allowComputed: true }],
    'import/no-cycle': 'error',
    'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],

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
