import js from '@eslint/js';
import flowtype from 'eslint-plugin-ft-flow';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import hermesParser from 'hermes-eslint';

export default [
	js.configs.recommended,
	importPlugin.flatConfigs.recommended,
	importPlugin.flatConfigs.react,
	jsxA11y.flatConfigs.recommended,
	react.configs.flat.recommended,
	react.configs.flat['jsx-runtime'],
	reactHooks.configs['recommended-latest'],
	{
		plugins: {
			'ft-flow': flowtype,
		},
	},
	{
		rules: {
			...flowtype.configs.recommended.rules,

			'no-constant-binary-expression': 'error',
			'no-var': 'error',
			'no-unused-vars': [
				'warn',
				{
					args: 'none',
					ignoreRestSiblings: true,
				},
			],
			'prefer-const': 'warn',

			// Was disabled by flowtype.configs.recommended.rules
			'no-undef': 'error',
			'ft-flow/define-flow-type': 'error',

			// Prettier already handles this
			'no-mixed-spaces-and-tabs': 'off',
			'ft-flow/generic-spacing': 'off',
			'ft-flow/space-after-type-colon': 'off',

			'ft-flow/newline-after-flow-annotation': 'error',
			'ft-flow/require-indexer-name': 'error',
			'ft-flow/require-readonly-react-props': 'error',

			'react/button-has-type': 'error',
			'react/jsx-sort-props': 'warn',
			'react/prop-types': 'off',

			'import/no-unresolved': 'off', // bugged
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
			parser: hermesParser,
		},

		settings: {
			'import/extensions': ['.js', '.jsx'],

			react: {
				version: 'detect',
				flowVersion: '0.213.1',
			},
		},
	},
	{
		files: ['**/*.js', '**/*.jsx'],
	},
	{
		ignores: ['flow-typed/', 'dist/', 'coverage/'],
	},
];
