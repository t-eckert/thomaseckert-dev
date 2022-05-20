<script>
	import { fade, fly } from "svelte/transition"

	import ArrowLeft from "src/components/icons/ArrowLeft.svelte"
	import Date from "src/components/Date.svelte"
	import Link from "src/components/Link.svelte"
	import Tag from "src/components/Tag.svelte"

	export let title, tags, published

	let headerHeight
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<header class="px-2 pt-4 sm:pt-20 pb-12 mx-auto max-w-6xl flex flex-col gap-1 items-start">
	<Link href="/writing" resource="writing">
		<div class="flex flex-row items-center gap-0.5 group">
			<ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition text-sky-500" />
			<div>Writing</div>
		</div>
	</Link>

	<h1
		class="text-3xl leading-2 sm:text-6xl sm:leading-tight tracking-tight font-semibold max-w-3xl"
		in:fly={{ y: 50 }}
	>
		{title}
	</h1>

	<div
		class="text-gray-500 text-sm flex flex-row gap-1.5 items-start"
		in:fade={{ delay: 200, duration: 500 }}
	>
		<Date date={published} />
		{#each tags as tag}
			<Tag resource="writing" {tag} />
		{/each}
	</div>
</header>

<main class="px-2 mx-auto max-w-6xl mb-12" in:fade={{ delay: 200, duration: 500 }}>
	<article class="markdown">
		<slot />
	</article>
</main>
