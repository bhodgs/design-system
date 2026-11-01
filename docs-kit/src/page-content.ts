/** Renders a page's Markdown, given its frontmatter and the components to render it with. */
export type PageContent = (props: Record<string, unknown>) => unknown;

/** Each page's own Content, kept by the route middleware for MarkdownBody, keyed by the page's route data. */
export const pageContent = new WeakMap<object, PageContent>();
