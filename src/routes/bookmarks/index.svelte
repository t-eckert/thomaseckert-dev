<script>
	import { writable, derived } from "svelte/store"

	import ArrowLeft from "src/components/icons/ArrowLeft.svelte"
	import BookmarkCategory from "src/sections/BookmarkCategory.svelte"
	import Link from "src/components/Link.svelte"

	export let bookmarks

	const filter = writable("")
	const domain = writable(bookmarks)

	const bookmarkCategories = derived([filter, domain], ([$filter, $domain]) => {
		const filtered = $domain.filter(({ category, link, description }) => {
			return (
				category.toLowerCase().includes($filter.toLowerCase()) ||
				link.toLowerCase().includes($filter.toLowerCase()) ||
				description.toLowerCase().includes($filter.toLowerCase())
			)
		})
		const categorized = new Map([])
		filtered.forEach((bookmark) => {
			if (!categorized.has(bookmark.category)) {
				categorized.set(bookmark.category, [])
			}
			categorized.get(bookmark.category)?.push(bookmark)
		})
		return Array.from(categorized.keys()).map((category) => ({
			category,
			bookmarks: categorized.get(category)
		}))
	})

	let searchText = ""

	$: filter.set(searchText)
</script>

<svelte:head>
	<title>Thomas Eckert: Bookmarks</title>
</svelte:head>

<div
	class="absolute overflow-hidden -top-28 -left-10 opacity-10 -rotate-6 bg-gradient-to-r from-rose-500 to-rose-400 pointer-events-none w-[110%] h-96"
/>

<section class="z-10 mx-auto px-4 flex flex-col max-w-6xl gap-20 pt-4 sm:pt-32">
	<header class="flex flex-col gap-6 items-start">
		<Link href="/">
			<div class="flex flex-row items-center gap-0.5 group">
				<ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition text-gray-800" />
				<div>Home</div>
			</div>
		</Link>
		<div class="flex flex-col sm:flex-row justify-between w-full items-end">
			<h1 class="font-semibold text-2xl sm:text-7xl text-gray-900">Bookmarks</h1>
			<input
				type="text"
				name="filter-bookmarks"
				id="filter-bookmarks"
				bind:value={searchText}
				placeholder="Search bookmarks"
				class="font-medium border-b border-rose-600 bg-transparent w-full sm:w-full sm:max-w-sm focus:outline-none px-1 py-0.5 transition"
			/>
		</div>
	</header>
	<main class=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
		{#each $bookmarkCategories as bookmarkCategory}
			<BookmarkCategory {...bookmarkCategory} />
		{/each}
	</main>
</section>
