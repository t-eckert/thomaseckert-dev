<script context="module">
	import fetchCopy from "../actions/fetchCopy"

	export async function load() {
		const intro = await fetchCopy("intro")
		const about = await fetchCopy("about")
		return { props: { intro, about } }
	}
</script>

<script>
	import Markdown from "../components/Markdown.svelte"

	export let intro
	export let about
</script>

<section class="mx-auto px-2 py-4 sm:py-20 max-w-xl">
	<header class="my-4 sm:my-10 flex flex-col gap-2 sm:gap-4">
		<h1 class="font-semibold text-2xl sm:text-6xl text-gray-900">About</h1>
	</header>
	<div class="flex flex-col gap-6">
		<Markdown markdown={intro} />
		<Markdown markdown={about} />
	</div>
</section>
