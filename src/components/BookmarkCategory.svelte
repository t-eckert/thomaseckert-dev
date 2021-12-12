<script>
	import { slide } from "svelte/transition"
	import Bookmark from "./Bookmark.svelte"

	export let category, bookmarks, isExpanded

	$: isExpanded = isExpanded
</script>

<div class="w-60">
	<button
		on:click={() => (isExpanded = !isExpanded)}
		class="w-full mb-1 sm:mb-2 flex flex-row justify-between items-center text-gray-500 hover:text-gray-800"
	>
		<h2 class="font-semibold text-gray-900">
			{category}
		</h2>
		{#if isExpanded}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-4 w-4"
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path
					fill-rule="evenodd"
					d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
					clip-rule="evenodd"
				/>
			</svg>
		{:else}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-4 w-4"
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path
					fill-rule="evenodd"
					d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
					clip-rule="evenodd"
				/>
			</svg>
		{/if}
	</button>
	{#if isExpanded}
		<div class="flex flex-col gap-2" transition:slide={{ duration: 100 }}>
			{#each bookmarks as bookmark}
				<Bookmark {...bookmark} />
			{/each}
		</div>
	{/if}
</div>
