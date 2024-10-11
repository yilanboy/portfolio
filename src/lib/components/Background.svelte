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

<div class="absolute right-1/2 top-0 h-screen w-full max-w-[1920px] translate-x-1/2">
	<!-- icon background left side -->
	<div class="absolute left-[2%] top-[6rem] hidden md:block">
		<Controller className="size-56 rotate-12 text-neutral-200 dark:text-neutral-700" />
	</div>

	<div class="absolute left-[24%] top-[18rem] hidden lg:block">
		<PersonWalking className="size-24 -rotate-12 text-neutral-200 dark:text-neutral-700" />
	</div>

	<div class="absolute left-[8%] top-[26rem] hidden lg:block">
		<RocketTakeoff className="size-24 scale-x-[-1] text-neutral-200 dark:text-neutral-700" />
	</div>

	<div class="absolute left-[18%] top-[34rem] hidden md:block">
		<ChatHeart className="size-56 -rotate-12 text-neutral-200 dark:text-neutral-700" />
	</div>

	<div class="absolute left-[2%] top-[38rem] hidden lg:block">
		<Easel className="size-24 rotate-12 text-neutral-200 dark:text-neutral-700" />
	</div>

	<div class="absolute left-[8%] top-[48rem] hidden lg:block">
		<GlobeAmericas
			className="size-24 -rotate-12 scale-x-[-1] text-neutral-200 dark:text-neutral-700"
		/>
	</div>

	<!-- icon background center -->
	<div class="absolute left-[24%] top-[4rem] hidden lg:block">
		<HandThumbsUp className="size-24 rotate-12 text-neutral-200 dark:text-neutral-700" />
	</div>

	<div class="absolute left-[38%] top-[10rem] hidden lg:block">
		<Lightbulb className="size-24 -rotate-12 text-neutral-200 dark:text-neutral-700" />
	</div>

	<div class="absolute left-[38%] top-[26rem] hidden lg:block">
		<BatteryCharging className="size-24 -rotate-12 text-neutral-200 dark:text-neutral-700" />
	</div>

	<div class="absolute left-[40%] top-[40rem] hidden lg:block">
		<MusicNoteBeamed className="size-24 rotate-12 text-neutral-200 dark:text-neutral-700" />
	</div>

	<div class="absolute right-[36%] top-[42rem] hidden lg:block">
		<TypeScript
			className="size-24 -rotate-12"
			rectClassName="fill-neutral-200 dark:fill-neutral-700"
			pathClassName="fill-neutral-50 dark:fill-neutral-800"
		/>
	</div>

	<div class="absolute right-[36%] top-[6rem] hidden lg:block">
		<Cloud className="size-56 rotate-12 text-neutral-200 dark:text-neutral-700" />
	</div>

	<div class="absolute right-[34%] top-[24rem] hidden lg:block">
		<CupHot className="size-24 rotate-12 text-neutral-200 dark:text-neutral-700" />
	</div>

	<div class="absolute right-[46%] top-[30rem] hidden lg:block">
		<ClipboardCheck className="size-24 rotate-12 text-neutral-200 dark:text-neutral-700" />
	</div>

	<!-- icon background right side -->
	<div class="absolute right-[22%] top-[6rem] hidden lg:block">
		<Bug className="size-24 rotate-45 text-neutral-200 dark:text-neutral-700" />
	</div>

	<div class="absolute right-[4%] top-[12rem] hidden lg:block">
		<FolderOpen className="size-24 rotate-12 text-neutral-200 dark:text-neutral-700" />
	</div>

	<div class="absolute right-[14%] top-[18rem] hidden md:block">
		<Floppy className="size-56 -rotate-12 text-neutral-200 dark:text-neutral-700" />
	</div>

	<div class="absolute right-[4%] top-[32rem] hidden lg:block">
		<Cpu className="size-24 -rotate-12 text-neutral-200 dark:text-neutral-700" />
	</div>

	<div class="absolute right-[20%] top-[40rem] hidden lg:block">
		<Terminal className="size-24 rotate-12 text-neutral-200 dark:text-neutral-700" />
	</div>

	<div class="absolute right-[4%] top-[44rem] hidden md:block">
		<Php className="size-56 rotate-12" pathClassName="fill-neutral-200 dark:fill-neutral-700" />
	</div>
</div>
