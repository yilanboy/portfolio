<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		name: string;
		url: string;
		icon?: Snippet;
		content?: Snippet;
		forwardText: string;
	}

	let { name, url = '#', icon, content, forwardText = 'Go' }: Props = $props();
</script>

<a
	href={url}
	target="_blank"
	class="group flex cursor-pointer flex-col gap-4 rounded-2xl border border-solid border-blue-400 p-4 text-center duration-200 hover:border-blue-700 sm:p-6 md:p-8 dark:border-blue-700 dark:hover:border-blue-400"
>
	<div
		class="mx-auto -mt-10 grid place-items-center gap-2 bg-neutral-50 px-4 text-5xl transition-all duration-200 group-hover:-translate-y-1 group-hover:scale-125 sm:-mt-12 md:-mt-14 md:text-6xl lg:-mt-16 dark:bg-neutral-800"
	>
		{@render icon?.()}
	</div>

	<h3 class="text-xl font-medium sm:text-2xl md:text-3xl">{name}</h3>

	{@render content?.()}

	<div class="relative flex flex-1 items-end justify-end">
		<p
			class="relative right-5 bottom-0 rounded-full bg-neutral-200/60 px-4 py-2 opacity-0 transition-all duration-300 group-hover:right-0 group-hover:opacity-100 dark:bg-neutral-700/60"
		>
			{forwardText} &rarr;
		</p>
	</div>
</a>
