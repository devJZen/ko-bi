import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts}"],
    plugins: { js, prettier: "eslint-plugin-prettier" }, 
    extends: [
      "js/recommended", 
      "plugin:prettier/recommended",  // Prettier를 ESLint와 통합하는 추천 설정
      "prettier"  // Prettier와 충돌하는 ESLint 규칙을 비활성화
    ] 
  },
  { files: ["**/*.{js,mjs,cjs,ts}"], languageOptions: { globals: globals.browser } },
  tseslint.configs.recommended,
]);
