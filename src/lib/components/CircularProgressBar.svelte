<script lang="ts">
	import { onMount } from 'svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		barColor?: string;
		barBackgroundColor?: string;
		progress?: number;
		centerBackgroundColor?: string;
		children?: Snippet;
	}

	let {
		barColor = '#111827',
		barBackgroundColor = '#e5e7eb',
		progress = 3,
		centerBackgroundColor = '#f9fafb',
		children
	}: Props = $props();

	let bar: HTMLDivElement;

	onMount(() => {
		const options = {
			threshold: 1
		};

		const callback = (entries: IntersectionObserverEntry[]) => {
			if (entries[0].intersectionRatio <= 0) return;

			let currentProgress = progress;
			if (currentProgress > 100) {
				currentProgress = 100;
			}

			bar.style.setProperty('--progress', `${currentProgress}%`);
		};

		const intersectionObserver = new IntersectionObserver(callback, options);

		intersectionObserver.observe(bar);

		return () => intersectionObserver.disconnect();
	});
</script>

<div
	bind:this={bar}
	style:--bar-color={barColor}
	style:--bar-background-color={barBackgroundColor}
	role="progressbar"
	aria-valuenow={Math.min(progress, 100)}
	aria-valuemin={0}
	aria-valuemax={100}
	aria-label="Skill progress"
	class="flex size-48 rounded-full"
>
	<div
		style:background-color={centerBackgroundColor}
		class="m-auto flex size-[82%] items-center justify-center rounded-full text-xl text-black"
	>
		{@render children?.()}
	</div>
</div>

<style>
	@property --progress {
		syntax: '<length-percentage>';
		inherits: false;
		initial-value: 0%;
	}

	[role='progressbar'] {
		background: conic-gradient(
			var(--bar-color) var(--progress),
			var(--bar-background-color) var(--progress)
		);
		transition: --progress 2s;
	}
</style>
