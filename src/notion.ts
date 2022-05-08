import { Client } from "@notionhq/client"

// Initializing a client
export const notion = new Client({
    auth: "secret_4cekGbGJbkz60fdHr8KCKG5CX6hTfGFWtxknQn2L0Ud" // process.env.NOTION_TOKEN,
})