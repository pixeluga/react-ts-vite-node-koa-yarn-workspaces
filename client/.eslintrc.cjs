module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier',
    'eslint-config-prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: ['react-refresh', 'import'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      alias: {
        map: [
          ['src/*', `${__dirname}/src`],
          ['/*', `${__dirname}/public`],
        ],
        extensions: ['.ts', '.tsx'],
      },
    },
  },
  rules: {
    '@typescript-eslint/consistent-type-exports': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
    'arrow-body-style': ['error', 'as-needed'],
    'no-restricted-imports': [
      'error',
      {
        patterns: ['**/../*', '!**/../Components', '**/../Components/*', '!**/../Components/Foo'],
      },
    ],
    'react/prop-types': 'off',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'sort-imports': [
      'error',
      { ignoreCase: true, ignoreDeclarationSort: true, memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'] },
    ],
    'import/named': 0,
    'import/order': [
      'error',
      {
        groups: ['external', 'builtin', 'internal', 'sibling', 'parent', 'index'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'react-router-dom',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'react-router',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@mui/*',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['internal'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
}
