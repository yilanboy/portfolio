<script lang="ts">
	import type { PostTranslation } from '$lang/type/post.type';
	import type { Post } from '$lib/types';
	import { formatDate } from '$lib/helpers';
	import type { Locale } from '$lib/enums';
	import { translations } from '$lib/translations';

	interface Props {
		locale: Locale;
		posts: Post[];
	}

	let { locale, posts }: Props = $props();
	let translation: PostTranslation = $derived(translations[locale].post);
</script>

{#if posts.length > 0}
	<section id="post" class="flex flex-col gap-24 py-20">
		<div class="flex flex-col gap-2 text-center dark:text-neutral-50">
			<h6 class="font-caveat text-2xl md:text-4xl">Check them out!</h6>
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

		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each posts as post (post.id)}
				<article class="rounded-2xl border border-neutral-300 p-6 dark:border-neutral-600">
					<div class="group relative max-w-xl">
						<time
							datetime={post.created_at}
							class="block text-sm/6 text-zinc-600 dark:text-zinc-400"
						>
							{formatDate(post.created_at)}
						</time>
						<h2
							class="mt-2 text-lg font-semibold text-zinc-900 group-hover:text-zinc-600 dark:text-white dark:group-hover:text-zinc-300"
						>
							<a href={post.url} target="_blank">
								<span class="absolute inset-0"></span>
								{post.title}
							</a>
						</h2>
						<p class="mt-4 text-sm/6 text-zinc-600 dark:text-zinc-400">
							{post.excerpt}
						</p>
					</div>
				</article>
			{/each}
		</div>
	</section>
{/if}
