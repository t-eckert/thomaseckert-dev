<script context="module" lang="ts">
	export const load = ({ status }: {status: any}) => {
		return {
			props: {
				status
			}
		}
	}
</script>

<script lang="ts">
	export let status: any
</script>

<div class="w-full pt-52 flex items-center justify-center">
	<div class="px-3 flex flex-col w-full max-w-6xl items-start">
		<p>An error occurred.</p>
		<h1 class="text-7xl font-semibold">{status}</h1>
		<a href="/">Go home and try something else.</a>
	</div>
</div>
