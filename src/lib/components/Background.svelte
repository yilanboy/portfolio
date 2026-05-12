<script lang="ts">
	import Controller from '$lib/components/icons/Controller.svelte';
	import RocketTakeoff from '$lib/components/icons/RocketTakeoff.svelte';
	import GlobeAmericas from '$lib/components/icons/GlobeAmericas.svelte';
	import Bug from '$lib/components/icons/Bug.svelte';
	import Cloud from '$lib/components/icons/Cloud.svelte';
	import Cpu from '$lib/components/icons/Cpu.svelte';
	import Terminal from '$lib/components/icons/Terminal.svelte';
	import TypeScript from '$lib/components/icons/TypeScript.svelte';
	import Lightbulb from '$lib/components/icons/Lightbulb.svelte';
	import MusicNoteBeamed from '$lib/components/icons/MusicNoteBeamed.svelte';
</script>

<div
	class="pointer-events-none fixed top-0 right-1/2 h-screen w-full max-w-480 translate-x-1/2"
	aria-hidden="true"
>
	<div id="background-left">
		<div class="absolute top-24 left-[6%] hidden md:block">
			<Controller className="size-32 rotate-6 text-neutral-200/25 dark:text-neutral-700/30" />
		</div>

		<div class="absolute top-72 left-[30%] hidden lg:block">
			<Lightbulb className="size-20 -rotate-6 text-neutral-200/25 dark:text-neutral-700/30" />
		</div>

		<div class="absolute top-128 left-[8%] hidden lg:block">
			<RocketTakeoff
				className="size-36 scale-x-[-1] text-neutral-200/25 dark:text-neutral-700/30"
			/>
		</div>

		<div class="absolute top-184 left-[28%] hidden lg:block">
			<GlobeAmericas
				className="size-24 -rotate-6 scale-x-[-1] text-neutral-200/25 dark:text-neutral-700/30"
			/>
		</div>

		<div class="absolute top-232 left-[10%] hidden lg:block">
			<MusicNoteBeamed className="size-20 rotate-6 text-neutral-200/25 dark:text-neutral-700/30" />
		</div>
	</div>

	<div id="background-right">
		<div class="absolute top-32 right-[28%] hidden lg:block">
			<Bug className="size-20 rotate-12 text-neutral-200/25 dark:text-neutral-700/30" />
		</div>

		<div class="absolute top-80 right-[6%] hidden md:block">
			<Cloud className="size-36 rotate-6 text-neutral-200/25 dark:text-neutral-700/30" />
		</div>

		<div class="absolute top-136 right-[26%] hidden lg:block">
			<Cpu className="size-24 -rotate-6 text-neutral-200/25 dark:text-neutral-700/30" />
		</div>

		<div class="absolute top-192 right-[8%] hidden lg:block">
			<Terminal className="size-28 rotate-6 text-neutral-200/25 dark:text-neutral-700/30" />
		</div>

		<div class="absolute top-240 right-[30%] hidden lg:block">
			<TypeScript
				className="size-20"
				rectClassName="fill-neutral-200/25 dark:fill-neutral-700/30"
				pathClassName="fill-neutral-50 dark:fill-neutral-800"
			/>
		</div>
	</div>
</div>

<style>
	@media (prefers-reduced-motion: no-preference) {
		@keyframes pop-from-bottom-to-right {
			from {
				top: 130%;
				right: 50%;
			}
		}

		@keyframes pop-from-bottom-to-left {
			from {
				top: 130%;
				left: 50%;
			}
		}

		#background-right > div {
			animation-duration: 3s;
			animation-timing-function: cubic-bezier(0.2, 0.7, 0, 1);
			animation-name: pop-from-bottom-to-right;
		}

		#background-left > div {
			animation-duration: 3s;
			animation-timing-function: cubic-bezier(0.2, 0.7, 0, 1);
			animation-name: pop-from-bottom-to-left;
		}
	}
</style>
