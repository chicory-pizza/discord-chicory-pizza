import js from '@eslint/js';
import eslintReact from '@eslint-react/eslint-plugin';
import vitest from '@vitest/eslint-plugin';
import {defineConfig} from 'eslint/config';
import {importX} from 'eslint-plugin-import-x';
//import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactHooks from 'eslint-plugin-react-hooks';
import testingLibrary from 'eslint-plugin-testing-library';
import tseslint from 'typescript-eslint';

export default defineConfig(
	js.configs.recommended,
	tseslint.configs.strictTypeChecked,

	importX.flatConfigs.typescript,
	// Temporarily removed to unblock ESLint v10
	// jsxA11y.flatConfigs.recommended,
	eslintReact.configs['strict-type-checked'],
	reactHooks.configs.flat.recommended,
	{
		rules: {
			'no-var': 'error',
			'prefer-const': 'warn',

			'@eslint-react/immutability': 'error',
			// ref as prop (https://react.dev/blog/2024/12/05/react-19#ref-as-a-prop)
			// is not supported on Preact yet
			'@eslint-react/no-forward-ref': 'off',
			'@eslint-react/prefer-destructuring-assignment': 'off',

			'@typescript-eslint/no-empty-object-type': [
				'error',
				{
					allowObjectTypes: 'always',
				},
			],

			// `importX.flatConfigs.recommended` without slow rules
			// https://typescript-eslint.io/troubleshooting/typed-linting/performance/#eslint-plugin-import
			'import-x/export': 'error',
			'import-x/no-named-as-default': 'warn',
			'import-x/no-duplicates': 'warn',

			// 'import/enforce-node-protocol-usage': ['error', 'always'],
			'import-x/order': [
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
