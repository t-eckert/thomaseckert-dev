<script>
	import marked from "marked"

	export let intro
</script>

<section class="markdown">
	{@html marked(intro)}
</section>
