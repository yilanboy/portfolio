<script>
	import Svelte from '$lib/components/icons/Svelte.svelte';
	import TailwindCss from '$lib/components/icons/TailwindCss.svelte';
	import { locale } from '$lib/stores';
	import { get } from 'svelte/store';
	import { Locale } from '$lib/enums';

	let currentLanguage = $state(Locale.English);

	locale.subscribe(() => {
		if (get(locale) === Locale.Chinese) {
			currentLanguage = Locale.Chinese;
		} else {
			currentLanguage = Locale.English;
		}
	});
</script>

<div
	class:hidden={currentLanguage !== Locale.Chinese}
	class:flex={currentLanguage === Locale.Chinese}
	class="mx-2 mb-4 items-center justify-center gap-2 rounded-2xl bg-neutral-200/60 py-4 text-base dark:bg-neutral-700/60 dark:text-neutral-50 md:text-xl"
>
	本頁面由
	<Svelte className="size-5" />
	<a
		target="_blank"
		href="https://kit.svelte.dev"
		class="font-caveat text-[#ff3e00] hover:cursor-pointer hover:text-[#cc2902]">SvelteKit</a
	>
	與
	<TailwindCss className="size-5" />
	<a
		target="_blank"
		href="https://tailwindcss.com"
		class="font-caveat text-[#36baf4] hover:cursor-pointer hover:text-[#12a3e5]">Tailwind CSS</a
	>
	所製作
</div>

<div
	class:hidden={currentLanguage !== Locale.English}
	class:flex={currentLanguage === Locale.English}
	class="mx-2 mb-4 items-center justify-center gap-2 rounded-2xl bg-neutral-200/60 py-4 text-base dark:bg-neutral-700/60 dark:text-neutral-50 md:text-xl"
>
	This page is made with
	<Svelte className="size-5" />
	<a
		target="_blank"
		href="https://kit.svelte.dev"
		class="font-caveat text-[#ff3e00] hover:cursor-pointer hover:text-[#cc2902]">SvelteKit</a
	>
	and
	<TailwindCss className="size-5" />
	<a
		target="_blank"
		href="https://tailwindcss.com"
		class="font-caveat text-[#36baf4] hover:cursor-pointer hover:text-[#12a3e5]">Tailwind CSS</a
	>
</div>
