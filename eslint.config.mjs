import js from '@eslint/js';
import eslintReact from '@eslint-react/eslint-plugin';
import vitest from '@vitest/eslint-plugin';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactHooks from 'eslint-plugin-react-hooks';
import testingLibrary from 'eslint-plugin-testing-library';
import tseslint from 'typescript-eslint';

export default tseslint.config(
	js.configs.recommended,
	tseslint.configs.strictTypeChecked,

	importPlugin.flatConfigs.typescript,
	jsxA11y.flatConfigs.recommended,
	eslintReact.configs['recommended-type-checked'],
	reactHooks.configs['recommended-latest'],
	{
		rules: {
			'no-var': 'error',
			'prefer-const': 'warn',

			'@eslint-react/no-leaked-conditional-rendering': 'error',
			'@eslint-react/prefer-read-only-props': 'error',

			// `importPlugin.flatConfigs.recommended` without slow rules
			// https://typescript-eslint.io/troubleshooting/typed-linting/performance/#eslint-plugin-import
			'import/export': 'error',
			'import/no-duplicates': 'warn',
			'import/no-named-as-default': 'warn',

			'import/enforce-node-protocol-usage': ['error', 'always'],
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
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},
	{
		files: ['tests/**'],
		extends: [testingLibrary.configs['flat/react'], vitest.configs.recommended],
	},
	{
		ignores: ['dist/', 'coverage/'],
	},
);
