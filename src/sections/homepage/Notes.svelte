<script lang="ts">
	import type { Note } from "src/interfaces"

	import NotePreview from "src/components/previews/Note.svelte"

	export let notes: Note[]
</script>

<section class="flex flex-col gap-4 selection:bg-emerald-600">
	<h2 class="font-semibold text-gray-900 text-2xl">Notes</h2>
	{#each notes as note}
		<NotePreview {note} />
	{/each}

	<a
		class="font-medium transition underline decoration-2 decoration-emerald-400 hover:text-emerald-600 hover:decoration-emerald-500 text-gray-900"
		href="/notes">More...</a
	>
</section>
