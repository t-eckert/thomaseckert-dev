<script lang="ts">
	import WritingPreview from "../../components/WritingPreview.svelte"

	import type Writing from "../../types/Writing"

	export let writing: Writing[]
</script>

<section class="flex flex-col gap-4 selection:bg-sky-600 items-start">
	<h2 class="font-semibold text-gray-900 text-2xl">Writing</h2>
	<div class="flex flex-col gap-1">
		{#each writing as w}
			<WritingPreview writing={w} />
		{/each}
	</div>
	<a
		class="font-medium transition underline decoration-2 decoration-sky-400 hover:text-sky-600 hover:decoration-sky-500 text-gray-900"
		href="/writing">More...</a
	>
</section>
