import create from 'zustand';
import {callService} from "../apis/baseRequest";
import apis from "../apis/definesApi";

export const useBookStore = create(set => ({
	getBook: async (bodyParameters) => {
		set({loading: true})
		callService(apis.get_book.uri, 'GET', bodyParameters)
			.then(response => {
				set({dataBook: response,loading: false});
			})
			.catch(error=>{
				set({loading: false})
			})
	},
	getBookId: async (params) => {
		set({loading: true})
		callService(apis.get_book_id.uri + params, 'GET')
			.then(response => {
				set({data: response,loading: false});
			})
			.catch(error=>{
				set({loading: false})
			})
	},
	data: null,
	dataBook:[],
	loading: false,
}))