import create from 'zustand';
import {callService} from "../apis/baseRequest";
import apis from "../apis/definesApi";

export const useBlogStore = create(set => ({
	getBlog: async (bodyParameters) => {
		set({loading: true})
		callService(apis.getblog.uri, 'GET', bodyParameters)
			.then(response => {
				set({dataBlog: response,loading: false});
			})
			.catch(error=>{
				set({loading: false})
			})
	},
	dataBlog:[],
	loading: false,
}))