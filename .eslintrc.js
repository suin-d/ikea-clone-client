module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['react-app', 'airbnb'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
        useTabs: false,
        tabWidth: 2,
        printWidth: 80,
        bracketSpacing: true,
        // arrowParens: 'avoid',
      },
    ],
    'react/jsx-filename-extension': 0,
    'comma-dangle': 0,
    'no-console': 0,
    'operator-linebreak': 0,
    'implicit-arrow-linebreak': 0,
  },
};
