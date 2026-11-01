import preact from "@astrojs/preact";
import type { StarlightPlugin } from "@astrojs/starlight/types";
import tailwindcss from "@tailwindcss/vite";

/** Styles a Starlight site with the design system, and makes ThemeToggle its theme picker. */
export function docsTheme(): StarlightPlugin {
  return {
    name: "@bhodgson/docs",
    hooks: {
      "config:setup"({
        config,
        updateConfig,
        addIntegration,
        addRouteMiddleware,
        astroConfig,
        logger,
      }) {
        addRouteMiddleware({ entrypoint: "@bhodgson/docs/route-middleware" });
        // Starlight's own MDX is optimised into plain HTML, which the design system's components can't replace.
        if (
          !astroConfig.integrations.some(({ name }) => name === "@astrojs/mdx")
        ) {
          logger.warn(
            "Add mdx() from @astrojs/mdx after starlight() in your integrations, so pages render with the design system's markdown components.",
          );
        }
        addIntegration(preact());
        addIntegration({
          name: "@bhodgson/docs/tailwind",
          hooks: {
            "astro:config:setup"({ updateConfig: updateAstroConfig }) {
              updateAstroConfig({ vite: { plugins: [tailwindcss()] } });
            },
          },
        });
        updateConfig({
          customCss: ["@bhodgson/docs/styles.css", ...(config.customCss ?? [])],
          components: {
            ThemeProvider: "@bhodgson/docs/components/ThemeProvider.astro",
            ThemeSelect: "@bhodgson/docs/components/ThemeSelect.astro",
            SiteTitle: "@bhodgson/docs/components/SiteTitle.astro",
            Footer: "@bhodgson/docs/components/Footer.astro",
            Hero: "@bhodgson/docs/components/Hero.astro",
            Pagination: "@bhodgson/docs/components/Pagination.astro",
            MarkdownContent: "@bhodgson/docs/components/MarkdownContent.astro",
            PageTitle: "@bhodgson/docs/components/PageTitle.astro",
            Search: "@bhodgson/docs/components/Search.astro",
            ...config.components,
          },
          // Headings link to themselves through the design system's headings instead; see AnchoredH2.
          markdown: { ...config.markdown, headingLinks: false },
          expressiveCode: {
            styleOverrides: {
              borderRadius: "0.5rem",
              borderColor: "var(--line)",
              codeBackground: "var(--surface-sunken)",
              codeFontFamily: "var(--font-mono)",
              uiFontFamily: "var(--font-mono)",
              frames: {
                editorTabBarBackground: "var(--surface)",
                terminalTitlebarBackground: "var(--surface)",
                frameBoxShadowCssValue: "none",
              },
            },
            ...(typeof config.expressiveCode === "object"
              ? config.expressiveCode
              : {}),
          },
        });
      },
    },
  };
}
