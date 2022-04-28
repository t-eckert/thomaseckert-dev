<script lang="ts">
	import { slide, fly } from "svelte/transition"

	import Nav from "src/components/Nav.svelte"

	const breakpoint = 640

	let width: number

	$: open = true
</script>

<svelte:window bind:innerWidth={width} />

<section
	class="z-50 sticky top-0 w-full border-b border-gray-50 bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg"
>
	<div class="mx-auto max-w-6xl p-1 flex flex-row justify-between items-center">
		<a href="/" class="text-md sm:text-sm font-medium text-gray-700 animate hover:text-gray-900">
			Thomas Eckert
		</a>
		{#if width < breakpoint}
			<button
				class="relative cursor-pointer rounded-md p-0.5 self-center transition hover:bg-gray-200"
				on:click={() => (open = !open)}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
						clip-rule="evenodd"
					/>
				</svg>
			</button>
		{:else}
			<div class="text-sm font-medium flex flex-row gap-3">
				<Nav />
			</div>
		{/if}
	</div>
</section>

{#if open && width < breakpoint}
	<section
		transition:fly={{ y: 200, duration: 300 }}
		class="fixed bottom-8 w-full flex flex-row items-center justify-center"
	>
		<div class="flex flex-col gap-2 items-center">
			<button on:click={() => (open = !open)}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
						clip-rule="evenodd"
					/>
				</svg>
			</button>
			<div
				class="flex flex-col items-center rounded border px-12 gap-2 py-4 text-md font-medium border-gray-200 bg-white bg-opacity-20 backdrop-filter backdrop-blur"
			>
				<Nav />
			</div>
		</div>
	</section>
{/if}
