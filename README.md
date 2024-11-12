# Next.js template

This is a project template for a Next.js application with TypeScript, Styled Components, Storybook, Jest, ESLint, Prettier and commit linters already configured.

## Setup

By default this project uses [pnpm](https://pnpm.io/) and you can run the command below to install all the dependencies.

```bash
pnpm install
```

## Scripts

Start the development server on `http://localhost:3000`:

```bash
pnpm dev
```

Build the application for production:

```bash
pnpm build
```

Start the production server:

```bash
pnpm start
```

Search for errors:

```bash
pnpm lint
```

Run tests:

```bash
# Run tests
pnpm test

# Run tests and check the coverage
pnpm test:coverage

# Run all tests serially in the current process
pnpm test:ci
```

Start storybook server on `http://localhost:6006`:

```bash
pnpm storybook
```

Build storybook for production:

```bash
pnpm build-storybook
```

Auto generate a new component template files (component, styles, test and story files):

```bash
pnpm generate:component
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
