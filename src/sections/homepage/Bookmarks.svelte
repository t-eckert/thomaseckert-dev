<script lang="ts">
	import Bookmark from "../../components/Bookmark.svelte"

	export let bookmarks: any[]
</script>

<section class="flex flex-col gap-4 sm:gap-2 items-start selection:bg-rose-600">
	<h2 class="font-semibold text-gray-900 text-2xl">Bookmarks</h2>
	{#each bookmarks as bookmark}
		<Bookmark {...bookmark} />
	{/each}
	<a
		class="font-medium transition underline decoration-2 decoration-rose-400 text-gray-900 hover:text-rose-600 hover:decoration-rose-500"
		href="/bookmarks">More...</a
	>
</section>
