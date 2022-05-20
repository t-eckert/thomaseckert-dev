<script>
	const resourceClass = new Map([
		["writing", "bg-sky-100 text-sky-900 hover:bg-sky-200"],
		["note", "bg-emerald-100 text-emerald-900 hover:bg-emerald-200"]
	])

	export let tag,
		resource = "tags"
</script>

<a
	href={resource + "?tags=" + tag}
	class={`decoration-transparent rounded font-medium px-1 py-0.5 text-xs hover:decoration-transparent transition ${resourceClass.get(
		resource
	)}`}>{tag}</a
>
