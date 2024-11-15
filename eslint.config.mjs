import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import simpleImportSort from "eslint-plugin-simple-import-sort";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ["/dist"],
  },
  {
    files: ["src/**/*.{js,mjs,cjs,ts}"],
    languageOptions: {
      globals: globals.node,
    },
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      // Add your custom rules here
      'no-var': 'error', // Example rule: Disallow `var` keyword, prefer `let` or `const`
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      'prefer-const': 'error', // Example rule: Prefer `const` over `let` for variables that are never reassigned
      'semi': ['error', 'always'], // Example rule: Enforce semicolons at the end of statements
      'indent': ['error', 4], // Example rule: Enforce 2-space indentation
      'no-console': 'warn', // Example rule: Warn when `console` statements are used
      'no-multi-spaces': 'error', // Example rule: Disallow multiple spaces
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Example rule: Warn about unused variables, but ignore variables starting with `_`
      'eqeqeq': 'error', // Example rule: Require strict equality (===) over regular equality (==)
      'quotes': ['error'], // Example rule: Enforce single quotes for strings
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
