<script lang="ts">
	let experiences = [
		{
			slogan: 'Change Careers, Learn to Be a DevOps Engineer',
			time: 'Jul, 2022',
			title: '轉換跑道，學習成為一位 DevOps 工程師',
			content: ''
		},
		{
			slogan: "Let's Write Some Blogs!",
			time: 'Aug, 2020',
			title: '開始寫部落格，紀錄並分享所學的技術',
			content: ''
		},
		{
			slogan: 'Become a Backend Developer, Write Some Code',
			time: 'Feb, 2020',
			title: '接觸後端開發，深耕後端領域',
			content: ''
		},
		{
			slogan: 'Security is Important, But so Hard to Me',
			time: 'Feb, 2017',
			title: '新人初出茅廬，進入資安領域',
			content: ''
		}
	];
</script>

<section id="experience" class="flex flex-col gap-24 py-20">
	<div class="flex flex-col gap-2 text-center">
		<h6 class="font-caveat text-2xl md:text-4xl">The past has made me who I am now</h6>
		<h3 class="text-3xl font-semibold sm:text-4xl md:text-5xl">
			<span class="text-yellow-500">過往的經歷</span>成就現在的我
		</h3>
	</div>

	<div>
		{#each experiences as experience (experience.title)}
			<div class="group relative py-6 pl-8 sm:pl-32">
				<div class="mb-1 font-caveat text-lg font-medium text-yellow-500 sm:mb-0 md:text-xl">
					{experience.slogan}
				</div>
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
