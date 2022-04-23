import fetchRecentBookmarks from "../../actions/fetchRecentBookmarks"

export async function get({ url }) {
	const recent = parseInt(url.searchParams.get("take"), 10) || 10

	const bookmarks = await fetchRecentBookmarks(recent)

	return {
		body: { bookmarks }
	}
}