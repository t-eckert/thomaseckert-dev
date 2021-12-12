import { gql } from "graphql-request"

import client from "../client"
import type Bookmark from "../types/Bookmark"

const fetchRecentBookmarks = async (): Promise<Bookmark[]> => {
	const query = gql`
      query {
				bookmarks(orderBy: createdAt_DESC, first: 10) {
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