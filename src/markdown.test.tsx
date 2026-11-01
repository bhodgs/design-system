import { render } from "preact-render-to-string";
import { describe, expect, test } from "vitest";
import { Callout, Code, H2, H3, markdown, P, Pre } from "./markdown.tsx";

describe("markdown", () => {
  test("covers the elements Markdown renders", () => {
    expect(Object.keys(markdown)).toEqual(
      expect.arrayContaining(["h2", "h3", "p", "a", "ul", "li", "code", "pre"]),
    );
  });

  test("keeps the id a heading is given, for links to it", () => {
    const html = render(<H2 id="the-bug">The bug</H2>);
    expect(html).toMatch(/^<h2/);
    expect(html).toContain('id="the-bug"');
    expect(html).toContain("mt-14");
  });

  test("keeps a heading's line height alongside its size", () => {
    expect(render(<H2>The bug</H2>)).toContain("leading-[1.3]");
  });

  test("colours a subheading tertiary, not like a link", () => {
    expect(render(<H3>Why</H3>)).toContain("text-tertiary");
  });

  test("adds a caller's classes to its own", () => {
    const html = render(<P class="text-lg">Lead</P>);
    expect(html).toContain("text-lg");
    expect(html).toContain("text-pretty");
  });

  test("keeps Shiki's class and style on a code block", () => {
    const html = render(
      <Pre class="astro-code" style="--shiki-light:#24292e" tabIndex={0}>
        <Code>x</Code>
      </Pre>,
    );
    expect(html).toContain("astro-code");
    expect(html).toContain("--shiki-light:#24292e");
    expect(html).toContain("bg-surface-sunken");
  });
});

describe("Callout", () => {
  test("is an aside, marked with the accent", () => {
    const html = render(<Callout>Focus during the tap.</Callout>);
    expect(html).toMatch(/^<aside/);
    expect(html).toContain("border-accent");
    expect(html).toContain("Focus during the tap.");
  });
});
