<script lang="ts">
	import Toggle from '$lib/components/Toggle.svelte';
	import { onMount } from 'svelte';
	import { theme, locale } from '$lib/stores';
	import Sun from '$lib/components/icons/Sun.svelte';
	import Moon from '$lib/components/icons/Moon.svelte';
	import { Themes, Locale } from '$lib/enums';
	import Language from '$lib/components/icons/Language.svelte';
	import englishHeader from '$lib/lang/en/header';
	import chineseHeader from '$lib/lang/zh_TW/header';
	import { get } from 'svelte/store';

	interface Props {
		y: number;
	}

	let { y }: Props = $props();

	let isDarkModeEnabled = $state(false);
	let showLanguageDropdown = $state(false);
	let currentLocale = $state(Locale.English);
	let currentTranslation = $state(englishHeader);

	locale.subscribe(() => {
		if (get(locale) === Locale.Chinese) {
			currentTranslation = chineseHeader;
			currentLocale = Locale.Chinese;
		} else {
			currentTranslation = englishHeader;
			currentLocale = Locale.English;
		}
	});

	let tabs = $derived([
		{ name: currentTranslation.projects, link: '#projects' },
		{ name: currentTranslation.experiences, link: '#experience' },
		{ name: currentTranslation.about, link: '#about' }
	]);

	function switchToEnglish() {
		locale.update(() => Locale.English);
		localStorage.locale = Locale.English;
		showLanguageDropdown = false;
	}

	function switchToChinese() {
		locale.update(() => Locale.Chinese);
		localStorage.locale = Locale.Chinese;
		showLanguageDropdown = false;
	}

	function toggleTheme() {
		if (document.documentElement.classList.contains(Themes.Dark)) {
			isDarkModeEnabled = false;
			theme.update(() => Themes.Light);
			localStorage.theme = Themes.Light;
			document.documentElement.classList.remove(Themes.Dark);
		} else {
			isDarkModeEnabled = true;
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

		if (localStorage.locale === Locale.Chinese) {
			locale.update(() => Locale.Chinese);
		} else {
			locale.update(() => Locale.English);
		}
	});
</script>

<header
	class="sticky z-10 mx-2 flex items-center justify-between rounded-md border border-solid px-6 duration-200 dark:bg-neutral-800"
	class:top-2={y > 0}
	class:border-neutral-600={y > 0}
	class:dark:border-neutral-400={y > 0}
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
		<div class="relative inline-block text-left">
			<div>
				<button
					type="button"
					class="flex items-center justify-center rounded-md bg-transparent"
					id="menu-button"
					aria-expanded="true"
					aria-haspopup="true"
					aria-label="change language"
					onclick={() => {
						showLanguageDropdown = !showLanguageDropdown;
					}}
				>
					<Language className="size-6 dark:text-neutral-50" />
				</button>
			</div>

			<div
				class="absolute right-0 z-10 mt-2 w-40 origin-top-right transform rounded-md bg-neutral-50 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none dark:bg-neutral-700"
				class:ease-out={showLanguageDropdown}
				class:duration-100={showLanguageDropdown}
				class:opacity-100={showLanguageDropdown}
				class:scale-100={showLanguageDropdown}
				class:ease-in={!showLanguageDropdown}
				class:duration-75={!showLanguageDropdown}
				class:opacity-0={!showLanguageDropdown}
				class:scale-0={!showLanguageDropdown}
				role="menu"
				aria-orientation="vertical"
				aria-labelledby="menu-button"
				tabindex="-1"
			>
				<div class="space-y-1 py-1">
					<button
						type="button"
						class="block w-full px-4 py-2 text-sm hover:bg-neutral-200 dark:text-neutral-50 dark:hover:bg-neutral-600"
						class:bg-neutral-200={currentLocale === Locale.English}
						class:dark:bg-neutral-600={currentLocale === Locale.English}
						onclick={switchToEnglish}>English</button
					>
					<button
						type="button"
						class="block w-full px-4 py-2 text-sm hover:bg-neutral-200 dark:text-neutral-50 dark:hover:bg-neutral-600"
						class:bg-neutral-200={currentLocale === Locale.Chinese}
						class:dark:bg-neutral-600={currentLocale === Locale.Chinese}
						onclick={switchToChinese}>繁體中文</button
					>
				</div>
			</div>
		</div>

		<div class="flex items-center justify-center gap-2">
			<Toggle bind:isEnabled={isDarkModeEnabled} onclick={toggleTheme}>
				{#snippet iconShowOnDisabled()}
					<Sun className="size-3" />
				{/snippet}

				{#snippet iconShowOnEnabled()}
					<Moon className="size-3 text-violet-500" />
				{/snippet}
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
		<h4 class="z-9 relative">{currentTranslation.check_my_blog} &rarr;</h4>
	</a>
</header>
