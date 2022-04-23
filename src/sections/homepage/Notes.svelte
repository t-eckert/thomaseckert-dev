<script>
	import NotePreview from "../../components/NotePreview.svelte"

	export let notes
</script>

<section class="flex flex-col gap-2 selection:bg-emerald-600">
	<h2 class="font-semibold text-gray-900 text-2xl">Notes</h2>
	{#each notes as note}
		<NotePreview {note} />
	{/each}

	<a
		class="font-medium transition underline decoration-2 decoration-emerald-400 hover:text-emerald-600 hover:decoration-emerald-500 text-gray-900"
		href="/notes">More...</a
	>
</section>
