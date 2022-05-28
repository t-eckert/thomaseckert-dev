export async function get({ url }) {
    url.href = url.href.replace("/bookmarks", "/api/bookmarks")

    const response = await fetch(url, { cache: "force-cache" })
    const bookmarks = (await response.json())["bookmarks"]

    return { body: { bookmarks } }
}