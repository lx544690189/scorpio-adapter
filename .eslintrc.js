module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    require.resolve('@umijs/lint/dist/config/eslint'),
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {},
};
