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
	import { type Component, onMount } from 'svelte';
	import { locale } from '$lib/stores';
	import { get } from 'svelte/store';
	import { Locale } from '$lib/enums';
	import { theme } from '$lib/stores';
	import { Themes } from '$lib/enums';
	import english from '$lib/lang/en/skill-stack';
	import chinese from '$lib/lang/zh_TW/skill-stack';

	let currentLanguage = $state(english);

	locale.subscribe(() => {
		if (get(locale) === Locale.Chinese) {
			currentLanguage = chinese;
		} else {
			currentLanguage = english;
		}
	});

	let isDarkModeEnabled: boolean = $state(false);

	theme.subscribe((value) => {
		isDarkModeEnabled = value === Themes.Dark;
	});

	let barBackgroundColor = $derived(isDarkModeEnabled ? '#404040' : '#e5e7eb');
	let centerBackgroundColor = $derived(isDarkModeEnabled ? '#262626' : '#f9fafb');

	type skillStack = {
		name: string;
		iconComponent: Component;
		progress: string;
		barColor: string;
		showExperienceModal: boolean;
	};

	let skillStacks: { [Name: string]: skillStack } = $state({
		aws: {
			name: 'AWS',
			iconComponent: Aws,
			progress: '65%',
			barColor: '#ff9900',
			showExperienceModal: false
		},
		azure: {
			name: 'Azure',
			iconComponent: Azure,
			progress: '20%',
			barColor: '#138dd8',
			showExperienceModal: false
		},
		laravel: {
			name: 'Laravel',
			iconComponent: Laravel,
			progress: '70%',
			barColor: '#ff2c20',
			showExperienceModal: false
		},
		livewire: {
			name: 'Livewire',
			iconComponent: Livewire,
			progress: '70%',
			barColor: '#fb70a9',
			showExperienceModal: false
		},
		svelte: {
			name: 'Svelte',
			iconComponent: Svelte,
			progress: '20%',
			barColor: '#f73c00',
			showExperienceModal: false
		},
		tailwindCSS: {
			name: 'Tailwind CSS',
			iconComponent: TailwindCss,
			progress: '50%',
			barColor: '#38bdf8',
			showExperienceModal: false
		},
		terraform: {
			name: 'Terraform',
			iconComponent: Terraform,
			progress: '75%',
			barColor: '#7c3aec',
			showExperienceModal: false
		},
		ansible: {
			name: 'Ansible',
			iconComponent: Ansible,
			progress: '20%',
			barColor: '#5d5d5d',
			showExperienceModal: false
		}
	});

	let skillExperiences: { [Name: string]: Array<string> } = $derived({
		aws: currentLanguage.aws_experiences,
		azure: currentLanguage.azure_experiences,
		laravel: currentLanguage.laravel_experiences,
		livewire: currentLanguage.livewire_experiences,
		svelte: currentLanguage.svelte_experiences,
		tailwindCSS: currentLanguage.tailwind_css_experiences,
		terraform: currentLanguage.terraform_experiences,
		ansible: currentLanguage.ansible_experiences
	});

	onMount(() => {
		isDarkModeEnabled = document.documentElement.classList.contains('dark');
	});
</script>

<section id="skill-stack" class="flex flex-col gap-24 py-20">
	<div class="flex flex-col gap-2 text-center dark:text-neutral-50">
		<h6 class="font-caveat text-2xl md:text-4xl">These stuff are so cool!</h6>
		<h3 class="text-3xl font-semibold sm:text-4xl md:text-5xl">
			<!-- eslint-disable-next-line -->
			{@html currentLanguage.title_html}
		</h3>
	</div>

	<div class="mx-auto grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4">
		{#each Object.entries(skillStacks) as [key, skillStack] (key)}
			<div class="flex items-center justify-center">
				<CircularProgressBar
					progress={skillStack.progress}
					barColor={skillStack.barColor}
					{barBackgroundColor}
					{centerBackgroundColor}
				>
					<button
						onclick={() => (skillStack.showExperienceModal = true)}
						type="button"
						class="transition duration-150 hover:scale-125 active:scale-100"
					>
						<skillStack.iconComponent className="size-20" />
					</button>
				</CircularProgressBar>

				<Modal bind:showModal={skillStack.showExperienceModal}>
					<h3 class="text-xl font-semibold leading-6 text-neutral-900 dark:text-neutral-50">
						{skillStack.name}
					</h3>
					<div class="mt-4 divide-y-2 divide-dashed divide-neutral-300 dark:divide-neutral-700">
						{#each skillExperiences[key] as experience (experience)}
							<p class="p-2 text-lg text-neutral-500 dark:text-neutral-400">{experience}</p>
						{/each}
					</div>
				</Modal>
			</div>
		{/each}
	</div>
</section>
