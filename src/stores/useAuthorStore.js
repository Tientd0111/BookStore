import create from 'zustand';
import {callService} from "../apis/baseRequest";
import apis from "../apis/definesApi";

export const useAuthorStore = create(set => ({
	getAuthor: async (bodyParameters) => {
		set({loading: true})
		callService(apis.get_author.uri, 'GET', bodyParameters)
			.then(response => {
				set({authors: response,loading: false});
			})
			.catch(error=>{
				set({loading: false})
			})
	},
	authors:[],
	loading: false,
}))