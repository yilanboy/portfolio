<script lang="ts">
	import { type Component, onMount } from 'svelte';
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
	import GoogleCloudPlatform from '$lib/components/icons/GoogleCloudPlatform.svelte';
	import K3s from '$lib/components/icons/K3s.svelte';
	import type { ExperienceTranslation } from '$lang/type/experience.type';
	import { translations } from '$lib/translations';
	import type { Locale } from '$lib/enums';

	interface Props {
		locale: Locale;
	}

	interface ExperienceTimeAndSkills {
		time: string;
		skills: {
			name: string;
			iconComponent: Component;
		}[];
	}

	const scaleRange = 0.4;

	let { locale }: Props = $props();
	let translation: ExperienceTranslation = $derived(translations[locale].experience);

	let experiences: { [Name: string]: ExperienceTimeAndSkills } = {
		experience4: {
			time: 'Jul, 2022',
			skills: [
				{ name: 'AWS', iconComponent: Aws },
				{ name: 'Azure', iconComponent: Azure },
				{ name: 'GCP', iconComponent: GoogleCloudPlatform },
				{ name: 'K3s', iconComponent: K3s },
				{ name: 'Terraform', iconComponent: Terraform },
				{ name: 'Ansible', iconComponent: Ansible },
				{ name: 'Actions', iconComponent: GitHubAction },
				{ name: 'Python', iconComponent: Python }
			]
		},
		experience3: {
			time: 'Aug, 2020',
			skills: [
				{ name: 'PHP', iconComponent: Php },
				{ name: 'Rust', iconComponent: Rust },
				{ name: 'Laravel', iconComponent: Laravel },
				{ name: 'Livewire', iconComponent: Livewire },
				{ name: 'Svelte', iconComponent: Svelte },
				{ name: 'TypeScript', iconComponent: TypeScript },
				{ name: 'Tailwind', iconComponent: TailwindCss },
				{ name: 'AWS', iconComponent: Aws }
			]
		},
		experience2: {
			time: 'Feb, 2020',
			skills: [
				{ name: 'PHP', iconComponent: Php },
				{ name: 'Laravel', iconComponent: Laravel },
				{ name: 'MySQL', iconComponent: MySql },
				{ name: 'Redis', iconComponent: Redis },
				{ name: 'Nginx', iconComponent: Nginx }
			]
		},
		experience1: {
			time: 'Feb, 2017',
			skills: [
				{ name: 'PHP', iconComponent: Php },
				{ name: 'Laravel', iconComponent: Laravel },
				{ name: 'MySQL', iconComponent: MySql },
				{ name: 'Python', iconComponent: Python }
			]
		}
	};

	let experienceDescriptions: { [Name: string]: { title: string; content: string } } = $derived({
		experience4: translation.experience_4,
		experience3: translation.experience_3,
		experience2: translation.experience_2,
		experience1: translation.experience_1
	});

	function addDockAnimation() {
		const allSkillList = document.querySelectorAll('.skill-list') as NodeListOf<HTMLDivElement>;
		const skillItems = document.querySelectorAll(
			'.skill-list .skill-item'
		) as NodeListOf<HTMLDivElement>;

		function resetScale() {
			for (let i = 0; i < skillItems.length; i++) {
				skillItems[i].style.setProperty('--scale', '1');
			}
		}

		for (let i = 0; i < skillItems.length; i++) {
			const item = skillItems[i];

			// when mouse move on the skill item
			item.addEventListener('mousemove', (event: MouseEvent) => {
				const itemRect = item.getBoundingClientRect();
				// calculate the offset of the mouse position relative to the item
				// from left to right, the offset will be from 0 to 1
				const offset = Math.abs(event.clientX - itemRect.left) / itemRect.width;

				const prev = (item.previousElementSibling as HTMLDivElement) || null;
				const next = (item.nextElementSibling as HTMLDivElement) || null;

				resetScale();

				if (prev) {
					// when offset close to 0, the previous item will be scaled
					prev.style.setProperty('--scale', String(1 + scaleRange * Math.abs(offset - 1)));
				}

				// when offset are between 0 and 1, the current item will be scaled
				item.style.setProperty('--scale', String(1 + scaleRange));

				if (next) {
					// when offset close to 1, the next item will be scaled
					next.style.setProperty('--scale', String(1 + scaleRange * offset));
				}
			});
		}

		for (let i = 0; i < allSkillList.length; i++) {
			allSkillList[i].addEventListener('mouseleave', () => {
				resetScale();
			});
		}
	}

	onMount(() => {
		addDockAnimation();
	});
</script>

<section id="experience" class="flex flex-col gap-24 py-20">
	<div class="flex flex-col gap-2 text-center dark:text-neutral-50">
		<h6 class="font-caveat text-2xl md:text-4xl">From Dev to DevOps</h6>
		<h3 class="text-3xl font-semibold sm:text-4xl md:text-5xl">
			{translation.section_title_prefix}
			<span
				class="relative inline-block p-1 before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-yellow-400 dark:before:bg-yellow-500"
			>
				<span class="relative text-neutral-50">
					{translation.section_title_highlight}
				</span>
			</span>
			{translation.section_title_suffix}
		</h3>
	</div>

	<div class="mx-auto max-w-3xl">
		{#each Object.entries(experiences) as [key, experience] (key)}
			<div class="group relative py-6 pl-8 sm:pl-32">
				<!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) -->
				<div
					class="mb-4 flex flex-col items-start before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-neutral-300 before:px-px group-last:before:hidden after:absolute after:top-5 after:left-2 after:box-content after:size-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-8 after:border-neutral-50 after:bg-yellow-400 sm:flex-row sm:before:left-0 sm:before:ml-[6.5rem] sm:after:left-0 sm:after:ml-[6.5rem] dark:before:bg-neutral-700 dark:after:border-neutral-800 dark:after:bg-yellow-500"
				>
					<time
						class="left-0 mb-3 inline-flex h-6 w-20 translate-y-0.5 items-center justify-center rounded-md bg-yellow-200 text-xs font-semibold text-yellow-700 uppercase sm:absolute sm:mb-0 dark:bg-yellow-400 dark:text-yellow-900"
						>{experience.time}</time
					>
					<div class="text-xl font-bold dark:text-neutral-50">
						{experienceDescriptions[key].title}
					</div>
				</div>
				<!-- Content -->
				<div class="mb-4 text-neutral-500 dark:text-neutral-400">
					{experienceDescriptions[key].content}
				</div>
				<div class="skill-list flex flex-wrap gap-4">
					{#each experience.skills as skill (skill.name)}
						<div
							class="skill-item relative flex size-16 items-center justify-center rounded-full bg-neutral-200/60 dark:bg-neutral-700/60"
						>
							<skill.iconComponent className="size-10" />

							<div
								class="absolute inset-0 z-10 flex size-16 items-center justify-center rounded-full bg-neutral-200/60 opacity-0 backdrop-blur-xs transition-all duration-150 hover:opacity-100 dark:bg-neutral-700/60"
							>
								<span class="text-xs font-semibold dark:text-neutral-50">
									{skill.name}
								</span>
							</div>
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	@property --scale {
		syntax: '<number>';
		inherits: false;
		initial-value: 1;
	}

	.skill-list .skill-item {
		transform: scale(var(--scale));
		transition: 100ms all ease-out;
	}
</style>
