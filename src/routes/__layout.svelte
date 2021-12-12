<script>
	import { onMount } from "svelte"
	import { fade } from "svelte/transition"
	import { page } from "$app/stores"
	import * as Fathom from "fathom-client"

	import "../app.postcss"
	import NavBar from "../components/NavBar.svelte"

	onMount(() => {
		Fathom.load("JUVSFRPV", { includedDomains: ["thomaseckert.dev"] })
	})
</script>

<div class="min-h-screen bg-gray-50 pb-20">
	<NavBar />
	{#key $page.path}
		<section in:fade={{ duration: 200 }}>
			<slot />
		</section>
	{/key}
</div>
