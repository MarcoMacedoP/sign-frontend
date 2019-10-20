module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true
  },
  //extends: "eslint:recommended",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "no-unused-vars": [
      1,
      {vars: "all", args: "after-used", ignoreRestSiblings: false}
    ]
  }
};
