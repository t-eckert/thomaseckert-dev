<script>
	import Tag from '../components/Tag.svelte';

	export let writings;
</script>

<section class="flex flex-col gap-1">
	{#each writings as writing}
		<div class="flex flex-row justify-between items-center">
			<a class="transition hover:underline" href={'/writing/' + writing.slug}>{writing.title}</a>
			<div class="flex flex-row gap-1">
				{#each writing.tags as tag}
					<Tag {tag} />
				{/each}
			</div>
		</div>
	{/each}
</section>
