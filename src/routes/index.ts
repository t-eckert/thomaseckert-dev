export async function get({ url }: { url: URL }) {
	const host = url.origin

	let writing = []
	try {
		const response = await fetch(host + "/api/writing?take=3")
		writing = (await response.json())["writing"]
	} catch (error) {
		console.log(error)
	}

	let bookmarks = []
	try {
		const response = await fetch(host + "/api/recentBookmarks")
		bookmarks = await response.json()
	} catch (error) {
		console.log(error)
	}

	let notes = []
	try {
		const response = await fetch(host + "/api/notes")
		notes = await response.json()
	} catch (error) {
		console.log(error)
	}

	return {
		body: {
			writing, bookmarks, notes
		}
	}
}