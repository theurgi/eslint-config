import { defineConfig } from 'eslint-define-config'

export = defineConfig({
	extends: [
		'./rules/base',
		'./rules/regexp',
		'./rules/imports',
		'./rules/promise',
		'./rules/unicorn',
		'./rules/no-use-extend-native',
		'./rules/eslint-comments',
		'./rules/json',
		'./rules/typescript',
		'./rules/astro',
		'./rules/svelte',
		'./rules/vue',
		'./rules/react',
		'./rules/service-workers',
		'./rules/jest',
		'./rules/prettier',
	],

	ignorePatterns: [
		// Nested node_modules
		'**/node_modules/**',

		'{tmp,temp}/**',
		'**/*.min.js',
		'**/vendor/**',
		'**/dist/**',
	],
})
