import { defineConfig } from 'eslint-define-config'

export = defineConfig({
	extends: 'plugin:eslint-comments/recommended',

	rules: {
		// Disabled in favor of `unicorn/no-abusive-eslint-disable`
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/c137daa/index.js#L33
		'eslint-comments/no-unlimited-disable': 'off',

		// Disallow disable directives that don't affect any rules
		'eslint-comments/no-unused-disable': 'error',
	},
})
