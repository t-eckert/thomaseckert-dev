<script>
	import Tag from "../components/Tag.svelte"
	import replaceNBSP from "../functions/replaceNBSP"

	export let writings
</script>

<section class="flex flex-col gap-4 sm:gap-2">
	{#each writings as writing}
		<div class="flex flex-col sm:flex-row sm:justify-between sm:items-center">
			<a class="transition hover:underline leading-tight" href={"/writing/" + writing.slug}
				>{replaceNBSP(writing.title)}</a
			>
			<div class="flex flex-row gap-1">
				{#each writing.tags as tag}
					<Tag {tag} />
				{/each}
			</div>
		</div>
	{/each}
</section>
