import React from 'react';
import {Route, Switch} from "react-router-dom";
import PATH from "./path";
import BlogPage from "../lode/pages/BlogPage";

const BlogRoutes = () => {
	return (
		<Switch>
			<Route exact path={PATH.BLOG}>
				<BlogPage/>
			</Route>
		</Switch>
	);
};

export default BlogRoutes;