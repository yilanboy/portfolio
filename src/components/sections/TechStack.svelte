<script>
	import CircularProgressBar from '../CircularProgressBar.svelte';
	import Laravel from '../icons/Laravel.svelte';
	import Terraform from '../icons/Terraform.svelte';
	import Ansible from '../icons/Ansible.svelte';
	import Aws from '../icons/Aws.svelte';
</script>

<section id="tech-stack" class="flex flex-col gap-24 py-20">
	<div class="flex flex-col gap-2 text-center">
		<h6 class="font-caveat text-2xl md:text-4xl">Let's see what I'm good at.</h6>
		<h3 class="text-3xl font-semibold sm:text-4xl md:text-5xl">看看我會哪些技能</h3>
	</div>

	<div class="grid grid-cols-1 content-stretch gap-4 lg:grid-cols-4">
		<div class="flex items-center justify-center">
			<CircularProgressBar progress="80%" barColor="#ff9900">
				<Aws classList="size-20" />
			</CircularProgressBar>
		</div>

		<div class="flex items-center justify-center">
			<CircularProgressBar progress="70%" barColor="#ff2c20">
				<Laravel classList="size-20" />
			</CircularProgressBar>
		</div>

		<div class="flex items-center justify-center">
			<CircularProgressBar progress="90%" barColor="#7c3aec">
				<Terraform classList="size-20" />
			</CircularProgressBar>
		</div>

		<div class="flex items-center justify-center">
			<CircularProgressBar progress="30%" barColor="#424242">
				<Ansible classList="size-20" />
			</CircularProgressBar>
		</div>
	</div>
</section>
