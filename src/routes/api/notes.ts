import pMap from "p-map"

const getTags = (searchParams: URLSearchParams) => {
	const tags = searchParams.get("tags")
	if (tags) {
		return tags.split(",")
	}
	return []
}

export async function get({ url }) {
	const take = parseInt(url.searchParams.get("take"), 10) || undefined
	const searchTags = getTags(url.searchParams)

	const modules = import.meta.glob("../notes/*.{svx,svelte}")

	const notes = (await pMap(
		Object.entries(modules),
		async function ([filename, module]) {
			const { metadata } = await module()

			return {
				title: metadata?.title,
				slug: filename.replace("../notes/", "").replace(".svx", "").replace(".svelte", ""),
				order: metadata?.order,
				tags: metadata?.tags || [],
			}
		}
	))
		.filter(({ order }) => order !== undefined)
		.filter(({ tags }) => {
			if (searchTags.length === 0) {
				return true
			}
			if (tags.length === 0) {
				return false
			}
			return tags.some(tag => searchTags.includes(tag))
		})
		.slice(0, take)
		.sort((a, b) => {
			return a.order < b.order ? 1 : -1
		})

	return {
		body: { notes, tags: searchTags },
	}
}