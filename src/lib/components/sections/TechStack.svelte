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

	let showAwsExperience = false;
	let showAzureExperience = false;
	let showLaravelExperience = false;
	let showLivewireExperience = false;
	let showSvelteExperience = false;
	let showTailwindCssExperience = false;
	let showTerraformExperience = false;
	let showAnsibleExperience = false;
</script>

<section id="tech-stack" class="flex flex-col gap-24 py-20">
	<div class="flex flex-col gap-2 text-center">
		<h6 class="font-caveat text-2xl md:text-4xl">Let's see what I'm good at.</h6>
		<h3 class="text-3xl font-semibold sm:text-4xl md:text-5xl">
			這些是我
			<span
				class="relative inline-block p-1 before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-green-500"
			>
				<span class="relative text-gray-50">使用過的技術</span>
			</span>
		</h3>
	</div>

	<div class="grid grid-cols-1 gap-16 lg:grid-cols-4">
		<div class="flex items-center justify-center">
			<CircularProgressBar progress="65%" barColor="#ff9900">
				<button
					on:click={() => (showAwsExperience = true)}
					type="button"
					class="transition duration-150 hover:scale-125 active:scale-100"
				>
					<Aws className="size-20" />
				</button>
			</CircularProgressBar>

			<Modal bind:showModal={showAwsExperience}>
				<h3 class="text-xl font-semibold leading-6 text-[#ff9900]">AWS</h3>
				<div class="mt-4 divide-y-2 divide-dashed divide-[#ff9900]">
					<p class="p-2 text-lg text-gray-500">擁有 AWS Solution Architecture Associate 認證</p>
					<p class="p-2 text-lg text-gray-500">
						使用 EC2、RDS 與 ElastiCache 搭建 LEMP 來運行自己的 Laravel 應用程式
					</p>
					<p class="p-2 text-lg text-gray-500">
						使用 EC2 搭建簡易的 K3s 環境，運行各種各種自己打包的容器
					</p>
					<p class="p-2 text-lg text-gray-500">
						透過 Saving Plan 與 Reserved Instance 的規劃來降低機器租用的成本
					</p>
					<p class="p-2 text-lg text-gray-500">
						使用 Lambda 運行自己的 Laravel 應用程式，並分別使用 DynamoDB 與 SQS 來當作快取與佇列
					</p>
					<p class="p-2 text-lg text-gray-500">
						使用 Athena 與 Glue 搭建系統日誌查詢功能，搜尋位於 S3 上的日誌
					</p>
				</div>
			</Modal>
		</div>

		<div class="flex items-center justify-center">
			<CircularProgressBar progress="20%" barColor="#138dd8">
				<button
					on:click={() => (showAzureExperience = true)}
					type="button"
					class="transition duration-150 hover:scale-125 active:scale-100"
				>
					<Azure className="size-20" />
				</button>
			</CircularProgressBar>

			<Modal bind:showModal={showAzureExperience}>
				<h3 class="text-xl font-semibold leading-6 text-[#138dd8]">Azure</h3>
				<div class="mt-4 divide-y-2 divide-dashed divide-[#138dd8]">
					<p class="p-2 text-lg text-gray-500">
						考取 Azure Developer Associate 認證，協助公司取得微軟金級夥伴認證
					</p>
					<p class="p-2 text-lg text-gray-500">
						透過 Fluent Bit 將資料上傳至 Azure Storage Account，並透過 Azure Data Explorer
						對資料進行分析
					</p>
				</div>
			</Modal>
		</div>

		<div class="flex items-center justify-center">
			<CircularProgressBar progress="70%" barColor="#ff2c20">
				<button
					on:click={() => (showLaravelExperience = true)}
					type="button"
					class="transition duration-150 hover:scale-125 active:scale-100"
				>
					<Laravel className="size-20" />
				</button>
			</CircularProgressBar>

			<Modal bind:showModal={showLaravelExperience}>
				<h3 class="text-xl font-semibold leading-6 text-[#ff2c20]">Laravel</h3>
				<div class="mt-4 divide-y-2 divide-dashed divide-[#ff2c20]">
					<p class="p-2 text-lg text-gray-500">使用 Laravel 開發自己的部落格</p>
					<p class="p-2 text-lg text-gray-500">與 Algolia 整合實現部落格的文章搜尋功能</p>
					<p class="p-2 text-lg text-gray-500">使用 Laravel Octane 加速網站的響應速度</p>
					<p class="p-2 text-lg text-gray-500">
						與 ElasticSearch 整合以提升百萬筆公司商業資料的搜尋速度
					</p>
					<p class="p-2 text-lg text-gray-500">與 SendGrid 整合實現信件寄送的服務</p>
					<p class="p-2 text-lg text-gray-500">多租戶架構 (Multi-Tenancy) 系統的功能開發與維護</p>
					<p class="p-2 text-lg text-gray-500">
						與團隊溝通後，協力導入 Laravel Pint 來統一團隊的程式碼撰寫風格
					</p>
					<p class="p-2 text-lg text-gray-500">使用 Pest 撰寫各種功能測試與單元測試</p>
				</div>
			</Modal>
		</div>

		<div class="flex items-center justify-center">
			<CircularProgressBar progress="70%" barColor="#fb70a9">
				<button
					on:click={() => (showLivewireExperience = true)}
					type="button"
					class="transition duration-150 hover:scale-125 active:scale-100"
				>
					<Livewire className="size-20" />
				</button>
			</CircularProgressBar>

			<Modal bind:showModal={showLivewireExperience}>
				<h3 class="text-xl font-semibold leading-6 text-[#fb70a9]">Livewire</h3>
				<div class="mt-4 divide-y-2 divide-dashed divide-[#fb70a9]">
					<p class="p-2 text-lg text-gray-500">
						使用 Livewire 開發自己的部落格前端，並實現 SPA 優化用戶體驗
					</p>
					<p class="p-2 text-lg text-gray-500">
						使用 Livewire 開發留言系統，用戶可以使用 Markdown 語法撰寫留言並預覽渲染結果
					</p>
					<p class="p-2 text-lg text-gray-500">與 CKEditor 整合，實現富文本編輯的功能</p>
					<p class="p-2 text-lg text-gray-500">與 Tagify 整合，實現文章標籤的功能</p>
				</div>
			</Modal>
		</div>

		<div class="flex items-center justify-center">
			<CircularProgressBar progress="20%" barColor="#f73c00">
				<button
					on:click={() => (showSvelteExperience = true)}
					type="button"
					class="transition duration-150 hover:scale-125 active:scale-100"
				>
					<Svelte className="size-20" />
				</button>
			</CircularProgressBar>

			<Modal bind:showModal={showSvelteExperience}>
				<h3 class="text-xl font-semibold leading-6 text-[#f73c00]">Svelte</h3>
				<div class="mt-4 divide-y-2 divide-dashed divide-[#f73c00]">
					<p class="p-2 text-lg text-gray-500">使用 SvelteKit 開發自己的個人介紹頁</p>
					<p class="p-2 text-lg text-gray-500">使用 SvelteKit 與 Laravel 實作前後端分離的網站</p>
				</div>
			</Modal>
		</div>

		<div class="flex items-center justify-center">
			<CircularProgressBar progress="50%" barColor="#38bdf8">
				<button
					on:click={() => (showTailwindCssExperience = true)}
					type="button"
					class="transition duration-150 hover:scale-125 active:scale-100"
				>
					<TailwindCss className="size-20" />
				</button>

				<Modal bind:showModal={showTailwindCssExperience}>
					<h3 class="text-xl font-semibold leading-6 text-[#38bdf8]">Tailwind CSS</h3>
					<div class="mt-4 divide-y-2 divide-dashed divide-[#38bdf8]">
						<p class="p-2 text-lg text-gray-500">使用 Tailwind CSS 設計部落格的前端樣式</p>
						<p class="p-2 text-lg text-gray-500">使用 Tailwind CSS 實作網站的暗黑模式</p>
						<p class="p-2 text-lg text-gray-500">使用 Tailwind CSS 實作響應式網站</p>
					</div>
				</Modal>
			</CircularProgressBar>
		</div>

		<div class="flex items-center justify-center">
			<CircularProgressBar progress="90%" barColor="#7c3aec">
				<button
					on:click={() => (showTerraformExperience = true)}
					type="button"
					class="transition duration-150 hover:scale-125 active:scale-100"
				>
					<Terraform className="size-20" />
				</button>
			</CircularProgressBar>

			<Modal bind:showModal={showTerraformExperience}>
				<h3 class="text-xl font-semibold leading-6 text-[#7c3aec]">Terraform</h3>
				<div class="mt-4 divide-y-2 divide-dashed divide-[#7c3aec]">
					<p class="p-2 text-lg text-gray-500">
						使用 Terraform 管理各種雲端資源，如 AWS、Azure 與 GCP
					</p>
					<p class="p-2 text-lg text-gray-500">
						使用 Terraform 與 AWS Route 53 管理 DNS SPF 記錄，解決 SPF 紀錄 10 Lookup 上限的問題
					</p>
					<p class="p-2 text-lg text-gray-500">
						使用 Terraform 透過操作上百台機器將 S3 上約 100TB 的 Elasticsearch Snapshot 轉換成 10 TB
						的 Apache Parquet，節省存儲成本達 90% ，並讓用戶可以透過 AWS Athena 搜尋資料
					</p>
					<p class="p-2 text-lg text-gray-500">
						協助公司導入 Terraform 管理資源，發現並清除不再使用的資源，節省成本
					</p>
				</div>
			</Modal>
		</div>

		<div class="flex items-center justify-center">
			<CircularProgressBar progress="30%" barColor="#424242">
				<button
					on:click={() => (showAnsibleExperience = true)}
					type="button"
					class="transition duration-150 hover:scale-125 active:scale-100"
				>
					<Ansible className="size-20" />
				</button>
			</CircularProgressBar>

			<Modal bind:showModal={showAnsibleExperience}>
				<h3 class="text-xl font-semibold leading-6 text-[#424242]">Ansible</h3>
				<div class="mt-4 divide-y-2 divide-dashed divide-[#424242]">
					<p class="p-2 text-lg text-gray-500">使用 Ansible Playbook 來自動化部署 K3s 叢集的流程</p>
					<p class="p-2 text-lg text-gray-500">在公司內部技術分享會介紹 Ansible 與其使用方式</p>
				</div>
			</Modal>
		</div>
	</div>
</section>
