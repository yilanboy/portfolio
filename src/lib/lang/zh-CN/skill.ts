export default {
	section_title_prefix: '这些是我',
	section_title_highlight: '使用过的技术',
	section_title_suffix: '',
	aws_experiences: [
		'拥有 AWS Solution Architecture Associate 认证',
		'使用 EC2、RDS 与 ElastiCache 搭建 LEMP 来运行自己的 Laravel 应用程序',
		'使用 EC2 搭建简易的 K3s 环境，运行各种自己的服务容器',
		'通过 Saving Plan 与 Reserved Instance 的规划来降低机器租用的成本',
		'使用 Lambda 运行自己的 Laravel 应用程序，并分别使用 DynamoDB 与 SQS 作为缓存与队列',
		'使用 Athena 与 Glue 搭建系统日志查询功能，搜索位于 S3 上的日志'
	],
	azure_experiences: [
		'考取 Azure Developer Associate 认证，协助公司取得微软金级伙伴认证',
		'通过 Fluent Bit 将数据上传至 Azure Storage Account，并通过 Azure Data Explorer 对数据进行分析'
	],
	laravel_experiences: [
		'使用 Laravel 开发自己的博客',
		'与 Algolia 整合实现博客的文章搜索功能',
		'使用 Laravel Octane 加速网站的响应速度',
		'与 ElasticSearch 整合以提升百万笔公司商业数据的搜索速度',
		'与 SendGrid 整合实现邮件发送服务',
		'多租户架构 (Multi-Tenancy) 系统的功能开发与维护',
		'与团队沟通后，协力导入 Laravel Pint 来统一团队的代码编写风格',
		'使用 Pest 编写各种功能测试与单元测试'
	],
	livewire_experiences: [
		'使用 Livewire 开发自己的博客前端，并实现 SPA 优化用户体验',
		'使用 Livewire 开发留言系统，用户可以使用 Markdown 语法撰写留言并预览渲染结果',
		'与 CKEditor 整合，实现富文本编辑功能',
		'与 Tagify 整合，实现文章标签功能'
	],
	svelte_experiences: [
		'使用 SvelteKit 开发自己的个人介绍页',
		'使用 SvelteKit 与 Laravel 实作前后端分离的网站'
	],
	tailwind_css_experiences: [
		'使用 Tailwind CSS 设计博客的前端样式',
		'使用 Tailwind CSS 实作网站的暗黑模式',
		'使用 Tailwind CSS 实作响应式网站'
	],
	terraform_experiences: [
		'使用 Terraform 管理各种云端资源，如 AWS、Azure 与 GCP',
		'使用 Terraform 与 AWS Route 53 管理 DNS SPF 记录，解决 SPF 记录 10 Lookup 上限的问题',
		'使用 Terraform 通过操作上百台机器将 S3 上约 100TB 的 Elasticsearch Snapshot 转换成 10 TB 的 Apache Parquet，节省存储成本达 90%，并让用户可以通过 AWS Athena 搜索数据',
		'协助公司导入 Terraform 管理资源，发现并清除不再使用的资源，节省成本'
	],
	ansible_experiences: [
		'使用 Ansible Playbook 来自动化部署 K3s 集群的流程',
		'在公司内部技术分享会上介绍 Ansible 及其使用方法'
	]
};
