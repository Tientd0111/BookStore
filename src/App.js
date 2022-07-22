import './App.css';
import RootRoutes from "./routes";
import {ToastContainer} from "react-toastify";
import {useEffect} from "react";
import {useUserStore} from "./stores/useUserStore";
import 'react-toastify/dist/ReactToastify.css';

function App() {
	const {user, setUser } = useUserStore(state =>({
		user: state.user,
		setUser: state.setUser
	}))



	useEffect(()=> {

		if(user === undefined || user == null) return;
		// socket.on(`message-to-user-${user.username}`, reload)
		localStorage.setItem('login',(data)=>setUser(data))
	},[user])



	return (
		<div style={{position: 'relative'}}>
			<RootRoutes/>
			<ToastContainer
				hideProgressBar={false}
				newestOnTop={false}
				rtl={false}
				draggable
				autoClose={1500}
			/>
		</div>
	);
}

export default App;
