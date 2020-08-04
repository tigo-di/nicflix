module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'comma-dangle': 0, // disallow trailing commas
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }], // Allow JSX in files js and jsx.
  },
};
