<script>
	import { slide, fly } from "svelte/transition"

	import Nav from "src/components/Nav.svelte"

	const breakpoint = 640

	let width

	$: open = true
</script>

<svelte:window bind:innerWidth={width} />

<section
	class="z-50 sticky top-0 w-full border-b border-gray-50 bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg"
>
	<div class="mx-auto max-w-6xl px-4 py-1 flex flex-row justify-between items-center">
		<a href="/" class="text-md sm:text-sm font-medium text-gray-700 animate hover:text-gray-900">
			Thomas Eckert
		</a>
	</div>
</section>
