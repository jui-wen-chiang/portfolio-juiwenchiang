import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
     "rules": {
    "@typescript-eslint/consistent-type-imports": "warn",    // 自動用 import type
    "@typescript-eslint/no-explicit-any": "warn",           // 限制 any
    "@typescript-eslint/no-unused-vars": "warn",            // 清理沒用到的變數
    "@typescript-eslint/no-implicit-any": "off",             // 交給 tsc 用 noImplicitAny
    // "@typescript-eslint/no-unused-vars": "error",
    // "@typescript-eslint/no-explicit-any": "warn",
    // "@typescript-eslint/no-unused-vars": "error"
  },
  },
  
])
