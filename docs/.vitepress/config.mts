import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AllNote",
  description: "All note",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local",
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "All Note",
        items: [
          { text: "HTML-CSS", link: "html-css/html-css.md" },
          { text: "JS", link: "js/js.md" },
        ],
      },
    ],
    lastUpdated: true,
    socialLinks: [
      { icon: "github", link: "https://github.com/Minhtu12394/AllNote" },
    ],
  },
});
