<script lang="ts">
	import CircularProgressBar from '$lib/components/CircularProgressBar.svelte';
	import Laravel from '$lib/components/icons/Laravel.svelte';
	import Terraform from '$lib/components/icons/Terraform.svelte';
	import Ansible from '$lib/components/icons/Ansible.svelte';
	import Aws from '$lib/components/icons/Aws.svelte';
	import Azure from '$lib/components/icons/Azure.svelte';
	import Svelte from '$lib/components/icons/Svelte.svelte';
	import TailwindCss from '$lib/components/icons/TailwindCss.svelte';
	import Livewire from '$lib/components/icons/Livewire.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import { type ComponentType, onMount } from 'svelte';
	import { theme } from '$lib/stores';

	let isDarkModeEnabled: boolean;

	theme.subscribe((value) => {
		isDarkModeEnabled = value === 'dark';
	});

	$: barBackgroundColor = isDarkModeEnabled ? '#404040' : '#e5e7eb';
	$: centerBackgroundColor = isDarkModeEnabled ? '#262626' : '#f9fafb';

	type techStack = {
		iconComponent: ComponentType;
		progress: string;
		barColor: string;
		showExperience: boolean;
		experiences: string[];
	};

	let techStacks: { [Name: string]: techStack } = {
		AWS: {
			iconComponent: Aws,
			progress: '65%',
			barColor: '#ff9900',
			showExperience: false,
			experiences: [
				'擁有 AWS Solution Architecture Associate 認證',
				'使用 EC2、RDS 與 ElastiCache 搭建 LEMP 來運行自己的 Laravel 應用程式',
				'使用 EC2 搭建簡易的 K3s 環境，運行各種各種自己打包的容器',
				'透過 Saving Plan 與 Reserved Instance 的規劃來降低機器租用的成本',
				'使用 Lambda 運行自己的 Laravel 應用程式，並分別使用 DynamoDB 與 SQS 來當作快取與佇列',
				'使用 Athena 與 Glue 搭建系統日誌查詢功能，搜尋位於 S3 上的日誌'
			]
		},
		Azure: {
			iconComponent: Azure,
			progress: '20%',
			barColor: '#138dd8',
			showExperience: false,
			experiences: [
				'考取 Azure Developer Associate 認證，協助公司取得微軟金級夥伴認證',
				'透過 Fluent Bit 將資料上傳至 Azure Storage Account，並透過 Azure Data Explorer對資料進行分析'
			]
		},
		Laravel: {
			iconComponent: Laravel,
			progress: '70%',
			barColor: '#ff2c20',
			showExperience: false,
			experiences: [
				'使用 Laravel 開發自己的部落格',
				'與 Algolia 整合實現部落格的文章搜尋功能',
				'使用 Laravel Octane 加速網站的響應速度',
				'與 ElasticSearch 整合以提升百萬筆公司商業資料的搜尋速度',
				'與 SendGrid 整合實現信件寄送的服務',
				'多租戶架構 (Multi-Tenancy) 系統的功能開發與維護',
				'與團隊溝通後，協力導入 Laravel Pint 來統一團隊的程式碼撰寫風格',
				'使用 Pest 撰寫各種功能測試與單元測試'
			]
		},
		Livewire: {
			iconComponent: Livewire,
			progress: '70%',
			barColor: '#fb70a9',
			showExperience: false,
			experiences: [
				'使用 Livewire 開發自己的部落格前端，並實現 SPA 優化用戶體驗',
				'使用 Livewire 開發留言系統，用戶可以使用 Markdown 語法撰寫留言並預覽渲染結果',
				'與 CKEditor 整合，實現富文本編輯的功能',
				'與 Tagify 整合，實現文章標籤的功能'
			]
		},
		Svelte: {
			iconComponent: Svelte,
			progress: '20%',
			barColor: '#f73c00',
			showExperience: false,
			experiences: [
				'使用 SvelteKit 開發自己的個人介紹頁',
				'使用 SvelteKit 與 Laravel 實作前後端分離的網站'
			]
		},
		'Tailwind CSS': {
			iconComponent: TailwindCss,
			progress: '50%',
			barColor: '#38bdf8',
			showExperience: false,
			experiences: [
				'使用 Tailwind CSS 設計部落格的前端樣式',
				'使用 Tailwind CSS 實作網站的暗黑模式',
				'使用 Tailwind CSS 實作響應式網站'
			]
		},
		Terraform: {
			iconComponent: Terraform,
			progress: '75%',
			barColor: '#7c3aec',
			showExperience: false,
			experiences: [
				'使用 Terraform 管理各種雲端資源，如 AWS、Azure 與 GCP',
				'使用 Terraform 與 AWS Route 53 管理 DNS SPF 記錄，解決 SPF 紀錄 10 Lookup 上限的問題',
				'使用 Terraform 透過操作上百台機器將 S3 上約 100TB 的 Elasticsearch Snapshot 轉換成 10 TB 的 Apache Parquet，節省存儲成本達 90% ，並讓用戶可以透過 AWS Athena 搜尋資料',
				'協助公司導入 Terraform 管理資源，發現並清除不再使用的資源，節省成本'
			]
		},
		Ansible: {
			iconComponent: Ansible,
			progress: '20%',
			barColor: '#5d5d5d',
			showExperience: false,
			experiences: [
				'使用 Ansible Playbook 來自動化部署 K3s 叢集的流程',
				'在公司內部技術分享會介紹 Ansible 與其使用方式'
			]
		}
	};

	onMount(() => {
		isDarkModeEnabled = document.documentElement.classList.contains('dark');
	});
</script>

<section id="tech-stack" class="flex flex-col gap-24 py-20">
	<div class="flex flex-col gap-2 text-center dark:text-neutral-50">
		<h6 class="font-caveat text-2xl md:text-4xl">Let's see what I'm good at.</h6>
		<h3 class="text-3xl font-semibold sm:text-4xl md:text-5xl">
			這些是我
			<span
				class="relative inline-block p-1 before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-green-500 dark:before:bg-green-600"
			>
				<span class="relative text-neutral-50">使用過的技術</span>
			</span>
		</h3>
	</div>

	<div class="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4">
		{#each Object.entries(techStacks) as [key, techStack] (key)}
			<div class="flex items-center justify-center">
				<CircularProgressBar
					progress={techStack.progress}
					barColor={techStack.barColor}
					bind:barBackgroundColor
					bind:centerBackgroundColor
				>
					<button
						on:click={() => (techStack.showExperience = true)}
						type="button"
						class="transition duration-150 hover:scale-125 active:scale-100"
					>
						<svelte:component this={techStack.iconComponent} className="size-20" />
					</button>
				</CircularProgressBar>

				<Modal bind:showModal={techStack.showExperience}>
					<h3 class="text-xl font-semibold leading-6 text-neutral-900 dark:text-neutral-50">
						{key}
					</h3>
					<div class="mt-4 divide-y-2 divide-dashed divide-neutral-300 dark:divide-neutral-700">
						{#each techStack.experiences as experience (experience)}
							<p class="p-2 text-lg text-neutral-500 dark:text-neutral-400">{experience}</p>
						{/each}
					</div>
				</Modal>
			</div>
		{/each}
	</div>
</section>
