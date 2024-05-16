<script lang="ts">
	let experiences = [
		{
			time: 'Jul, 2022',
			title: '轉換跑道，學習成為一位 DevOps 工程師',
			content:
				'在從事後端工程師的那些年，我時常接觸雲端與維運相關工具。在這個過程中，我發現了 DevOps 魅力，將寫好的程式自動部署到正式環境上並穩定運行，對我來說是一件非常有成就感的事情。於是我決定轉換跑道，成為一位 DevOps 工程師。'
		},
		{
			time: 'Aug, 2020',
			title: '開始寫部落格，紀錄並分享所學的技術',
			content:
				'在前輩的建議下，我開發了自己的部落格。將自己對技術的熱情以及在工作中遇到的挑戰，透過文章分享在部落格上。寫文章讓我受益良多，不只幫助自己加深記憶，也讓我結識了許多志同道合的夥伴。'
		},
		{
			time: 'Feb, 2020',
			title: '接觸後端開發，深耕後端領域',
			content:
				'因為在學期間對網頁開發產生了相當濃厚的興趣，我決定成為後端工程師。雖然我起步相對較晚，但在同事的幫助與自身的努力下，我逐漸成長為一位合格的後端工程師，並漸漸的在後端領域積累了豐富的經驗。'
		},
		{
			time: 'Feb, 2017',
			title: '新人初出茅廬，進入資安領域',
			content:
				'剛踏入職場時，我在因緣際會下進入了資安領域。工作上除了協助資安工具的開發，我還協助了資安課程的設計，靶機環境的準備與教材的編寫。這在份工作中，我學習到很多資安相關的基礎知識，也考到一張很基礎的 CEH 資安認證。'
		}
	];
</script>

<section id="experience" class="flex flex-col gap-24 py-20">
	<div class="flex flex-col gap-2 text-center">
		<h6 class="font-caveat text-2xl md:text-4xl">The past has made me who I am now</h6>
		<h3 class="text-3xl font-semibold sm:text-4xl md:text-5xl">
			<span
				class="relative inline-block p-1 before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-yellow-500"
			>
				<span class="relative text-gray-50">過往的經歷</span>
			</span>
			成就現在的我
		</h3>
	</div>

	<div>
		{#each experiences as experience (experience.title)}
			<div class="group relative py-6 pl-8 sm:pl-32">
				<!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) -->
				<div
					class="mb-1 flex flex-col items-start before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-slate-300 before:px-px after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-slate-50 after:bg-yellow-600 group-last:before:hidden sm:flex-row sm:before:left-0 sm:before:ml-[6.5rem] sm:after:left-0 sm:after:ml-[6.5rem]"
				>
					<time
						class="left-0 mb-3 inline-flex h-6 w-20 translate-y-0.5 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold uppercase text-emerald-600 sm:absolute sm:mb-0"
						>{experience.time}</time
					>
					<div class="text-xl font-bold text-slate-900">{experience.title}</div>
				</div>
				<!-- Content -->
				<div class="text-slate-500">{experience.content}</div>
			</div>
		{/each}
	</div>
</section>
