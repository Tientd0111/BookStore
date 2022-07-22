import {HashRouter as Router} from "react-router-dom";
import React, {Fragment} from 'react';
import HomeRoutes from "./HomeRoutes";
import ScrollToTop from "../hooks/ScrollToTop";
import BlogRoutes from "./BlogRoutes";

const RootRoutes = () => {
	return (
		<Router>
			<Fragment>
				<ScrollToTop/>
				<HomeRoutes/>
				<BlogRoutes/>
			</Fragment>
		</Router>
	);
};

export default RootRoutes;
