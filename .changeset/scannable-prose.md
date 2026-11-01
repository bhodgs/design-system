---
"@bhodgson/design-system": minor
---

- **Breaking:** the `prose` utility is gone. Rendered Markdown takes `markdown`, one component per element, each with its own classes: in Astro, `<Content components={markdown} />`. The components are exported one by one too (`H2`, `P`, `Pre` and the rest). Only MDX takes components.
- Spacing in rendered Markdown groups things, so a page can be skimmed: a new section sits further from the last, a heading closer to what it heads, and a list, code block or callout closer to the paragraph that introduces it. Bold is full weight.
- New `tertiary` colour, copper, for structure that isn't clickable. Rendered subheadings (`h3`) use it, so they don't read as links.
- New `Callout`, for the one thing a reader should leave with: an accent bar on a soft accent background.
- New `sheetClass`: a quieter window for each section of a long page, an outline and a surface without a `Panel`'s title bar or shadow.
- New `bg-clearing`: a clear patch of canvas behind text that fades into the grid, so the grid's lines don't run through a column of text.
