import js from '@eslint/js';
import eslintReact from '@eslint-react/eslint-plugin';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
	js.configs.recommended,
	tseslint.configs.strict, // strictTypeChecked,

	importPlugin.flatConfigs.typescript,
	jsxA11y.flatConfigs.recommended,
	eslintReact.configs['recommended-typescript'],
	reactHooks.configs['recommended-latest'],
	{
		plugins: {
			import: importPlugin,
		},
		rules: {
			'no-var': 'error',
			'no-unused-vars': [
				'warn',
				{
					args: 'none',
				},
			],
			'prefer-const': 'warn',

			// `importPlugin.flatConfigs.recommended` without slow rules
			// https://typescript-eslint.io/troubleshooting/typed-linting/performance/#eslint-plugin-import
			'import/export': 'error',
			'import/no-duplicates': 'warn',
			'import/no-named-as-default': 'warn',
			'import/order': [
				'warn',
				{
					'newlines-between': 'always',
					alphabetize: {
						order: 'asc',
						caseInsensitive: true,
					},
				},
			],
		},

		languageOptions: {
			globals: {
				...globals.browser,
			},
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},
	{
		files: ['**/*.mjs'],
		extends: [tseslint.configs.disableTypeChecked],
	},
	{
		ignores: ['dist/', 'coverage/'],
	},
);
