// Flat ESLint config for ESLint v9 (CommonJS)
const globals = require('globals');

module.exports = [
  {
    files: ["assets/js/**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "script",
      globals: {
        ...globals.browser,
        $: "readonly",
        jQuery: "readonly",
        API: "readonly",
        AppConfig: "readonly",
        svg: "readonly",
        Assets: "readonly"
      }
    },
    linterOptions: {
      reportUnusedDisableDirectives: "off"
    },
    rules: {
      "no-console": "off",
      "no-unused-vars": "off",
      "no-undef": "error"
    }
  }
];
