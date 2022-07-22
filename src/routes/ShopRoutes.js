import React from 'react';
import {Route, Switch} from "react-router-dom";
import PATH from "./path";
import ShopPage from "../lode/pages/ShopPage";
import ProductDetail from "../lode/pages/ProductDetail";

const ShopRoutes = ({handleAddProduct}) => {
	return (
		<Switch>
			<Route exact path={PATH.SHOP} >
				<ShopPage handleAddProduct={handleAddProduct}/>
			</Route>
			<Route exact path={PATH.BOOK_DETAIL} >
				<ProductDetail handleAddProduct={handleAddProduct} />
			</Route>
		</Switch>
	);
};

export default ShopRoutes;