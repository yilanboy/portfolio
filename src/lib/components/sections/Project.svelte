<script lang="ts">
	import Step from '$lib/components/Step.svelte';
	import FileEarmarkRichText from '$lib/components/icons/FileEarmarkRichText.svelte';
	import JournalText from '$lib/components/icons/JournalText.svelte';
	import Easel from '$lib/components/icons/Easel.svelte';
	import english from '$lib/lang/en/project';
	import chinese from '$lib/lang/zh_TW/project';
	import { locale } from '$lib/stores';
	import { get } from 'svelte/store';
	import { Locale } from '$lib/enums';

	let currentTranslation = $state(english);

	locale.subscribe(() => {
		if (get(locale) === Locale.Chinese) {
			currentTranslation = chinese;
		} else {
			currentTranslation = english;
		}
	});

	let steps = $derived({
		blog: {
			name: currentTranslation.blog.name,
			url: 'https://docfunc.com',
			iconComponent: FileEarmarkRichText,
			descriptionHtml: currentTranslation.blog.description_html
		},
		note: {
			name: currentTranslation.note.name,
			url: 'https://github.com/YilanBoy/note',
			iconComponent: JournalText,
			descriptionHtml: currentTranslation.note.description_html
		},
		slide: {
			name: currentTranslation.slide.name,
			url: 'https://github.com/YilanBoy/slide',
			iconComponent: Easel,
			descriptionHtml: currentTranslation.slide.description_html
		}
	});
</script>

<section id="project" class="flex flex-col gap-24 py-20">
	<div class="flex flex-col gap-2 text-center dark:text-neutral-50">
		<h6 class="font-caveat text-2xl md:text-4xl">Love sharing!</h6>
		<h3 class="text-3xl font-semibold sm:text-4xl md:text-5xl">
			<!-- eslint-disable-next-line -->
			{@html currentTranslation.section_title_html}
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
					<p class="text-left">{@html step.descriptionHtml}</p>
				{/snippet}
			</Step>
		{/each}
	</div>
</section>
