module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
    ],
    plugins: ['react', '@typescript-eslint', 'react-hooks'],
    rules: {
      // Your custom rules
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  };