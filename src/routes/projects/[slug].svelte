<script context="module">
	import { gql } from "graphql-request"

	import fetchData from "../../fetchData"

	export async function load({ page }) {
		const { projects } = await fetchData(
			gql`
				query {
					projects(where: { slug: "${page.params.slug}" }) {
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

		return { props: { project: projects[0] } }
	}
</script>

<script>
	export let project
</script>

<section class="mx-auto px-2 flex flex-col max-w-4xl">
	<h1 class="text-2xl font-medium text-gray-900">{project.title}</h1>
	<img src={project.coverImage.url} alt="" />
</section>
