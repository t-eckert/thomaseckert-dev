import type { Bookmark } from "src/interfaces"

export async function get({ url }) {
    url.href = url.href.replace("/bookmarks", "/api/bookmarks")

    const response = await fetch(url)
    const bookmarks = (await response.json())["bookmarks"]

    const categories = new Map<string, Bookmark[]>([])
    bookmarks.forEach(bookmark => {
        if (!categories.has(bookmark.category)) {
            categories.set(bookmark.category, [])
        }
        categories.get(bookmark.category)?.push(bookmark)
    })
    const bookmarkCategories = Array.from(categories.keys()).map(
        category => ({ category, bookmarks: categories.get(category) })
    )


    return {
        body: {
            bookmarkCategories
        }
    }
}