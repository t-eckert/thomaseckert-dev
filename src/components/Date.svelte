<script lang="ts">
	export let date: Date
</script>

<span>{new Date(date).toDateString()}</span>
