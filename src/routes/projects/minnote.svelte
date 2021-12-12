<script context="module">
	import { gql } from "graphql-request"

	import fetchData from "../../fetchData"

	export async function load() {
		const { projects } = await fetchData(
			gql`
				query {
					projects(where: { slug: "minnote" }) {
						slug
						title
						description
						coverImage {
							url
						}
						images {
							url
						}
					}
				}
			`
		)

		return { props: { minnote: projects[0] } }
	}
</script>

<script>
	import Browser from "../../components/Browser.svelte"
	import { fade } from "svelte/transition"

	export let minnote

	const toggleHeroImage = () => {
		heroImage = (heroImage + 1) % 2
	}

	$: heroImage = 0
</script>

<article class="px-2">
	<div class="py-12 w-full flex flex-row justify-center">
		<section class="text-center">
			<h1 class="text-6xl font-medium text-gray-900">{minnote.title}</h1>
			<p class="text-gray-700">A small, local text editor in the browser.</p>
		</section>
	</div>

	<section class="mx-auto mb-16 max-w-7xl grid grid-cols-1 sm:grid-cols-3 gap-6">
		<div class="col-span-1 sm:col-span-2">
			<Browser url="https://minnote.io" title="Minnote" favicon={minnote.images[2].url}>
				<img class="rounded-none" src={minnote.images[heroImage].url} alt="" />
			</Browser>
		</div>
		<div class="sm:col-start-3 max-w-xs flex flex-col gap-4">
			<p class="max-w-sm text-gray-900">
				Minnote uses your browser's local storage so you can jot one-off notes that can be easily
				copied with the click of a button.
			</p>
			<div class="flex flex-row items-center gap-3">
				<button
					type="button"
					class="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
					role="switch"
					aria-checked="false"
					on:click={toggleHeroImage}
				>
					<span class="sr-only">Toggle dark/light mode</span>
					<span
						class={[
							"pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200",
							heroImage === 0 ? "translate-x-0" : "translate-x-5"
						].join(" ")}
					>
						<span
							class={[
								"absolute inset-0 h-full w-full flex items-center justify-center transition-opacity",
								heroImage === 0
									? "opacity-100 ease-in duration-200"
									: "opacity-0 ease-out duration-100"
							].join(" ")}
							aria-hidden="true"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-4 w-4"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fill-rule="evenodd"
									d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
									clip-rule="evenodd"
								/>
							</svg>
						</span>
						<span
							class={[
								"absolute inset-0 h-full w-full flex items-center justify-center transition-opacity",
								heroImage === 0
									? "opacity-0 ease-out duration-100"
									: "opacity-100 ease-in duration-200"
							].join(" ")}
							aria-hidden="true"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-4 w-4"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
							</svg>
						</span>
					</span>
				</button>
				<div class="text-gray-900 text-sm font-medium">
					{heroImage === 0 ? "Light mode" : "Dark mode"}
				</div>
			</div>
			<div>
				<p>It's great for...</p>
				<ul>
					<li class="list-disc ml-4">
						Writing up a cURL command and easily copying it to your clipboard.
					</li>
					<li class="list-disc ml-4">Removing formatting from text you've copied.</li>
					<li class="list-disc ml-4">Making a daily todo list.</li>
				</ul>
			</div>
			<div>
				<h2 class="font-medium">Links</h2>
				<ul>
					<li class="list-disc ml-4">
						<a
							class="text-blue-600"
							href="https://minnote.io"
							target="_blank"
							rel="noopener noreferrer">minnote.io</a
						>
					</li>
					<li class="list-disc ml-4">
						<a
							class="text-blue-600"
							href="https://github.com/t-eckert/minnote"
							target="_blank"
							rel="noopener noreferrer">Source code</a
						>
					</li>
				</ul>
			</div>
		</div>
	</section>
</article>
