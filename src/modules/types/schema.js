import { gql } from 'apollo-server'

export default gql`
	scalar Date
	scalar Any

	type MutationResponse {
		status: Int!
		message: String!
		data: Any!
	}
 `