import { defineConfig } from 'eslint-define-config'
import { isPackageExists } from 'local-pkg'

export = defineConfig(
	isPackageExists('typescript')
		? {
				overrides: [
					{
						files: ['*.ts', '*.tsx'],

						extends: [
							// https://typescript-eslint.io/
							'plugin:@typescript-eslint/recommended',

							// https://github.com/import-js/eslint-plugin-import/blob/6c8981d/config/typescript.js
							'plugin:import/typescript',
						],

						parser: '@typescript-eslint/parser',

						settings: {
							'import/parsers': {
								'@typescript-eslint/parser': ['.ts', '.tsx'],
							},

							'import/resolver': {
								typescript: {
									alwaysTryTypes: true,
								},
							},
						},

						rules: {},
					},
				],
		  }
		: {}
)
