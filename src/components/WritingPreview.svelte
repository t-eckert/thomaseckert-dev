<script>
	import Tag from "../components/Tag.svelte"
	import replaceNBSP from "../functions/replaceNBSP"
	import isNew from "../functions/isNew"

	export let writing
</script>

<div class="flex flex-col">
	<div class="flex flex-row items-center gap-2">
		{#if isNew(writing.publishedAt)}
			<span class="px-1 py-0.5 rounded-md font-medium text-xs text-rose-800 bg-rose-100">New!</span>
		{/if}
		{#if isNew(writing.updatedAt) && !isNew(writing.publishedAt)}
			<span class="px-1 py-0.5 rounded-md font-medium text-xs text-rose-800 bg-rose-100"
				>Recently updated!</span
			>
		{/if}
		<a
			class="font-medium transition underline decoration-2 decoration-sky-400 hover:text-sky-600 hover:decoration-sky-500 text-gray-900
			focus:text-sky-600"
			href={"/writing/" + writing.slug}>{replaceNBSP(writing.title)}</a
		>
	</div>
	<div class="text-gray-500 text-sm flex flex-row gap-2">
		{#each writing.tags as tag}
			<Tag {tag} />
		{/each}
	</div>
</div>
