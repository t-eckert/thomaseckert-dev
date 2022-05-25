<script>
	const resourceStyle = new Map([
		[
			"about",
			"decoration-yellow-400 hover:text-yellow-600 hover:decoration-yellow-500 text-gray-900 focus:text-yellow-600"
		],
		[
			"bookmarks",
			"decoration-rose-400 hover:text-rose-600 hover:decoration-rose-500 text-gray-900 focus:text-rose-600"
		],
		[
			"notes",
			"decoration-emerald-400 hover:text-emerald-600 hover:decoration-emerald-500 text-gray-900 focus:text-emerald-600"
		],
		[
			"writing",
			"decoration-sky-400 hover:text-sky-600 hover:decoration-sky-500 text-gray-900 focus:text-sky-600"
		]
	])

	const className = (resource) =>
		`font-medium underline decoration-2 text-gray-700 transition ${
			resourceStyle.get(resource) ?? "hover:text-gray-900"
		}`

	export let href
	export let resource = undefined
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
