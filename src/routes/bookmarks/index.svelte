<script>
	import BookmarkCategory from "src/sections/BookmarkCategory.svelte"

	export let bookmarkCategories

	$: allExpanded = true
</script>

<svelte:head>
	<title>Thomas Eckert: Bookmarks</title>
</svelte:head>

<div
	class="absolute overflow-hidden -top-28 -left-10 opacity-10 -rotate-6 bg-gradient-to-r from-rose-500 to-rose-400 pointer-events-none w-[110%] h-96"
/>

<section class="mx-auto px-4 flex flex-col max-w-6xl">
	<header class="my-4 sm:my-12 flex flex-col">
		<h1 class="font-semibold text-2xl sm:text-6xl text-gray-900">Bookmarks</h1>
	</header>

	<main class="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
		{#each bookmarkCategories as bookmarkCategory}
			<BookmarkCategory {...bookmarkCategory} isExpanded={allExpanded} />
		{/each}
	</main>
</section>
