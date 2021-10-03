import { gql } from "graphql-request"

import client from "../client"
import type Writing from "../types/Writing"

const fetchWritings = async (): Promise<Writing[]> => {
	const query = gql`
      query {
				writings(where: {indexed: true}) {
					title
					slug
					tags
					updatedAt
					publishedAt
				}
      }
    `

	const { writings } = await client.request(query)

	return writings
}

export default fetchWritings