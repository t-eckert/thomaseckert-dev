<script>
	export let action
</script>

<button
	on:click={action}
	class="border border-gray-700 px-1 py-0.5 font-medium text-sm rounded bg-white"
>
	<slot />
</button>
