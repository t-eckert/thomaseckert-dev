<script>
	import Intro from "src/sections/homepage/Intro.svelte"
	import WritingSection from "src/sections/homepage/Writing.svelte"
	import NotesSection from "src/sections/homepage/Notes.svelte"
	import ProjectsSection from "src/sections/homepage/Projects.svelte"
	import BookmarksSection from "src/sections/homepage/Bookmarks.svelte"
	import Socials from "src/sections/homepage/Socials.svelte"

	let scroll

	export let writing, notes, bookmarks
</script>

<svelte:window bind:scrollY={scroll} />

<div
	class="absolute overflow-hidden -top-52 sm:-top-28 -left-10 opacity-20 -rotate-6 z-10 bg-gradient-to-r pointer-events-none w-[110%] h-96 banner"
	style={`transform: translate3d(0, ${scroll * 0.5}px, 0) rotate(-6deg)`}
/>

<div class="mx-auto px-3 pt-20 sm:pt-40 max-w-6xl flex flex-col gap-6">
	<Intro />
	<div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
		<WritingSection {writing} />
		<Socials />
		<NotesSection {notes} />
		<BookmarksSection {bookmarks} />
		<ProjectsSection />
	</div>
</div>

<style>
	.banner {
		background-image: linear-gradient(
			to right,
			#0ea5e9 0%,
			#f43f5e 25%,
			#10b981 50%,
			#8b5cf6 75%,
			#eab308 100%
		);
	}
</style>
