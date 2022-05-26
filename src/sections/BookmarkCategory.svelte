<script>
	import { slide } from "svelte/transition"
	import Bookmark from "../components/Bookmark.svelte"

	export let category, bookmarks
	let isExpanded = true
</script>

<section class="w-80 rounded">
	<header>
		<button
			on:click={() => (isExpanded = !isExpanded)}
			class="group px-2 py-1 w-full flex flex-row justify-between items-center rounded text-gray-500 hover:text-gray-800 hover:bg-rose-50 focus:ring-1 focus:ring-rose-400 transition"
		>
			<h2 class="font-semibold text-gray-900">
				{category}
			</h2>
			{#if isExpanded}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-4 w-4 group-hover:text-rose-500"
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
					class="h-4 w-4 group-hover:text-rose-500"
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
	</header>

	{#if isExpanded}
		<main class="p-2 flex flex-col items-start gap-2" transition:slide={{ duration: 100 }}>
			{#each bookmarks as bookmark}
				<Bookmark {...bookmark} />
			{/each}
		</main>
	{/if}
</section>
