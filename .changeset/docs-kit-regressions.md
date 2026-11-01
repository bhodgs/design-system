---
"@bhodgson/docs": patch
---

- Code shown with Starlight's `<Code>`, as in live examples, is highlighted and framed again on pages with no Markdown code block. The page's Markdown is now rendered once, through a route middleware, so Expressive Code's stylesheet stays on the copy that's shown.
- Expressive Code's blocks are spaced like a code block again: close under a heading or the paragraph that introduces them, rather than touching them.
- Search leaves out a heading's link to itself, so results are titled with the heading alone.
