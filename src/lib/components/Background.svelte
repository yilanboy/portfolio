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

<div class="absolute top-0 right-1/2 h-screen w-full max-w-[1920px] translate-x-1/2">
	<div id="background-left">
		<div class="absolute top-[6rem] left-[2%] hidden md:block">
			<Controller className="size-48 rotate-12 text-neutral-200 dark:text-neutral-700" />
		</div>

		<div class="absolute top-[18rem] left-[24%] hidden lg:block">
			<PersonWalking className="size-24 -rotate-12 text-neutral-200 dark:text-neutral-700" />
		</div>

		<div class="absolute top-[26rem] left-[8%] hidden lg:block">
			<RocketTakeoff className="size-24 scale-x-[-1] text-neutral-200 dark:text-neutral-700" />
		</div>

		<div class="absolute top-[34rem] left-[18%] hidden md:block">
			<ChatHeart className="size-48 -rotate-12 text-neutral-200 dark:text-neutral-700" />
		</div>

		<div class="absolute top-[38rem] left-[2%] hidden lg:block">
			<Easel className="size-24 rotate-12 text-neutral-200 dark:text-neutral-700" />
		</div>

		<div class="absolute top-[48rem] left-[8%] hidden lg:block">
			<GlobeAmericas
				className="size-24 -rotate-12 scale-x-[-1] text-neutral-200 dark:text-neutral-700"
			/>
		</div>
		<div class="absolute top-[4rem] left-[24%] hidden lg:block">
			<HandThumbsUp className="size-24 rotate-12 text-neutral-200 dark:text-neutral-700" />
		</div>

		<div class="absolute top-[10rem] left-[38%] hidden lg:block">
			<Lightbulb className="size-24 -rotate-12 text-neutral-200 dark:text-neutral-700" />
		</div>

		<div class="absolute top-[26rem] left-[38%] hidden lg:block">
			<BatteryCharging className="size-24 -rotate-12 text-neutral-200 dark:text-neutral-700" />
		</div>

		<div class="absolute top-[40rem] left-[40%] hidden lg:block">
			<MusicNoteBeamed className="size-24 rotate-12 text-neutral-200 dark:text-neutral-700" />
		</div>
	</div>

	<div id="background-right">
		<div class="absolute top-[42rem] right-[36%] hidden lg:block">
			<TypeScript
				className="size-24 -rotate-12"
				rectClassName="fill-neutral-200 dark:fill-neutral-700"
				pathClassName="fill-neutral-50 dark:fill-neutral-800"
			/>
		</div>

		<div class="absolute top-[6rem] right-[36%] hidden lg:block">
			<Cloud className="size-48 rotate-12 text-neutral-200 dark:text-neutral-700" />
		</div>

		<div class="absolute top-[24rem] right-[34%] hidden lg:block">
			<CupHot className="size-24 rotate-12 text-neutral-200 dark:text-neutral-700" />
		</div>

		<div class="absolute top-[30rem] right-[46%] hidden lg:block">
			<ClipboardCheck className="size-24 rotate-12 text-neutral-200 dark:text-neutral-700" />
		</div>
		<div class="absolute top-[6rem] right-[22%] hidden lg:block">
			<Bug className="size-24 rotate-45 text-neutral-200 dark:text-neutral-700" />
		</div>

		<div class="absolute top-[12rem] right-[4%] hidden lg:block">
			<FolderOpen className="size-24 rotate-12 text-neutral-200 dark:text-neutral-700" />
		</div>

		<div class="absolute top-[18rem] right-[14%] hidden md:block">
			<Floppy className="size-48 -rotate-12 text-neutral-200 dark:text-neutral-700" />
		</div>

		<div class="absolute top-[32rem] right-[4%] hidden lg:block">
			<Cpu className="size-24 -rotate-12 text-neutral-200 dark:text-neutral-700" />
		</div>

		<div class="absolute top-[40rem] right-[20%] hidden lg:block">
			<Terminal className="size-24 rotate-12 text-neutral-200 dark:text-neutral-700" />
		</div>

		<div class="absolute top-[44rem] right-[4%] hidden md:block">
			<Php className="size-48 rotate-12" pathClassName="fill-neutral-200 dark:fill-neutral-700" />
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
