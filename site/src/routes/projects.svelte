<script context="module">
	import { gql } from "graphql-request"

	import fetchData from "../fetchData"

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
	export let projects

	const project = (slug) => {
		return projects.filter((project) => project.slug === slug)[0]
	}

	export const minnote = project("minnote")
</script>

<section class="mx-auto px-2 flex flex-col max-w-4xl">
	<header class="flex my-4 sm:my-16 flex-col gap-2 sm:gap-4">
		<h1 class="font-semibold text-2xl sm:text-6xl text-gray-900">Projects</h1>
		<p class="text-sm text-gray-700">These are my side projects.</p>
	</header>
	<section class="grid grid-cols-5 grid-rows-3">
		<a href="/projects/minnote" class="flex flex-col gap-1">
			<img src={minnote.coverImage.url} alt="A screenshot of the Minnote application." />
			<h2 class="font-medium text-gray-900">{minnote.title}</h2>
			<p class="text-xs text-gray-700">{minnote.description}</p>
		</a>
	</section>
</section>
