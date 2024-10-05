<script lang="ts">
	import { locale } from '$lib/stores';
	import { get } from 'svelte/store';
	import { Locale } from '$lib/enums';
	import english from '$lib/lang/en/about';
	import chinese from '$lib/lang/zh_TW/about';

	let currentLanguage = $state(english);

	locale.subscribe(() => {
		if (get(locale) === Locale.Chinese) {
			currentLanguage = chinese;
		} else {
			currentLanguage = english;
		}
	});

	interface Strength {
		name: string;
		description: string;
	}

	let strengths: Array<Strength> = $derived(currentLanguage.strengths);
</script>

<section
	id="about"
	class="relative flex flex-col gap-16 py-20 pt-10 sm:gap-20 md:gap-24 lg:py-32 lg:pt-16"
>
	<div class="flex flex-col gap-2 text-center dark:text-neutral-50">
		<h6 class="font-caveat text-2xl md:text-4xl">Hey! my friends</h6>
		<h3 class="text-3xl font-semibold sm:text-4xl md:text-5xl">
			<!-- eslint-disable-next-line -->
			{@html currentLanguage.section_title_html}
		</h3>
	</div>
	<p class="mx-auto text-lg font-semibold dark:text-neutral-50 sm:text-xl md:text-2xl">
		{currentLanguage.I_am_also}
	</p>
	<div class="mx-auto flex w-full max-w-3xl flex-col gap-20 dark:text-neutral-50">
		{#each strengths as strength, index}
			<div class="flex gap-6 sm:gap-8">
				<p class="w-1/5 text-4xl font-semibold text-red-500 sm:text-5xl md:text-6xl">
					{(index + 1).toString().padStart(2, '0')}
				</p>
				<div class="flex w-4/5 flex-col gap-6 sm:gap-8">
					<h3 class="text-2xl sm:text-3xl md:text-5xl">
						{strength.name}
					</h3>
					<p class="text-neutral-500 dark:text-neutral-400">{strength.description}</p>
				</div>
			</div>
		{/each}
	</div>
</section>
