<script>
	import Date from "../components/Date.svelte"
	import Tag from "../components/Tag.svelte"
	import replaceNBSP from "../functions/replaceNBSP"
	import isNew from "../functions/isNew"

	export let writings
</script>

<section class="flex flex-col gap-4 sm:gap-2">
	{#each writings as writing}
		<div class="flex flex-col">
			<div class="flex flex-row items-center gap-1">
				{#if isNew(writing.publishedAt)}
					<span class="px-1 py-0.5 rounded-md font-medium text-xs text-blue-800 bg-blue-200"
						>New!</span
					>
				{/if}
				<a class="transition hover:underline leading-tight" href={"/writing/" + writing.slug}
					>{replaceNBSP(writing.title)}</a
				>
			</div>
			<div class="flex flex-row gap-1">
				<Date date={writing.updatedAt} />
				{#each writing.tags as tag}
					<Tag {tag} />
				{/each}
			</div>
		</div>
	{/each}
</section>
