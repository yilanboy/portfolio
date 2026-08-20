import { describe, it, expect } from "vitest";
import { parseHighlights } from "./highlight.js";

describe("parse highlights", () => {
  it("returns an empty array for empty string", () => {
    expect(parseHighlights("")).toEqual([]);
  });

  it("returns a single non-highlight segment when there are no <hl> tags", () => {
    expect(parseHighlights("Just plain text")).toEqual([
      { text: "Just plain text", highlight: false },
    ]);
  });

  it("parses single highlight correctly", () => {
    expect(parseHighlights("Hello <hl>World</hl>!")).toEqual([
      { text: "Hello ", highlight: false },
      { text: "World", highlight: true },
      { text: "!", highlight: false },
    ]);
  });

  it("parses multiple highlights correctly", () => {
    const input =
      "This is made with <hl>Tailwind CSS</hl>, <hl>Alpine.js</hl>, <hl>Laravel</hl> and <hl>Livewire</hl>.";
    expect(parseHighlights(input)).toEqual([
      { text: "This is made with ", highlight: false },
      { text: "Tailwind CSS", highlight: true },
      { text: ", ", highlight: false },
      { text: "Alpine.js", highlight: true },
      { text: ", ", highlight: false },
      { text: "Laravel", highlight: true },
      { text: " and ", highlight: false },
      { text: "Livewire", highlight: true },
      { text: ".", highlight: false },
    ]);
  });

  it("handles highlights at the beginning and end", () => {
    expect(parseHighlights("<hl>Start</hl> and <hl>End</hl>")).toEqual([
      { text: "Start", highlight: true },
      { text: " and ", highlight: false },
      { text: "End", highlight: true },
    ]);
  });

  it("handles multilingual text with highlights", () => {
    const jaInput = "これは私が <hl>Tailwind CSS</hl>、<hl>Alpine.js</hl> で作ったブログです。";
    expect(parseHighlights(jaInput)).toEqual([
      { text: "これは私が ", highlight: false },
      { text: "Tailwind CSS", highlight: true },
      { text: "、", highlight: false },
      { text: "Alpine.js", highlight: true },
      { text: " で作ったブログです。", highlight: false },
    ]);
  });
});
