import { defineConfig } from "vitepress";
import { SearchPlugin } from "vitepress-plugin-search";
import * as plugins from '../plugins';
import * as tools from '../tools';

export default defineConfig({
  title: "smoosee",
  description: "Cutting-edge custom plugins & tools for the modern web apps",
  themeConfig: {
    siteTitle: "smoosee",
    logo: ".vitepress/logo.png",
    socialLinks: [{ icon: "github", link: "https://github.com/smoosee" }],
    nav: [
      //
      ...plugins.nav,
      ...tools.nav,
    ],
    sidebar: [
      //
      ...plugins.sidebar,
      ...tools.sidebar,
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023-present Mostafa Sherif",
    },
  },
  vite: {
    plugins: [
      SearchPlugin({
        previewLength: 62,
        buttonLabel: "Search",
        placeholder: "Search docs",
      }),
    ],
  },
});
