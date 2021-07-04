module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier'
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/indent": ["warn", 2],
    "@typescript-eslint/no-explicit-any": [ "warn", {
      "fixToUnknown": true,
      "ignoreRestArgs": true
    }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'quotes': ['warn', 'single'],
    'semi': ['warn', 'never']
  },
};
