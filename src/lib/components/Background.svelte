<script lang="ts">
	import Controller from '$lib/components/icons/Controller.svelte';
	import PersonWalking from '$lib/components/icons/PersonWalking.svelte';
	import RocketTakeoff from '$lib/components/icons/RocketTakeoff.svelte';
	import ChatHeart from '$lib/components/icons/ChatHeart.svelte';
	import Easel from '$lib/components/icons/Easel.svelte';
	import GlobeAmericas from '$lib/components/icons/GlobeAmericas.svelte';
	import Bug from '$lib/components/icons/Bug.svelte';
	import FolderOpen from '$lib/components/icons/FolderOpen.svelte';
	import Cloud from '$lib/components/icons/Cloud.svelte';
	import Cpu from '$lib/components/icons/Cpu.svelte';
	import Terminal from '$lib/components/icons/Terminal.svelte';
	import Php from '$lib/components/icons/Php.svelte';
	import TypeScript from '$lib/components/icons/TypeScript.svelte';
	import ClipboardCheck from '$lib/components/icons/ClipboardCheck.svelte';
	import Floppy from '$lib/components/icons/Floppy.svelte';
	import HandThumbsUp from '$lib/components/icons/HandThumbsUp.svelte';
	import Lightbulb from '$lib/components/icons/Lightbulb.svelte';
	import MusicNoteBeamed from '$lib/components/icons/MusicNoteBeamed.svelte';
	import BatteryCharging from '$lib/components/icons/BatteryCharging.svelte';
	import CupHot from '$lib/components/icons/CupHot.svelte';
</script>

<div class="fixed top-0 right-1/2 h-screen w-full max-w-480 translate-x-1/2">
	<div id="background-left">
		<div class="absolute top-24 left-[2%] hidden md:block">
			<Controller className="rotate-12 size-42 text-neutral-200/60 dark:text-neutral-700/60" />
		</div>

		<div class="absolute top-72 left-[20%] hidden lg:block">
			<PersonWalking className="size-36 -rotate-12 text-neutral-200/60 dark:text-neutral-700/60" />
		</div>

		<div class="absolute top-104 left-[8%] hidden lg:block">
			<RocketTakeoff
				className="size-24 scale-x-[-1] text-neutral-200/60 dark:text-neutral-700/60"
			/>
		</div>

		<div class="absolute top-136 left-[20%] hidden md:block">
			<ChatHeart className="size-42 -rotate-12 text-neutral-200/60 dark:text-neutral-700/60" />
		</div>

		<div class="absolute top-152 left-[2%] hidden lg:block">
			<Easel className="size-24 rotate-12 text-neutral-200/60 dark:text-neutral-700/60" />
		</div>

		<div class="absolute top-196 left-[8%] hidden lg:block">
			<GlobeAmericas
				className="size-36 -rotate-12 scale-x-[-1] text-neutral-200/60 dark:text-neutral-700/60"
			/>
		</div>
		<div class="absolute top-16 left-[22%] hidden lg:block">
			<HandThumbsUp className="size-24 rotate-12 text-neutral-200/60 dark:text-neutral-700/60" />
		</div>

		<div class="absolute top-40 left-[38%] hidden lg:block">
			<Lightbulb className="size-24 -rotate-12 text-neutral-200/60 dark:text-neutral-700/60" />
		</div>

		<div class="absolute top-100 left-[38%] hidden lg:block">
			<BatteryCharging
				className="size-24 -rotate-12 text-neutral-200/60 dark:text-neutral-700/60"
			/>
		</div>

		<div class="absolute top-160 left-[38%] hidden lg:block">
			<MusicNoteBeamed className="size-24 rotate-12 text-neutral-200/60 dark:text-neutral-700/60" />
		</div>
	</div>

	<div id="background-right">
		<div class="absolute top-196 right-[36%] hidden lg:block">
			<TypeScript
				className="size-24 -rotate-12"
				rectClassName="fill-neutral-200 dark:fill-neutral-700"
				pathClassName="fill-neutral-50 dark:fill-neutral-800"
			/>
		</div>

		<div class="absolute top-16 right-[36%] hidden lg:block">
			<Cloud className="size-42 rotate-12 text-neutral-200/60 dark:text-neutral-700/60" />
		</div>

		<div class="absolute top-96 right-[34%] hidden lg:block">
			<CupHot className="size-24 rotate-12 text-neutral-200/60 dark:text-neutral-700/60" />
		</div>

		<div class="absolute top-140 right-[46%] hidden lg:block">
			<ClipboardCheck className="size-24 rotate-12 text-neutral-200/60 dark:text-neutral-700/60" />
		</div>

		<div class="absolute top-16 right-[22%] hidden lg:block">
			<Bug className="size-24 rotate-45 text-neutral-200/60 dark:text-neutral-700/60" />
		</div>

		<div class="absolute top-36 right-[4%] hidden lg:block">
			<FolderOpen className="size-24 rotate-12 text-neutral-200/60 dark:text-neutral-700/60" />
		</div>

		<div class="absolute top-72 right-[16%] hidden md:block">
			<Floppy className="size-42 -rotate-12 text-neutral-200/60 dark:text-neutral-700/60" />
		</div>

		<div class="absolute top-128 right-[4%] hidden lg:block">
			<Cpu className="size-24 -rotate-12 text-neutral-200/60 dark:text-neutral-700/60" />
		</div>

		<div class="absolute top-160 right-[20%] hidden lg:block">
			<Terminal className="size-24 rotate-12 text-neutral-200/60 dark:text-neutral-700/60" />
		</div>

		<div class="absolute top-196 right-[4%] hidden md:block">
			<Php className="size-42 rotate-12" pathClassName="fill-neutral-200 dark:fill-neutral-700" />
		</div>
	</div>
</div>

<style>
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
</style>
