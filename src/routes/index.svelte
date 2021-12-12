<script context="module">
	import fetchWritings from "../actions/fetchWritings"
	import fetchRecentBookmarks from "../actions/fetchRecentBookmarks"
	import Bookmark from "../components/Bookmark.svelte"

	export async function load() {
		const writings = await fetchWritings()
		const bookmarks = await fetchRecentBookmarks()
		return { props: { writings, bookmarks } }
	}
</script>

<script>
	import WritingPreview from "../components/WritingPreview.svelte"

	export let writings, bookmarks
</script>

<svelte:head>
	<title>Thomas Eckert</title>
</svelte:head>

<div class="mx-auto px-2 pt-4 sm:pt-40 max-w-6xl flex flex-col gap-6">
	<section class="pb-6 sm:pb-12 flex flex-col max-w-sm gap-4">
		<h1 class="text-6xl font-semibold">Hi,</h1>
		<p>
			my name is Thomas Eckert. I live outside of Washington D.C. with my wife Sophia and our corgi
			Winona. I work at HashiCorp on Consul integration with Kubernetes.
		</p>
		<p>Welcome to my hypertext garden.</p>
	</section>

	<div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
		<section class="flex flex-col gap-2">
			<h2 class="font-medium text-4xl">Some writings</h2>
			{#each writings as writing}
				<WritingPreview {writing} />
			{/each}
		</section>

		<section>
			<p class="max-w-sm">
				You can also find me on <a
					href="https://twitter.com/thomaseckert_"
					target="blank_"
					rel="noopener noreferrer"
					class="link-external">Twitter</a
				>,
				<a
					href="https://github.com/t-eckert"
					target="blank_"
					rel="noopener noreferrer"
					class="link-external">GitHub</a
				>, and
				<a
					href="https://www.linkedin.com/in/thomas-eckert/"
					target="blank_"
					rel="noopener noreferrer"
					class="link-external">LinkedIn</a
				>. The source code for this site is in
				<a
					href="https://github.com/t-eckert/thomaseckert-dev"
					target="blank_"
					rel="noopener noreferrer"
					class="link-external"
				>
					this repo
				</a>
				if you see something you'd like to borrow.
			</p>
		</section>

		<section class="flex flex-col gap-4 sm:gap-2">
			<h2 class="font-medium text-4xl">Recent bookmarks</h2>
			{#each bookmarks as bookmark}
				<Bookmark {...bookmark} />
			{/each}
		</section>
	</div>
</div>
