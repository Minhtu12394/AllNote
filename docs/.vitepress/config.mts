import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Home",
  description: "Chuẩn bị đồ cho em mã đi chơi",
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
        text: "Hà Mã đi chơi",
        link: "/hama.md",
      },
      {
        text: "All Note",
        items: [
          { text: "HTML-CSS", link: "html-css/index.md" },
          { text: "JS", link: "js/index.md" },
          {
            text: "Vue",
            link: "vue/index.md",
            collapsed: true,
            items: [
              {
                text: "Data binding and DOM reactive",
                link: "vue/data_binding_and_dom.md",
              },
            ],
          },
        ],
      },
    ],
  },
});
