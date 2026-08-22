import { defineConfig } from 'oxlint'
import base from './base.ts'

export default defineConfig({
  extends: [base],
  plugins: ['import', 'typescript', 'react'],

  rules: {
    'react/self-closing-comp': 'error',
    'react/jsx-boolean-value': ['error', 'never'],
    'react/rules-of-hooks': 'error',
    'react/exhaustive-deps': 'warn',
  },
})
