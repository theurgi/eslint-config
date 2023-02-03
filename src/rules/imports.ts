import { defineConfig } from 'eslint-define-config'

export = defineConfig({
	extends: [
		// https://github.com/import-js/eslint-plugin-import
		'plugin:import/recommended',
	],

	plugins: ['import'],

	env: {
		es6: true,
	},

	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
	},

	settings: {
		'import/ignore': ['node_modules', '\\.(css|svg|json)$'],
	},

	rules: {
		// Ensures an imported module can be resolved to a module on the local filesystem, as
		// defined by standard Node require.resolve behavior.
		// https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unresolved.md
		// https://github.com/import-js/eslint-import-resolver-typescript#configuration
		'import/no-unresolved': 'error',

		// Disable rules already handled by TypeScript for better performance.
		// https://typescript-eslint.io/docs/linting/troubleshooting#eslint-plugin-import
		'import/default': 'off',
		'import/named': 'off',
		'import/namespace': 'off',
		'import/no-named-as-default-member': 'off',

		// This rule reports any imports that come after non-import statements. [fixable]
		// https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/first.md
		'import/first': 'error',

		// Enforce a convention in the order of require() / import statements. [fixable]
		// https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
		'import/order': [
			'error',
			{
				'newlines-between': 'always',
				alphabetize: {
					order: 'asc',
					caseInsensitive: true,
				},
			},
		],

		// Forbids the use of mutable exports with var or let.
		// https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-mutable-exports.md
		'import/no-mutable-exports': 'error',

		// This rule forbids the import of modules using absolute paths. [fixable]
		// https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-absolute-path.md
		'import/no-absolute-path': 'error',
	},
})
