import { defineConfig } from 'oxlint'

import base from './base.ts'

export default defineConfig({
  extends: [base],

  // NOTE: `plugins` is not merged across `extends` — each layer must list
  // the full cumulative set, or plugins enabled by earlier layers (here,
  // `base.ts`'s `import` and `typescript`) get disabled.
  plugins: ['import', 'typescript', 'react'],

  rules: {
    // https://oxc.rs/docs/guide/usage/linter/rules/react/self-closing-comp.html
    'react/self-closing-comp': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-boolean-value.html
    'react/jsx-boolean-value': ['error', 'never'],

    // React Compiler-powered validation rules (use-memo, purity,
    // immutability, set-state-in-render, static-components, etc.) are
    // already turned on via `base.ts`'s `categories.correctness`, since
    // they're bundled into the built-in `react` plugin — no separate
    // `react-compiler` plugin needed.
    // https://oxc.rs/blog/2026-08-18-react-compiler-support
  },
})
