<script lang="ts">
	import { fade } from 'svelte/transition';
	import AcrossMark from '$lib/components/icons/AcrossMark.svelte';

	interface Props {
		showModal?: boolean;
		children?: import('svelte').Snippet;
	}

	let { showModal = $bindable(false), children }: Props = $props();
</script>

{#if showModal}
	<div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
		<div
			in:fade={{ duration: 200 }}
			out:fade={{ delay: 200, duration: 200 }}
			id="backdrop"
			class="fixed inset-0 bg-neutral-500 bg-opacity-75 backdrop-blur-md transition-opacity"
		></div>

		<div class="fixed inset-0 z-10 w-screen overflow-y-auto">
			<div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
				<div
					in:fade={{ delay: 200, duration: 200 }}
					out:fade={{ duration: 200 }}
					id="modal"
					class="relative transform overflow-hidden rounded-lg bg-neutral-50 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl"
				>
					<button onclick={() => (showModal = false)} type="button" class="absolute right-4 top-4">
						<AcrossMark
							className="size-10 text-neutral-400 transition duration-150 hover:text-neutral-600 dark:hover:text-neutral-200"
						/>
					</button>
					<div class="bg-neutral-50 px-4 pb-4 pt-5 dark:bg-neutral-800 sm:p-6 sm:pb-4">
						{@render children?.()}
					</div>
				</div>
			</div>
		</div>
	</div>

	<style>
		body {
			overflow: hidden;
		}
	</style>
{/if}
