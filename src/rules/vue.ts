import { defineConfig } from 'eslint-define-config'
import { isPackageExists } from 'local-pkg'

export = defineConfig(
	isPackageExists('vue')
		? {
				overrides: [
					{
						files: ['*.vue'],

						extends: ['plugin:vue/vue3-recommended'],

						plugins: ['vue'],

						parser: 'vue-eslint-parser',

						parserOptions: {
							parser: '@typescript-eslint/parser',
							sourceType: 'module',
						},

						rules: {},
					},
				],
		  }
		: {}
)
