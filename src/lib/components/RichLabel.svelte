<script lang="ts">
  import { parseHighlights } from "#lib/highlight.js";
  import Highlight, { type HighlightColor } from "./Highlight.svelte";

  interface Props {
    text: string;
    color?: HighlightColor;
  }

  let { text, color = "red" }: Props = $props();

  let segments = $derived(parseHighlights(text));
</script>

{#each segments as segment}{#if segment.highlight}<Highlight
      {color}
      text={segment.text}
    />{:else}{segment.text}{/if}{/each}
