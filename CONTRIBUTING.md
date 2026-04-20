# Getting started

Requirements:

- [Node.js v24+](https://nodejs.org)

Steps:

1. git clone
2. npm install
3. npm start
4. Open the web app at <http://localhost:5173>

## Visual Studio Code extensions

If you use [Visual Studio Code](https://code.visualstudio.com), it's recommended to install these extensions for the best experience.

You can find this list by opening the Command Palette and choosing "Extensions: Show Recommended Extensions"

- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Libraries

This project is a [Preact](https://preactjs.com) app for smaller file sizes.

## Code style

Use [Prettier](https://prettier.io). Run `npm run prettier -- --write` to auto-fix.

If you have the proper Visual Studio Code setup, then it should be auto-formatted on save, no need to worry about code style!

## Type-checking

Use [TypeScript](https://www.typescriptlang.org), previously used [Flow](https://flow.org). Run `npm run tsc -- -b` to see errors.

## Linting

Use [ESLint](https://eslint.org). Run `npm run lint` to see errors.

## Tests

Use [Vitest](https://vitest.dev). Run `npm test` to run the tests.

## Running all tests

The test suites are run on every push, it's best to run them on your system to avoid CI failures afterwards:

```bash
npm run tsc -- -b && npm run lint && npm test -- --run && npm run prettier -- -c
```
