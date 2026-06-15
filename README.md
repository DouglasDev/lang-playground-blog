# Lang Playground Blog

Simple Eleventy blog for documenting an experimental language-learning game and publishing playable prototype builds with GitHub Pages.

Production URL:

```text
https://douglasdev.github.io/lang-playground-blog/
```

## Local development

This repo uses Node `24` and `pnpm`.

If `pnpm` is not active yet on your machine:

```bash
source ~/.nvm/nvm.sh
corepack enable
corepack prepare pnpm@10.12.4 --activate
```

Install dependencies and start the dev server:

```bash
source ~/.nvm/nvm.sh
pnpm install
pnpm dev
```

The local site will be available at:

```text
http://localhost:8080/
```

`pnpm dev` serves the site with no path prefix locally, while production builds keep the GitHub Pages project path.

If port `8080` is already in use, Eleventy will automatically move to the next open port, usually `8081`.

## Build for production

```bash
source ~/.nvm/nvm.sh
pnpm build
```

The generated static site is written to `_site/`.

## GitHub Pages deployment

This repo now deploys through GitHub Actions instead of GitHub Pages' built-in Jekyll pipeline.

1. Push the repository to GitHub.
2. In GitHub, open `Settings` -> `Pages`.
3. Set `Source` to `GitHub Actions`.
4. Push to `main`.

The workflow in `.github/workflows/deploy.yml` will build the Eleventy site and publish `_site/`.

## What this repository is for

- Write development updates as Markdown blog posts.
- Publish static demos under `/demos/`.
- Embed those demos inside blog posts with iframes.
- Keep old demo versions online so older posts never break.

## Add a new blog post

1. Create a new file in `src/posts/`.
2. Name it using:

```text
YYYY-MM-DD-post-title.md
```

3. Add front matter:

```md
---
title: "Your Post Title"
date: 2026-06-14
---
```

4. Write the body in Markdown below the front matter.

Post URLs are generated automatically in this format:

```text
/YYYY/MM/DD/post-title/
```

## Add a new demo

Build prototypes however you like, then copy the generated static files into a folder under `/demos/`.

Use a stable versioned structure like this:

```text
demos/
  catch-chant/
    v1/
    v2/
    v3/
```

Recommended workflow:

1. Build your prototype locally with whatever toolchain you prefer.
2. Copy the exported HTML, JS, CSS, and asset files into a new version folder under `demos/<prototype-name>/`.
3. Keep existing version folders in place so older blog posts continue to work.
4. Link new posts to the newest version when appropriate.

## Embed a demo in a post

Use the Eleventy shortcode:

```njk
{% demoIframe "/demos/catch-chant/v1/index.html", "Catch Chant Prototype v1" %}
```

The shortcode automatically handles the local root path and the production GitHub Pages project path.
