<script context="module">
	import fetchWriting from "../../actions/fetchWriting"

	export async function load({ params }) {
		const writings = await fetchWriting(params.slug)
		if (!writings) {
			throw new Error("Not found")
		}
		const writing = writings[0]
		return { props: { writing } }
	}
</script>

<script>
	import { fade, fly } from "svelte/transition"

	import Date from "../../components/Date.svelte"
	import Tag from "../../components/Tag.svelte"
	import Markdown from "../../components/Markdown.svelte"

	export let writing

	let headerHeight
	let scrolled
</script>

<svelte:head>
	<title>{writing.title}</title>
</svelte:head>

<svelte:window bind:scrollY={scrolled} />

{#if scrolled > headerHeight}
	<div
		transition:fade
		class="invisible sm:visible pointer-events-none z-20 fixed top-0 w-screen pt-1 px-2 flex justify-start sm:justify-center font-medium text-gray-900"
	>
		{writing.title}
	</div>
{/if}

<header
	class="px-2 pt-4 sm:pt-36 pb-20 mx-auto max-w-4xl flex flex-col gap-1"
	bind:clientHeight={headerHeight}
>
	<h1
		class="text-3xl leading-2 sm:text-5xl sm:leading-tight tracking-tight font-semibold"
		in:fly={{ y: 50 }}
	>
		{writing.title.replace(/\s/g, " ")}
	</h1>
	<div class="text-gray-500 text-sm flex flex-row gap-2" in:fade={{ delay: 200, duration: 500 }}>
		<Date date={writing.updatedAt} />
		{#each writing.tags as tag}
			<Tag {tag} />
		{/each}
	</div>
</header>

<main class="px-2 mx-auto max-w-4xl mb-12" in:fade={{ delay: 200, duration: 500 }}>
	<article>
		<Markdown markdown={writing.content} />
	</article>
</main>
