<script lang="ts">
  import RichLabel from "#lib/components/RichLabel.svelte";
  import type { PostTranslation } from "#lang/type/post.type.js";
  import type { Post } from "#lib/types.js";
  import { formatDate } from "#lib/helpers.js";
  import type { Locale } from "#lib/enums.js";
  import { translations } from "#lib/translations.js";

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
        <RichLabel text={translation.section_title} color="violet" />
      </h3>
    </div>

    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {#each posts as post (post.id)}
        <article
          class="rounded-2xl border border-neutral-300 p-6 hover:border-violet-400 dark:border-neutral-600"
        >
          <div class="relative max-w-xl">
            <time
              datetime={post.created_at}
              class="block text-sm/6 text-zinc-600 dark:text-zinc-400"
            >
              {formatDate(post.created_at)}
            </time>
            <h2 class="mt-2 text-lg font-semibold text-zinc-900 dark:text-white">
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
