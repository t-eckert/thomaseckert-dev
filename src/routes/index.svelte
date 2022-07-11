<script>
	import Intro from "src/sections/homepage/Intro.svelte"
	import WritingSection from "src/sections/homepage/Writing.svelte"
	import NotesSection from "src/sections/homepage/Notes.svelte"
	import BookmarksSection from "src/sections/homepage/Bookmarks.svelte"

	let scroll

	export let writing, notes, bookmarks
</script>

<svelte:window bind:scrollY={scroll} />

<div class="mx-auto px-4 pt-4 sm:pt-40 max-w-6xl flex flex-col gap-6">
	<Intro />
	<div class="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
		<WritingSection {writing} />
		<NotesSection {notes} />
		<BookmarksSection {bookmarks} />
	</div>
</div>
