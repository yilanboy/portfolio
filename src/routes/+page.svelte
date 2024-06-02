<script lang="ts">
	import Introduction from '../components/sections/Introduction.svelte';
	import Projects from '../components/sections/Projects.svelte';
	import About from '../components/sections/About.svelte';
	import Experience from '../components/sections/Experience.svelte';
	import TechStack from '../components/sections/TechStack.svelte';
</script>

<main class="flex flex-1 flex-col px-6 font-sans-poppins">
	<Introduction />

	<Projects />

	<Experience />

	<TechStack />

	<About />
</main>

<svelte:head>
	<title>Allen's Portfolio</title>
</svelte:head>
