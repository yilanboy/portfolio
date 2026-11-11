<script lang="ts">
  import type { Snippet } from "svelte";

  export type HighlightColor = "red" | "yellow" | "violet" | "blue" | "green";

  interface Props {
    color?: HighlightColor;
    children?: Snippet;
    text?: string;
    class?: string;
  }

  let { color = "red", children, text, class: className = "" }: Props = $props();

  const colorClasses: Record<HighlightColor, string> = {
    red: "before:bg-red-500 dark:before:bg-red-600",
    yellow: "before:bg-yellow-400 dark:before:bg-yellow-500",
    violet: "before:bg-violet-500 dark:before:bg-violet-600",
    blue: "before:bg-blue-500 dark:before:bg-blue-600",
    green: "before:bg-green-500 dark:before:bg-green-600",
  };
</script>

<span
  class="relative inline-block p-1 before:absolute before:-inset-1 before:block before:-skew-y-3 {colorClasses[
    color
  ]} {className}"
>
  <span class="relative text-neutral-50">
    {#if children}
      {@render children()}
    {:else}
      {text}
    {/if}
  </span>
</span>
