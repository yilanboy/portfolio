<script lang="ts">
	interface Strength {
		name: string;
		description: string;
	}

	let strengths: Array<Strength> = [
		{
			name: '一位全端工程師',
			description:
				'下班後，我喜歡探索與工作完全不同的技術領域。我對前端、後端甚至資料庫都有涉獵。雖然這些領域看似與我的本職工作毫不相干，但透過這些探索，我能更深刻的理解開發者的需求，並為他們量身打造出高效的工作流程和完善的服務架構。'
		},
		{
			name: '一位很好的傾聽者與溝通者',
			description:
				'我認為與人溝通，並傾聽他人的需求，是團隊走向成功的必要條件。透過良好的溝通，我們不只能從中學習更多新知，還能更深入的了解彼此，進而更有效的合作。'
		},
		{
			name: '一位喜愛戶外運動的陽光宅',
			description:
				'儘管我享受在家裡放鬆，沉浸在沙發上看動畫或寫程式，但我同樣熱愛外出，享受陽光，跑步、騎自行車和露營都是我熱愛的戶外活動。'
		}
	];
</script>

<section
	id="about"
	class="relative flex flex-col gap-16 py-20 pt-10 sm:gap-20 md:gap-24 lg:py-32 lg:pt-16"
>
	<div class="flex flex-col gap-2 text-center">
		<h6 class="font-caveat text-2xl md:text-4xl">Want to know more about me?</h6>
		<h3 class="text-3xl font-semibold sm:text-4xl md:text-5xl">
			想知道更多
			<span
				class="relative inline-block p-1 before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-red-500"
			>
				<span class="relative text-gray-50">關於我</span>
			</span>
			的事情嗎？
		</h3>
	</div>
	<p class="mx-auto text-lg font-semibold sm:text-xl md:text-2xl">我其實也是 . . .</p>
	<div class="mx-auto flex w-full max-w-[800px] flex-col gap-20">
		{#each strengths as strength, index}
			<div class="flex gap-6 sm:gap-8">
				<p class="w-1/5 text-4xl font-semibold text-red-500 sm:text-5xl md:text-6xl">
					{(index + 1).toString().padStart(2, '0')}
				</p>
				<div class="flex w-4/5 flex-col gap-6 sm:gap-8">
					<h3 class="text-2xl sm:text-3xl md:text-5xl">
						{strength.name}
					</h3>
					<p>{strength.description}</p>
				</div>
			</div>
		{/each}
	</div>
</section>
