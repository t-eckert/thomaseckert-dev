<script>
	import { fade, blur, fly, slide, scale, draw, crossfade } from "svelte/transition"

	import Nav from "../components/Nav.svelte"

	const smBreakpoint = 640

	let pageWidth

	$: navIsOpen = false
</script>

<svelte:window bind:innerWidth={pageWidth} />

<section
	class="z-10 h-10 sticky top-0 border-b border-gray-50 bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg"
>
	{#if pageWidth < smBreakpoint}
		<div class="px-2 w-full h-full flex flex-row justify-end">
			<button
				class={[
					"relative cursor-pointer rounded-md p-0.5 self-center transition hover:bg-gray-200",
					navIsOpen && "bg-gray-100"
				].join(" ")}
				on:click={() => (navIsOpen = !navIsOpen)}
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
			{#if navIsOpen}
				<div
					transition:fly={{ y: -20, duration: 200 }}
					class="absolute right-2 mt-12 p-1 bg-white border border-gray-50 rounded-xl shadow"
				>
					<Nav />
				</div>
			{/if}
		</div>
	{:else}
		<Nav />
	{/if}
</section>
