<script lang="ts">
	export let isEnabled = false;
</script>

<button
	type="button"
	class="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-neutral-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
	class:bg-indigo-600={isEnabled}
	class:bg-neutral-200={!isEnabled}
	on:click={() => (isEnabled = !isEnabled)}
	on:click
	role="switch"
	aria-checked="false"
>
	<span class="sr-only">Use setting</span>
	<span
		aria-hidden="true"
		class="pointer-events-none inline-block h-5 w-5 translate-x-0 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
		class:translate-x-5={isEnabled}
		class:translate-x-0={!isEnabled}
	></span>
</button>
