# @bhodgson/docs

## 0.2.0

### Minor Changes

- 20d015c: - **Breaking:** pages render their Markdown with the design system's `markdown` components, rather than `prose`. Add `mdx()` from `@astrojs/mdx` after `starlight()` in your integrations: Starlight's own MDX is optimised into plain HTML, which components can't replace. The plugin warns if it's missing. Only MDX takes components, so write pages as `.mdx`.
  - Headings link to themselves through the design system's headings, with Starlight's own heading links turned off.
  - Live examples opt out of Starlight's Markdown styles with Starlight's own `not-content`, rather than `not-prose`.

### Patch Changes

- 951a9f0: - Code shown with Starlight's `<Code>`, as in live examples, is highlighted and framed again on pages with no Markdown code block. The page's Markdown is now rendered once, through a route middleware, so Expressive Code's stylesheet stays on the copy that's shown.
  - Expressive Code's blocks are spaced like a code block again: close under a heading or the paragraph that introduces them, rather than touching them.
  - Search leaves out a heading's link to itself, so results are titled with the heading alone.
- Updated dependencies [20d015c]
  - @bhodgson/design-system@0.7.0

## 0.1.5

### Patch Changes

- Updated dependencies [67350ed]
  - @bhodgson/design-system@0.6.0

## 0.1.4

### Patch Changes

- Updated dependencies [a686e39]
- Updated dependencies [dd0757a]
- Updated dependencies [8959215]
  - @bhodgson/design-system@0.5.0

## 0.1.3

### Patch Changes

- Updated dependencies [bf4fce8]
  - @bhodgson/design-system@0.4.0

## 0.1.2

### Patch Changes

- cbf77bf: The GitHub account is now `bhodgs`: `defaultAuthor` links to https://github.com/bhodgs, and the package links point at the renamed repository and docs site.
- Updated dependencies [cbf77bf]
  - @bhodgson/design-system@0.3.1

## 0.1.1

### Patch Changes

- Updated dependencies [853859a]
  - @bhodgson/design-system@0.3.0

## 0.1.0

### Minor Changes

- f41ff58: First release. `docsTheme()` styles a Starlight site with `@bhodgson/design-system`: its title, theme picker, hero, page title, content, pagination, footer and search. `loadApi()`, `apiSidebar()` and `apiPaths()` with `ApiPage.astro` document a package from its source with TypeDoc, with a page per export showing its props, fields or values, a class's constructor, properties and methods, examples, and what uses it. Members inherited from outside the package, such as `Error`'s, are left out. `PagefindSearch` searches a Pagefind index with the design system's `Search`.

### Patch Changes

- Updated dependencies [f41ff58]
- Updated dependencies [f41ff58]
- Updated dependencies [f41ff58]
- Updated dependencies [f41ff58]
- Updated dependencies [f41ff58]
- Updated dependencies [f41ff58]
  - @bhodgson/design-system@0.2.0
