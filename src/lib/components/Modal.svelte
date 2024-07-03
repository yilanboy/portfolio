<script lang="ts">
	import { fade } from 'svelte/transition';

	export let showModal = false;
</script>

{#if showModal}
	<div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
		<div
			in:fade
			out:fade
			id="backdrop"
			class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
		></div>

		<div class="fixed inset-0 z-10 w-screen overflow-y-auto">
			<div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
				<div
					in:fade
					out:fade
					id="modal"
					class="relative transform overflow-hidden rounded-lg bg-gray-50 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl"
				>
					<div class="bg-gray-50 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
						<slot />
					</div>
					<div class="bg-gray-100 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
						<button
							on:click={() => (showModal = false)}
							type="button"
							class="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-gray-50 shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
						>
							關閉
						</button>
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
