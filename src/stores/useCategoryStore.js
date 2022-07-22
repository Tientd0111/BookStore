import create from 'zustand';
import {callService} from "../apis/baseRequest";
import apis from "../apis/definesApi";

export const useCategoryStore = create(set => ({
	getCate: async (bodyParameters) => {
		set({loading: true})
		callService(apis.get_cate.uri, 'GET', bodyParameters)
			.then(response => {
				set({cate: response,loading: false});
			})
			.catch(error=>{
				set({loading: false})
			})
	},
	cate:[],
	loading: false,
}))