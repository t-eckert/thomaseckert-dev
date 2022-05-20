const getTags = (searchParams: URLSearchParams) => {
    const tags = searchParams.get("tags")
    if (tags) {
        return tags.split(",")
    }
    return []
}

export async function get({ url }) {
    // Proxy to the writing API
    url.href = url.href.replace("/writing", "/api/writing")

    const searchTags = getTags(url.searchParams)

    const response = await fetch(url)
    const writing = (await response.json())["writing"]

    return {
        body: {
            writing,
            tags: searchTags,
        }
    }
}