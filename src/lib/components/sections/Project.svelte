<script lang="ts">
	import Step from '$lib/components/Step.svelte';
	import FileEarmarkRichText from '$lib/components/icons/FileEarmarkRichText.svelte';
	import JournalText from '$lib/components/icons/JournalText.svelte';
	import Easel from '$lib/components/icons/Easel.svelte';
	import { locale } from '$lib/stores';
	import { get } from 'svelte/store';
	import type { Locale } from '$lib/enums';
	import english from '$lib/lang/en/project';
	import simplifiedChinese from '$lib/lang/zh_CN/project';
	import traditionalChinese from '$lib/lang/zh_TW/project';

	let translations = {
		english: english,
		simplifiedChinese: simplifiedChinese,
		traditionalChinese: traditionalChinese
	};

	let currentTranslation = $state(english);

	locale.subscribe(() => {
		currentTranslation = translations[get(locale) as Locale];
	});

	let steps = $derived({
		blog: {
			name: currentTranslation.blog.name,
			url: 'https://docfunc.com',
			iconComponent: FileEarmarkRichText,
			descriptionPart1: currentTranslation.blog.description_part_1,
			descriptionHighlightPart1: currentTranslation.blog.description_highlight_part_1,
			descriptionPart2: currentTranslation.blog.description_part_2,
			descriptionHighlightPart2: currentTranslation.blog.description_highlight_part_2,
			descriptionPart3: currentTranslation.blog.description_part_3,
			descriptionHighlightPart3: currentTranslation.blog.description_highlight_part_3,
			descriptionPart4: currentTranslation.blog.description_part_4,
			descriptionHighlightPart4: currentTranslation.blog.description_highlight_part_4,
			descriptionPart5: currentTranslation.blog.description_part_5,
			descriptionHighlightPart5: currentTranslation.blog.description_highlight_part_5
		},
		note: {
			name: currentTranslation.note.name,
			url: 'https://github.com/YilanBoy/note',
			iconComponent: JournalText,
			descriptionPart1: currentTranslation.note.description_part_1,
			descriptionHighlightPart1: currentTranslation.note.description_highlight_part_1,
			descriptionPart2: currentTranslation.note.description_part_2,
			descriptionHighlightPart2: currentTranslation.note.description_highlight_part_2,
			descriptionPart3: currentTranslation.note.description_part_3,
			descriptionHighlightPart3: currentTranslation.note.description_highlight_part_3,
			descriptionPart4: currentTranslation.note.description_part_4,
			descriptionHighlightPart4: currentTranslation.note.description_highlight_part_4,
			descriptionPart5: currentTranslation.note.description_part_5,
			descriptionHighlightPart5: currentTranslation.note.description_highlight_part_5
		},
		slide: {
			name: currentTranslation.slide.name,
			url: 'https://github.com/YilanBoy/slide',
			iconComponent: Easel,
			descriptionPart1: currentTranslation.slide.description_part_1,
			descriptionHighlightPart1: currentTranslation.slide.description_highlight_part_1,
			descriptionPart2: currentTranslation.slide.description_part_2,
			descriptionHighlightPart2: currentTranslation.slide.description_highlight_part_2,
			descriptionPart3: currentTranslation.slide.description_part_3,
			descriptionHighlightPart3: currentTranslation.slide.description_highlight_part_3,
			descriptionPart4: currentTranslation.slide.description_part_4,
			descriptionHighlightPart4: currentTranslation.slide.description_highlight_part_4,
			descriptionPart5: currentTranslation.slide.description_part_5,
			descriptionHighlightPart5: currentTranslation.slide.description_highlight_part_5
		}
	});
</script>

<section id="project" class="flex flex-col gap-24 py-20">
	<div class="flex flex-col gap-2 text-center dark:text-neutral-50">
		<h6 class="font-caveat text-2xl md:text-4xl">Love sharing!</h6>
		<h3 class="text-3xl font-semibold sm:text-4xl md:text-5xl">
			{currentTranslation.section_title_prefix}
			<span
				class="relative inline-block p-1 before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-blue-500 dark:before:bg-blue-600"
			>
				<span class="relative text-neutral-50">
					{currentTranslation.section_title_highlight}
				</span>
			</span>
			{currentTranslation.section_title_suffix}
		</h3>
	</div>
	<div class="grid grid-cols-1 gap-12 dark:text-neutral-50 lg:grid-cols-3 lg:gap-10">
		{#each Object.entries(steps) as [key, step] (key)}
			<Step name={step.name} url={step.url} forwardText={currentTranslation.go}>
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
