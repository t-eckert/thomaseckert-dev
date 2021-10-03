<script>
	import { fly } from "svelte/transition"
</script>

<div
	transition:fly={{ y: -20, duration: 200 }}
	class="absolute right-2 mt-8 p-1 bg-white border border-gray-50 rounded-xl shadow"
>
	<slot />
</div>
