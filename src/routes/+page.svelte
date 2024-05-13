<script lang="ts">
	import Introduction from '../components/Introduction.svelte';
	import Projects from '../components/Projects.svelte';
	import About from '../components/About.svelte';
	import Experience from '../components/Experience.svelte';
</script>

<main class="font-sans-poppins flex flex-1 flex-col px-6">
	<Introduction />

	<Projects />

	<Experience />

	<About />
</main>

<svelte:head>
	<title>Allen's Portfolio</title>
</svelte:head>