<script context="module">
	import fetchCopy from "../actions/fetchCopy"

	export async function load() {
		const intro = await fetchCopy("intro")
		return { props: { intro } }
	}
</script>

<script>
	import Introduction from "../components/Introduction.svelte"

	export let intro
</script>

<section class="mx-auto px-2 pt-4 sm:pt-20 max-w-xl flex flex-col gap-6">
	<Introduction {intro} />
</section>
