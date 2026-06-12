---
layout: post
title: "First Prototype"
---

The first step for this blog is a tiny placeholder build pipeline: keep the Jekyll site simple, publish static prototypes under `/demos/`, and embed them directly in posts.

This fits the long-term workflow well:

- write development notes in Markdown
- export prototypes however you like
- copy each stable build into a versioned folder
- keep older versions online so past posts still make sense

Here is the first embedded demo placeholder:

{% include demo-iframe.html
  src="/demos/catch-chant/v1/index.html"
  title="Catch Chant Prototype v1"
%}

Future iterations can follow the same path, for example `v2` and `v3`, without breaking this post.
