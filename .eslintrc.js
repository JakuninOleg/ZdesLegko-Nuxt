module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  extends: ["@nuxtjs", "eslint:recommended", "plugin:nuxt/recommended"],
  // add your custom rules here
  rules: {}
};
