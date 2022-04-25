import pMap from "p-map"

export async function get({ url }: { url: URL }) {
	const takeParam = url.searchParams.get("take")
	const take = takeParam ? parseInt(takeParam) : undefined

	const tagsParam = url.searchParams.get("tags")
	const tags = tagsParam ? tagsParam.split(",") : []

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
		.filter(({ tags: notesTags }) => {
			if (tags.length === 0) {
				return true
			}
			if (notesTags.length === 0) {
				return false
			}
			return notesTags.some((tag: string) => tags.includes(tag))
		})
		.sort((a, b) => {
			return a.order < b.order ? 1 : -1
		})
		.slice(0, take)

	return {
		body: { notes, tags },
	}
}