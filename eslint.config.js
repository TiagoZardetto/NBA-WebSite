import globals from "globals";
import { defineConfig } from "eslint/config";

import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

import eslintPluginPrettier from "eslint-plugin-prettier/recommended";

export default defineConfig(
	[
		{
			ignores: ["dist", "node_modules"],
			files: ["**/*.{js,jsx}"],
			languageOptions: {
				ecmaVersion: "latest",
				sourceType: "module",
				globals: globals.browser,
				parserOptions: {
					ecmaFeatures: { jsx: true },
				},
			},
			settings: { react: { version: "19.0" } },
			plugins: {
				react,
				"react-hooks": reactHooks,
				"react-refresh": reactRefresh,
			},
			rules: {
				...js.configs.recommended.rules,
				...react.configs.recommended.rules,
				...react.configs["jsx-runtime"].rules,
				...reactHooks.configs.recommended.rules,
				...reactRefresh.configs.vite.rules,
				"no-unused-vars": ["warn", { varsIgnorePattern: "^_" }],
				"react/prop-types": "off",
			},
		},
	],
	eslintPluginPrettier
);
