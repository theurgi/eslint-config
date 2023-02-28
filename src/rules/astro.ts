import { defineConfig } from 'eslint-define-config'
import { isPackageExists } from 'local-pkg'

export = defineConfig(
	isPackageExists('astro')
		? {
				overrides: [
					{
						files: ['*.astro'],

						extends: [
							// https://github.com/ota-meshi/eslint-plugin-astro
							'plugin:astro/recommended',
							'plugin:astro/jsx-a11y-recommended',
						],

						parser: 'astro-eslint-parser',

						parserOptions: {
							parser: '@typescript-eslint/parser',
							extraFileExtensions: ['.astro'],
						},

						settings: {
							'import/resolver': {
								typescript: {},
							},
						},
					},
				],
		  }
		: {}
)
