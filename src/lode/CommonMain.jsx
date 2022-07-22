import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
const CommonMain = ({children}) => {
	return (
		<>
			<Header/>
			<main>
				{children}
			</main>
			<Footer/>
		</>
	);
};

export default CommonMain;