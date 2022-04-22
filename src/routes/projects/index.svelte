<script context="module">
	import { gql } from "graphql-request"

	import fetchData from "../../fetchData"

	export async function load() {
		const { projects } = await fetchData(
			gql`
				query {
					projects {
						slug
						title
						description
						coverImage {
							url
						}
					}
				}
			`
		)

		return { props: { projects } }
	}
</script>

<script>
	import Repo from "$/components/Repo.svelte"

	export let projects

	const project = (slug) => {
		return projects.filter((project) => project.slug === slug)[0]
	}

	export const minnote = project("minnote")
</script>

<div
	class="absolute overflow-hidden -top-28 -left-10 opacity-10 -rotate-6 bg-gradient-to-r from-violet-500 to-violet-400 pointer-events-none w-[110%] h-96"
/>

<section class="mx-auto px-2 flex flex-col max-w-6xl">
	<header class="my-4 sm:my-12 flex flex-col gap-4">
		<h1 class="font-semibold text-2xl sm:text-6xl text-gray-900">Projects</h1>
		<p class="text-gray-700 text-sm">These are my side projects.</p>
	</header>
	<section class="grid grid-cols-4 grid-rows-3 gap-4">
		<Repo
			name="Minnote"
			description="A small, local text editor for the web."
			repo="https://github.com/t-eckert/minnote"
			site="https://minnote.io/"
		/>
		<Repo
			name="50ph1a"
			description="VS Code Theme: It's snowing at night while you're coding."
			repo="https://github.com/t-eckert/50ph1a"
			site="https://marketplace.visualstudio.com/items?itemName=ThomasEckert.50ph1a"
		/>
	</section>
</section>
