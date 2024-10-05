<script>
	import Step from '$lib/components/Step.svelte';
	import FileEarmarkRichText from '$lib/components/icons/FileEarmarkRichText.svelte';
	import JournalText from '$lib/components/icons/JournalText.svelte';
	import Easel from '$lib/components/icons/Easel.svelte';
	import english from '$lib/lang/en/projects';
	import chinese from '$lib/lang/zh_TW/projects';
	import { locale } from '$lib/stores';
	import { get } from 'svelte/store';
	import { Locale } from '$lib/enums';

	let currentLanguage = $state(english);

	locale.subscribe(() => {
		if (get(locale) === Locale.Chinese) {
			currentLanguage = chinese;
		} else {
			currentLanguage = english;
		}
	});

	let steps = $derived([
		{ name: currentLanguage.blog, href: 'https://docfunc.com', description: currentLanguage.blog },
		{
			name: currentLanguage.note,
			href: 'https://github.com/YilanBoy/note',
			description: currentLanguage.note
		},
		{
			name: currentLanguage.slide,
			href: 'https://github.com/YilanBoy/slide',
			description: currentLanguage.slide
		}
	]);
</script>

<section id="projects" class="flex flex-col gap-24 py-20">
	<div class="flex flex-col gap-2 text-center dark:text-neutral-50">
		<h6 class="font-caveat text-2xl md:text-4xl">Love sharing!</h6>
		<h3 class="text-3xl font-semibold sm:text-4xl md:text-5xl">
			<!-- eslint-disable-next-line -->
			{@html currentLanguage.title_html}
		</h3>
	</div>
	<div class="grid grid-cols-1 gap-12 dark:text-neutral-50 lg:grid-cols-3 lg:gap-10">
		<Step step={steps[0]} bind:forwardText={currentLanguage.go}>
			{#snippet icon()}
				<FileEarmarkRichText className="size-12" />
			{/snippet}

			{#snippet content()}
				<!-- eslint-disable-next-line -->
				<p class="text-left">{@html currentLanguage.blog_description_html}</p>
			{/snippet}
		</Step>

		<Step step={steps[1]} bind:forwardText={currentLanguage.go}>
			{#snippet icon()}
				<JournalText className="size-12" />
			{/snippet}

			{#snippet content()}
				<!-- eslint-disable-next-line -->
				<p class="text-left">{@html currentLanguage.note_description_html}</p>
			{/snippet}
		</Step>

		<Step step={steps[2]} bind:forwardText={currentLanguage.go}>
			{#snippet icon()}
				<Easel className="size-12" />
			{/snippet}

			{#snippet content()}
				<!-- eslint-disable-next-line -->
				<p class="text-left">{@html currentLanguage.slide_description_html}</p>
			{/snippet}
		</Step>
	</div>
</section>
