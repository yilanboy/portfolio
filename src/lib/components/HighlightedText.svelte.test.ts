import { describe, it, expect, afterEach } from "vitest";
import { mount, unmount, flushSync } from "svelte";
import HighlightedText from "./HighlightedText.svelte";

let instance: ReturnType<typeof mount> | null = null;

afterEach(async () => {
  if (instance) {
    await unmount(instance);
    instance = null;
  }
  document.body.innerHTML = "";
});

describe("HighlightedText", () => {
  it("renders plain text without span", () => {
    instance = mount(HighlightedText, {
      target: document.body,
      props: {
        text: "Just regular text",
      },
    });
    flushSync();

    expect(document.body.textContent?.trim()).toBe("Just regular text");
    expect(document.querySelector("span")).toBeNull();
  });

  it("renders highlighted segment in a span with default class", () => {
    instance = mount(HighlightedText, {
      target: document.body,
      props: {
        text: "Hello <hl>World</hl>!",
      },
    });
    flushSync();

    expect(document.body.textContent?.trim()).toBe("Hello World!");
    const span = document.querySelector("span");
    expect(span).not.toBeNull();
    expect(span?.textContent).toBe("World");
    expect(span?.className).toContain("text-blue-500");
  });

  it("allows overriding highlightClass", () => {
    instance = mount(HighlightedText, {
      target: document.body,
      props: {
        text: "DevOps and <hl>Cloud</hl>",
        highlightClass: "text-green-500 dark:text-green-400",
      },
    });
    flushSync();

    const span = document.querySelector("span");
    expect(span?.className).toBe("text-green-500 dark:text-green-400");
  });
});
