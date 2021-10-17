<script>
	import marked from "marked"

	export let category
	export let bookmarks
</script>

<div class=" w-60 text-gray-900">
	<h2 class="mb-1 sm:mb-2 font-medium">{category}</h2>
	<div class="bookmark text-sm">
		{@html marked(bookmarks)}
	</div>
</div>
