<script>
	import marked from "marked"

	export let markdown
</script>

<section class="prose text-gray-900 leading-normal">
	{@html marked(markdown)}
</section>
