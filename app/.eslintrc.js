module.exports = {
  plugins: [ 'jest' ],

  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },

  root: true,
  env: {
    'es6': true,
    'node': true,
    'jest/globals': true,
  },
  extends: [
    'standard',
    'plugin:jest/all',
  ],
  rules: {
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    }],
    'comma-dangle': ['error', 'only-multiline'],
    'quotes': ['error', 'single', {
      avoidEscape: true,
      allowTemplateLiterals: true,
    }],
    'func-style': ['error', 'expression', {
      allowArrowFunctions: true,
    }],
    'no-var': 'error',
  },
}
