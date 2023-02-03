import confusingBrowserGlobals from 'confusing-browser-globals'
import { defineConfig } from 'eslint-define-config'

export = defineConfig({
	overrides: [
		{
			files: '*.sw.js',

			env: {
				serviceworker: true,
			},

			rules: {
				'no-restricted-globals': [
					'error',
					...confusingBrowserGlobals.filter((variable) => variable !== 'self'),
				],
			},
		},
	],
})
