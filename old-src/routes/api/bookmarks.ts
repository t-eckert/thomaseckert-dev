import fetchBookmarkCategories from "../../actions/fetchBookmarkCategories"

export async function get() {
	const bookmarks = await fetchBookmarkCategories()

	return {
		body: { bookmarks }
	}
}