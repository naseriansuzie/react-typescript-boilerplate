// @ts-check

const eslint = require('@eslint/js');
const eslintConfigPrettier = require('eslint-config-prettier');
const importPlugin = require('eslint-plugin-import');
const jsxAllyPlugin = require('eslint-plugin-jsx-a11y');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');
const reactRecommended = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const globals = require('globals');
const tsEslint = require('typescript-eslint');

module.exports = tsEslint.config(
  eslint.configs.recommended,
  ...tsEslint.configs.recommended,
  eslintPluginPrettierRecommended,
  eslintConfigPrettier,
  {
    plugins: {
      '@typescript-eslint': tsEslint.plugin,
      react: reactRecommended,
      import: { rules: importPlugin.rules },
      'react-hooks': reactHooksPlugin,
      'jsx-a11y': jsxAllyPlugin,
    },
    languageOptions: {
      parser: tsEslint.parser,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      'import/order': [
        'error',
        {
          alphabetize: {
            order: 'asc',
            caseInsensitive: false,
          },
          groups: ['builtin', 'external', 'internal', 'sibling', 'parent'],
          pathGroupsExcludedImportTypes: ['react'],
          pathGroups: [
            {
              pattern: 'react',
              group: 'builtin',
              position: 'before',
            },
          ],
        },
      ],
      'prettier/prettier': ['error', { endOfLine: 'auto' }, { usePrettierrc: true }],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-var-requires': 0,
      '@typescript-eslint/no-unused-vars': ['error'],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'react/prop-types': 'off',
      'react/display-name': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/prefer-stateless-function': 0,
      'react/jsx-filename-extension': 0,
      'react/jsx-one-expression-per-line': 0,
    },
    ignores: ['**/dist', '**/node_modules'],
  },
);
