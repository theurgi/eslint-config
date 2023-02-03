import { defineConfig } from 'eslint-define-config'

export = defineConfig({
	// https://github.com/dustinspecker/eslint-plugin-no-use-extend-native
	extends: 'plugin:no-use-extend-native/recommended',
})
