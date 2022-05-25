import { notion } from "src/notion"

const databaseId = "ed3486259e7e4b93a45b7fabcc150760"


export async function get({ url }: { url: URL }) {
    if (!notion) {
        return {
            status: 500,
            body: "Notion API is not configured"
        }
    }

    let response
    try {
        response = await notion.databases.query({
            database_id: databaseId,
            sorts: [{
                property: "Category",
                direction: "descending",
            }]
        })
    }
    catch (error) {
        // Just ignore errors for now
        return {
            body: { bookmarks: [] }
        }
    }

    const bookmarks = response.results.map(bookmark => ({
        category: bookmark.properties.Category.select.name,
        link: bookmark.properties.URL.url,
        description: bookmark.properties.Name.title[0].plain_text,
    }))


    return {
        body: {
            bookmarks
        }
    }
}