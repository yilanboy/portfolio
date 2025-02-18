<script lang="ts">
	import Toggle from '$lib/components/Toggle.svelte';
	import { theme } from '$lib/stores';
	import Sun from '$lib/components/icons/Sun.svelte';
	import Moon from '$lib/components/icons/Moon.svelte';
	import { Theme, Locale } from '$lib/enums';
	import Language from '$lib/components/icons/Language.svelte';

	import type { HeaderTranslation } from '$lang/type/header.type';

	interface Props {
		y: number;
		isDarkModeEnabled: boolean;
		currentLocale: Locale;
		translation: HeaderTranslation;
	}

	let { y, isDarkModeEnabled = $bindable(), currentLocale, translation }: Props = $props();
	let showLanguageDropdown = $state(false);

	let tabs = $derived([
		{ name: translation.project, link: '#project' },
		{ name: translation.experiences, link: '#experience' },
		{ name: translation.about, link: '#about' }
	]);

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

	function toggleLanguageDropdown() {
		showLanguageDropdown = !showLanguageDropdown;
	}

	function closeLanguageDropdown() {
		showLanguageDropdown = false;
	}

	function stopPropagation(fn: (event: Event) => void) {
		return function (this: (event: Event) => void, event: Event) {
			event.stopPropagation();
			fn.call(this, event);
		};
	}
</script>

<svelte:window onclick={closeLanguageDropdown} />

<header
	class={{
		'top-2 border-neutral-600 bg-neutral-50 py-4 dark:border-neutral-400 dark:bg-neutral-800':
			y > 0,
		'top-0 border-transparent bg-transparent py-6': y <= 0,
		'sticky z-10 mx-2 flex items-center justify-between rounded-2xl border border-solid px-6 duration-200': true
	}}
>
	<h1 class="dark:text-neutral-50">
		<b>Allen</b> Jiang
	</h1>
	<div class="ml-auto hidden items-center gap-6 pr-4 sm:flex">
		<div class="relative inline-block text-left">
			<div>
				<button
					onclick={stopPropagation(toggleLanguageDropdown)}
					type="button"
					class="flex cursor-pointer items-center justify-center rounded-md bg-transparent"
					id="menu-button"
					aria-expanded="true"
					aria-haspopup="true"
					aria-label="change language"
				>
					<Language className="size-6 dark:text-neutral-50" />
				</button>
			</div>

			<div
				class={{
					'scale-100 opacity-100 duration-100 ease-out': showLanguageDropdown,
					'scale-0 opacity-0 duration-75 ease-in': !showLanguageDropdown,
					'ring-opacity-5 absolute right-0 z-10 mt-2 w-40 origin-top-right transform rounded-md bg-neutral-50 ring-1 shadow-lg ring-black transition focus:outline-hidden dark:bg-neutral-700': true
				}}
				role="menu"
				aria-orientation="vertical"
				aria-labelledby="menu-button"
				tabindex="-1"
			>
				<div class="space-y-1 py-1">
					<a
						class={{
							'bg-neutral-200 dark:bg-neutral-600': currentLocale === Locale.En,
							'block w-full px-4 py-2 text-sm hover:bg-neutral-200 dark:text-neutral-50 dark:hover:bg-neutral-600': true
						}}
						data-sveltekit-noscroll
						href="/{Locale.En}"
					>
						English
					</a>
					<a
						class={{
							'bg-neutral-200 dark:bg-neutral-600': currentLocale === Locale.Cn,
							'block w-full px-4 py-2 text-sm hover:bg-neutral-200 dark:text-neutral-50 dark:hover:bg-neutral-600': true
						}}
						data-sveltekit-noscroll
						href="/{Locale.Cn}"
					>
						简体中文
					</a>
					<a
						class={{
							'bg-neutral-200 dark:bg-neutral-600': currentLocale === Locale.Tw,
							'block w-full px-4 py-2 text-sm hover:bg-neutral-200 dark:text-neutral-50 dark:hover:bg-neutral-600': true
						}}
						data-sveltekit-noscroll
						href="/{Locale.Tw}"
					>
						繁體中文
					</a>
					<a
						class={{
							'bg-neutral-200 dark:bg-neutral-600': currentLocale === Locale.Ja,
							'block w-full px-4 py-2 text-sm hover:bg-neutral-200 dark:text-neutral-50 dark:hover:bg-neutral-600': true
						}}
						data-sveltekit-noscroll
						href="/{Locale.Ja}"
					>
						日本語
					</a>
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
			class="absolute top-0 right-full z-0 size-full bg-blue-400 opacity-20 duration-200 group-hover:translate-x-full"
		></div>
		<div class="relative z-9">{translation.check_my_blog} &rarr;</div>
	</a>
</header>
