import { gql } from 'apollo-server'


export default gql`
	extend type Query {
		news: [News]
	}
	extend type Mutation{
		deleteNews(newsId: ID!) : MutationResponse
		addNews(newsTitle: String newsBody:String authorId:ID categorieId: ID languagId:ID) : MutationResponse
		updateNews(newsId:ID! newsTitle:String  newsBody: String newsAuthor:ID option:Boolean) : MutationResponse
	}
	type News{
		newsId: Int
		newsTitle:String
		newsBody:String
		newsTime: String
		newsViews: Int
		authorId: Int
		categorieId: Int
		languagId: Int
	}
	
 `