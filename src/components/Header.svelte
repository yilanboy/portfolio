<script lang="ts">
	export let y: number;

	let tabs = [
		{ name: '專案', link: '#projects' },
		{ name: '關於我', link: '#about' }
	];
</script>

<header
	class={'sticky top-0 z-10 flex items-center justify-between border border-solid px-6 duration-200' +
		(y > 0 ? ' border-gray-600 bg-gray-50 py-4' : ' border-transparent bg-transparent py-6')}
>
	<h1 class="font-poppins">
		<b>Allen</b> Jiang
	</h1>
	<div class="ml-auto hidden items-center gap-4 pr-4 sm:flex">
		{#each tabs as tab (tab.name)}
			<a href={tab.link} class="hover:text-gray-600">
				<p>{tab.name}</p>
			</a>
		{/each}
	</div>
	<a
		href="https://docfunc.com"
		target="_blank"
		class="group relative overflow-hidden rounded-full px-5 py-2 text-slate-950"
	>
		<div
			class="absolute right-full top-0 z-0 size-full bg-blue-400 opacity-20 duration-200 group-hover:translate-x-full"
		></div>
		<h4 class="z-9 relative">看看我的部落格 &rarr;</h4>
	</a>
</header>
