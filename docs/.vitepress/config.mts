import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AllNote",
  description: "All note",
  base: "/AllNote/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local",
    },
    lastUpdated: true,
    socialLinks: [
      { icon: "github", link: "https://github.com/Minhtu12394/AllNote" },
    ],
    nav: [{ text: "Home", link: "/" }],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2025-present TuPM",
    },
    sidebar: [
      {
        text: "All Note",
        items: [
          { text: "HTML-CSS", link: "html-css/index.md" },
          { text: "JS", link: "js/index.md" },
          { text: "Vue", link: "vue/index.md" },
        ],
      },
    ],
  },
});
