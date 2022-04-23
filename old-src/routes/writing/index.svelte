<script lang="ts">
	import { Icon } from "@steeze-ui/svelte-icon"
	import { X } from "@steeze-ui/heroicons"

	import type Writing from "src/types/Writing"

	import WritingPreview from "$/components/WritingPreview.svelte"
	import Tag from "$/components/Tag.svelte"

	export let writing: Writing[], tags: string[]
</script>

<div
	class="absolute overflow-hidden -top-28 -left-10 opacity-10 -rotate-6 bg-gradient-to-r from-sky-500 to-sky-400 pointer-events-none w-[110%] h-96"
/>

<section class="mx-auto px-2 flex flex-col max-w-6xl">
	<header class="my-4 sm:my-12 flex flex-col gap-4">
		<h1 class="font-semibold text-2xl sm:text-6xl text-gray-900">Writing</h1>

		<p class="text-gray-700 text-sm">My thoughts and other things I've learned.</p>

		{#if tags.length !== 0}
			<div class="flex flex-col gap-1 items-baseline">
				<p class="text-xs font-medium text-gray-700">Filtering by tags</p>
				{#each tags as tag}
					<div class="flex flex-row">
						<Tag url="/writing" {tag} />
						<a class="p-0.5 bg-sky-100 text-sky-900 hover:bg-sky-200" href="/writing">
							<Icon src={X} class="h-4 w-4" />
						</a>
					</div>
				{/each}
			</div>
		{/if}
	</header>

	<main class="flex flex-col gap-4">
		{#each writing as w}
			<WritingPreview writing={w} />
		{/each}
	</main>
</section>
