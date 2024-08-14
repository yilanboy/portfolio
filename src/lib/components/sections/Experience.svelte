<script lang="ts">
	import type { ComponentType } from 'svelte';
	import Laravel from '$lib/components/icons/Laravel.svelte';
	import Terraform from '$lib/components/icons/Terraform.svelte';
	import Livewire from '$lib/components/icons/Livewire.svelte';
	import Aws from '$lib/components/icons/Aws.svelte';
	import Azure from '$lib/components/icons/Azure.svelte';
	import Ansible from '$lib/components/icons/Ansible.svelte';
	import Php from '$lib/components/icons/Php.svelte';
	import Python from '$lib/components/icons/Python.svelte';
	import TailwindCss from '$lib/components/icons/TailwindCss.svelte';
	import TypeScript from '$lib/components/icons/TypeScript.svelte';
	import Svelte from '$lib/components/icons/Svelte.svelte';
	import MySql from '$lib/components/icons/MySql.svelte';
	import Redis from '$lib/components/icons/Redis.svelte';
	import Nginx from '$lib/components/icons/Nginx.svelte';
	import GitHubAction from '$lib/components/icons/GitHubAction.svelte';
	import Rust from '$lib/components/icons/Rust.svelte';

	interface Experience {
		time: string;
		title: string;
		content: string;
		techIconComponents: Array<ComponentType>;
	}

	let experiences: Array<Experience> = [
		{
			time: 'Jul, 2022',
			title: '轉換跑道，學習成為一位 DevOps 工程師',
			content:
				'因為開發部落格，我接觸到了雲端服務與各種維運工具，並從中發現了 DevOps 魅力。將寫好的程式自動部署到正式環境上並穩定運行，對我來說是一件非常有成就感的事情。某次因緣際會之下，我拿到了 DevOps 工程師的 Offer，於是決定轉換跑道，成為一位 DevOps 工程師。',
			techIconComponents: [Aws, Azure, Python, Terraform, Ansible, GitHubAction]
		},
		{
			time: 'Aug, 2020',
			title: '學習前端技能並開始寫部落格，紀錄並分享所學的技術',
			content:
				'在前輩的建議下，我花費了數月來開發自己的部落格，並將其搭建在雲端服務上。我將自己對技術的熱情以及在工作中遇到的挑戰，透過文章分享在部落格上。寫文章讓我受益良多，不只幫助自己加深記憶，也讓我結識了許多志同道合的夥伴。',
			techIconComponents: [Php, Rust, Laravel, Livewire, Svelte, TypeScript, TailwindCss, Aws]
		},
		{
			time: 'Feb, 2020',
			title: '接觸後端開發，深耕後端領域',
			content:
				'因為在學期間對網頁開發產生了相當濃厚的興趣，我決定成為後端工程師。雖然我起步相對較晚，但在同事的幫助與自身的努力下，我逐漸成長為一位合格的後端工程師，並漸漸的在後端領域積累了豐富的經驗。',
			techIconComponents: [Php, Laravel, MySql, Redis, Nginx]
		},
		{
			time: 'Feb, 2017',
			title: '新人初出茅廬，進入資安領域',
			content:
				'剛踏入職場時，我在因緣際會下進入了資安領域。工作上除了協助資安工具的開發，我還協助了資安課程的設計，靶機環境的準備與教材的編寫。這在份工作中，我學習到很多資安相關的基礎知識，也考到一張很基礎的 CEH 資安認證。',
			techIconComponents: [Php, Laravel, MySql, Python]
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
					class="mb-4 flex flex-col items-start before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-slate-300 before:px-px after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-slate-50 after:bg-yellow-600 group-last:before:hidden sm:flex-row sm:before:left-0 sm:before:ml-[6.5rem] sm:after:left-0 sm:after:ml-[6.5rem]"
				>
					<time
						class="left-0 mb-3 inline-flex h-6 w-20 translate-y-0.5 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold uppercase text-emerald-600 sm:absolute sm:mb-0"
						>{experience.time}</time
					>
					<div class="text-xl font-bold text-slate-900">{experience.title}</div>
				</div>
				<!-- Content -->
				<div class="mb-4 text-slate-500">{experience.content}</div>
				<div class="flex gap-4">
					{#each experience.techIconComponents as techIconComponent}
						<svelte:component this={techIconComponent} classList="size-10" />
					{/each}
				</div>
			</div>
		{/each}
	</div>
</section>
