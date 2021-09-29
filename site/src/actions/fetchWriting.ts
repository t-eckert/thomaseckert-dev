import { gql } from "graphql-request"

import client from "../client"
import type Writings from "../types/Writings"

const fetchWritings = async (slug: string): Promise<Writings> => {
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

export default fetchWritings