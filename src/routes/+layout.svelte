<script lang="ts">
    import "./layout.css";
    import favicon from "#lib/assets/favicon.svg";
    import Background from "#lib/components/Background.svelte";

    interface Props {
        children?: import("svelte").Snippet;
    }

    let { children }: Props = $props();
</script>

<svelte:head>
    <link rel="icon" href={favicon} />

    <!-- dark mode	-->
    <script defer>
        if (
            document.cookie.includes("theme=dark") ||
            (!document.cookie.includes("theme=light") &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            document.documentElement.setAttribute("data-theme", "dark");
        } else {
            document.documentElement.setAttribute("data-theme", "light");
        }
    </script>
</svelte:head>

<div class="bg-neutral-50 text-neutral-900 dark:bg-neutral-800">
    <Background />

    <div
        class="mx-auto flex min-h-screen w-full max-w-7xl flex-col text-sm sm:text-base"
    >
        {@render children?.()}
    </div>
</div>
