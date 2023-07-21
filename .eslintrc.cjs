/* eslint-env node */

module.exports = {
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {},
    },
  },
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:tailwindcss/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: true,
    tsconfigRootDir: __dirname,
  },
  plugins: ['react-refresh', 'unused-imports', 'import', 'tailwindcss'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling'],
          'object',
          'type',
          'index',
        ],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
        // 指定があれば
        pathGroupsExcludedImportTypes: ['builtin'],
        pathGroups: [
          {
            pattern: '{react,react-router-dom}',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '{@/routes/**,@/pages/**,@/assets/**}',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '{@/components/**,@/features/**}',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '{@/libs/**,@/utils/**,@/hooks/**}',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/types/**',
            group: 'internal',
            position: 'before',
          },
        ],
      },
    ],
    'import/default': 'off',
    'import/no-named-as-default-member': 'off',
    'import/no-named-as-default': 'off',

    'react-refresh/only-export-components': [
      'off',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/no-non-null-assertion': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-unescaped-entities': 'off',
    'tailwindcss/no-custom-classname': 'off',
    '@typescript-eslint/no-misused-promises': 'off', // react-hook-formのhandleSubmitでエラー出たため無効化。これでいいかは要検討
  },
};
