<script lang="ts">
	import type { Writing } from "src/interfaces"

	import ArrowRight from "../icons/ArrowRight.svelte";
	import Date from "src/components/Date.svelte"
	import Tag from "src/components/Tag.svelte"

	export let writing: Writing

	let {updated, published, tags} = writing
</script>

<div class="flex flex-col">
	<div class="flex flex-row items-center gap-2">
		<a
			class="font-medium transition underline decoration-2 decoration-sky-400 hover:text-sky-600 hover:decoration-sky-500 text-gray-900 focus:text-sky-600"
			href={"/writing/" + writing.slug}>{writing.title}</a
		>
	</div>
	<div class="text-gray-500 text-sm flex flex-row gap-1 flex-wrap">
		<div class="text-gray-500 text-sm flex flex-row gap-1 items-center">
			{#each tags as tag}
				<Tag resource="writing" {tag} />
			{/each}
		</div>

		<div class="flex flex-row gap-1 text-xs items-center font-medium">
			{#if published}
				<Date date={published} />
			{/if}
			{#if updated}
				<ArrowRight className="h-3 w-3" />
				<Date date={updated} />
			{/if}
		</div>
	</div>
</div>
