<script lang="ts">
	import { fade } from 'svelte/transition';
	import AcrossMark from '$lib/components/icons/AcrossMark.svelte';

	export let showModal = false;
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
					<button on:click={() => (showModal = false)} type="button" class="absolute right-4 top-4">
						<AcrossMark
							className="size-10 text-neutral-400 transition duration-150 hover:text-neutral-600"
						/>
					</button>
					<div class="bg-neutral-50 px-4 pb-4 pt-5 sm:p-6 sm:pb-4 dark:bg-neutral-800">
						<slot />
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
