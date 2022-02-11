module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/vue3-essential',
        '@vue/standard'
    ],
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module',
        ecmaVersion: 6,
        emitWarning: true, // tried with and without this
        emitError: false, // tried with and without this
        failOnError: false, // tried with and without this
        failOnWarning: false // tried with and without this
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'indent': ['error', 2],
        'semi': [2, 'always'],
        'space-before-function-paren': ['error', 'never'],
        'quotes': ['error', 'single']
    }
};
