export async function get({ url }: { url: URL }) {
    const writing: any = []
    const tags: any = []

    return {
        body: {
            writing, tags
        }
    }
}