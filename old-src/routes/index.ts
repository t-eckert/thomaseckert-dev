import config from "../config"

export async function get() {
	const writingResponse = await fetch(config.URL + "/api/writing?take=3")
	const writing = (await writingResponse.json())["writing"]

	const bookmarksResponse = await fetch(config.URL + "/api/recentBookmarks?take=3")
	const bookmarks = (await bookmarksResponse.json())["bookmarks"]

	const notesResponse = await fetch(config.URL + "/api/notes?take=3")
	const notes = (await notesResponse.json())["notes"]

	return {
		body: {
			writing,
			bookmarks,
			notes
		}
	}
}