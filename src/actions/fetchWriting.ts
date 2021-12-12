import { gql } from "graphql-request"

import client from "../client"
import type Writing from "../types/Writing"

const fetchWriting = async (slug: string): Promise<Writing> => {
	const query = gql`
      query {
				writings(where: {slug: "${slug}"}) {
					title
					slug
					tags
					updatedAt
					publishedAt
					content
				}
      }
    `

	const { writings } = await client.request(query)

	return writings
}

export default fetchWriting