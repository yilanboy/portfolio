<script lang="ts">
	import '../app.css';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
	import ArrowUp from '../components/icons/ArrowUp.svelte';

	let y = 0;
	let innerHeight = 0;
	let innerWidth = 0;

	function goTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<div class="bg-gray-50 text-gray-900">
	<div
		class="relative mx-auto flex min-h-screen w-full max-w-[1400px] flex-col text-sm sm:text-base"
	>
		<div
			class={'fixed bottom-0 right-0 z-10 flex p-10 duration-200' +
				(y > 0 ? ' opacity-full pointer-events-auto' : ' pointer-events-none opacity-0')}
		>
			<button
				on:click={goTop}
				class="ml-auto grid aspect-square cursor-pointer place-items-center rounded-full bg-slate-900 px-3 text-gray-50 hover:bg-slate-800 sm:px-4"
			>
				<ArrowUp />
			</button>
		</div>

		<Header {y} />

		<slot />

		<Footer />
	</div>
</div>

<svelte:head>
	<title>Allen's Portfolio</title>
	<!-- font	-->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
	<link
		href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />
