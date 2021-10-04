<script>
	import marked from "marked"

	export let intro
</script>

<section class="prose text-gray-900">
	{@html marked(intro)}
</section>
