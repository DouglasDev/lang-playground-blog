---
title: First Prototype
description: First playable prototype post with an embedded demo iframe.
date: 2026-06-12
tags:
  - posts
---

The first step for this blog is a tiny placeholder build pipeline: keep the site
simple, publish static prototypes under `/demos/`, and embed them directly in
posts.

This fits the long-term workflow well:

- write development notes in Markdown
- export prototypes however you like
- copy each stable build into a versioned folder
- keep older versions online so past posts still make sense

Here is the first embedded demo placeholder:

{% demoIframe "/demos/catch-chant/v1/index.html", "Catch Chant Prototype v1" %}

Future iterations can follow the same path, for example `v2` and `v3`, without
breaking this post.
