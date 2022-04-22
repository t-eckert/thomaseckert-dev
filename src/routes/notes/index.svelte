<script lang="ts">
	import { Icon } from "@steeze-ui/svelte-icon"
	import { X } from "@steeze-ui/heroicons"

	import NotePreview from "$/components/NotePreview.svelte"
	import Tag from "$/components/Tag.svelte"

	export let notes, tags
</script>

<div
	class="absolute overflow-hidden -top-28 -left-10 opacity-10 -rotate-6 bg-gradient-to-r from-emerald-500 to-emerald-400 pointer-events-none w-[110%] h-96"
/>

<section class="mx-auto px-2 flex flex-col max-w-6xl">
	<header class="my-4 sm:my-12 flex flex-col gap-4">
		<h1 class="font-semibold text-2xl sm:text-6xl text-gray-900">Notes</h1>

		<p class="text-gray-700 text-sm">Tips for software engineering.</p>

		{#if tags.length !== 0}
			<div class="flex flex-col gap-1 items-baseline">
				<p class="text-xs font-medium text-gray-700">Filtering by tags</p>
				{#each tags as tag}
					<div class="flex flex-row">
						<Tag resource="/notes" {tag} />
						<a class="p-0.5 bg-emerald-100 text-emerald-900 hover:bg-emerald-200" href="/notes">
							<Icon src={X} class="h-4 w-4" />
						</a>
					</div>
				{/each}
			</div>
		{/if}
	</header>

	<main class="flex flex-col gap-4">
		{#each notes as note}
			<NotePreview {note} />
		{/each}
	</main>
</section>
