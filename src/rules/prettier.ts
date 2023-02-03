import { defineConfig } from 'eslint-define-config'
import { isPackageExists } from 'local-pkg'

export = defineConfig(
	isPackageExists('prettier')
		? {
				extends: [
					// https://github.com/prettier/eslint-config-prettier
					'prettier',
				],

				rules: {},
		  }
		: {}
)
