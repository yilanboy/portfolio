# Translations

This folder is used to store text files for various translations.

You can check `lang/type` to know the translation data structure for each section.

For example, this is the introduction section translation data structure.

```typescript
// lang/type/introduction.type.ts
type IntroductionTranslation = {
  i_am: string;
  a: string;
  occupation: string;
  introduction: string;
};

export type { IntroductionTranslation };
```

There should be an `introduction.ts` in each locale translation folder. You can use `<hl>...</hl>` tags within paragraphs to mark words that should be highlighted.

```typescript
// lang/en/introduction.ts
export default {
  i_am: "Hi! I'm",
  a: "A",
  occupation: "Engineer",
  introduction:
    "Experienced backend developer who is skilled in <hl>operations</hl> and <hl>cloud services</hl>. " +
    "Passionate about exploring both <hl>frontend and backend</hl> technologies in my free time. " +
    "My work style is adaptable, but I strive for precision and rigor.",
};
```
