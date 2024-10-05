<script lang="ts">
	import Svelte from '$lib/components/icons/Svelte.svelte';
	import TailwindCss from '$lib/components/icons/TailwindCss.svelte';
	import { Locale } from '$lib/enums';
	import { locale } from '$lib/stores';
	import { get } from 'svelte/store';
	import english from '$lib/lang/en/footer';
	import chinese from '$lib/lang/zh_TW/footer';

	let translations = {
		english: english,
		chinese: chinese
	};

	let currentTranslation = $state(english);

	locale.subscribe(() => {
		currentTranslation = translations[get(locale) as Locale];
	});
</script>

<div
	class="mx-2 mb-4 flex items-center justify-center gap-2 rounded-2xl bg-neutral-200/60 py-4 text-base dark:bg-neutral-700/60 dark:text-neutral-50 md:text-xl"
>
	{currentTranslation.content_prefix}
	<Svelte className="size-5" />
	<a
		target="_blank"
		href="https://kit.svelte.dev"
		class="font-caveat text-[#ff3e00] hover:cursor-pointer hover:text-[#cc2902]">SvelteKit</a
	>
	{currentTranslation.and}
	<TailwindCss className="size-5" />
	<a
		target="_blank"
		href="https://tailwindcss.com"
		class="font-caveat text-[#36baf4] hover:cursor-pointer hover:text-[#12a3e5]">Tailwind CSS</a
	>
	{currentTranslation.content_suffix}
</div>
