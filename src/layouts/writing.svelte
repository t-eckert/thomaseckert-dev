<script>
	import { fade, fly } from "svelte/transition"

	import Date from "src/components/Date.svelte"
	import Link from "src/components/Link.svelte"
	import Tag from "src/components/Tag.svelte"

	export let title, tags, published
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<header class="px-2 sm:px-0 pt-4 sm:pt-32 pb-12 lg:pb-24 mx-auto max-w-2xl lg:max-w-6xl flex flex-col gap-1 items-start">
	<div class="flex flex-row items-baseline gap-2">
		<Link href="/">Home</Link>
		<div>&frasl;</div>
		<Link href="/writing" resource="writing">Writing</Link>
	</div>

	<h1
		class="text-3xl leading-2 md:text-6xl md:leading-tight tracking-tight font-semibold max-w-3xl"
		in:fly={{ y: 50 }}
	>
		{title}
	</h1>

	<div
		class="text-gray-500 text-sm flex flex-row gap-1.5 items-start"
		in:fade={{ delay: 200, duration: 500 }}
	>
		{#if published}
			<Date date={published} />
		{:else}
			<span>Not published</span>
		{/if}
		{#each tags as tag}
			<Tag resource="writing" {tag} />
		{/each}
	</div>
</header>

<main class="px-2 mx-auto mb-12" in:fade={{ delay: 200, duration: 500 }}>
	<article class="markdown">
		<slot />
	</article>
</main>
