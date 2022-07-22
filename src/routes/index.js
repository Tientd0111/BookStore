import {HashRouter as Router} from "react-router-dom";
import React, {Fragment, useState} from 'react';
import HomeRoutes from "./HomeRoutes";
import ScrollToTop from "../hooks/ScrollToTop";
import BlogRoutes from "./BlogRoutes";
import ShopRoutes from "./ShopRoutes";
import CartRoutes from "./CartRoutes";
import {toast} from "react-toastify";
import HistoryRouter from "./HistoryRouter";

const RootRoutes = () => {
	const c = localStorage.getItem('cart')
	const _cart = JSON.parse(c)

	const [cartItems,setCartItems] = useState([]);



	const handleAddProduct = (product) =>{
		const ProductExist = _cart?.find((item) => item?.id === product?.id)
		console.log('b',ProductExist)
		if(ProductExist){
			const cart = _cart.map((it)=>it.id === product.id
				? {...ProductExist,quantity: ProductExist.quantity + 1}:
				it
			)
			setCartItems(cart)
			localStorage.setItem('cart',JSON.stringify(cart))
			toast.success('Add to cart successfully')

		}else {
			localStorage.setItem('cart',JSON.stringify([..._cart,{...product,quantity: 1}]))
			setCartItems([..._cart,{...product,quantity: 1}])
			toast.success('Add to cart successfully')
		}
	}
	const handleRemoveProduct = (product) =>{
		const ProductExist = _cart.find((item) => item?.id === product?.id)
		if(ProductExist?.quantity === 1){
			localStorage.setItem('cart',JSON.stringify(_cart.filter((item)=> item?.id !== product?.id)))
			setCartItems(_cart.filter((item)=> item?.id !== product?.id))
		}else {
			const cart = cartItems.map((it)=>it?.id === product?.id
				? {...ProductExist,quantity: ProductExist.quantity - 1}:
				it
			)
			setCartItems(cart)
			localStorage.setItem('cart',JSON.stringify(cart))

		}
	}
	return (
		<Router>
			<Fragment>
				<ScrollToTop/>
				<HomeRoutes handleAddProduct={handleAddProduct}/>
				<BlogRoutes/>
				<HistoryRouter/>
				<ShopRoutes handleAddProduct={handleAddProduct}/>
				<CartRoutes cartItem={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct}/>
			</Fragment>
		</Router>
	);
};

export default React.memo(RootRoutes);
