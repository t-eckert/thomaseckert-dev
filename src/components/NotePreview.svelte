<script>
	import Date from "$/components/Date.svelte"
	import Tag from "$/components/Tag.svelte"

	export let note
</script>

<div class="flex flex-col">
	<div class="flex flex-row items-center gap-2">
		<a
			class="font-medium transition underline decoration-2 decoration-emerald-400 hover:text-emerald-600 hover:decoration-emerald-500 text-gray-900	focus:text-emerald-600"
			href={"/notes/" + note.slug}>{note.title}</a
		>
	</div>
	<div class="text-gray-500 text-sm flex flex-row gap-1 flex-wrap">
		{#each note.tags as tag}
			<Tag resource="/notes" {tag} />
		{/each}
	</div>
</div>
