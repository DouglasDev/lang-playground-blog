function zeroPad(value) {
  return String(value).padStart(2, "0");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function normalizePathPrefix(value) {
  if (!value || value === "/") {
    return "";
  }

  const trimmed = value.replace(/\/+$/, "");
  return trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
}

module.exports = function (eleventyConfig) {
  const pathPrefix = normalizePathPrefix(
    process.env.ELEVENTY_PATH_PREFIX || "/lang-playground-blog/"
  );

  eleventyConfig.addPassthroughCopy({ demos: "demos" });
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addWatchTarget("./demos");
  eleventyConfig.addWatchTarget("./src/assets");

  eleventyConfig.addCollection("posts", (collectionApi) =>
    collectionApi
      .getFilteredByGlob("src/posts/*.md")
      .sort((left, right) => right.date - left.date)
  );

  eleventyConfig.addFilter("postDate", (value) => {
    const date = new Date(value);

    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    }).format(date);
  });

  eleventyConfig.addFilter("datePath", (value) => {
    const date = new Date(value);
    return `${date.getUTCFullYear()}/${zeroPad(date.getUTCMonth() + 1)}/${zeroPad(
      date.getUTCDate()
    )}`;
  });

  eleventyConfig.addShortcode("demoIframe", (src, title = "Embedded demo") => {
    const normalizedSrc = src.startsWith("/") ? src : `/${src}`;
    const iframeSrc = `${pathPrefix}${normalizedSrc}` || normalizedSrc;

    return `
<div class="demo-frame">
  <iframe
    src="${escapeHtml(iframeSrc)}"
    title="${escapeHtml(title)}"
    loading="lazy"
    allowfullscreen>
  </iframe>
</div>`;
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    pathPrefix: process.env.ELEVENTY_PATH_PREFIX || "/lang-playground-blog/",
  };
};
