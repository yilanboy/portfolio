<script lang="ts">
	import { onMount } from 'svelte';

	let dynamicText: HTMLElement;

	const words = ['DevOps', 'Backend', 'Frontend', 'Coding'];

	let wordIndex = 0;
	let charIndex = 0;
	let isDeleting = false;

	function typeEffect() {
		const currentWord = words[wordIndex];
		const currentChar = currentWord.substring(0, charIndex);

		if (!dynamicText) {
			return;
		}

		dynamicText.textContent = currentChar;

		if (!isDeleting && charIndex < currentWord.length) {
			charIndex++;
			setTimeout(typeEffect, 200);
		} else if (isDeleting && charIndex > 0) {
			charIndex--;
			setTimeout(typeEffect, 100);
		} else {
			isDeleting = !isDeleting;
			wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
			setTimeout(typeEffect, 1200);
		}
	}

	onMount(() => {
		typeEffect();
	});
</script>

<section id="introduction" class="grid grid-cols-1 gap-10 py-20 lg:grid-cols-2">
	<div class="flex flex-col gap-6 text-center md:gap-8 lg:justify-center lg:gap-10 lg:text-left">
		<h2 class="text-5xl font-semibold leading-normal">
			Hi！我是 <span
				class="inline-block bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent"
				>Allen</span
			><br />
			是一位
			<span
				class="inline-block bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent"
				>DevOps</span
			> 工程師
		</h2>

		<p class="text-base sm:text-lg md:text-xl">
			後端打工仔。<span class="text-green-500">擅長各類維運技能與雲端服務</span
			>，但下班後喜歡不務正業的研究前後端的技術
			。個性就像動態語言般隨興，但渴望做事能像囉嗦的靜態語言那樣嚴謹。
		</p>

		<p id="typewriter" class="text-5xl font-bold">
			I Love <span
				id="dynamicText"
				class="before:animate-blink relative inline-block h-full text-indigo-500 before:absolute before:-bottom-2 before:-right-8 before:h-1.5 before:w-8 before:bg-indigo-500 before:contain-none"
				bind:this={dynamicText}
			></span>
		</p>
	</div>

	<div class="flex justify-center">
		<div class="relative z-0 flex">
			<img class="z-20 w-[28rem] rounded-full" src={'images/profile.jpg'} alt="Profile" />
			<div
				class="green-spot-floating absolute right-0 top-0 z-30 size-32 rounded-full border-8 border-gray-50 bg-green-500"
			></div>
			<div
				class="blue-spot-floating absolute bottom-0 right-0 z-10 size-40 rounded-full bg-blue-500"
			></div>
			<div
				class="red-spot-floating absolute left-10 top-0 z-10 size-10 rounded-full bg-red-500"
			></div>
			<div
				class="yellow-spot-floating absolute bottom-0 left-16 z-30 size-20 rounded-full border-8 border-gray-50 bg-yellow-500"
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
