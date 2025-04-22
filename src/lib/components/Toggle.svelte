<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		isEnabled?: boolean;
		onclick?: () => void;
		iconShowOnDisabled?: Snippet;
		iconShowOnEnabled?: Snippet;
	}

	let {
		isEnabled = $bindable(false),
		onclick = () => {
			isEnabled = !isEnabled;
		},
		iconShowOnDisabled,
		iconShowOnEnabled
	}: Props = $props();
</script>

<button
	{onclick}
	class={{
		'bg-violet-500': isEnabled,
		'bg-gray-200': !isEnabled,
		'relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:outline-hidden': true
	}}
	type="button"
	role="switch"
	aria-checked="false"
>
	<span class="sr-only">Use setting</span>
	<span
		class={{
			'translate-x-5': isEnabled,
			'translate-x-0': !isEnabled,
			'pointer-events-none relative inline-block h-5 w-5 translate-x-0 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out': true
		}}
	>
		<span
			class={{
				'opacity-0 duration-100 ease-out': isEnabled,
				'opacity-100 duration-200 ease-in': !isEnabled,
				'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity': true
			}}
			aria-hidden="true"
		>
			{@render iconShowOnDisabled?.()}
		</span>
		<span
			class={{
				'opacity-100 duration-200 ease-in': isEnabled,
				'opacity-0 duration-100 ease-out': !isEnabled,
				'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity': true
			}}
			aria-hidden="true"
		>
			{@render iconShowOnEnabled?.()}
		</span>
	</span>
</button>
