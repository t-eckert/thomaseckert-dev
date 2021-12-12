<script context="module">
	import fetchBookmarkCategories from "../actions/fetchBookmarkCategories"

	export async function load() {
		const bookmarkCategories = await fetchBookmarkCategories()
		bookmarkCategories.sort((a, b) => a.priority - b.priority)
		return { props: { bookmarkCategories } }
	}
</script>

<script>
	import BookmarkCategory from "../components/BookmarkCategory.svelte"

	export let bookmarkCategories

	$: allExpanded = true
</script>

<section class="mx-auto px-2 flex flex-col max-w-7xl">
	<header class="my-4 sm:my-16 flex flex-col gap-2 sm:gap-4">
		<h1 class="font-semibold text-2xl sm:text-6xl text-gray-900">Bookmarks</h1>

		<div class="flex flex-row justify-between">
			<p class="text-gray-700">Some of my favorite things across the Internet.</p>
			{#if allExpanded}
				<button
					class="font-medium transition text-gray-600 hover:text-gray-800"
					on:click={() => (allExpanded = false)}>Minimize all</button
				>
			{:else}
				<button
					class="font-medium transition text-gray-600 hover:text-gray-800"
					on:click={() => (allExpanded = true)}>Expand all</button
				>
			{/if}
		</div>
	</header>
	<div
		class="max-w-7xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-10"
	>
		{#each bookmarkCategories as bookmarkCategory}
			<BookmarkCategory {...bookmarkCategory} isExpanded={allExpanded} />
		{/each}
	</div>
</section>
