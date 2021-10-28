import client from "./client"

const fetchData = async (query: string): Promise<any> => {
	const response = await client.request(query)

	return response
}

export default fetchData