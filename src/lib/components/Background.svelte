<script lang="ts">
	import Controller from '$lib/components/icons/Controller.svelte';
	import PersonWalking from '$lib/components/icons/PersonWalking.svelte';
	import RocketTakeoff from '$lib/components/icons/RocketTakeoff.svelte';
	import ChatHeart from '$lib/components/icons/ChatHeart.svelte';
	import Easel from '$lib/components/icons/Easel.svelte';
	import GlobeAmericas from '$lib/components/icons/GlobeAmericas.svelte';
	import Bug from '$lib/components/icons/Bug.svelte';
	import FolderOpen from '$lib/components/icons/FolderOpen.svelte';
	import Laptop from '$lib/components/icons/Laptop.svelte';
	import Cpu from '$lib/components/icons/Cpu.svelte';
	import Terminal from '$lib/components/icons/Terminal.svelte';
	import FiletypePhp from '$lib/components/icons/FiletypePhp.svelte';
</script>

<!-- icon background left side -->
<div class="absolute left-[2%] top-[6rem] hidden md:block">
	<Controller className="size-64 rotate-12 text-neutral-200 dark:text-neutral-700" />
</div>

<div class="absolute left-[20%] top-[18rem] hidden md:block">
	<PersonWalking className="size-24 -rotate-12 text-neutral-200 dark:text-neutral-700" />
</div>

<div class="absolute left-[8%] top-[26rem] hidden md:block">
	<RocketTakeoff className="size-24 scale-x-[-1] text-neutral-200 dark:text-neutral-700" />
</div>

<div class="absolute left-[16%] top-[32rem] hidden md:block">
	<ChatHeart className="size-64 -rotate-12 text-neutral-200 dark:text-neutral-700" />
</div>

<div class="absolute left-[2%] top-[38rem] hidden md:block">
	<Easel className="size-24 rotate-12 text-neutral-200 dark:text-neutral-700" />
</div>

<div class="absolute left-[10%] top-[48rem] hidden md:block">
	<GlobeAmericas
		className="size-24 -rotate-12 scale-x-[-1] text-neutral-200 dark:text-neutral-700"
	/>
</div>

<!-- icon background right side -->
<div class="absolute right-[22%] top-[8rem] hidden md:block">
	<Bug className="size-24 rotate-45 text-neutral-200 dark:text-neutral-700" />
</div>

<div class="absolute right-[4%] top-[12rem] hidden md:block">
	<FolderOpen className="size-24 rotate-12 text-neutral-200 dark:text-neutral-700" />
</div>

<div class="absolute right-[14%] top-[18rem] hidden md:block">
	<Laptop className="size-64 -rotate-12 text-neutral-200 dark:text-neutral-700" />
</div>

<div class="absolute right-[4%] top-[32rem] hidden md:block">
	<Cpu className="size-24 -rotate-12 text-neutral-200 dark:text-neutral-700" />
</div>

<div class="absolute right-[20%] top-[38rem] hidden md:block">
	<Terminal className="size-24 rotate-12 text-neutral-200 dark:text-neutral-700" />
</div>

<div class="absolute right-[4%] top-[44rem] hidden md:block">
	<FiletypePhp className="size-64 rotate-12 text-neutral-200 dark:text-neutral-700" />
</div>
