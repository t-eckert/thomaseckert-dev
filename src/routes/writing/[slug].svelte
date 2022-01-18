<script context="module">
	import fetchWriting from "../../actions/fetchWriting"

	export async function load({ params }) {
		const writing = (await fetchWriting(params.slug))[0]
		return { props: { writing } }
	}
</script>

<script>
	import { onMount } from "svelte"

	import Date from "../../components/Date.svelte"
	import Tag from "../../components/Tag.svelte"
	import Markdown from "../../components/Markdown.svelte"
	import { fade } from "svelte/transition"

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
	class="px-2 pt-4 sm:pt-12 pb-8 mx-auto max-w-4xl flex flex-col gap-2"
	bind:clientHeight={headerHeight}
>
	<h1 class="text-3xl leading-2 sm:text-5xl sm:leading-tight tracking-tight font-semibold">
		{writing.title.replace(/\s/g, " ")}
	</h1>
	<div class="text-gray-500 text-sm flex flex-row gap-2">
		<Date date={writing.updatedAt} />
		{#each writing.tags as tag}
			<Tag {tag} />
		{/each}
	</div>
</header>

<main class="px-2 mx-auto max-w-4xl mb-12">
	<article>
		<Markdown markdown={writing.content} />
	</article>
</main>
