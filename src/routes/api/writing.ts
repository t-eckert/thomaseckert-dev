import pMap from "p-map"

import type Writing from "src/types/Writing"

export async function get({ url }: { url: URL }) {
	const takeParam = url.searchParams.get("take")
	const take = takeParam ? parseInt(takeParam) : undefined

	const tagsParam = url.searchParams.get("tags")
	const tags = tagsParam ? tagsParam.split(",") : []

	const modules = import.meta.glob("../writing/*.{svx,svelte}")

	const writing: Writing[] = (await pMap(
		Object.entries(modules),
		async function ([filename, module]) {
			const { metadata } = await module()

			return {
				title: metadata?.title,
				slug: filename.replace("../writing/", "").replace(".svx", "").replace(".svelte", ""),
				published: metadata?.published ? new Date(metadata.published) : undefined,
				tags: metadata?.tags || [],
			}
		}
	))
		// Only published writing
		.filter(({ published }) => published !== undefined)
		// Only writing with the specified tags
		.filter(({ tags: writingTags }) => {
			if (tags.length === 0) {
				return true
			}
			if (writingTags.length === 0) {
				return false
			}
			return writingTags.some((tag: string) => tags.includes(tag))
		})
		// Sort by published date
		.sort((a, b) => {
			if (!a.published || !b.published) {
				return 0
			}
			return a.published < b.published ? 1 : -1
		})
		// Take the specified number of writing
		.slice(0, take)

	return {
		body: { writing, tags, take },
	}
}