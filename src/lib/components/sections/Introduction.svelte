<section id="introduction" class="grid grid-cols-1 gap-10 py-20 lg:grid-cols-2">
	<div class="flex flex-col gap-6 text-center md:gap-8 lg:justify-center lg:gap-10 lg:text-left">
		<h2 class="text-5xl font-semibold leading-normal">
			Hi！我是 <span class="text-green-500">Allen</span><br />
			是一位 <span class="text-green-500">DevOps</span> 工程師
		</h2>

		<p class="text-base sm:text-lg md:text-xl">
			後端打工仔。<span class="text-green-500">擅長各類維運技能與雲端服務</span
			>，但下班後喜歡不務正業的研究前後端的技術
			。個性就像動態語言般隨興，但渴望做事能像囉嗦的靜態語言那樣嚴謹。
		</p>
	</div>

	<div class="flex justify-center">
		<div class="relative z-0 flex">
			<img class="z-20 w-[28rem] rounded-full" src={'images/profile.jpg'} alt="Profile" />
			<div
				class="green-spot-floating absolute right-0 z-30 size-32 rounded-full border-8 border-gray-50 bg-green-500"
			></div>
			<div
				class="blue-spot-floating absolute bottom-0 right-0 z-10 size-40 rounded-full bg-blue-500"
			></div>
			<div class="red-spot-floating absolute left-10 z-10 size-10 rounded-full bg-red-500"></div>
			<div
				class="yellow-spot-floating absolute bottom-0 left-16 z-30 size-20 rounded-full border-8 border-gray-50 bg-yellow-500"
			></div>
		</div>
	</div>
</section>

<style>
	@keyframes red-spot-floating {
		0%,
		100% {
			top: -1rem;
		}
		50% {
			top: 1rem;
		}
	}

	.red-spot-floating {
		animation: red-spot-floating 4s infinite;
	}

	@keyframes green-spot-floating {
		0%,
		100% {
			top: -1.5rem;
		}
		50% {
			top: 1.5rem;
		}
	}

	.green-spot-floating {
		animation: green-spot-floating 6s infinite;
	}

	@keyframes yellow-spot-floating {
		0%,
		100% {
			bottom: 2rem;
		}
		50% {
			bottom: -2rem;
		}
	}

	.yellow-spot-floating {
		animation: yellow-spot-floating 8s infinite;
	}

	@keyframes blue-spot-floating {
		0%,
		100% {
			bottom: 1rem;
		}
		50% {
			bottom: -2rem;
		}
	}

	.blue-spot-floating {
		animation: blue-spot-floating 10s infinite;
	}
</style>
