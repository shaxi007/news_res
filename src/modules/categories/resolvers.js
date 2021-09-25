import model from './model.js'

export default {
	Query: {
		categories: async(_,args)=> await model.getCategorie(args)
	},
	Mutation:{
		addCategorie: async (_,args)=>{ 
			try {
				let cat =  await model.addCategrie(args)
				if(cat){
					return {
						status:201,
						message:'categorie added',
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
		deleteCategorie: async(_,args)=> {
			try {
				let cat =  await model.deleteCategrie(args)
				if(cat){
					return {
						status:201,
						message:'categorie deleted',
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
		putCategorie: async(_,args) => {
			try {
				let cat =  await model.putCategrie(args)
				if(cat){
					return {
						status:201,
						message:'categorie updated',
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
	}
	,
	Categorie: {
		categorieId: global => global.categorie_id,
		categorieName: global => global.categorie_name,
		languagId: global => global.languag_id
	}

}