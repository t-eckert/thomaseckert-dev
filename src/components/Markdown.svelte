<script lang=ts>
	import { marked } from "marked"

	export let markdown: string
</script>

{@html marked(markdown)}
