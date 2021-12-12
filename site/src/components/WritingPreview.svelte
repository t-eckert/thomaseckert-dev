<script>
	import Tag from "../components/Tag.svelte"
	import replaceNBSP from "../functions/replaceNBSP"
	import isNew from "../functions/isNew"

	export let writing
</script>

<div class="flex flex-col">
	<div class="flex flex-row items-center gap-2">
		{#if isNew(writing.publishedAt)}
			<span class="px-1 py-0.5 rounded-md font-medium text-xs text-rose-800 bg-rose-200">New!</span>
		{/if}
		{#if isNew(writing.updatedAt) && !isNew(writing.publishedAt)}
			<span class="px-1 py-0.5 rounded-md font-medium text-xs text-rose-800 bg-rose-200"
				>Recently updated!</span
			>
		{/if}
		<a
			class="font-medium transition underline decoration-2 decoration-sky-400 hover:text-sky-700 text-gray-900"
			href={"/writing/" + writing.slug}>{replaceNBSP(writing.title)}</a
		>
	</div>
	<div class="flex flex-row gap-1">
		{#each writing.tags as tag}
			<Tag {tag} />
		{/each}
	</div>
</div>
