<script>
	import { onMount } from "svelte"
	import { browser } from "$app/env"
	import { page } from "$app/stores"
	import * as Fathom from "fathom-client"

	import "../app.postcss"
	import NavBar from "../sections/NavBar.svelte"

	onMount(() => {
		Fathom.load("JUVSFRPV", {
			includedDomains: ["thomaseckert.dev"]
		})
	})

	$: $page.path, browser && Fathom.trackPageview()
</script>

<NavBar />
<slot />
