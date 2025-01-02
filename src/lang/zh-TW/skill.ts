export default {
	section_title_prefix: '這些是我',
	section_title_highlight: '使用過的技術',
	section_title_suffix: '',
	aws_experiences: [
		'擁有 AWS Solution Architecture Associate 認證',
		'使用 EC2、RDS 與 ElastiCache 搭建 LEMP 來運行自己的 Laravel 應用程式',
		'使用 EC2 搭建簡易的 K3s 環境，運行各種自己的服務容器',
		'透過 Saving Plan 與 Reserved Instance 的規劃來降低機器租用的成本',
		'使用 Lambda 運行自己的 Laravel 應用程式，並分別使用 DynamoDB 與 SQS 來當作快取與佇列',
		'使用 Athena 與 Glue 搭建系統日誌查詢功能，搜尋位於 S3 上的日誌'
	],
	azure_experiences: [
		'考取 Azure Developer Associate 認證，協助公司取得微軟金級夥伴認證',
		'透過 Fluent Bit 將資料上傳至 Azure Storage Account，並透過 Azure Data Explorer對資料進行分析'
	],
	laravel_experiences: [
		'使用 Laravel 開發自己的部落格',
		'與 Algolia 整合實現部落格的文章搜尋功能',
		'使用 Laravel Octane 加速網站的響應速度',
		'與 ElasticSearch 整合以提升百萬筆公司商業資料的搜尋速度',
		'與 SendGrid 整合實現信件寄送的服務',
		'多租戶架構 (Multi-Tenancy) 系統的功能開發與維護',
		'與團隊溝通後，協力導入 Laravel Pint 來統一團隊的程式碼撰寫風格',
		'使用 Pest 撰寫各種功能測試與單元測試'
	],
	livewire_experiences: [
		'使用 Livewire 開發自己的部落格前端，並實現 SPA 優化用戶體驗',
		'使用 Livewire 開發留言系統，用戶可以使用 Markdown 語法撰寫留言並預覽渲染結果',
		'與 CKEditor 整合，實現富文本編輯的功能',
		'與 Tagify 整合，實現文章標籤的功能'
	],
	svelte_experiences: [
		'使用 SvelteKit 開發自己的個人介紹頁',
		'使用 SvelteKit 與 Laravel 實作前後端分離的網站'
	],
	tailwind_css_experiences: [
		'使用 Tailwind CSS 設計部落格的前端樣式',
		'使用 Tailwind CSS 實作網站的暗黑模式',
		'使用 Tailwind CSS 實作響應式網站'
	],
	terraform_experiences: [
		'使用 Terraform 管理各種雲端資源，如 AWS、Azure 與 GCP',
		'使用 Terraform 與 AWS Route 53 管理 DNS SPF 記錄，解決 SPF 紀錄 10 Lookup 上限的問題',
		'使用 Terraform 透過操作上百台機器將 S3 上約 100TB 的 Elasticsearch Snapshot 轉換成 10 TB 的 Apache Parquet，節省存儲成本達 90% ，並讓用戶可以透過 AWS Athena 搜尋資料',
		'協助公司導入 Terraform 管理資源，發現並清除不再使用的資源，節省成本'
	],
	ansible_experiences: [
		'使用 Ansible Playbook 來自動化部署 K3s 叢集的流程',
		'在公司內部技術分享會介紹 Ansible 與其使用方式'
	]
};
