import { gql } from "graphql-request"

export default gql`

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
