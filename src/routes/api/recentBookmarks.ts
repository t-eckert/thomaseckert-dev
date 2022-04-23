export async function get({ url }: { url: URL }) {
	return {
		body: { bookmarks: [] }
	}
}