<script lang="ts">
  import { parseHighlights } from "#lib/highlight.js";

  interface Props {
    text: string;
    highlightClass?: string;
  }

  let { text, highlightClass = "text-blue-500 dark:text-blue-400" }: Props = $props();

  let segments = $derived(parseHighlights(text));
</script>

{#each segments as segment}{#if segment.highlight}<span class={highlightClass}>{segment.text}</span
    >{:else}{segment.text}{/if}{/each}
