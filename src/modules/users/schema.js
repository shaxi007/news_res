import { gql } from 'apollo-server'


export default gql`
	extend type Query {
		users: [User]
	}
	extend type Mutation {
		addUser(firstName:String! lastName:String email: String! password: String! specialist:String!): MutationResponse
		loginUser( email: String! password: String!): MutationResponse
	}
	type User {
		userId: Int
        firstName: String
		lastName: String
		email: String
		specialist: String
	}
 `