import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'
import jsxA11y from 'eslint-plugin-jsx-a11y'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      jsxA11y.flatConfigs.recommended,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    "rules": {
      "@typescript-eslint/consistent-type-imports": "warn",       // enforce import type
      "@typescript-eslint/no-explicit-any": "warn",               // restrict any type
      "@typescript-eslint/no-unused-vars": "warn",                // no unused variables
      "@typescript-eslint/no-implicit-any": "off",                // handled by tsc noImplicitAny

      // WCAG accessibility rules
      "jsx-a11y/alt-text": "warn",                                // img must have alt
      "jsx-a11y/anchor-is-valid": "warn",                         // a must have valid href
      "jsx-a11y/aria-props": "error",                             // aria attribute names must be valid
      "jsx-a11y/aria-role": "error",                              // role value must be valid
      "jsx-a11y/interactive-supports-focus": "warn",              // interactive elements must be focusable
      "jsx-a11y/label-has-associated-control": "warn",            // label must be linked to input
      "jsx-a11y/no-noninteractive-element-interactions": "warn",  // non-interactive elements should not have onClick
      "jsx-a11y/click-events-have-key-events": "warn",            // onClick must have keyboard eventＦ
    },
  },
])
