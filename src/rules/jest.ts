import { defineConfig } from 'eslint-define-config'
import { isPackageExists } from 'local-pkg'

export = defineConfig(
	isPackageExists('jest')
		? {
				overrides: [
					{
						files: '**/*.{spec,test}.{js?(x),ts?(x)}',

						extends: 'plugin:jest/recommended',

						plugins: ['jest'],

						env: {
							jest: true,
						},

						rules: {},
					},
				],
		  }
		: {}
)
