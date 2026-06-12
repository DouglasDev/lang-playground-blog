# Lang Playground Blog

Simple Jekyll blog for documenting an experimental language-learning game and publishing playable prototype builds with GitHub Pages.

This repository is currently configured as a GitHub Pages project site at:

```text
https://douglasdev.github.io/lang-playground-blog/
```

## What this repository is for

- Write development updates as Markdown blog posts.
- Publish static demos under `/demos/`.
- Embed those demos inside blog posts with iframes.
- Keep old demo versions online so older posts never break.

## Install dependencies

1. Install Ruby and Bundler.
2. From the repository root, run:

```bash
bundle install
```

## Run locally

```bash
bundle exec jekyll serve
```

The site will be available at:

```text
http://127.0.0.1:4000/
```

## Publish to GitHub Pages

1. Create a GitHub repository for this project.
2. For the simplest setup, use a user site repository such as `<your-username>.github.io`.
3. Push this repository to GitHub.
4. In GitHub, open `Settings` -> `Pages`.
5. Set the source to `Deploy from a branch`.
6. Choose your publishing branch, usually `main`, and the `/ (root)` folder.
7. Commit and push future changes to that branch.

GitHub Pages will build the Jekyll site automatically using the repository contents.

This repo is set up as a project site, so `_config.yml` includes:

```yml
url: "https://douglasdev.github.io"
baseurl: "/lang-playground-blog"
```

If the repository name changes later, update `baseurl` to match the new repo name.

## Add a new blog post

1. Create a new file in `_posts/`.
2. Name it using Jekyll's required format:

```text
YYYY-MM-DD-post-title.md
```

3. Add front matter at the top:

```md
---
layout: post
title: "Your Post Title"
---
```

4. Write the body in Markdown below the front matter.

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

For example, a Phaser export could live at:

```text
demos/catch-chant/v2/index.html
```

## Embed a demo in a post

If you use a normal iframe in Markdown, include the repo prefix for project sites:

```html
<iframe
  src="/lang-playground-blog/demos/catch-chant/v1/index.html"
  width="800"
  height="600"
  loading="lazy">
</iframe>
```

The safer option is the built-in include, which automatically uses the full GitHub Pages URL:

```liquid
{% include demo-iframe.html
  src="/demos/catch-chant/v1/index.html"
  title="Catch Chant Prototype v1"
%}
```
