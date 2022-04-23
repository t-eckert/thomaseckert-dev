<script context="module">
	import fetchAsset from "../actions/fetchAsset"

	const winona_id = "ckxwlpcd4ovv70g76xrtzwmew"

	export async function load() {
		const winona_url = await fetchAsset(winona_id)
		console.log(winona_url)

		return {
			props: { winona_url }
		}
	}
</script>

<script>
	export let winona_url
</script>

<div class="mx-auto flex items-center justify-center">
	<div class="max-w-4xl w-screen p-2">
		<img src={winona_url} alt="Winona the corgi." class="mb-4" />
		<div class="w-full text-gray-900 text-center">
			<h1>Winona reminds you to take a break.</h1>
		</div>
	</div>
</div>
