const apis = {
	login: {
		uri: 'auth/signin'
	},
	register:{
		uri: 'auth/signup'
	},
	getblog: {
		uri: 'blog/get'
	},
	get_book: {
		uri: 'book/get'
	},
	add_bill: {
		uri: 'bill/add'
	},
	get_cate:{
		uri: 'category/get'
	},
	get_author:{
		uri: 'author/get'
	},
	get_book_id:{
		uri: 'book/findById?id='
	},
	find:{
		uri: 'user/findById?id='
	},
	findId:{
		uri: 'bill/findById?id='
	}

}
export default apis