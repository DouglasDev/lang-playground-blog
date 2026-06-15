# Lang Playground Blog

This site now starts from the official [`11ty/eleventy-base-blog`](https://github.com/11ty/eleventy-base-blog) template and is configured to use `pnpm`, Prettier, Husky, and GitHub Pages deployment.

## Local development

```bash
pnpm install
pnpm dev
```

Build a production site to `_site/`:

```bash
pnpm build
```

Build with the GitHub Pages path prefix:

```bash
pnpm build-ghpages
```

## Formatting

Format the repo:

```bash
pnpm format
```

Check formatting:

```bash
pnpm format:check
```

Staged files are formatted automatically on commit via Husky and lint-staged.

## GitHub Pages

Deployment is handled by [.github/workflows/deploy.yml](./.github/workflows/deploy.yml).

In GitHub:

1. Open `Settings` -> `Pages`.
2. Set `Source` to `GitHub Actions`.
3. Push to `main`.

The workflow uses `pnpm run build-ghpages`, which is already configured for the `/lang-playground-blog/` path prefix.
