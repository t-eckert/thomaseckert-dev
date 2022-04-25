<script lang=ts>
	const resourceClass = new Map([
		["/writing", "bg-sky-100 text-sky-900 hover:bg-sky-200"],
		["/notes", "bg-emerald-100 text-emerald-900 hover:bg-emerald-200"]
	])

	export let resource: any = "/tags", tag: string
</script>

<a
	href={resource + "?tags=" + tag}
	class={`decoration-transparent px-1 py-0.5 text-xs hover:decoration-transparent  ${resourceClass.get(
		resource
	)}`}>{tag}</a
>
