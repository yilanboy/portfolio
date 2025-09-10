<script lang="ts">
	import Step from '$lib/components/Step.svelte';
	import FileEarmarkRichText from '$lib/components/icons/FileEarmarkRichText.svelte';
	import JournalText from '$lib/components/icons/JournalText.svelte';
	import Easel from '$lib/components/icons/Easel.svelte';
	import type { ProjectTranslation } from '$lang/type/project.type';
	import type { Locale } from '$lib/enums';
	import { translations } from '$lib/translations';

	interface Props {
		locale: Locale;
	}

	let { locale }: Props = $props();
	let translation: ProjectTranslation = $derived(translations[locale].project);

	let steps = $derived({
		blog: {
			name: translation.blog.name,
			url: 'https://docfunc.com',
			iconComponent: FileEarmarkRichText,
			descriptionPart1: translation.blog.description_part_1,
			descriptionHighlightPart1: translation.blog.description_highlight_part_1,
			descriptionPart2: translation.blog.description_part_2,
			descriptionHighlightPart2: translation.blog.description_highlight_part_2,
			descriptionPart3: translation.blog.description_part_3,
			descriptionHighlightPart3: translation.blog.description_highlight_part_3,
			descriptionPart4: translation.blog.description_part_4,
			descriptionHighlightPart4: translation.blog.description_highlight_part_4,
			descriptionPart5: translation.blog.description_part_5,
			descriptionHighlightPart5: translation.blog.description_highlight_part_5
		},
		note: {
			name: translation.note.name,
			url: 'https://github.com/yilanboy/note',
			iconComponent: JournalText,
			descriptionPart1: translation.note.description_part_1,
			descriptionHighlightPart1: translation.note.description_highlight_part_1,
			descriptionPart2: translation.note.description_part_2,
			descriptionHighlightPart2: translation.note.description_highlight_part_2,
			descriptionPart3: translation.note.description_part_3,
			descriptionHighlightPart3: translation.note.description_highlight_part_3,
			descriptionPart4: translation.note.description_part_4,
			descriptionHighlightPart4: translation.note.description_highlight_part_4,
			descriptionPart5: translation.note.description_part_5,
			descriptionHighlightPart5: translation.note.description_highlight_part_5
		},
		slide: {
			name: translation.slide.name,
			url: 'https://github.com/yilanboy/slide',
			iconComponent: Easel,
			descriptionPart1: translation.slide.description_part_1,
			descriptionHighlightPart1: translation.slide.description_highlight_part_1,
			descriptionPart2: translation.slide.description_part_2,
			descriptionHighlightPart2: translation.slide.description_highlight_part_2,
			descriptionPart3: translation.slide.description_part_3,
			descriptionHighlightPart3: translation.slide.description_highlight_part_3,
			descriptionPart4: translation.slide.description_part_4,
			descriptionHighlightPart4: translation.slide.description_highlight_part_4,
			descriptionPart5: translation.slide.description_part_5,
			descriptionHighlightPart5: translation.slide.description_highlight_part_5
		}
	});
</script>

<section id="project" class="flex flex-col gap-24 py-20">
	<div class="flex flex-col gap-2 text-center dark:text-neutral-50">
		<h6 class="font-caveat text-2xl md:text-4xl">Love sharing!</h6>
		<h3 class="text-3xl font-semibold sm:text-4xl md:text-5xl">
			{translation.section_title_prefix}
			<span
				class="relative inline-block p-1 before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-blue-500 dark:before:bg-blue-600"
			>
				<span class="relative text-neutral-50">
					{translation.section_title_highlight}
				</span>
			</span>
			{translation.section_title_suffix}
		</h3>
	</div>

	<div class="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-10 dark:text-neutral-50">
		{#each Object.entries(steps) as [key, step] (key)}
			<Step name={step.name} url={step.url} forwardText={translation.go}>
				{#snippet icon()}
					<step.iconComponent className="size-12" />
				{/snippet}

				{#snippet content()}
					<!-- eslint-disable-next-line -->
					<p class="text-left">
						{step.descriptionPart1}
						<span class="text-blue-500 dark:text-blue-400">
							{step.descriptionHighlightPart1}
						</span>
						{step.descriptionPart2}
						<span class="text-blue-500 dark:text-blue-400">
							{step.descriptionHighlightPart2}
						</span>
						{step.descriptionPart3}
						<span class="text-blue-500 dark:text-blue-400">
							{step.descriptionHighlightPart3}
						</span>
						{step.descriptionPart4}
						<span class="text-blue-500 dark:text-blue-400">
							{step.descriptionHighlightPart4}
						</span>
						{step.descriptionPart5}
						<span class="text-blue-500 dark:text-blue-400">
							{step.descriptionHighlightPart5}
						</span>
					</p>
				{/snippet}
			</Step>
		{/each}
	</div>
</section>
