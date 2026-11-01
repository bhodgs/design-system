# @bhodgson/docs

[Starlight](https://starlight.astro.build) in [`@bhodgson/design-system`](../README.md), with an API reference generated from a package's source.

```bash
pnpm add @bhodgson/docs @bhodgson/design-system @astrojs/starlight @astrojs/mdx @astrojs/preact astro preact
```

```js
// astro.config.mjs
import mdx from "@astrojs/mdx";
import starlight from "@astrojs/starlight";
import { docsTheme } from "@bhodgson/docs";

export default defineConfig({
  integrations: [
    starlight({ title: "my-project", plugins: [docsTheme()] }),
    // After Starlight, so pages render with the design system's markdown components.
    mdx(),
  ],
});
```

Pages render their Markdown with the design system's `markdown` components, so write them as `.mdx`. Wrap a live example in Starlight's `not-content` to keep it out of Starlight's own Markdown styles.

For the API reference, see how [the design system's docs](../docs/src/api.ts) use `loadApi`, `apiSidebar` and `apiPaths`, and [the conventions it relies on](../docs/src/content/docs/contributing/api-reference.mdx): a `@group` on every export, and props types named after their component, such as `ButtonProps`.
