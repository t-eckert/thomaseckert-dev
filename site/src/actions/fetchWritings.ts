import { gql } from "graphql-request"

import client from "../client"
import type Writings from "../types/Writings"

const fetchWritings = async (): Promise<Writings> => {
	const query = gql`
      query {
				writings {
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