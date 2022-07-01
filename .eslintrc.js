module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb-base", "prettier"],

  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "react/prop-types": ["off"],
    "no-param-reassign": ["off"],
    "no-plusplus": ["off"],
  },
};
