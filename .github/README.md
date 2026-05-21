# sock-template GitHub Configuration

This directory contains automated workflows and templates for the sock-template.

## Workflows

### Beta Release (`beta-release.yml`)
- **Trigger**: Every merge to `main`
- **Action**: Creates beta release (e.g., `1.0.0-beta.1`)
- **Publishes**: Pre-release to marketplace (if `VSCE_PAT` configured)

### Stable Release (`stable-release.yml`)
- **Trigger**: Manual (GitHub Actions UI)
- **Action**: Promotes beta to stable
- **Publishes**: Stable release to marketplace

### Hotfix Release (`hotfix-release.yml`)
- **Trigger**: Push to `hotfix/**` branches
- **Action**: Creates patch release
- **Publishes**: Immediately to marketplace

### PR Check (`pr-check.yml`)
- **Trigger**: Pull requests to `main`
- **Checks**:
  - CHANGELOG.md modified
  - Tests pass (Node 18.x, 20.x)
  - Linting passes
  - Breaking changes labeled correctly

## Templates

### Pull Request Template
Location: `PULL_REQUEST_TEMPLATE.md`

Used for all PRs with checklist for:
- CHANGELOG updates
- Code quality checks
- Test coverage
- Breaking change labels

### Issue Templates

**Bug Report** (`ISSUE_TEMPLATE/bug_report.md`)
- Structured bug reporting
- Environment details
- Reproduction steps

**Feature Request** (`ISSUE_TEMPLATE/feature_request.md`)
- Feature proposals
- Use case descriptions
- Alternative solutions

## Secrets Configuration

### Required for Marketplace Publishing

Add `VSCE_PAT` secret:
1. Generate token at [Visual Studio Marketplace](https://marketplace.visualstudio.com/manage)
2. Add to repository: Settings → Secrets → Actions
3. Name: `VSCE_PAT`
4. Value: Your personal access token

Without this secret, workflows will still create GitHub releases with `.vsix` files.

## Release File Naming

All workflows dynamically determine the extension name from `package.json`:
```bash
EXTENSION_NAME=$(node -p "require('./package.json').name")
```

This ensures the workflows work for any extension created from this template.
