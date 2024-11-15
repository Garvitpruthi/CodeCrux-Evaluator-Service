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
    "rules": {
        // "semi": ["error", "always"],
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
       "no-unused-vars": ["off", {
            "vars": "all",
            "args": "after-used",
            "caughtErrors": "all",
            "ignoreRestSiblings": false,
            "reportUsedIgnorePattern": false
        }]
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
