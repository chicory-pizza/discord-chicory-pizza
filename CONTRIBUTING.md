# Developing discord.chicory.pizza

First, install [Node.js v24+](https://nodejs.org).

Run the web app:

```sh
npm install
npm start # go to http://localhost:5173
```

## Libraries

This project is a [Preact](https://preactjs.com) app for smaller file sizes.

## Code style

Use [Prettier](https://prettier.io). Run `npm run prettier -- --write` to auto-fix.

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
