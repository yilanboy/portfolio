<script lang="ts">
	export let y: number;

	let tabs = [
		{ name: '專案', link: '#projects' },
		{ name: '經歷', link: '#experience' },
		{ name: '關於', link: '#about' }
	];
</script>

<header
	class="sticky z-10 mx-2 flex items-center justify-between rounded-md border border-solid px-6 duration-200"
	class:top-2={y > 0}
	class:border-gray-600={y > 0}
	class:bg-gray-50={y > 0}
	class:py-4={y > 0}
	class:top-0={y <= 0}
	class:border-transparent={y <= 0}
	class:bg-transparent={y <= 0}
	class:py-6={y <= 0}
>
	<h1>
		<b>Allen</b> Jiang
	</h1>
	<div class="ml-auto hidden items-center gap-6 pr-4 sm:flex">
		{#each tabs as tab (tab.name)}
			<a href={tab.link} class="hover:text-gray-600">
				<p>{tab.name}</p>
			</a>
		{/each}
	</div>
	<a
		href="https://docfunc.com"
		target="_blank"
		class="group relative overflow-hidden rounded-full bg-gray-200/60 px-5 py-2 text-slate-950"
	>
		<div
			class="absolute right-full top-0 z-0 size-full bg-blue-400 opacity-20 duration-200 group-hover:translate-x-full"
		></div>
		<h4 class="z-9 relative">看看我的部落格 &rarr;</h4>
	</a>
</header>
