<script lang="ts">
	import type { AboutTranslation } from '$lang/type/about.type';

	interface Props {
		translation: AboutTranslation;
	}

	let { translation }: Props = $props();
</script>

<section
	id="about"
	class="relative flex flex-col gap-16 py-20 pt-10 sm:gap-20 md:gap-24 lg:py-32 lg:pt-16"
>
	<div class="flex flex-col gap-2 text-center dark:text-neutral-50">
		<h6 class="font-caveat text-2xl md:text-4xl">Hey! my friends</h6>
		<h3 class="text-3xl font-semibold sm:text-4xl md:text-5xl">
			{translation.section_title_prefix}
			<span
				class="relative inline-block p-1 before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-red-500 dark:before:bg-red-600"
			>
				<span class="relative text-neutral-50">
					{translation.section_title_highlight}
				</span>
			</span>
			{translation.section_title_suffix}
		</h3>
	</div>
	<p class="mx-auto text-lg font-semibold sm:text-xl md:text-2xl dark:text-neutral-50">
		{translation.I_am_also}
	</p>
	<div class="mx-auto flex w-full max-w-3xl flex-col gap-20 dark:text-neutral-50">
		{#each translation.strengths as strength, index (index)}
			<div class="flex gap-6 sm:gap-8">
				<p class="w-1/5 text-4xl font-semibold text-red-500 sm:text-5xl md:text-6xl">
					{(index + 1).toString().padStart(2, '0')}
				</p>
				<div class="flex w-4/5 flex-col gap-6 sm:gap-8">
					<h3 class="text-2xl sm:text-3xl md:text-5xl">
						{strength.name}
					</h3>
					<p class="text-neutral-500 dark:text-neutral-400">{strength.description}</p>
				</div>
			</div>
		{/each}
	</div>
</section>
