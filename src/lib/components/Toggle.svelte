<script lang="ts">
	export let isEnabled = false;
</script>

<button
	type="button"
	class="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
	class:bg-indigo-600={isEnabled}
	class:bg-gray-200={!isEnabled}
	role="switch"
	aria-checked="false"
	on:click={() => (isEnabled = !isEnabled)}
	on:click
>
	<span class="sr-only">Use setting</span>
	<!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
	<span
		class="pointer-events-none relative inline-block h-5 w-5 translate-x-0 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
		class:translate-x-5={isEnabled}
		class:translate-x-0={!isEnabled}
	>
		<span
			class="absolute inset-0 flex h-full w-full items-center justify-center opacity-100 transition-opacity duration-200 ease-in"
			class:opacity-0={isEnabled}
			class:duration-100={isEnabled}
			class:ease-out={isEnabled}
			class:opacity-100={!isEnabled}
			class:duration-200={!isEnabled}
			class:ease-in={!isEnabled}
			aria-hidden="true"
		>
			<slot name="iconShowOnDisabled" />
		</span>
		<span
			class="absolute inset-0 flex h-full w-full items-center justify-center opacity-0 transition-opacity duration-100 ease-out"
			class:opacity-100={isEnabled}
			class:duration-200={isEnabled}
			class:ease-in={isEnabled}
			class:opacity-0={!isEnabled}
			class:duration-100={!isEnabled}
			class:ease-out={!isEnabled}
			aria-hidden="true"
		>
			<slot name="iconShowOnEnabled" />
		</span>
	</span>
</button>
