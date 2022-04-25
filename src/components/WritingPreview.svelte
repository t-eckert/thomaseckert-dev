<script lang="ts">
	import type Writing from "../types/Writing"

	import Date from "./Date.svelte"
	import Tag from "./Tag.svelte"

	export let writing: Writing
</script>

<div class="flex flex-col">
	<div class="flex flex-row items-center gap-2">
		<a
			class="font-medium transition underline decoration-2 decoration-sky-400 hover:text-sky-600 hover:decoration-sky-500 text-gray-900
			focus:text-sky-600"
			href={"/writing/" + writing.slug}>{writing.title}</a
		>
	</div>
	<div class="text-gray-500 text-sm flex flex-row gap-1 flex-wrap">
		{#if writing.published}
		<Date date={writing.published} />
		{/if}
		{#each writing.tags as tag}
			<Tag resource="/writing" {tag} />
		{/each}
	</div>
</div>
