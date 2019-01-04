// https://eslint.org/docs/user-guide/configuring

module.exports = {
  'root': true,
  'parserOptions': {
    'parser': 'babel-eslint',
    'ecmaVersion': 2017,
    'sourceType': 'module'
  },
  'env': {
    'browser': true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  'extends': [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  'plugins': [
    'vue'
  ],
  // add your custom rules here
  'rules': {
    'indent': ['error', 2],
    'one-var': [
      'error',
      {
        'var': 'never',
        'let': 'never',
        'const': 'never'
      }
    ],
    'semi': [2, 'never'],
    'arrow-parens': 0,
    'generator-star-spacing': 'off',
    'spaced-comment': 'off',
    'no-unused-vars': 'off',
    'no-debugger': (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'homolog') ? 'error' : 'off',
    'no-new': 0
  }
  // rules: {
  //   // allow async-await
  //   'generator-star-spacing': 'off',
  //   // allow debugger during development
  //   'no-debugger': (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'homolog')  ? 'error' : 'off',
  //   "no-new": 0
  // }
}
