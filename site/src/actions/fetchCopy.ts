import { gql } from "graphql-request"

import client from "../client"

const fetchCopy = async (slug: string): Promise<string> => {
	const query = gql`
      query {
				siteCopies(where: {slug: "${slug}"}) {
					copyText
				}
      }
    `

	const response = await client.request(query)

	return response.siteCopies[0].copyText
}

export default fetchCopy