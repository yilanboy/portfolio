<script lang="ts">
	export let barColor = '#111827';
	export let barBackgroundColor = '#d1d5db';
	export let progress = '3%';
</script>

<div
	role="progressbar"
	class="flex size-48 rounded-full"
	style:--bar-color={barColor}
	style:--bar-background-color={barBackgroundColor}
	style:--progress={progress}
>
	<div
		class="m-auto flex size-[85%] items-center justify-center rounded-full bg-gray-50 text-xl text-black"
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
		initial-value: #d1d5db;
	}

	@property --progress {
		syntax: '<length-percentage>';
		inherits: false;
		initial-value: 3%;
	}

	@keyframes growing {
		from {
			--progress: 3%;
		}
	}

	[role='progressbar'] {
		background: conic-gradient(
			var(--bar-color) var(--progress),
			var(--bar-background-color) var(--progress)
		);
		animation: growing 2s forwards;
	}
</style>
