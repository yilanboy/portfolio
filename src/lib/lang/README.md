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
	introduction_part_1: string;
	introduction_highlight_part_1: string;
	introduction_part_2: string;
	introduction_highlight_part_2: string;
	introduction_part_3: string;
	introduction_highlight_part_3: string;
	introduction_part_4: string;
	introduction_highlight_part_4: string;
};

export type { IntroductionTranslation };
```

There should be a `introduction.type.ts` in each locale translation folder.

```typescript
// lang/en/introduction.ts
export default {
	i_am: "Hi! I'm",
	a: 'A',
	occupation: 'Engineer',
	introduction_part_1: 'Experienced backend developer who is skilled in ',
	introduction_highlight_part_1: 'operations',
	introduction_part_2: ' and ',
	introduction_highlight_part_2: 'cloud services',
	introduction_part_3: '. Passionate about exploring both ',
	introduction_highlight_part_3: 'frontend and backend',
	introduction_part_4:
		'technologies in my free time. My work style is adaptable, but I strive for precision and rigor.',
	introduction_highlight_part_4: ''
};
```

