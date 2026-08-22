import { defineConfig } from 'oxlint'
import base from './base.ts'

export default defineConfig({
  extends: [base],

  // NOTE: `plugins` is not merged across `extends` — each layer must list
  // the full cumulative set, or plugins enabled by earlier layers (here,
  // `base.ts`'s `import` and `typescript`) get disabled.
  plugins: ['import', 'typescript', 'react'],

  rules: {
    'react/self-closing-comp': 'error',
    'react/jsx-boolean-value': ['error', 'never'],

    // React Compiler-powered rules (use-memo, purity, immutability,
    // set-state-in-render, static-components, etc.) are bundled into this
    // `react` plugin and already turned on via `base.ts`'s
    // `categories.correctness` — no separate `react-compiler` plugin needed.
  },
})
