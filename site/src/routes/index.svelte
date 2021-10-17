<script context="module">
	import fetchWritings from "../actions/fetchWritings"
	import fetchCopy from "../actions/fetchCopy"

	export async function load() {
		const writings = await fetchWritings()
		const intro = await fetchCopy("intro")
		return { props: { writings, intro } }
	}
</script>

<script>
	import Introduction from "../components/Introduction.svelte"
	import WritingPreview from "../components/WritingPreview.svelte"

	export let intro
	export let writings
</script>

<svelte:head>
	<title>Thomas Eckert</title>
</svelte:head>

<section class="mx-auto px-2 pt-4 sm:pt-12 max-w-xl flex flex-col gap-6">
	<div class="pb-6 border-b border-gray-200">
		<Introduction {intro} />
	</div>
	<div class="flex flex-col gap-2">
		<h2 class="font-medium">Recent Writings</h2>
		<section class="flex flex-col gap-4 sm:gap-2">
			{#each writings as writing}
				<WritingPreview {writing} />
			{/each}
		</section>
	</div>
</section>
