<script lang="ts">
	import { onMount } from "svelte"
	import { fade } from "svelte/transition"
	import { page } from "$app/stores"
	import * as Fathom from "fathom-client"

	import "../app.postcss"
	import NavBar from "../sections/NavBar.svelte"

	onMount(() => {
		Fathom.load("JUVSFRPV", { includedDomains: ["thomaseckert.dev"] })
	})
</script>

<svelte:head><title>Thomas Eckert</title></svelte:head>

<div class="selection:bg-gray-700 selection:text-white">
	<NavBar />
	<body class="bg-gray-50 min-h-screen overflow-x-hidden pb-20">
		{#key $page.url.pathname}
			<section in:fade={{ duration: 200 }}>
				<slot />
			</section>
		{/key}
	</body>
</div>
