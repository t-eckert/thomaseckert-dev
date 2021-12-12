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

<section class="mx-auto px-2 flex flex-col max-w-7xl">
	<header class="flex my-4 sm:my-16 flex-col gap-2 sm:gap-4">
		<h1 class="font-semibold text-2xl sm:text-6xl text-gray-900">Writing</h1>

		<p class="text-gray-700">Here I share some of my thoughts and other things I've learned.</p>
	</header>
	<section class="flex flex-col gap-12 sm:gap-2">
		{#each writings as writing}
			<WritingPreview {writing} />
		{/each}
	</section>
</section>
