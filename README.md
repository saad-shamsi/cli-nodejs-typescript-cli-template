# Node.js TypeScript CLI Template

This repository is a Node.js TypeScript template for creating CLI applications. It comes preconfigured with TypeScript, allowing you to write your code in a type-safe manner.

## Prerequisites

Make sure you have the following tools installed on your system:

- [Node.js](https://nodejs.org/en) (v16.x recommended)
- [pnpm](https://pnpm.io/) (Version 7 or later)

## Getting Started

To use this template, follow these steps:

1. Click on the "Use this template" button to create a new repository based on this template.
1. Clone your newly created repository to your local machine.
1. Install the project dependencies using pnpm:

```bash
pnpm install
```

## Project Structure
- `src/index.ts`: This is the entry point of the CLI application, currently set to output `"Hello World!"` to the console. You can modify this file to implement your custom CLI logic.
- `.github/workflows/main.yml`: This GitHub Actions workflow is triggered on every push to any branch and runs linting and building tasks.
- `.github/workflows/publish.yml`: This GitHub Actions workflow is triggered on successful completion of the main workflow and handles the publishing process if necessary.

## Available Scripts
- `pnpm start`: Builds the project and starts the CLI application.
- `pnpm build`: Compiles the TypeScript code to CommonJS (CJS) and ECMAScript modules (ESM) formats, and generates declaration files (d.ts).
- `pnpm lint`: Checks for TypeScript type errors and enforces strict type checking.

## Contributing
We welcome contributions! If you find any issues or have improvements to suggest, feel free to open a pull request.

## License
This project is licensed under the [MIT License](./LICENSE).

## Acknowledgments

This template is built using the following key dependencies:

- [TypeScript](https://www.typescriptlang.org): For adding static typing to JavaScript.
- [Tsup](https://github.com/egoist/tsup): For bundling TypeScript files.
- [Changesets](https://github.com/changesets/changesets): For managing version updates and changelogs.
- [Inquirer](https://github.com/SBoudrias/Inquirer.js): For interactive CLI prompts.

## Author

Saad Shamsi

## Contact

Contact
For any inquiries or questions, please reach out to me on [Twitter](https://x.com/SaadShamsi09).