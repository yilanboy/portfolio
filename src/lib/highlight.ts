export interface HighlightSegment {
  text: string;
  highlight: boolean;
}

export function parseHighlights(text: string): HighlightSegment[] {
  if (!text) {
    return [];
  }

  const parts = text.split(/(<hl>[\s\S]*?<\/hl>)/g);

  return parts
    .filter((part) => part.length > 0)
    .map((part) => {
      if (part.startsWith("<hl>") && part.endsWith("</hl>")) {
        return {
          text: part.slice(4, -5),
          highlight: true,
        };
      }
      return {
        text: part,
        highlight: false,
      };
    });
}
