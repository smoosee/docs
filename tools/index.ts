import * as freeicons from "./freeicons";
import * as indeps from "./indeps";
import * as wakemeup from "./wakemeup";

export const nav = [
  {
    text: "Tools",
    items: [
      //
      ...freeicons.nav,
      ...indeps.nav,
      ...wakemeup.nav,
    ],
  },
];

export const sidebar = [
  {
    text: "Tools",
    items: [
      //
      ...freeicons.sidebar,
      ...indeps.sidebar,
      ...wakemeup.sidebar,
    ],
  },
];
