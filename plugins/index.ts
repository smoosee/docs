import * as vitePluginAngular from "./vite-plugin-angular";
import * as webpackPluginIstanbul from "./webpack-plugin-istanbul";
import * as vitePluginSass from "./vite-plugin-sass";

export const nav = [
  {
    text: "Plugins",
    items: [
      //
      ...vitePluginAngular.nav,
      ...webpackPluginIstanbul.nav,
      ...vitePluginSass.nav,
    ],
  },
];

export const sidebar = [
  {
    text: "Plugins",
    items: [
      //
      ...vitePluginAngular.sidebar,
      ...webpackPluginIstanbul.sidebar,
      ...vitePluginSass.sidebar,
    ],
  },
];
