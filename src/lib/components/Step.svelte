<script lang="ts">
	export let step: {
		name: string;
		href: string;
		description: string;
	};
</script>

<a
	href={step.href}
	target="_blank"
	class="group flex cursor-pointer flex-col gap-4 rounded-lg border-2 border-solid border-blue-700 p-4 text-center duration-200 hover:border-blue-400 sm:p-6 md:p-8 dark:border-blue-600 dark:hover:border-blue-100"
>
	<div
		class="mx-auto -mt-10 grid place-items-center gap-2 bg-neutral-50 px-4 text-5xl duration-200 sm:-mt-12 md:-mt-14 md:text-6xl lg:-mt-16 dark:bg-neutral-800"
	>
		<slot name="icon" />
	</div>

	<h3 class="text-xl font-medium sm:text-2xl md:text-3xl">{step.name}</h3>

	<slot name="content" />

	<div class="relative flex flex-1 items-end justify-end">
		<p
			class="relative bottom-0 right-5 opacity-0 transition-all duration-300 group-hover:right-0 group-hover:opacity-100"
		>
			前往 &rarr;
		</p>
	</div>
</a>
