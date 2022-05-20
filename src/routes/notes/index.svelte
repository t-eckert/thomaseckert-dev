<script>
	import NotePreview from "src/components/previews/Note.svelte"
	import Tag from "src/components/Tag.svelte"

	export let notes, tags
</script>

<div
	class="absolute overflow-hidden -top-28 -left-10 opacity-10 -rotate-6 bg-gradient-to-r from-emerald-500 to-emerald-400 pointer-events-none w-[110%] h-96"
/>

<section class="mx-auto px-4 flex flex-col max-w-6xl">
	<header class="my-4 sm:my-12 flex flex-col gap-4">
		<h1 class="font-semibold text-2xl sm:text-7xl text-gray-900">Notes</h1>

		{#if tags.length !== 0}
			<div class="flex flex-col gap-1 items-baseline">
				<p class="text-xs font-medium text-gray-700">Filtering by tags</p>
				<div class="flex flex-row">
					{#each tags as tag}
						<Tag resource="note" {tag} />
					{/each}
				</div>
			</div>
		{/if}
	</header>

	<main class="flex flex-col gap-4">
		{#each notes as note}
			<NotePreview {note} />
		{/each}
	</main>
</section>
