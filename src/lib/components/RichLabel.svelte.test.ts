import { describe, it, expect, afterEach } from "vite-plus/test";
import { mount, unmount, flushSync } from "svelte";
import Highlight from "./Highlight.svelte";
import RichLabel from "./RichLabel.svelte";

let instance: ReturnType<typeof mount> | null = null;

afterEach(async () => {
  if (instance) {
    await unmount(instance);
    instance = null;
  }
  document.body.innerHTML = "";
});

describe("Highlight", () => {
  it("renders text prop with default red color classes", () => {
    instance = mount(Highlight, {
      target: document.body,
      props: {
        text: "Important",
      },
    });
    flushSync();

    const outerSpan = document.querySelector("span");
    expect(outerSpan).not.toBeNull();
    expect(outerSpan?.className).toContain("before:bg-red-500");

    const innerSpan = outerSpan?.querySelector("span");
    expect(innerSpan?.textContent?.trim()).toBe("Important");
    expect(innerSpan?.className).toContain("text-neutral-50");
  });

  it("applies specified color classes", () => {
    instance = mount(Highlight, {
      target: document.body,
      props: {
        text: "Fun Projects",
        color: "blue",
      },
    });
    flushSync();

    const outerSpan = document.querySelector("span");
    expect(outerSpan?.className).toContain("before:bg-blue-500");
  });
});

describe("RichLabel", () => {
  it("renders plain text without any highlight container", () => {
    instance = mount(RichLabel, {
      target: document.body,
      props: {
        text: "Just regular text",
      },
    });
    flushSync();

    expect(document.body.textContent?.trim()).toBe("Just regular text");
    expect(document.querySelector("span")).toBeNull();
  });

  it("renders highlighted segment wrapped in Highlight with the given color", () => {
    instance = mount(RichLabel, {
      target: document.body,
      props: {
        text: "Want to Know More <hl>About Me</hl>?",
        color: "red",
      },
    });
    flushSync();

    expect(document.body.textContent?.replace(/\s+/g, " ").trim()).toBe(
      "Want to Know More About Me?",
    );
    const highlightSpan = document.querySelector(".relative.inline-block");
    expect(highlightSpan).not.toBeNull();
    expect(highlightSpan?.className).toContain("before:bg-red-500");
    expect(highlightSpan?.textContent?.trim()).toBe("About Me");
  });

  it("supports multiple highlights and custom colors", () => {
    instance = mount(RichLabel, {
      target: document.body,
      props: {
        text: "Check out <hl>Cool</hl> and <hl>Awesome</hl> stuff",
        color: "green",
      },
    });
    flushSync();

    const highlightSpans = document.querySelectorAll(".relative.inline-block");
    expect(highlightSpans.length).toBe(2);
    expect(highlightSpans[0].textContent?.trim()).toBe("Cool");
    expect(highlightSpans[1].textContent?.trim()).toBe("Awesome");
    expect(highlightSpans[0].className).toContain("before:bg-green-500");
    expect(highlightSpans[1].className).toContain("before:bg-green-500");
  });
});
