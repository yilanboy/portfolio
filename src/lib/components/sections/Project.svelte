<script lang="ts">
  import Step from "#lib/components/Step.svelte";
  import HighlightedText from "#lib/components/HighlightedText.svelte";
  import FileEarmarkRichText from "@lucide/svelte/icons/file-text";
  import JournalText from "@lucide/svelte/icons/notebook-text";
  import Easel from "@lucide/svelte/icons/palette";
  import type { ProjectTranslation } from "#lang/type/project.type.js";
  import type { Locale } from "#lib/enums.js";
  import { translations } from "#lib/translations.js";

  interface Props {
    locale: Locale;
  }

  let { locale }: Props = $props();
  let translation: ProjectTranslation = $derived(translations[locale].project);

  let steps = $derived({
    blog: {
      name: translation.blog.name,
      url: "https://docfunc.com",
      iconComponent: FileEarmarkRichText,
      description: translation.blog.description,
    },
    note: {
      name: translation.note.name,
      url: "https://note.docfunc.com",
      iconComponent: JournalText,
      description: translation.note.description,
    },
    slide: {
      name: translation.slide.name,
      url: "https://github.com/yilanboy/slide",
      iconComponent: Easel,
      description: translation.slide.description,
    },
  });
</script>

<section id="project" class="flex flex-col gap-24 py-20">
  <div class="flex flex-col gap-2 text-center dark:text-neutral-50">
    <h6 class="font-caveat text-2xl md:text-4xl">Love sharing!</h6>
    <h3 class="text-3xl font-semibold sm:text-4xl md:text-5xl">
      {translation.section_title_prefix}
      <span
        class="relative inline-block p-1 before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-blue-500 dark:before:bg-blue-600"
      >
        <span class="relative text-neutral-50">
          {translation.section_title_highlight}
        </span>
      </span>
      {translation.section_title_suffix}
    </h3>
  </div>

  <div class="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-10 dark:text-neutral-50">
    {#each Object.entries(steps) as [key, step] (key)}
      <Step name={step.name} url={step.url} forwardText={translation.go}>
        {#snippet icon()}
          <step.iconComponent class="size-12" />
        {/snippet}

        {#snippet content()}
          <p class="text-left">
            <HighlightedText text={step.description} />
          </p>
        {/snippet}
      </Step>
    {/each}
  </div>
</section>
