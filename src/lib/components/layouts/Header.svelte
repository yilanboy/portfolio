<script lang="ts">
	import Toggle from '$lib/components/Toggle.svelte';
	import { onMount } from 'svelte';
	import { theme } from '$lib/stores';
	import Sun from '$lib/components/icons/Sun.svelte';
	import Moon from '$lib/components/icons/Moon.svelte';
	import { Themes } from '$lib/enums';

	export let y: number;

	let isDarkModeEnabled = false;

	let tabs = [
		{ name: '專案', link: '#projects' },
		{ name: '經歷', link: '#experience' },
		{ name: '關於', link: '#about' }
	];

	function toggleTheme() {
		if (document.documentElement.classList.contains(Themes.Dark)) {
			theme.update(() => Themes.Light);
			localStorage.theme = Themes.Light;
			document.documentElement.classList.remove(Themes.Dark);
		} else {
			theme.update(() => Themes.Dark);
			localStorage.theme = Themes.Dark;
			document.documentElement.classList.add(Themes.Dark);
		}
	}

	onMount(() => {
		if (document.documentElement.classList.contains(Themes.Dark)) {
			theme.update(() => Themes.Dark);
			isDarkModeEnabled = true;
		} else {
			theme.update(() => Themes.Light);
			isDarkModeEnabled = false;
		}
	});
</script>

<header
	class="sticky z-10 mx-2 flex items-center justify-between rounded-md border border-solid px-6 duration-200 dark:bg-neutral-800"
	class:top-2={y > 0}
	class:border-neutral-600={y > 0}
	class:bg-neutral-50={y > 0}
	class:py-4={y > 0}
	class:top-0={y <= 0}
	class:border-transparent={y <= 0}
	class:bg-transparent={y <= 0}
	class:py-6={y <= 0}
>
	<h1 class="dark:text-neutral-50">
		<b>Allen</b> Jiang
	</h1>
	<div class="ml-auto hidden items-center gap-6 pr-4 sm:flex">
		<div class="flex items-center justify-center gap-2">
			<Toggle isEnabled={isDarkModeEnabled} on:click={() => toggleTheme()}>
				<Sun className="size-3" slot="iconShowOnDisabled" />
				<Moon className="size-3 text-indigo-600" slot="iconShowOnEnabled" />
			</Toggle>
		</div>

		{#each tabs as tab (tab.name)}
			<a
				href={tab.link}
				class="hover:text-neutral-600 dark:text-neutral-50 dark:hover:text-neutral-200"
			>
				<p>{tab.name}</p>
			</a>
		{/each}
	</div>
	<a
		href="https://docfunc.com"
		target="_blank"
		class="group relative overflow-hidden rounded-full bg-neutral-200/60 px-5 py-2 text-slate-950 dark:bg-neutral-700/60 dark:text-neutral-50"
	>
		<div
			class="absolute right-full top-0 z-0 size-full bg-blue-400 opacity-20 duration-200 group-hover:translate-x-full"
		></div>
		<h4 class="z-9 relative">看看我的部落格 &rarr;</h4>
	</a>
</header>
