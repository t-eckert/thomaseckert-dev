export async function get({ url }: { url: URL }) {
    const host = url.origin

    let writing = []
    try {
        const response = await fetch(host + "/api/writing?take=7")
        writing = (await response.json())["writing"]
    } catch (error) {
        console.log(error)
    }

    let bookmarks = []
    try {
        const response = await fetch(host + "/api/bookmarks?sort=recent&take=7")
        bookmarks = (await response.json())["bookmarks"]
    } catch (error) {
        console.log(error)
    }

    let notes = []
    try {
        const response = await fetch(host + "/api/notes?take=7")
        notes = (await response.json())["notes"]
    } catch (error) {
        console.log(error)
    }

    return {
        body: {
            writing, bookmarks, notes
        }
    }
}