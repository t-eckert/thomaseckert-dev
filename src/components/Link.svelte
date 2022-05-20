<script>
	const resourceStyle = new Map([
		[
			"writing",
			"decoration-sky-400 hover:text-sky-600 hover:decoration-sky-500 text-gray-900 focus:text-sky-600"
		],
		[
			"about",
			"decoration-yellow-400 hover:text-yellow-600 hover:decoration-yellow-500 text-gray-900 focus:text-yellow-600"
		]
	])

	const className = (resource) =>
		`font-medium underline decoration-2 text-gray-900 transition ${resourceStyle.get(resource)}`

	export let href,
		resource = ""
</script>

{#if href[0] === "/"}
	<a {href} class={className(resource)}>
		<slot />
	</a>
{:else}
	<a {href} class={className(resource)} target="blank_" rel="noopener noreferrer">
		<slot />
	</a>
{/if}
