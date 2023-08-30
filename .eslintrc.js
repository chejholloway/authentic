// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "eslint:recommended",
  ],
  ignorePatterns: ["**/*.css", "**/*.scss", "**/*.mdx"],
  overrides: [
    {
      files: [
        "./src/styled.d.ts",
        "./src/services/github.ts",
        "./src/mocks/handlers.ts",
        "./src/components/orgs-list/OrgsList.tsx",
        "./src/pages/detail/DeveloperDetailPage.tsx",
      ],
      rules: {
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "no-undef": "off",
        "no-unused-vars": "off",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "prettier/prettier": ["error", { endOfLine: "auto" }],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
