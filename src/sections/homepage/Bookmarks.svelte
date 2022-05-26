<script>
	import ArrowRight from "src/components/icons/ArrowRight.svelte"
	import BookmarkPreview from "src/components/Bookmark.svelte"
	import Link from "src/components/Link.svelte"

	export let bookmarks
</script>

<section class="flex flex-col gap-2 items-start selection:bg-rose-600">
	<h2 class="font-semibold text-gray-900 text-2xl">Bookmarks</h2>
	{#each bookmarks as bookmark}
		<BookmarkPreview {...bookmark} />
	{/each}
	<Link href="/bookmarks" resource="bookmarks">
		<div class="flex flex-row items-center gap-0.5 group">
			<div>More</div>
			<ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition text-rose-500" />
		</div>
	</Link>
</section>
