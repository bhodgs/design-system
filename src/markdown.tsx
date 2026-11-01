import type { ComponentChildren, JSX } from "preact";
import { cn } from "./cn.ts";
import { Link } from "./text.tsx";

/*
 * Rendered Markdown, one component per element, each with its own classes. Spacing groups things so a page can be
 * skimmed: a block sits a step below the last, closer under a heading, and a list, code block or callout sits close
 * to the paragraph that introduces it.
 */
const block = "mt-5 first:mt-0 [h2+&]:mt-3 [h3+&]:mt-3 [h4+&]:mt-3";
const introduced = "[p+&]:mt-2.5";
const heading =
  "font-mono font-bold tracking-[-0.02em] leading-[1.3] text-balance";

type Props<T extends EventTarget> = JSX.HTMLAttributes<T> & {
  class?: string;
};

/**
 * A section heading in rendered Markdown, well clear of the section before.
 * @group Text
 */
export function H2({ class: extra, ...props }: Props<HTMLHeadingElement>) {
  return (
    <h2
      class={cn("mt-14 text-2xl text-ink first:mt-0", heading, extra)}
      {...props}
    />
  );
}

/**
 * A subheading in rendered Markdown, in the `tertiary` colour so it doesn't read as a link.
 * @group Text
 */
export function H3({ class: extra, ...props }: Props<HTMLHeadingElement>) {
  return (
    <h3
      class={cn("mt-9 text-lg text-tertiary first:mt-0", heading, extra)}
      {...props}
    />
  );
}

/**
 * A minor heading in rendered Markdown.
 * @group Text
 */
export function H4({ class: extra, ...props }: Props<HTMLHeadingElement>) {
  return (
    <h4
      class={cn("mt-9 text-base text-ink first:mt-0", heading, extra)}
      {...props}
    />
  );
}

/**
 * A paragraph in rendered Markdown. It avoids a last line of one word.
 * @group Text
 */
export function P({ class: extra, ...props }: Props<HTMLParagraphElement>) {
  return <p class={cn(block, "leading-7 text-pretty", extra)} {...props} />;
}

/**
 * A bulleted list in rendered Markdown.
 * @group Text
 */
export function Ul({ class: extra, ...props }: Props<HTMLUListElement>) {
  return (
    <ul
      class={cn(block, introduced, "list-disc pl-6 leading-7", extra)}
      {...props}
    />
  );
}

/**
 * A numbered list in rendered Markdown.
 * @group Text
 */
export function Ol({ class: extra, ...props }: Props<HTMLOListElement>) {
  return (
    <ol
      class={cn(block, introduced, "list-decimal pl-6 leading-7", extra)}
      {...props}
    />
  );
}

/**
 * A list item in rendered Markdown, with a muted marker.
 * @group Text
 */
export function Li({ class: extra, ...props }: Props<HTMLLIElement>) {
  return (
    <li class={cn("mt-1.5 first:mt-0 marker:text-muted", extra)} {...props} />
  );
}

/**
 * Bold, at full weight: what the eye catches on a skim.
 * @group Text
 */
export function Strong({ class: extra, ...props }: Props<HTMLElement>) {
  return <strong class={cn("font-bold", extra)} {...props} />;
}

/**
 * Inline code in rendered Markdown, on the sunken surface. Inside a code block it takes the block's styles instead.
 * @group Text
 */
export function Code({ class: extra, ...props }: Props<HTMLElement>) {
  return (
    <code
      class={cn(
        "rounded bg-surface-sunken px-[0.35em] py-[0.1em] font-mono text-[0.875em]",
        "[pre_&]:bg-transparent [pre_&]:p-0 [pre_&]:text-[1em]",
        extra,
      )}
      {...props}
    />
  );
}

/**
 * A code block in rendered Markdown, on the sunken surface. Given Shiki's light and dark themes with
 * `defaultColor: false`, each token takes the colour for the page's theme.
 * @group Text
 */
export function Pre({ class: extra, ...props }: Props<HTMLPreElement>) {
  return (
    <pre
      class={cn(
        block,
        introduced,
        "overflow-x-auto rounded-lg border border-line bg-surface-sunken p-4 font-mono text-[0.8125rem] leading-[1.6]",
        "[&_span]:[color:light-dark(var(--shiki-light),var(--shiki-dark))]",
        extra,
      )}
      {...props}
    />
  );
}

/**
 * A quote in rendered Markdown.
 * @group Text
 */
export function Blockquote({
  class: extra,
  ...props
}: Props<HTMLQuoteElement>) {
  return (
    <blockquote
      class={cn(block, "border-l-4 border-line-strong pl-4 text-muted", extra)}
      {...props}
    />
  );
}

/**
 * A divider in rendered Markdown.
 * @group Text
 */
export function Hr({ class: extra, ...props }: Props<HTMLHRElement>) {
  return (
    <hr
      class={cn("my-10 border-0 border-t border-line first:mt-0", extra)}
      {...props}
    />
  );
}

/**
 * A table in rendered Markdown.
 * @group Text
 */
export function Table({ class: extra, ...props }: Props<HTMLTableElement>) {
  return (
    <table
      class={cn(block, "w-full border-collapse text-sm", extra)}
      {...props}
    />
  );
}

/**
 * A table's column heading in rendered Markdown.
 * @group Text
 */
export function Th({ class: extra, ...props }: Props<HTMLTableCellElement>) {
  return (
    <th
      class={cn(
        "border-b border-line-strong py-2 pr-4 text-left font-mono text-xs font-semibold text-muted",
        extra,
      )}
      {...props}
    />
  );
}

/**
 * A table cell in rendered Markdown.
 * @group Text
 */
export function Td({ class: extra, ...props }: Props<HTMLTableCellElement>) {
  return (
    <td
      class={cn("border-b border-line py-2 pr-4 align-top", extra)}
      {...props}
    />
  );
}

/**
 * An image in rendered Markdown.
 * @group Text
 */
export function Img({ class: extra, ...props }: Props<HTMLImageElement>) {
  return <img class={cn("rounded-lg", extra)} {...props} />;
}

/**
 * The props for {@link Callout}.
 * @group Text
 */
export type CalloutProps = { children: ComponentChildren };

/**
 * A callout, for the one thing a reader should leave with: an accent bar and a soft accent background.
 * @group Text
 */
export function Callout({ children }: CalloutProps) {
  return (
    <aside
      class={cn(
        block,
        introduced,
        "rounded-r-lg border-l-4 border-accent bg-accent-soft px-4.5 py-3.5",
      )}
    >
      {children}
    </aside>
  );
}

/**
 * Rendered Markdown's elements, each with its own styles. In Astro, pass it to an MDX page's content:
 * `<Content components={markdown} />`.
 * @group Text
 */
export const markdown = {
  h2: H2,
  h3: H3,
  h4: H4,
  p: P,
  a: Link,
  strong: Strong,
  ul: Ul,
  ol: Ol,
  li: Li,
  code: Code,
  pre: Pre,
  blockquote: Blockquote,
  hr: Hr,
  table: Table,
  th: Th,
  td: Td,
  img: Img,
};

/**
 * A quieter window, for each section of a long page: an outline and a surface to read on, without a `Panel`'s title
 * bar or shadow, so the page's header still leads.
 * @group Layout
 */
export const sheetClass =
  "rounded-xl border border-edge bg-surface/85 p-5 sm:px-7 sm:py-6";
