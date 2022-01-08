<script context="module">
	import fetchBookmarkCategories from "../actions/fetchBookmarkCategories"

	export async function load() {
		const bookmarkCategories = await fetchBookmarkCategories()
		bookmarkCategories.sort((a, b) => a.priority - b.priority)
		return { props: { bookmarkCategories } }
	}
</script>

<script>
	import BookmarkCategory from "../sections/BookmarkCategory.svelte"

	export let bookmarkCategories

	$: allExpanded = true
</script>

<svelte:head>
	<title>Thomas Eckert: Bookmarks</title>
</svelte:head>

<div
	class="absolute -top-24 -left-10 opacity-5 -rotate-6 bg-gradient-to-b from-rose-500 to-rose-400 pointer-events-none w-[1800px] h-96"
/>

<section class="mx-auto px-4 flex flex-col max-w-6xl">
	<header class="my-4 sm:my-12 flex flex-col">
		<h1 class="font-semibold text-2xl sm:text-6xl text-gray-900">Bookmarks</h1>

		<div class="w-full flex flex-row justify-between">
			<p class="ml-1 text-gray-700 text-sm">Some of my favorite things across the Internet.</p>
			{#if allExpanded}
				<button
					class="font-medium text-sm transition text-gray-600 hover:text-gray-800"
					on:click={() => (allExpanded = false)}>Minimize all</button
				>
			{:else}
				<button
					class="font-medium text-sm transition text-gray-600 hover:text-gray-800"
					on:click={() => (allExpanded = true)}>Expand all</button
				>
			{/if}
		</div>
	</header>

	<main class="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
		{#each bookmarkCategories as bookmarkCategory}
			<BookmarkCategory {...bookmarkCategory} isExpanded={allExpanded} />
		{/each}
	</main>
</section>
