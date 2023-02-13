import { defineConfig } from 'eslint-define-config'

export = defineConfig({
	ignorePatterns: ['package-lock.json'],

	overrides: [
		{
			files: '*.{json,json5,jsonc}',

			extends: 'plugin:jsonc/base',
		},
		{
			files: 'package.json',
			rules: {
				'jsonc/sort-keys': [
					'error',
					{
						pathPattern: '^$', // Targets root properties

						order: [
							'name',
							'version',
							'private',
							'publishConfig',
							'description',
							'keywords',
							'license',
							'repository',
							'funding',
							'author',
							'type',
							'files',
							'main',
							'module',
							'types',
							'exports',
							'imports',
							'bin',
							'unpkg',
							'scripts',
							'husky',
							'simple-git-hooks',
							'lint-staged',
							'engines',
							'peerDependencies',
							'peerDependenciesMeta',
							'dependencies',
							'optionalDependencies',
							'devDependencies',
							'bundledDependencies',
							'bundleDependencies',
							'overrides',
							'pnpm',
							'commitlint',
							'eslintConfig',
							'prettier',
						],
					},
					{
						pathPattern: '^(?:dev|peer|optional|bundled)?Dependencies$',
						order: { type: 'asc' },
					},
				],
			},
		},
		{
			files: 'tsconfig.json',
			extends: 'plugin:jsonc/recommended-with-jsonc',
		},
	],
})
