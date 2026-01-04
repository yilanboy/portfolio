<script lang="ts">
	import '../app.css';
	import Background from '$lib/components/Background.svelte';

	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<svelte:head>
	<!-- dark mode	-->
	<script defer>
		if (
			document.cookie.includes('theme=dark') ||
			(!document.cookie.includes('theme=light') &&
				window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.setAttribute('data-theme', 'dark');
		} else {
			document.documentElement.setAttribute('data-theme', 'light');
		}
	</script>
</svelte:head>

<div class="relative">
	<Background />

	<div class="mx-auto flex min-h-screen w-full max-w-7xl flex-col text-sm sm:text-base">
		{@render children?.()}
	</div>
</div>
