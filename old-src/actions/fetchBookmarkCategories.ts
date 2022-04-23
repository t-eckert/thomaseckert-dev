import { gql } from "graphql-request"

import client from "../client"
import type BookmarkCategory from "../types/BookmarkCategory"

const fetchBookmarkCategories = async (): Promise<BookmarkCategory[]> => {
	const query = gql`
      query {
				bookmarkCategories {
					category
					priority
					bookmarks {
						description
						link
					}
				}
      }
    `

	const { bookmarkCategories } = await client.request(query)

	return bookmarkCategories
}

export default fetchBookmarkCategories