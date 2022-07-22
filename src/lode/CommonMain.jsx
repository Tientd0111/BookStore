import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import SignUp from "./components/SignUp";
const CommonMain = ({children,carItems}) => {
	console.log('vvv',carItems)
	return (
		<>
			<Header/>
			<main>
				{children}
			</main>
			<SignUp/>
			<Footer/>
		</>
	);
};

export default CommonMain;