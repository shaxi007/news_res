import {fetch, fetchAll } from '../../lib/postgres.js'


let INSERT_CATEGORIE = ` 
	INSERT INTO categories(categorie_name,languag_id) VALUES($1,$2)
	RETURNING *
`
let UPDATE_CATEGORIE = ` 
	UPDATE categories SET categorie_name=$1 WHERE categorie_id=$2
	RETURNING *
`
let DELETE_CATEGORIE = ` 
	DELETE FROM categories WHERE categorie_id=$1
	RETURNING *
`
let SELECT_CATEGORIE = ` 
	SELECT * FROM categories WHERE CASE WHEN $1>0 THEN languag_id=$1 ELSE TRUE END 
`

const addCategrie =async  ({ languagId,categorieName })=>{
	try {
		return fetch(INSERT_CATEGORIE,categorieName,languagId)
	} catch(e) {
		throw e
	}
}
const putCategrie =async  ({ categorieName,categorieId })=>{
	try {
		return fetch(UPDATE_CATEGORIE,categorieName,categorieId)
	} catch(e) {
		throw e
	}
}
const deleteCategrie =async  ({ categorieId })=>{
	try {
		return fetch(DELETE_CATEGORIE,categorieId)
	} catch(e) {
		throw e
	}
}

const getCategorie =async ({lang=0})=>{
	try {
		return fetchAll(SELECT_CATEGORIE,lang)
	} catch(e) {
		throw e
	}
}

export default {
	addCategrie,
	putCategrie,
	deleteCategrie,
	getCategorie
}