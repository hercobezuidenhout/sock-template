# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Claude Do's and Don'ts

### Don't

- Add comments to the code unless it is JSDocs

### Do

- Add JSDocs to all JavaScript functions
- Follow the existing code style and patterns
- Update CHANGELOG.md for all user-facing changes

## Project Overview

This is a **VS Code extension template** repository called "sock-template". It provides a starting point for building VS Code extensions with:

- Modern ES Module setup
- Automated release workflows (beta, stable, hotfix)
- Testing infrastructure with Mocha
- ESLint configuration
- Example "Hello World" command

**This is a template, not a specific extension.** Generic placeholder values should remain in place (e.g., `your-extension-name`, `your-publisher-name`) so developers can customize them when using this template.

## Development Commands

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run linting
npm run lint

# Fix linting issues
npm run lint:fix
```

## Running and Debugging

To test the extension during development:
1. Open the project in VS Code
2. Press F5 or use "Run Extension" launch configuration
3. A new VS Code window opens with the extension loaded
4. Use `Ctrl+Shift+P` (or `Cmd+Shift+P` on macOS) to access commands

Current example command:
- `Hello World` - Shows an information message

## Testing

- Test framework: Mocha via `@vscode/test-cli`
- Test files: Located in `test/**/*.test.js`
- Test configuration: `.vscode-test.mjs`
- Tests run in a VS Code extension host environment

To run tests:
```bash
npm test
```

## Project Structure

```
.
├── extension.js              // Extension entry point
├── test/
│   └── extension.test.js     // Extension tests
├── .github/workflows/        // CI/CD workflows
├── package.json              // Extension manifest
├── CHANGELOG.md              // Change tracking
└── README.md                 // Documentation
```

## Architecture

**Extension Entry Point**: `extension.js`
- `activate(context)` - Called when extension activates
  - Register commands via `vscode.commands.registerCommand()`
  - Push disposables to `context.subscriptions` for cleanup
- `deactivate()` - Called when extension deactivates

**Activation**: Extension activates on VS Code startup (`activationEvents: ["onStartupFinished"]`)

**VS Code API Version**: Requires VS Code ^1.120.0

## Configuration Files

- `eslint.config.mjs` - ESLint configuration (ES2022, Node + CommonJS + Mocha globals)
- `jsconfig.json` - JavaScript language configuration (Node16 modules, ES2022 target)
- `.vscode/launch.json` - Debug configuration for running the extension

## Release Workflow

### Beta Releases
- Automatically triggered on every merge to `main`
- Increments beta version
- Creates GitHub release with `.vsix` file
- Publishes to marketplace as pre-release (if configured)

### Stable Releases
- Manually triggered via GitHub Actions workflow
- Promotes a beta version to stable
- Updates CHANGELOG.md

### Hotfix Releases
- Automatically triggered by pushing to `hotfix/**` branches
- Creates patch release from stable base
- Publishes immediately

## Customization Guide

When creating a new extension from this template:

1. **Update package.json**: Change `name`, `displayName`, `description`, `publisher`
2. **Update tests**: Replace extension ID in `test/extension.test.js`
3. **Update workflows**: Replace `gitsocks` with your extension name in `.github/workflows/*.yml`
4. **Add functionality**: Implement your extension logic in `extension.js`
5. **Update documentation**: Modify README.md and this file for your specific extension
