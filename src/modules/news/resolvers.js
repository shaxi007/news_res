import model from './model.js'

export default {
	Query: {
		news: async (_,args)=>  await model.getNews(args | {})
	},
	Mutation: {
		deleteNews:async (_,args)=>{
			try {
				let cat =  await model.deleteNews(args)
				if(cat){
					return {
						status:201,
						message:'news delete',
						data:cat
					}
				}else throw new Error('error')
			} catch(e) {
				return {
					status:400,
					message:e.message,
					data:null
				}
			}
		},
		addNews:async (_,args)=>{
			try {
				let cat =  await model.addNews(args)
				if(cat){
					return {
						status:201,
						message:'news added',
						data:cat
					}
				}else throw new Error('error')
			} catch(e) {
				return {
					status:400,
					message:e.message,
					data:null
				}
			}
		},
		updateNews:async (_,args)=>{
			try {
				let cat =  await model.updateNews(args)
				if(cat){
					return {
						status:201,
						message:'news updated',
						data:cat
					}
				}else throw new Error('error')
			} catch(e) {
				return {
					status:400,
					message:e.message,
					data:null
				}
			}
		}
	},
	News:{
		newsId: global=> global.news_id,
		newsTitle: global=> global.news_title,
		newsBody: global=> global.news_body,
		newsTime: global=> global.news_time,
		newsViews: global=> global.news_views,
		authorId: global=> global.author_id,
		categorieId: global=> global.categorie_id,
		languagId: global=> global.languag_id
	}
}