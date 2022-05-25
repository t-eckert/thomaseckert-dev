import { Client } from "@notionhq/client"
const auth = import.meta.env.VITE_NOTION_TOKEN

// Initializing a client
export const notion = auth ? new Client({ auth }) : null