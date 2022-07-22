import React from 'react';
import {Route, Switch} from "react-router-dom";
import PATH from "./path";
import Cart from "../lode/pages/Cart";
import Checkout from "../lode/pages/Checkout";

const CartRoutes = ({cartItem,handleAddProduct,handleRemoveProduct}) => {
	return (
		<Switch>
			<Route exact path={PATH.CART}>
				<Cart cartItem={cartItem} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct}/>
			</Route>
			<Route exact path={PATH.CHECKOUT}>
				<Checkout/>
			</Route>
		</Switch>
	);
};

export default CartRoutes;