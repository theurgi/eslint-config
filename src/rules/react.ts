import { defineConfig } from 'eslint-define-config'
import { isPackageExists } from 'local-pkg'

export = defineConfig(
	isPackageExists('react')
		? {
				overrides: [
					{
						files: '*.{jsx,tsx}',

						extends: [
							// https://github.com/jsx-eslint/eslint-plugin-react
							'plugin:react/recommended',

							// https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks
							'plugin:react-hooks/recommended',
						],

						settings: {
							react: {
								version: 'detect',
							},
						},

						rules: {
							'react/jsx-max-props-per-line': [
								'error',
								{
									maximum: 1,
								},
							],

							'unicorn/filename-case': [
								'error',
								{
									case: 'pascalCase',
									ignore: [/^.+\.(?:spec\.[jt]sx?|test\.[jt]sx?)$/],
								},
							],
						},
					},
				],
		  }
		: {}
)
