<script lang="ts">
	export let writing: any[]
</script>

<svelte:head><title>Thomas Eckert</title></svelte:head>

<pre>{JSON.stringify(writing, null, 2)}</pre>