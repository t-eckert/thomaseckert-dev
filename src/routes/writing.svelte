<script context="module">
	import fetchWritings from "../actions/fetchWritings"

	export async function load() {
		const writings = await fetchWritings()
		return { props: { writings } }
	}
</script>

<script>
	import WritingPreview from "../components/WritingPreview.svelte"

	export let writings
</script>

<div
	class="absolute overflow-hidden -top-28 -left-10 opacity-10 -rotate-6 bg-gradient-to-r from-sky-500 to-sky-400 pointer-events-none w-[110%] h-96"
/>

<section class="mx-auto px-2 flex flex-col max-w-6xl">
	<header class="my-4 sm:my-12">
		<h1 class="mb-2 font-semibold text-2xl sm:text-6xl text-gray-900">Writing</h1>

		<p class="text-gray-700 text-sm">
			Here I share some of my thoughts and other things I've learned.
		</p>
	</header>

	<main class="flex flex-col gap-2">
		{#each writings as writing}
			<WritingPreview {writing} />
		{/each}
	</main>
</section>
