export async function get() {
	const bookmarks: any[] = []

	return {
		body: { bookmarks }
	}
}