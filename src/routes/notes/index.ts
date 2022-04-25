const getTags = (searchParams: URLSearchParams) => {
	const tags = searchParams.get("tags")
	if (tags) {
		return tags.split(",")
	}
	return []
}

export async function get({ url }: { url: any }) {
	// Proxy to the writing API
	url.href = url.href.replace("/notes", "/api/notes")

	const searchTags = getTags(url.searchParams)

	const response = await fetch(url)
	const notes = (await response.json())["notes"]

	return {
		body: {
			notes,
			tags: searchTags,
		}
	}
}