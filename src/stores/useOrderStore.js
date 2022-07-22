import create from 'zustand';
import {callService} from "../apis/baseRequest";
import apis from "../apis/definesApi";

export const useOrderStore = create(set => ({
	addBill: async (bodyParameters) => {
		set({loading: true})
		callService(apis.add_bill.uri, 'POST', bodyParameters,true)
			.then(response => {
				console.log('xxx')
			})
			.catch(error=>{
				set({loading: false})
			})
	},
	findId: async (param) => {
		set({loading: true})
		callService(apis.findId.uri + param, 'GET', {},true)
			.then(response => {
				console.log('m',response)
				set({data:response})
			})
			.catch(error=>{
				set({loading: false})
			})
	},
	data:[],
	loading: false,
}))