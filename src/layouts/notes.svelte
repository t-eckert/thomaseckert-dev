<script>
	import { fade, fly } from "svelte/transition"

	import Tag from "../components/Tag.svelte"

	export let title, tags

	let headerHeight, scrolled
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<svelte:window bind:scrollY={scrolled} />

{#if scrolled > headerHeight}
	<div
		transition:fade
		class="invisible sm:visible pointer-events-none z-20 fixed top-0 w-screen pt-1 px-2 flex justify-start sm:justify-center font-medium text-gray-900"
	>
		{title}
	</div>
{/if}

<header
	class="px-2 pt-4 sm:pt-20 pb-16 mx-auto max-w-6xl flex flex-col gap-2"
	bind:clientHeight={headerHeight}
>
	<h1
		class="text-3xl leading-2 sm:text-6xl sm:leading-tight tracking-tight font-semibold max-w-3xl"
		in:fly={{ y: 50 }}
	>
		{title}
	</h1>
	<div class="text-gray-500 text-sm flex flex-row gap-1" in:fade={{ delay: 200, duration: 500 }}>
		{#each tags as tag}
			<Tag resource="/notes" {tag} />
		{/each}
	</div>
</header>

<main class="px-2 mx-auto max-w-4xl mb-12" in:fade={{ delay: 200, duration: 500 }}>
	<article class="writing">
		<slot />
	</article>
</main>
