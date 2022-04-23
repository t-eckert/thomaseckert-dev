<script lang="ts">
	// import Intro from "src/sections/homepage/Intro.svelte"
	// import Writing from "src/sections/homepage/Writing.svelte"
	// import Socials from "src/sections/homepage/Socials.svelte"
	// import Bookmarks from "src/sections/homepage/Bookmarks.svelte"
	// import Projects from "src/sections/homepage/Projects.svelte"
	// import Notes from "src/sections/homepage/Notes.svelte"

	export let writing: any[], bookmarks:any[], notes:any[]

	let scroll: number
</script>

<svelte:head><title>Thomas Eckert</title></svelte:head>
<svelte:window bind:scrollY={scroll} />

<div
	class="absolute overflow-hidden -top-28 -left-10 opacity-20 -rotate-6 z-10 bg-gradient-to-r pointer-events-none w-[110%] h-96 banner"
	style={`transform: translate3d(0, ${scroll * 0.5}px, 0) rotate(-6deg)`}
/>

<div class="mx-auto px-3 pt-4 sm:pt-40 max-w-6xl flex flex-col gap-6">
	<pre>{JSON.stringify(writing, null, 2)}</pre>
	<pre>{JSON.stringify(bookmarks, null, 2)}</pre>
	<pre>{JSON.stringify(notes, null, 2)}</pre>
	<!-- <Intro /> -->
	<div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
		<!-- <Writing {writing} /> -->
		<!-- <Bookmarks {bookmarks} />
		<Notes {notes} />
		<Socials />
		<Projects /> -->
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
