<script>
	import { createEventDispatcher } from "svelte"

	const dispatch = createEventDispatcher()

	function dispatchEvent(event) {
		dispatch("click", event)
	}

	export let menuIsOpen
</script>

<button
	class={[
		"relative cursor-pointer rounded-md p-0.5 self-center transition hover:bg-gray-200",
		menuIsOpen && "bg-gray-100"
	].join(" ")}
	on:click={() => dispatchEvent()}
>
	<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
		<path
			fill-rule="evenodd"
			d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
			clip-rule="evenodd"
		/>
	</svg>
</button>
