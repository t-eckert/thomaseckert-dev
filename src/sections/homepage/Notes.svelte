<script>
	import ArrowRight from "src/components/icons/ArrowRight.svelte"
	import NotePreview from "src/components/previews/Note.svelte"
	import Link from "src/components/Link.svelte"

	export let notes
</script>

<section class="flex flex-col gap-4 selection:bg-emerald-600">
	<h2 class="font-semibold text-gray-900 text-2xl">Notes</h2>
	{#each notes as note}
		<NotePreview {note} />
	{/each}

	<Link href="/notes" resource="notes">
		<div class="flex flex-row items-center gap-0.5 group">
			<div>More</div>
			<ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition text-emerald-500" />
		</div>
	</Link>
</section>
