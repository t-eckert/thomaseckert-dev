<script context="module">
	import Bookmark from "./Bookmark.svelte"
</script>

<script>
	export let category, bookmarks
</script>

<div class="w-60 text-gray-900">
	<h2 class="mb-1 sm:mb-2 font-semibold">{category}</h2>
	<div class="flex flex-col gap-2">
		{#each bookmarks as bookmark}
			<Bookmark {...bookmark} />
		{/each}
	</div>
</div>
