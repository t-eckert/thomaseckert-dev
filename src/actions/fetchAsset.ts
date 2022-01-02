import { gql } from "graphql-request"

import client from "../client"

const fetchAsset = async (id: string): Promise<string> => {
	const query = gql`
      query {
				assets(where: {id: "${id}"}) {
					url
				}
      }
    `

	const response = await client.request(query)

	return response.assets[0].url
}

export default fetchAsset