<script lang="ts">
	import Introduction from '$lib/components/sections/Introduction.svelte';
	import Project from '$lib/components/sections/Project.svelte';
	import About from '$lib/components/sections/About.svelte';
	import Experience from '$lib/components/sections/Experience.svelte';
	import Skill from '$lib/components/sections/Skill.svelte';
</script>

<main class="flex flex-1 flex-col px-2 font-sans-poppins md:px-6">
	<Introduction />

	<Project />

	<Experience />

	<Skill />

	<About />
</main>

<svelte:head>
	<title>Allen's Portfolio</title>
</svelte:head>
