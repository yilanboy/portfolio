<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/layouts/Header.svelte';
	import Footer from '$lib/components/layouts/Footer.svelte';
	import ArrowUp from '$lib/components/icons/ArrowUp.svelte';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	let y = $state(0);
	let innerHeight = $state(0);
	let innerWidth = $state(0);

	function goTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<div class="bg-neutral-50 text-neutral-900 dark:bg-neutral-800">
	<div class="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col text-sm sm:text-base">
		<div
			class={'fixed bottom-0 right-0 z-10 flex p-10 duration-200' +
				(y > 0 ? ' opacity-full pointer-events-auto' : ' pointer-events-none opacity-0')}
		>
			<button
				onclick={goTop}
				class="ml-auto grid aspect-square cursor-pointer place-items-center rounded-full bg-slate-900 px-3 text-neutral-50 transition duration-200 hover:bg-slate-700 dark:bg-slate-600 dark:hover:bg-slate-500 sm:px-4"
			>
				<ArrowUp />
			</button>
		</div>

		<Header {y} />

		{@render children?.()}

		<Footer />
	</div>
</div>

<svelte:head>
	<!-- dark mode	-->
	<script defer>
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	</script>

	<!-- font	-->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
	<link
		href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Noto+Sans+SC:wght@100..900&family=Noto+Sans+TC:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />
