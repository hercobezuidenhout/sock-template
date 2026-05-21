# VS Code Extension Template (sock-template)

A template repository for creating VS Code extensions with modern tooling and automated release workflows.

## Features

This template includes:

- **Modern JavaScript/ES Module setup** with ESLint configuration
- **Testing framework** with Mocha and VS Code test runner
- **GitHub Actions workflows** for automated releases:
  - Beta releases on every merge to `main`
  - Stable releases via manual promotion
  - Hotfix releases from `hotfix/**` branches
  - PR validation with linting and testing
- **Conventional commits** enforcement and changelog management
- **Example extension** with a "Hello World" command to get you started

## Getting Started

### 1. Use This Template

Click "Use this template" on GitHub to create your own repository.

### 2. Customize Your Extension

Update the following files with your extension details:

**package.json:**
```json
{
  "name": "your-extension-name",
  "displayName": "Your Extension Display Name",
  "description": "Your extension description",
  "publisher": "your-publisher-name"
}
```

**test/extension.test.js:**
- Update extension ID references from `your-publisher-name.your-extension-name` to match your `package.json`

**GitHub Workflows** (`.github/workflows/*.yml`):
- Update the extension name in build steps (search for `gitsocks` and replace with your extension name)
- Add your `VSCE_PAT` secret for marketplace publishing (optional)

### 3. Install Dependencies

```bash
npm install
```

### 4. Start Developing

The template includes a basic "Hello World" command. Modify `extension.js` to add your functionality:

```javascript
export function activate(context) {
  // Your extension logic here
}
```

### 5. Test Your Extension

**Run in VS Code:**
1. Press `F5` to open an Extension Development Host
2. Test your commands and functionality

**Run tests:**
```bash
npm test
```

**Lint your code:**
```bash
npm run lint
```

## Project Structure

```
.
├── extension.js              // Extension entry point
├── test/
│   └── extension.test.js     // Extension tests
├── .github/workflows/        // Automated release workflows
│   ├── beta-release.yml      // Auto-release on main merges
│   ├── stable-release.yml    // Manual stable promotion
│   ├── hotfix-release.yml    // Hotfix from hotfix/** branches
│   └── pr-check.yml          // PR validation
├── package.json              // Extension manifest
├── CHANGELOG.md              // Track changes here
└── README.md                 // This file
```

## Release Workflow

### Beta Releases (Automated)

Every merge to `main` automatically:
1. Increments the beta version (e.g., `1.0.0-beta.1` → `1.0.0-beta.2`)
2. Creates a GitHub release with the `.vsix` file
3. Publishes to VS Code Marketplace as pre-release (if `VSCE_PAT` is configured)

Add the `bump:major` label to a PR to trigger a major version bump.

### Stable Releases (Manual)

When ready to promote a beta to stable:
1. Go to Actions → "Stable Release" workflow
2. Click "Run workflow"
3. Enter the beta version to promote (e.g., `1.3.0-beta.2`)
4. The workflow removes the `-beta.X` suffix and creates a stable release

### Hotfix Releases (Automated)

For urgent fixes:
1. Create a branch named `hotfix/fix-description`
2. Push your changes
3. The workflow automatically:
   - Calculates the next patch version
   - Creates a release
   - Publishes to marketplace

## Contributing Guidelines

### Commit Messages

This project follows [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>: <description>

[optional body]
```

**Common types:**
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `test:` - Test additions or changes
- `refactor:` - Code refactoring
- `chore:` - Maintenance tasks

### Changelog Updates

**Always update CHANGELOG.md** under the `[Unreleased]` section when submitting PRs. The PR validation workflow will fail if CHANGELOG.md is not modified.

### Pull Request Labels

- `bump:major` - Forces a major version bump (breaking changes)
- `bump:minor` - Forces a minor version bump (default for features)

## Development Commands

```bash
# Install dependencies
npm install

# Run tests
npm test

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Package extension
npx @vscode/vsce package
```

## Requirements

- VS Code 1.120.0 or higher
- Node.js 18.x or 20.x

## License

MIT
