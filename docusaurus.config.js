const config = {
  title: "Learn C#",
  tagline: "A structured, docs-first C# learning path",
  url: "https://mehdihadeli.github.io",
  baseUrl: "/learn-csharp/",
  organizationName: "mehdihadeli",
  projectName: "learn-csharp",
  trailingSlash: false,
  onBrokenLinks: "throw",
  future: {
    experimental_faster: {
      swcJsLoader: false,
      swcJsMinimizer: false,
      swcHtmlMinimizer: false,
      lightningCssMinimizer: false,
      mdxCrossCompilerCache: false,
      rspackBundler: false,
      rspackPersistentCache: false,
      ssgWorkerThreads: false,
    },
  },
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: false,
        pages: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [
    function removeWebpackBarPlugin() {
      return {
        name: "remove-webpackbar-plugin",
        configureWebpack(config) {
          return {
            mergeStrategy: {
              plugins: "replace",
            },
            plugins: (config.plugins || []).filter(
              (plugin) => plugin?.constructor?.name !== "WebpackBarPlugin",
            ),
          };
        },
      };
    },
  ],
  themeConfig: {
    navbar: {
      title: "Learn C#",
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        {
          href: "https://github.com/mehdihadeli/learn-csharp",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Introduction",
              to: "/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "C# Language Reference",
              href: "https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/mehdihadeli/learn-csharp",
            },
          ],
        },
      ],
      copyright: `Copyright ${new Date().getFullYear()} Learn C#`,
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  },
};

module.exports = config;
