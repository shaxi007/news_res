import model from './model.js'
import jwt from '../../lib/jwt.js'

export default {
	Query: {
		users: async ()=> await model.getUser() 
	},
	Mutation: {
		addUser: async(_,args)=>{
			try {
				let newUser =  await model.postUsers(args)
				newUser.token = jwt.sign(newUser.user_id)
				if(newUser){
					return {
						status:201,
						message:'user addded',
						data:newUser
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
		loginUser: async (_,args)=>{
			try {
				let User =  await model.loginUser(args)
				User.token = jwt.sign(User.user_id)
				if(User){
					return {
						status:201,
						message:'the user succesfully login',
						data:User
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
	User: {
		userId : global=> global.user_id,
		firstName : global=> global.first_name,
		lastName : global=> global.last_name
	}
}