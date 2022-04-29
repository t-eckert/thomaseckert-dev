<script>
	import { marked } from "marked"

	import "src/markdown.css"

	export let markdown
</script>

{@html marked(markdown)}
