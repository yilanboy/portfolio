<script lang="ts">
	import Header from '$lib/components/layouts/Header.svelte';
	import Introduction from '$lib/components/sections/Introduction.svelte';
	import Project from '$lib/components/sections/Project.svelte';
	import Experience from '$lib/components/sections/Experience.svelte';
	import Skill from '$lib/components/sections/Skill.svelte';
	import About from '$lib/components/sections/About.svelte';
	import Footer from '$lib/components/layouts/Footer.svelte';
	import { locale } from '$lib/stores';
	import { get } from 'svelte/store';
	import { Locale, Theme } from '$lib/enums';
	import ArrowUp from '$lib/components/icons/ArrowUp.svelte';
	import { fade } from 'svelte/transition';
	import type { PageData } from './$types';
	// locale translations
	import english from '$lib/lang/en';
	import traditionalChinese from '$lib/lang/zh-TW';
	import simplifiedChinese from '$lib/lang/zh-CN';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	const translations = {
		'en-US': english,
		'zh-CN': simplifiedChinese,
		'zh-TW': traditionalChinese
	};

	let isDarkModeEnabled = $state(data.theme === Theme.Dark);
	let translation = $state(translations[data.locale as Locale]);
	let y = $state(0);

	locale.update(() => data.locale);

	locale.subscribe(() => {
		translation = translations[get(locale) as Locale];
	});

	function goTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<svelte:head>
	<title>Allen's Portfolio</title>
</svelte:head>

<svelte:window bind:scrollY={y} />

<div
	transition:fade
	class="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col text-sm sm:text-base"
>
	<div
		class:opacity-full={y > 0}
		class:pointer-events-auto={y > 0}
		class:pointer-events-none={y <= 0}
		class:opacity-0={y <= 0}
		class="fixed bottom-0 right-0 z-10 flex p-10 duration-200"
	>
		<button
			onclick={goTop}
			class="ml-auto grid aspect-square cursor-pointer place-items-center rounded-full bg-slate-900 px-3 text-neutral-50 transition duration-200 hover:bg-slate-700 dark:bg-slate-600 dark:hover:bg-slate-500 sm:px-4"
		>
			<ArrowUp />
		</button>
	</div>

	<Header {y} bind:isDarkModeEnabled translation={translation.header} />

	<main class="flex flex-1 flex-col px-2 font-sans-poppins md:px-6">
		<Introduction translation={translation.introduction} />

		<Project translation={translation.project} />

		<Experience translation={translation.experience} />

		<Skill {isDarkModeEnabled} translation={translation.skill} />

		<About translation={translation.about} />
	</main>

	<Footer translation={translation.footer} />
</div>
