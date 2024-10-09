<script lang="ts">
	import Toggle from '$lib/components/Toggle.svelte';
	import { theme, locale } from '$lib/stores';
	import Sun from '$lib/components/icons/Sun.svelte';
	import Moon from '$lib/components/icons/Moon.svelte';
	import { Theme, Locale } from '$lib/enums';
	import Language from '$lib/components/icons/Language.svelte';
	import { get } from 'svelte/store';

	import type { HeaderTranslation } from '$lib/lang/type/header.type';

	interface Props {
		isDarkModeEnabled: boolean;
		translation: HeaderTranslation;
		y: number;
	}

	let { isDarkModeEnabled = $bindable(), translation, y }: Props = $props();
	let showLanguageDropdown = $state(false);
	let currentLocale = $state(Locale.En);

	locale.subscribe(() => {
		currentLocale = get(locale) as Locale;
	});

	let tabs = $derived([
		{ name: translation.project, link: '#project' },
		{ name: translation.experiences, link: '#experience' },
		{ name: translation.about, link: '#about' }
	]);

	function switchToEnglish() {
		locale.update(() => Locale.En);
		document.cookie = `locale=${Locale.En}`;
		showLanguageDropdown = false;
	}

	function switchToSimplifiedChinese() {
		locale.update(() => Locale.Cn);
		document.cookie = `locale=${Locale.Cn}`;
		showLanguageDropdown = false;
	}

	function switchToTraditionalChinese() {
		locale.update(() => Locale.Tw);
		document.cookie = `locale=${Locale.Tw}`;
		showLanguageDropdown = false;
	}

	function toggleTheme() {
		if (document.documentElement.classList.contains(Theme.Dark)) {
			isDarkModeEnabled = false;
			theme.update(() => Theme.Light);
			document.cookie = `theme=${Theme.Light}`;
			document.documentElement.classList.remove(Theme.Dark);
		} else {
			isDarkModeEnabled = true;
			theme.update(() => Theme.Dark);
			document.cookie = `theme=${Theme.Dark}`;
			document.documentElement.classList.add(Theme.Dark);
		}
	}
</script>

<header
	class:top-2={y > 0}
	class:border-neutral-600={y > 0}
	class:dark:border-neutral-400={y > 0}
	class:dark:bg-neutral-800={y > 0}
	class:bg-neutral-50={y > 0}
	class:py-4={y > 0}
	class:top-0={y <= 0}
	class:border-transparent={y <= 0}
	class:bg-transparent={y <= 0}
	class:py-6={y <= 0}
	class="sticky z-10 mx-2 flex items-center justify-between rounded-md border border-solid px-6 duration-200"
>
	<h1 class="dark:text-neutral-50">
		<b>Allen</b> Jiang
	</h1>
	<div class="ml-auto hidden items-center gap-6 pr-4 sm:flex">
		<div class="relative inline-block text-left">
			<div>
				<button
					onclick={() => {
						showLanguageDropdown = !showLanguageDropdown;
					}}
					type="button"
					class="flex items-center justify-center rounded-md bg-transparent"
					id="menu-button"
					aria-expanded="true"
					aria-haspopup="true"
					aria-label="change language"
				>
					<Language className="size-6 dark:text-neutral-50" />
				</button>
			</div>

			<div
				class:ease-out={showLanguageDropdown}
				class:duration-100={showLanguageDropdown}
				class:opacity-100={showLanguageDropdown}
				class:scale-100={showLanguageDropdown}
				class:ease-in={!showLanguageDropdown}
				class:duration-75={!showLanguageDropdown}
				class:opacity-0={!showLanguageDropdown}
				class:scale-0={!showLanguageDropdown}
				class="absolute right-0 z-10 mt-2 w-40 origin-top-right transform rounded-md bg-neutral-50 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none dark:bg-neutral-700"
				role="menu"
				aria-orientation="vertical"
				aria-labelledby="menu-button"
				tabindex="-1"
			>
				<div class="space-y-1 py-1">
					<button
						class:bg-neutral-200={currentLocale === Locale.En}
						class:dark:bg-neutral-600={currentLocale === Locale.En}
						onclick={switchToEnglish}
						type="button"
						class="block w-full px-4 py-2 text-sm hover:bg-neutral-200 dark:text-neutral-50 dark:hover:bg-neutral-600"
					>
						English
					</button>
					<button
						class:bg-neutral-200={currentLocale === Locale.Cn}
						class:dark:bg-neutral-600={currentLocale === Locale.Cn}
						onclick={switchToSimplifiedChinese}
						type="button"
						class="block w-full px-4 py-2 text-sm hover:bg-neutral-200 dark:text-neutral-50 dark:hover:bg-neutral-600"
					>
						简体中文
					</button>
					<button
						class:bg-neutral-200={currentLocale === Locale.Tw}
						class:dark:bg-neutral-600={currentLocale === Locale.Tw}
						onclick={switchToTraditionalChinese}
						type="button"
						class="block w-full px-4 py-2 text-sm hover:bg-neutral-200 dark:text-neutral-50 dark:hover:bg-neutral-600"
					>
						繁體中文
					</button>
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
		<div class="z-9 relative">{translation.check_my_blog} &rarr;</div>
	</a>
</header>
