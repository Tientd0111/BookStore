import create from 'zustand';
import {callService} from "../apis/baseRequest";
import apis from "../apis/definesApi";
import {toast} from "react-toastify";

export const useUserStore = create(set => ({
	login: async (bodyParameters) => {
		set({loading: true})
		try {
			const response = await callService(apis.login.uri, 'POST', bodyParameters)
			set({user: response.user, loading: false});
			localStorage.setItem('key', response.accessToken)
			localStorage.setItem('user', JSON.stringify(response))
			toast.success(response?.message)

			return {isAuth: true, user: response.user}
		} catch (e) {
			toast.error(e.response?.data.messages)
			set({loading: false})
			return {isAuth: false}
		}
	},

	setUser: (data) => {set({user: data})},
	register: async (bodyParameter)=>{
		set({loading:true})
		try {
			const response = await callService(apis.register.uri,'POST', bodyParameter)
			toast.success(response?.msg)
			set({loading:false});
			return true
		}catch (e) {
			toast.error(e.response?.data?.msg)
			set({loading: false})
			return false
		}
	},
	find: async (param)=>{
		set({loading:true})
		try {
			const response = await callService(apis.find.uri + param,'GET', {},true)
			set({data: response});
			return true
		}catch (e) {
			toast.error(e.response?.data?.msg)
			set({loading: false})
			return false
		}
	},
	data : [],
	user: undefined,
	loading: false,

}))
