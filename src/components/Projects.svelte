<script>
	import Step from './Step.svelte';

	let steps = [
		{ name: '部落格', href: 'https://docfunc.com', description: '部落格' },
		{ name: '筆記', href: 'https://github.com/YilanBoy/note', description: '筆記' },
		{ name: '簡報', href: 'https://github.com/YilanBoy/slide', description: '簡報' }
	];
</script>

<section id="projects" class="flex flex-col gap-24 py-20">
	<div class="flex flex-col gap-2 text-center">
		<h6 class="font-caveat text-2xl md:text-4xl">A few of my creative endeavors</h6>
		<h3 class="text-3xl font-semibold sm:text-4xl md:text-5xl">
			想看看我做了哪些<span class="text-blue-500">有趣的事情</span>嗎？
		</h3>
	</div>
	<div class="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-10">
		<Step step={steps[0]}>
			<p class="text-left">
				這是我用 <span class="text-blue-500">Tailwind CSS</span>、<span class="text-blue-500"
					>Alpine.js</span
				>、<span class="text-blue-500">Laravel</span> 與
				<span class="text-blue-500">Livewire</span>
				所打造的簡易部落格，用來記錄我在生活中的大小事。無論是工作上遇到的技術難題、最近玩過的電玩遊戲，或是生活中發生的趣事，都會寫在這邊與大家分享。
			</p>
		</Step>

		<Step step={steps[1]}>
			<p class="text-left">
				<span class="text-blue-500">這裡是我用來記錄學習新技術時的心得與筆記</span
				>。無論是學習新的維運技術，或是研究新的程式語言，都會在這裡記錄下來。希望能夠幫助到有需要的人，也歡迎大家提供意見與建議！
			</p>
		</Step>

		<Step step={steps[2]}>
			<p class="text-left">
				研究完技術後，<span class="text-blue-500">沒有什麼比與他人分享新知識更有趣的事情了</span
				>。我時常與一群志同道合的朋友一起分享各種技術與知識，並從中學習。歡迎大家來看看！
			</p>
		</Step>
	</div>
</section>
