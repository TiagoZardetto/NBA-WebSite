/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
	trailingComma: "es5",
	tabWidth: 2,
	useTabs: true,
	semi: true,
	singleQuote: false,
	printWidth: 80,
	endOfLine: "auto",
	plugins: ["prettier-plugin-tailwindcss"],
};

export default config;
