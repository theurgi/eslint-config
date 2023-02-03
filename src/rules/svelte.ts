import { defineConfig } from 'eslint-define-config'
import { isPackageExists } from 'local-pkg'

export = defineConfig(
	isPackageExists('svelte')
		? {
				overrides: [
					{
						files: ['*.svelte'],

						extends: [
							// https://github.com/ota-meshi/eslint-plugin-svelte
							'plugin:svelte/recommended',
							'plugin:svelte/prettier',
						],

						parser: 'svelte-eslint-parser',

						parserOptions: {
							// Parse the `<script>` in `.svelte` as TypeScript
							parser: '@typescript-eslint/parser',
						},

						rules: {},
					},
				],
		  }
		: {}
)
