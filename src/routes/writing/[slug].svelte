<script context="module">
	import fetchWriting from "../../actions/fetchWriting"

	export async function load({ params }) {
		const writing = (await fetchWriting(params.slug))[0]
		return { props: { writing } }
	}
</script>

<script>
	import { marked } from "marked"
	import { onMount } from "svelte"

	import Date from "../../components/Date.svelte"
	import Tag from "../../components/Tag.svelte"
	import Markdown from "../../components/Markdown.svelte"
	import { fade } from "svelte/transition"

	export let writing

	let headerHeight
	let scrolled

	onMount(() => {
		let script = document.createElement("script")
		script.src = "/prism.js"
		document.head.append(script)
	})
</script>

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
	<h1 class="text-3xl sm:text-6xl tracking-tight leading-tight font-semibold">
		{writing.title.replace(/\s/g, " ")}
	</h1>
	<div class="flex flex-row gap-1">
		<Date date={writing.updatedAt} />
		{#each writing.tags as tag}
			<Tag {tag} />
		{/each}
	</div>
</header>

<main class="mx-auto px-1 mb-12 prose text-gray-900">
	<Markdown markdown={writing.content} />
</main>
