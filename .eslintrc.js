module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    indent: [
      'error',
      2,
      {
        ObjectExpression: 1,
        ImportDeclaration: 1,
        MemberExpression: 1,
      },
    ],
    'linebreak-style': ['error', 'windows'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'object-curly-spacing': [
      'error',
      'always',
      {
        arraysInObjects: false,
        objectsInObjects: true,
      },
    ],
    'max-len': [
      'error',
      {
        ignoreComments: true,
        code: 100,
        ignoreUrls: true,
        ignoreRegExpLiterals: true,
      },
    ],
  },
};
