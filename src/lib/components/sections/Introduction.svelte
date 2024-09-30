<script lang="ts">
	import { onMount } from 'svelte';

	let dynamicText: HTMLElement;

	const words = ['Operation', 'Coding', 'Sharing'];

	let wordIndex = 0;
	let charIndex = 0;
	let isDeleting = false;

	function typeEffect() {
		const currentWord = words[wordIndex];

		dynamicText.textContent = currentWord.substring(0, charIndex);

		if (!isDeleting && charIndex < currentWord.length) {
			// dynamic text is typing
			charIndex++;
			setTimeout(typeEffect, 200);
		} else if (isDeleting && charIndex > 0) {
			// dynamic text is deleting
			charIndex--;
			setTimeout(typeEffect, 100);
		} else if (!isDeleting && charIndex === currentWord.length) {
			// dynamic text is finished, and change isDeleting to true
			isDeleting = true;
			setTimeout(typeEffect, 1500);
		} else {
			// dynamic text is deleted, change isDeleting to false, and show next word
			isDeleting = false;
			wordIndex = (wordIndex + 1) % words.length;
			setTimeout(typeEffect, 1200);
		}
	}

	onMount(() => {
		typeEffect();
	});
</script>

<section
	id="introduction"
	class="grid grid-cols-1 gap-10 rounded-3xl bg-neutral-200/60 px-10 py-20 dark:bg-neutral-700/60 lg:grid-cols-2"
>
	<div class="flex flex-col gap-6 text-center md:gap-8 lg:justify-center lg:gap-10 lg:text-left">
		<div class="flex flex-col gap-0">
			<h2 class="text-4xl font-semibold dark:text-neutral-50 md:text-5xl">
				Hi！我是
				<span
					class="inline-block bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text leading-normal text-transparent"
				>
					Allen
				</span>

				<br />

				是一位
				<span
					class="inline-block bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text leading-normal text-transparent"
				>
					DevOps
				</span>
				工程師
			</h2>
		</div>

		<p class="inline-block text-base dark:text-neutral-50 sm:text-lg md:text-xl">
			後端打工仔。擅長各類<span class="text-green-500 dark:text-green-400">維運技能</span>與<span
				class="text-green-500 dark:text-green-400">雲端服務</span
			>，下班後喜歡不務正業的研究<span class="text-green-500 dark:text-green-400">前後端技術</span>
			。個性就像動態語言般隨興，但渴望做事能像囉嗦的靜態語言那樣嚴謹。
		</p>

		<p
			id="typewriter"
			class="flex items-center gap-4 text-3xl font-bold dark:text-neutral-50 md:text-5xl"
		>
			I Love
			<span
				id="dynamicText"
				class="relative inline-block h-full text-indigo-500 before:absolute before:-bottom-2 before:-right-8 before:h-1.5 before:w-8 before:animate-blink before:bg-indigo-500 before:contain-none"
				bind:this={dynamicText}
			></span>
		</p>
	</div>

	<div class="flex justify-center">
		<div class="relative z-0 flex">
			<img
				class="z-20 w-[28rem] rounded-full border-8 border-neutral-50"
				src={'images/profile.jpg'}
				alt="Profile"
			/>
			<div
				class="green-spot-floating absolute right-0 top-0 z-30 size-32 rounded-full border-8 border-neutral-50 bg-green-500"
			></div>
			<div
				class="blue-spot-floating absolute bottom-0 right-0 z-10 size-40 rounded-full bg-blue-500"
			></div>
			<div
				class="red-spot-floating absolute left-10 top-0 z-10 size-10 rounded-full bg-red-500"
			></div>
			<div
				class="yellow-spot-floating absolute bottom-0 left-16 z-30 size-20 rounded-full border-8 border-neutral-50 bg-yellow-500"
			></div>
		</div>
	</div>
</section>

<style>
	@keyframes floating {
		0%,
		100% {
			transform: translate(0, -1.5rem);
			scale: 1;
		}
		50% {
			transform: translate(0, 1.5rem);
			scale: 1.2;
		}
	}

	.red-spot-floating {
		animation: floating 14s infinite;
	}

	.green-spot-floating {
		animation: floating 10s infinite;
	}

	.yellow-spot-floating {
		animation: floating 12s infinite;
	}

	.blue-spot-floating {
		animation: floating 18s infinite;
	}
</style>
