import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts, tsx}'],
    plugins: { js },
    languageOptions: { globals: globals.browser },
  },
  tseslint.configs.recommended,
  prettier,
]);
