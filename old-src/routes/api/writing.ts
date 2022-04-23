import pMap from "p-map"

import type Writing from "../../../src/types/Writing"

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
		.filter(({ published }) => published !== undefined)
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
			return a.published < b.published ? 1 : -1
		})

	return {
		body: { writing, tags: searchTags },
	}
}