<script context="module">
	import fetchBookmarkCategories from "../actions/fetchBookmarkCategories"

	export async function load() {
		const bookmarkCategories = await fetchBookmarkCategories()
		return { props: { bookmarkCategories } }
	}
</script>

<script>
	import BookmarkCategory from "../components/BookmarkCategory.svelte"

	export let bookmarkCategories
</script>

<section class="mx-auto my-4 sm:my-16 px-2 flex flex-col max-w-6xl">
	<header class="flex flex-col gap-2 sm:gap-4">
		<h1 class="font-semibold text-2xl sm:text-6xl text-gray-900">Bookmarks</h1>
		<p class="text-sm text-gray-700">Some of my favorite things across the Internet.</p>
	</header>
	<div
		class="max-w-7xl mx-auto pt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 sm:gap-2"
	>
		{#each bookmarkCategories as bookmarkCategory}
			<BookmarkCategory {...bookmarkCategory} />
		{/each}
	</div>
</section>
