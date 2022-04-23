<script>
	import { marked } from "marked"

	export let markdown
</script>

{@html marked(markdown)}
