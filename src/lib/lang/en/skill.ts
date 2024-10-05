export default {
	section_title_html:
		'<span class="relative inline-block p-1 before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-green-500 dark:before:bg-green-600">' +
		'<span class="relative text-neutral-50">The skills</span>' +
		'</span> I Specialize In',
	aws_experiences: [
		'AWS Solution Architecture Associate certification',
		'Build LEMP to run Laravel application using EC2, RDS and ElastiCache',
		'Built a simple K3s environment using EC2 to run a variety of self-packaged containers',
		'Reduce machine rental costs with Saving Plan and Reserved Instance planning',
		'Running my Laravel application using Lambda, with DynamoDB and SQS for caching and queuing respectively',
		'Built a system log query using Athena and Glue to search for logs on S3'
	],
	azure_experiences: [
		'Obtain Azure Developer Associate certification to help company achieve Microsoft Gold Partner certification',
		'Upload data to Azure Storage Account via Fluent Bit and analyze data via Azure Data Explorer'
	],
	laravel_experiences: [
		'Developing my blog with Laravel',
		'Integrate with Algolia to make blog posts searchable',
		'Accelerating website response with Laravel Octane',
		'Integrate with ElasticSearch to speed up searches of millions of company business data',
		'Integration with SendGrid for mail delivery service',
		'Multi-Tenancy system development and maintenance',
		"Communicate with the team and implement Laravel Pint to standardize the team's code writing style",
		'Use Pest to write various feature tests and unit tests'
	],
	livewire_experiences: [
		'Use Livewire to develop my blog frontend and implement SPA to improve user experience',
		'Developed a comment system using Livewire, which allows users to write messages in Markdown syntax and preview the rendering results',
		'Integrate with CKEditor for rich text editing',
		'Integrate with Tagify for post tagging'
	],
	svelte_experiences: [
		'Using SvelteKit to develop my on portfolio page',
		'Using SvelteKit and Laravel to implement a separate frontend and backend website'
	],
	tailwind_css_experiences: [
		'Using Tailwind CSS to design blog frontend styles',
		'Implementing a dark mode website with Tailwind CSS',
		'Implementing responsive websites with Tailwind CSS'
	],
	terraform_experiences: [
		'Manage various cloud resources such as AWS, Azure and GCP with Terraform',
		'Managed DNS SPF records with Terraform and AWS Route 53, resolving the 10 Lookup limit on SPF records',
		'Used Terraform to convert approximately 100TB of Elasticsearch Snapshots on S3 to 10TB of Apache Parquet by operating hundreds of converting machines, ' +
			'saving up to 90% on storage costs and allowing users to search for data through AWS Athena',
		'Helps companies import Terraform to manage resources, discovering and removing resources that are no longer in use, saving costs'
	],
	ansible_experiences: [
		'Automating the deployment of K3s clusters with Ansible Playbook',
		'Introducing Ansible and how to use it at an in-house tech sharing session'
	]
};
