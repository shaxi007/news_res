import { gql } from 'apollo-server'


export default gql`
	extend type Query {
		categories(lang: Int) : [Categorie] 
	}
	extend type Mutation {
		addCategorie(languagId: ID! categorieName: String!): MutationResponse
		deleteCategorie(categorieId: ID! ): MutationResponse
		putCategorie(categorieName:String! categorieId:ID!): MutationResponse
	}
	type Categorie {
		categorieId: Int
		categorieName: String
		languagId: Int
	}
	
 `