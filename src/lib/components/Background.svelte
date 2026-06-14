<script lang="ts">
	import Controller from '@lucide/svelte/icons/gamepad-2';
	import RocketTakeoff from '@lucide/svelte/icons/rocket';
	import GlobeAmericas from '@lucide/svelte/icons/globe';
	import Bug from '@lucide/svelte/icons/bug';
	import Cloud from '@lucide/svelte/icons/cloud';
	import Cpu from '@lucide/svelte/icons/cpu';
	import Terminal from '@lucide/svelte/icons/terminal';
	import TypeScript from '$lib/components/icons/TypeScript.svelte';
	import Lightbulb from '@lucide/svelte/icons/lightbulb';
	import MusicNoteBeamed from '@lucide/svelte/icons/music';
</script>

<div
	class="pointer-events-none fixed top-0 right-1/2 h-screen w-full max-w-480 translate-x-1/2"
	aria-hidden="true"
>
	<div id="background-left">
		<div class="absolute top-24 left-[6%] hidden md:block">
			<Controller class="size-32 rotate-6 text-neutral-200/25 dark:text-neutral-700/30" />
		</div>

		<div class="absolute top-72 left-[30%] hidden lg:block">
			<Lightbulb class="size-20 -rotate-6 text-neutral-200/25 dark:text-neutral-700/30" />
		</div>

		<div class="absolute top-128 left-[8%] hidden lg:block">
			<RocketTakeoff class="size-36 scale-x-[-1] text-neutral-200/25 dark:text-neutral-700/30" />
		</div>

		<div class="absolute top-184 left-[28%] hidden lg:block">
			<GlobeAmericas
				class="size-24 -rotate-6 scale-x-[-1] text-neutral-200/25 dark:text-neutral-700/30"
			/>
		</div>

		<div class="absolute top-232 left-[10%] hidden lg:block">
			<MusicNoteBeamed class="size-20 rotate-6 text-neutral-200/25 dark:text-neutral-700/30" />
		</div>
	</div>

	<div id="background-right">
		<div class="absolute top-32 right-[28%] hidden lg:block">
			<Bug class="size-20 rotate-12 text-neutral-200/25 dark:text-neutral-700/30" />
		</div>

		<div class="absolute top-80 right-[6%] hidden md:block">
			<Cloud class="size-36 rotate-6 text-neutral-200/25 dark:text-neutral-700/30" />
		</div>

		<div class="absolute top-136 right-[26%] hidden lg:block">
			<Cpu class="size-24 -rotate-6 text-neutral-200/25 dark:text-neutral-700/30" />
		</div>

		<div class="absolute top-192 right-[8%] hidden lg:block">
			<Terminal class="size-28 rotate-6 text-neutral-200/25 dark:text-neutral-700/30" />
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
