<script lang="ts">
	import { marked } from "marked"

	import "src/markdown.css"

	export let markdown: string
</script>

{@html marked(markdown)}
