# Next.js Project Template

A template to kickstart a Next.js project.

## Technologies

This template comes pre-configured with the following technologies:

- `eslint`: A linting tool for JavaScript/TypeScript code.
- `jest`: A testing framework for JavaScript, designed to ensure correctness of any JavaScript codebase.
- `lint-staged`: Runs linters on Git staged files.
- `plop`: A micro-generator framework that makes it easy to create code.
- `prettier`: A code formatter.
- `storybook`: A tool for developing UI components in isolation for React, Vue, and Angular.
- `styled-components`: A library for React and React Native that allows you to use component-level styles in your application.

_For more information about other dependencies, see the `package.json` file._

## Installation

1. Create a new repository from the template:

```bash
gh repo create your-new-repo-name --template thiagocrux/nextjs-template
```

2. Browse to the project folder:

```bash
cd your-project-folder
```

3. Install dependencies:

```
pnpm install
```

## Available scripts

This section describes the available scripts in the `package.json` file and their functionalities.

### Development

- #### `dev`

  Starts the server in development mode using `next dev` with TurboPack, enabling faster builds and live-reloading.

  ```bash
  pnpm dev
  ```

### Production

- #### `build`

  Compiles the `next` application for production.

  ```bash
  pnpm build
  ```

- #### `start`

  Runs the compiled `next` application in production mode..

  ```bash
  pnpm start
  ```

### Testing

- #### `test`

  Runs all tests using the `jest` framework with a maximum of 50% workers to optimize performance.

  ```bash
  pnpm test
  ```

- #### `test:ci`

  Runs all tests using the `jest` framework in a single process, useful for continuous integration environments.

  ```bash
  pnpm test:ci
  ```

- #### `test:watch`

  Runs tests in watch mode with `jest`, re-running tests related to changed files and utilizing a maximum of 25% workers.

  ```bash
  pnpm test:watch
  ```

### Code quality

- #### `lint`

  Analyzes your codebase for potential errors and style violations using `next lint`.

  ```bash
  pnpm lint
  ```

### Storybook

- #### `storybook`

  Starts the `storybook` server for developing UI components in isolation.

  ```bash
  pnpm storybook
  ```

- #### `storybook:build`

  Builds the `storybook` application for production deployment.

  ```bash
  pnpm storybook:build
  ```

### Code generation

- #### `generate:component`

  Generates new components using `plop` with the specified `plopfile`.

  ```bash
  pnpm generate:component
  ```

### Git hooks

- #### `prepare`

  Automatically configures Git hooks (via `husky`) before each commit.

  ```bash
  pnpm prepare
  ```

## Useful links

- [Next.js](https://nextjs.org/)
- [ESLint](https://eslint.org/)
- [Jest](https://jestjs.io/)
- [Plop](https://plopjs.com/)
- [Storybook](https://storybook.js.org/)
- [Styled Components](https://styled-components.com/)
- [Testing Library](https://testing-library.com/)

## License

[MIT](https://choosealicense.com/licenses/mit/)
