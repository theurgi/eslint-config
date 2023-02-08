# eslint-config

A dynamic multi-framework ESLint config.

## Features

- Dynamic ESLint rules based on your project's dependencies (React, TypeScript, Svelte, Vue, etc.)
- Installs as a single devDependency: No need to [install a bunch of internally extended configs](https://github.com/eslint/eslint/issues/3458#issue-102077087)
- Optionally overrides ESLint formatting with [Prettier](https://prettier.io/)

## Supported frameworks/tools

- [Astro](https://astro.build/)
- [JSON](https://ota-meshi.github.io/eslint-plugin-jsonc/)
- [Jest](https://jestjs.io/)
- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org/) (with rules for [hooks](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks) and [a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y))
- [Svelte](https://svelte.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vue.js](https://vuejs.org/)

The lint rules that are applied to a given file depend on its extension and whether its associated package is a dependency of your project.

### Examples

1. A file with a `.tsx` extension inside of a project with dependencies on `typescript`, `react`, and `prettier` will be linted with rules for TypeScript, React, and Prettier; but not with rules for Svelte or Vue.
2. A file whose name matches the glob `**/*.{spec,test}.{js?(x),ts?(x)}` inside of a project with a dependency on `jest` will be linted with Jest rules.

### Node.js

Node.js projects are a special case because `node` itself is not typically installed as a project level dependency and it does not always use unique file extensions. To address this, this package exports a separate config with additional rules for Node.js. See [Usage](#usage).

## Internally extended configurations

In addition to framework or file specific lint rules, rules common to multiple file types are internally extended from the following configs/plugins:

- [confusing-browser-globals](https://github.com/facebook/create-react-app/tree/main/packages/confusing-browser-globals)
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) (only if your project depends on `prettier`)
- [eslint-plugin-eslint-comments](https://mysticatea.github.io/eslint-plugin-eslint-comments/)
- [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import)
- [eslint-plugin-no-use-extend-native](https://github.com/dustinspecker/eslint-plugin-no-use-extend-native)
- [eslint-plugin-promise](https://github.com/eslint-community/eslint-plugin-promise)
- [eslint-plugin-regexp](https://github.com/ota-meshi/eslint-plugin-regexp)
- [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)

## Install

Install as a devDependency with your preferred Node.js package manager (npm, pnpm, yarn, etc.):

```sh
pnpm i -D @theurgi/eslint-config
```

## Usage

Extend this package in your local eslint config (e.g. .eslintrc.json):

### For non Node.js projects:

```json
{
  "extends": ["@theurgi/eslint-config"]
}
```

### For Node.js projects:

This config includes all the non-Node rules _plus_ Node specific rules and overrides.

```json
{
  "extends": ["@theurgi/eslint-config/node"]
}
```

## Editor support

### VSCode

For error highlighting and auto-fix-on-save, install the [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and configure [VSCode's settings](https://code.visualstudio.com/docs/getstarted/settings) as follows:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },

  "eslint.validate": [
    "astro",
    "javascript",
    "javascriptreact",
    "json",
    "json5",
    "jsonc",
    "svelte",
    "typescript",
    "typescriptreact",
    "vue"
  ]
}
```

## Thanks 🙏

Special thanks to [privatenumber](https://github.com/privatenumber) whose [eslint-config](https://github.com/privatenumber/eslint-config) was the primary reference for this package.
