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

<svelte:head>
	<title>Thomas Eckert</title>
</svelte:head>

<body class="bg-gray-50 min-h-screen pb-20">
	<NavBar />
	{#key $page.path}
		<section in:fade={{ duration: 200 }}>
			<slot />
		</section>
	{/key}
</body>
