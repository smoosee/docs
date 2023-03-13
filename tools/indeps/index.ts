export const nav = [
  {
    text: "indeps",
    link: "/tools/indeps/",
  },
];

export const sidebar = [
  {
    text: "indeps",
    collapsed: true,
    items: [
      { text: "Introduction", link: "/tools/indeps/" },
      { text: "Installation", link: "/tools/indeps/installation" },
      { text: "Usage", link: "/tools/indeps/usage" },
      { text: "Configuration", link: "/tools/indeps/configuration" },
      {
        text: "API",
        collapsed: true,
        items: [
          { text: "buildVersion", link: "/tools/indeps/api/buildVersion" },
          { text: "cleanupBuild", link: "/tools/indeps/api/cleanupBuild" },
          { text: "internals", link: "/tools/indeps/api/internals" },
          { text: "locals", link: "/tools/indeps/api/locals" },
          { text: "moveDist", link: "/tools/indeps/api/moveDist" },
          { text: "restoreDist", link: "/tools/indeps/api/restoreDist" },
          { text: "scripts", link: "/tools/indeps/api/scripts" },
        ],
      },
    ],
  },
];
