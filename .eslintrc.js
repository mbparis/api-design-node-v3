module.exports = {
  globals: {
    module: 'writable'
  },
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jest'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  overrides: [
    {
      files: ['**/*.spec.js', '**/test-db-setup.js'],
      env: {
        jest: true
      }
    }
  ]
}
