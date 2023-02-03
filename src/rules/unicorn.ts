import { defineConfig } from 'eslint-define-config'

export = defineConfig({
	extends: 'plugin:unicorn/recommended',

	rules: {
		// Disabled in favor of eslint-plugin-regexp.
		'unicorn/better-regex': 'off',

		'unicorn/consistent-function-scoping': 'off',

		'unicorn/no-array-for-each': 'off',

		// Handled by eslint-plugin-n/no-deprecated-api. Disabled to avoid conflicts.
		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-deprecated-api.md
		'unicorn/no-new-buffer': 'off',

		// Too many cases where 3rd party library expects null.
		'unicorn/no-null': 'off',

		// Handled by eslint-plugin-n/no-process-exit. Disabled to avoid conflicts.
		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-process-exit.md
		'unicorn/no-process-exit': 'off',

		// NOTE Be aware of this but leave it on unless it becomes a problem.
		//
		// ts-node can't load TypeScript's compilation of `export _____ from '_____'`
		// https://github.com/privatenumber/esbuild-loader/issues/232#issuecomment-998487005
		// Disable even warnings because of autofix.
		//
		// 'unicorn/prefer-export-from': [
		// 	'off',
		// 	{
		// 		ignoreUsedVariables: true,
		// 	},
		// ],

		// https://github.com/sindresorhus/eslint-plugin-unicorn/issues/1273#issuecomment-1069506684
		'unicorn/prefer-json-parse-buffer': 'off',

		// NOTE Be aware of this but leave it on unless it becomes a problem.
		//
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/898fcb4/docs/rules/prevent-abbreviations.md
		// 'unicorn/prevent-abbreviations': [
		// 	'error',
		// 	{
		// 		// case insensitive and matches substrings
		// 		replacements: {
		// 			args: false,
		// 			dev: false,
		// 			dist: false,
		// 			env: false,
		// 			pkg: false,
		// 			prop: false,
		// 			props: false,
		// 			ref: false,
		// 			src: false,
		// 		},
		// 	},
		// ],

		'unicorn/template-indent': 'off',
	},
})
