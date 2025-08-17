<script lang="ts">
	import { onMount } from 'svelte';
	import type { PostTranslation } from '$lang/type/post.type';

	interface Post {
		id: number;
		title: string;
		excerpt: string;
		created_at: string;
		updated_at: string;
		url: string;
	}

	interface Props {
		translation: PostTranslation;
	}

	let { translation }: Props = $props();

	let posts: { data: Post[] } | null = $state(null);

	function formatDate(iso: string) {
		try {
			const d = new Date(iso);
			return new Intl.DateTimeFormat(navigator.language || 'en-US', {
				year: 'numeric',
				month: 'short',
				day: '2-digit'
			}).format(d);
		} catch {
			return iso;
		}
	}

	onMount(async () => {
		const response = await fetch('https://docfunc.com/api/posts');
		posts = await response.json();

		console.log(posts);
	});
</script>

{#if posts}
	<section id="post" class="flex flex-col gap-24 py-20">
		<div class="flex flex-col gap-2 text-center dark:text-neutral-50">
			<h6 class="font-caveat text-2xl md:text-4xl">Check it out!</h6>
			<h3 class="text-3xl font-semibold sm:text-4xl md:text-5xl">
				{translation.section_title_prefix}
				<span
					class="relative inline-block p-1 before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-violet-500 dark:before:bg-violet-600"
				>
					<span class="relative text-neutral-50">
						{translation.section_title_highlight}
					</span>
				</span>
				{translation.section_title_suffix}
			</h3>
		</div>

		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{#each posts.data as post (post.id)}
				<article
					class="group flex h-full flex-col overflow-hidden rounded-xl border border-zinc-200/70 bg-white/70 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-700/60 dark:bg-zinc-700/70"
				>
					<a
						class="flex flex-1 flex-col gap-6 p-5 no-underline"
						href={post.url}
						target="_blank"
						rel="noopener noreferrer"
					>
						<h3
							class="line-clamp-2 text-lg font-semibold text-zinc-900 group-hover:text-zinc-700 dark:text-zinc-100 dark:group-hover:text-zinc-200"
						>
							{post.title}
						</h3>

						<p class="line-clamp-3 text-sm text-zinc-600 dark:text-zinc-300">
							{post.excerpt}
						</p>

						<div
							class="mt-auto flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400"
						>
							<span>Published: {formatDate(post.created_at)}</span>

							{#if post.updated_at && post.updated_at !== post.created_at}
								<span>Updated: {formatDate(post.updated_at)}</span>
							{/if}
						</div>
					</a>
				</article>
			{/each}
		</div>
	</section>
{/if}
