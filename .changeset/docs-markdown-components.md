---
"@bhodgson/docs": minor
---

- **Breaking:** pages render their Markdown with the design system's `markdown` components, rather than `prose`. Add `mdx()` from `@astrojs/mdx` after `starlight()` in your integrations: Starlight's own MDX is optimised into plain HTML, which components can't replace. The plugin warns if it's missing. Only MDX takes components, so write pages as `.mdx`.
- Headings link to themselves through the design system's headings, with Starlight's own heading links turned off.
- Live examples opt out of Starlight's Markdown styles with Starlight's own `not-content`, rather than `not-prose`.
