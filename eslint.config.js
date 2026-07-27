const playwright = require('eslint-plugin-playwright');
const tsParser = require('@typescript-eslint/parser');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const prettierConfig = require('eslint-config-prettier');

module.exports = [
  {
    files: ['exercises/**/*.ts'],
    plugins: {
      playwright,
      '@typescript-eslint': tsPlugin,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
      },
    },
    rules: {
      ...playwright.configs['flat/recommended'].rules,
      // Anti-patterns the mentor rubric checks for on every review:
      'playwright/no-wait-for-timeout': 'error',
      'playwright/no-element-handle': 'error',
      'playwright/prefer-web-first-assertions': 'error',
      'playwright/no-force-option': 'error',
      'playwright/expect-expect': 'error',
      'playwright/no-conditional-in-test': 'warn',
    },
  },
  prettierConfig,
];
