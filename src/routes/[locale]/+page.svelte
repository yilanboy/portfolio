<script lang="ts">
	import Header from '$lib/components/layouts/Header.svelte';
	import Introduction from '$lib/components/sections/Introduction.svelte';
	import Project from '$lib/components/sections/Project.svelte';
	import Experience from '$lib/components/sections/Experience.svelte';
	import Skill from '$lib/components/sections/Skill.svelte';
	import About from '$lib/components/sections/About.svelte';
	import Footer from '$lib/components/layouts/Footer.svelte';
	import { Theme } from '$lib/enums';
	import ArrowUp from '$lib/components/icons/ArrowUp.svelte';
	import { fade } from 'svelte/transition';
	import type { PageServerData } from './$types';
	import Posts from '$lib/components/sections/Posts.svelte';

	interface Props {
		data: PageServerData;
	}

	let { data }: Props = $props();

	let isDarkModeEnabled = $state(data.theme === Theme.Dark);
	let y = $state(0);

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
		class={{
			'fixed right-0 bottom-0 z-10 flex p-10 duration-200': true,
			'opacity-full pointer-events-auto': y > 0,
			'pointer-events-none opacity-0': y <= 0
		}}
	>
		<button
			onclick={goTop}
			class="ml-auto grid aspect-square cursor-pointer place-items-center rounded-full bg-slate-900 px-3 text-neutral-50 transition duration-200 hover:bg-slate-700 sm:px-4 dark:bg-slate-600 dark:hover:bg-slate-500"
		>
			<ArrowUp />
		</button>
	</div>

	<Header
		{y}
		bind:isDarkModeEnabled
		currentLocale={data.locale}
		translation={data.translation.header}
	/>

	<main class="font-sans-poppins flex flex-1 flex-col px-2 md:px-6">
		<Introduction translation={data.translation.introduction} />

		<Project translation={data.translation.project} />

		<Posts translation={data.translation.post} />

		<Experience translation={data.translation.experience} />

		<Skill {isDarkModeEnabled} translation={data.translation.skill} />

		<About translation={data.translation.about} />
	</main>

	<Footer translation={data.translation.footer} />
</div>
