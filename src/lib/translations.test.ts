import { describe, it, expect } from 'vitest';
import { translations } from './translations';
import { Locale } from './enums';

const allLocales = Object.values(Locale);

const expectedSections = [
	'header',
	'introduction',
	'project',
	'experience',
	'skill',
	'about',
	'footer',
	'post'
] as const;

describe('translations', () => {
	it('exposes a translation entry for every supported locale', () => {
		for (const locale of allLocales) {
			expect(translations[locale]).toBeDefined();
		}
	});

	it.each(allLocales)('locale "%s" defines every section block', (locale) => {
		const t = translations[locale];

		for (const section of expectedSections) {
			expect(t[section], `${locale}.${section} should be defined`).toBeDefined();
			expect(t[section]).toBeTypeOf('object');
		}
	});

	it('every locale shares the same top-level shape as English (no missing sections)', () => {
		const enKeys = Object.keys(translations[Locale.En]).sort();

		for (const locale of allLocales) {
			expect(Object.keys(translations[locale]).sort()).toEqual(enKeys);
		}
	});

	it('every locale shares the same header keys', () => {
		const enKeys = Object.keys(translations[Locale.En].header).sort();

		for (const locale of allLocales) {
			expect(Object.keys(translations[locale].header).sort()).toEqual(enKeys);
		}
	});

	it('every locale shares the same skill experience keys (arrays of strings)', () => {
		const enSkill = translations[Locale.En].skill;
		const arrayKeys = (Object.keys(enSkill) as (keyof typeof enSkill)[]).filter((k) =>
			Array.isArray(enSkill[k])
		);

		for (const locale of allLocales) {
			for (const key of arrayKeys) {
				const value = translations[locale].skill[key];
				expect(Array.isArray(value), `${locale}.skill.${String(key)} should be an array`).toBe(
					true
				);
				expect((value as string[]).length).toBeGreaterThan(0);
			}
		}
	});

	it('about.strengths is a non-empty array of {name, description} for every locale', () => {
		for (const locale of allLocales) {
			const strengths = translations[locale].about.strengths;

			expect(Array.isArray(strengths)).toBe(true);
			expect(strengths.length).toBeGreaterThan(0);

			for (const s of strengths) {
				expect(s.name).toBeTypeOf('string');
				expect(s.description).toBeTypeOf('string');
				expect(s.name.length).toBeGreaterThan(0);
				expect(s.description.length).toBeGreaterThan(0);
			}
		}
	});

	it('every locale defines all four experience entries with title and content', () => {
		const experienceKeys = [
			'experience_1',
			'experience_2',
			'experience_3',
			'experience_4'
		] as const;

		for (const locale of allLocales) {
			const experience = translations[locale].experience;

			for (const key of experienceKeys) {
				expect(experience[key]).toBeDefined();
				expect(experience[key].title).toBeTypeOf('string');
				expect(experience[key].content).toBeTypeOf('string');
				expect(experience[key].title.length).toBeGreaterThan(0);
				expect(experience[key].content.length).toBeGreaterThan(0);
			}
		}
	});

	it('header.check_my_blog is a non-empty string in every locale', () => {
		for (const locale of allLocales) {
			expect(translations[locale].header.check_my_blog).toBeTypeOf('string');
			expect(translations[locale].header.check_my_blog.length).toBeGreaterThan(0);
		}
	});

	it('non-English locales actually translate the header — they are not raw copies of English', () => {
		const en = translations[Locale.En].header;

		for (const locale of [Locale.Cn, Locale.Tw, Locale.Ja]) {
			const localized = translations[locale].header;
			expect(localized.project, `${locale}.header.project must differ from English`).not.toBe(
				en.project
			);
			expect(
				localized.check_my_blog,
				`${locale}.header.check_my_blog must differ from English`
			).not.toBe(en.check_my_blog);
		}
	});

	it('non-English locales actually translate the about section title', () => {
		const en = translations[Locale.En].about;

		for (const locale of [Locale.Cn, Locale.Tw, Locale.Ja]) {
			expect(
				translations[locale].about.section_title_highlight,
				`${locale}.about.section_title_highlight must differ from English`
			).not.toBe(en.section_title_highlight);
		}
	});
});
