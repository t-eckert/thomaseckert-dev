<script context="module">
	import fetchCopy from "../actions/fetchCopy"

	export async function load() {
		const about = await fetchCopy("about")
		return { props: { about } }
	}
</script>

<script>
	import Markdown from "../components/Markdown.svelte"

	export let about
</script>

<div
	class="absolute -top-24 -left-10 opacity-5 -rotate-6 bg-gradient-to-b from-yellow-500 to-yellow-400 pointer-events-none w-[1800px] h-96"
/>
<section class="mx-auto px-2 py-4 sm:py-20 max-w-xl">
	<header class="my-4 sm:my-10 flex flex-col gap-2 sm:gap-4">
		<h1 class="font-semibold text-2xl sm:text-6xl text-gray-900">About</h1>
	</header>
	<div class="flex flex-col gap-6">
		<Markdown markdown={about} />
	</div>
</section>
