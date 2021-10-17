<script>
	import marked from "marked"

	export let intro
</script>

<section class="prose text-gray-900 leading-normal">
	{@html marked(intro)}
</section>
