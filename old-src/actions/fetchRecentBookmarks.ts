import { gql } from "graphql-request"

import client from "../client"
import type Bookmark from "../types/Bookmark"

const fetchRecentBookmarks = async (count: number): Promise<Bookmark[]> => {
	const query = gql`
      query {
				bookmarks(orderBy: createdAt_DESC, first: ${count}) {
					description
					link
					createdAt
					}
      }
    `

	const { bookmarks } = await client.request(query)

	return bookmarks
}

export default fetchRecentBookmarks