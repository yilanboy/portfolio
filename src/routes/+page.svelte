<script lang="ts">
	import Introduction from '$lib/components/sections/Introduction.svelte';
	import Projects from '$lib/components/sections/Projects.svelte';
	import About from '$lib/components/sections/About.svelte';
	import Experience from '$lib/components/sections/Experience.svelte';
	import TechStack from '$lib/components/sections/TechStack.svelte';
</script>

<main class="flex flex-1 flex-col px-2 font-sans-poppins md:px-6">
	<Introduction />

	<Projects />

	<Experience />

	<TechStack />

	<About />
</main>

<svelte:head>
	<title>Allen's Portfolio</title>
</svelte:head>
