<script lang="ts">
	import { onMount } from 'svelte';

	export let barColor = '#111827';
	export let barBackgroundColor = '#e5e7eb';
	export let progress = '3%';
	export let centerBackgroundColor = '#f9fafb';
	let bar: HTMLDivElement;

	onMount(() => {
		const options = {
			threshold: 1
		};

		const callback = (entries: IntersectionObserverEntry[]) => {
			if (entries[0].intersectionRatio <= 0) return;

			bar.style.setProperty('--progress', progress);
		};

		const intersectionObserver = new IntersectionObserver(callback, options);

		intersectionObserver.observe(bar);
	});
</script>

<div
	role="progressbar"
	class="flex size-48 rounded-full"
	style:--bar-color={barColor}
	style:--bar-background-color={barBackgroundColor}
	bind:this={bar}
>
	<div
		style:--center-background-color={centerBackgroundColor}
		class="m-auto flex size-[85%] items-center justify-center rounded-full text-xl text-black"
	>
		<slot />
	</div>
</div>

<style>
	@property --bar-color {
		syntax: '<color>';
		inherits: false;
		initial-value: #111827;
	}

	@property --bar-background-color {
		syntax: '<color>';
		inherits: false;
		initial-value: #e5e7eb;
	}

	@property --progress {
		syntax: '<length-percentage>';
		inherits: false;
		initial-value: 3%;
	}

	@property --center-background-color {
		syntax: '<color>';
		inherits: false;
		initial-value: #f9fafb;
	}

	[role='progressbar'] {
		background: conic-gradient(
			var(--bar-color) var(--progress),
			var(--bar-background-color) var(--progress)
		);
		transition: --progress 2s;
	}

	[role='progressbar'] > div {
		background-color: var(--center-background-color);
	}
</style>
