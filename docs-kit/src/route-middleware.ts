import {
  defineRouteMiddleware,
  type StarlightRouteData,
} from "@astrojs/starlight/route-data";
// @ts-expect-error: an Astro component, which only Astro's own tooling has types for.
import MarkdownBody from "@bhodgson/docs/components/MarkdownBody.astro";
import { type PageContent, pageContent } from "./page-content.ts";

/**
 * Renders each page's Markdown with the design system's components. Swapping Starlight's Content here, before the page
 * renders, means the page is rendered once: rendering it a second time elsewhere would leave Expressive Code's first
 * block, which carries its stylesheet, in the copy that isn't shown.
 */
export const onRequest = defineRouteMiddleware(({ locals }) => {
  // Starlight registers this on Astro's locals for sites, not for the kit's own build.
  const route = (locals as { starlightRoute: StarlightRouteData })
    .starlightRoute;
  if (!route.Content) {
    return;
  }
  pageContent.set(route, route.Content as PageContent);
  route.Content = MarkdownBody;
});
