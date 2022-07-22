import React from 'react';
import CommonMain from "../CommonMain";
import CsImage from "../components/CsImage";
import {Link} from "react-router-dom";
import path from "../../routes/path";
import PATH from "../../routes/path";
import {toast} from "react-toastify";

const Cart = ({cartItem,handleRemoveProduct,handleAddProduct}) => {
	const c = localStorage.getItem('cart')
	const cart = JSON.parse(c)
	const totalPrice = cart?.reduce((price,item)=>
		price + item?.quantity * item?.price,0
	)
	return (
		<CommonMain>
			<div className="page-header border-bottom">
				<div className="container">
					<div className="d-md-flex justify-content-between align-items-center py-4">
						<h1 className="page-title font-size-3 font-weight-medium m-0 text-lh-lg">Cart</h1>
					</div>
				</div>
			</div>
			<div className="site-content bg-punch-light overflow-hidden" id="content">
				{cart.length === 0?
					<div style={{textAlign:"center"}}><h5>No items in the cart</h5> <Link to={PATH.SHOP}>Continue Shopping</Link></div>:
					<div className="container">
						<header className="entry-header space-top-2 space-bottom-1 mb-2">
							<h1 className="entry-title font-size-7">Your cart: {cart?.length} items</h1>
						</header>
						<div className="row pb-8">
							<div id="primary" className="content-area col-md-9">
								<main id="main" className="site-main ">
									<div className="page type-page status-publish hentry">
										<div className="entry-content">
											<div className="woocommerce">
												<table className="table-responsive shop_table shop_table_responsive cart woocommerce-cart-form__contents">
													<thead>
													<tr>
														<th className="product-name">Product</th>
														<th className="product-price">Price</th>
														<th className="product-quantity">Quantity</th>
														<th className="product-subtotal">Total</th>
														<th className="product-remove">&nbsp;</th>
													</tr>
													</thead>
													<tbody>
													{cart?.map((it)=>(
														<tr key={it?.id} className="woocommerce-cart-form__cart-item cart_item">
															<td className="product-name" data-title="Product">
																<div className="d-flex align-items-center">
																	<a href="/#">
																		<CsImage uri={it?.fileName}/>
																	</a>
																	<div className="ml-3 m-w-200-lg-down">
																		<a href="#">{it?.name}</a>
																		{it?.authors?.map((item)=>(
																			<a key={item?.id} href="/#" className="text-gray-700 font-size-2 d-block" tabIndex={0}>{item.name}</a>
																		))}
																	</div>
																</div>
															</td>
															<td className="product-price" data-title="Price">
																<span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>{it?.price}</span>
															</td>
															<td className="product-quantity" data-title="Quantity">
																<div className="quantity d-flex align-items-center">
																	<div className="border px-3 width-120">
																		<div className="js-quantity">
																			<div className="d-flex align-items-center">
																				<label className="screen-reader-text sr-only">Quantity</label>
																				<span style={{cursor:"pointer"}} className="js-minus text-dark" onClick={()=>handleRemoveProduct(it)}>
																				<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="10px" height="1px">
																					<path fillRule="evenodd" fill="rgb(22, 22, 25)" d="M-0.000,-0.000 L10.000,-0.000 L10.000,1.000 L-0.000,1.000 L-0.000,-0.000 Z" />
																				</svg>
																			</span>
																				<input type="number" className="input-text qty text js-result form-control text-center border-0" step={1} min={1} max={100} name="quantity" defaultValue={1} title="Qty" value={it?.quantity}/>
																				<span style={{cursor:"pointer"}} className="js-plus text-dark" onClick={()=>handleAddProduct(it)}>
																				<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="10px" height="10px">
																					<path fillRule="evenodd" fill="rgb(22, 22, 25)" d="M10.000,5.000 L6.000,5.000 L6.000,10.000 L5.000,10.000 L5.000,5.000 L-0.000,5.000 L-0.000,4.000 L5.000,4.000 L5.000,-0.000 L6.000,-0.000 L6.000,4.000 L10.000,4.000 L10.000,5.000 Z" />
																				</svg>
																			</span>
																			</div>
																		</div>
																	</div>
																</div>
															</td>
															<td className="product-subtotal" data-title="Total">
																<span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>{it?.quantity * it?.price}</span>
															</td>
															<td className="product-remove">
																<a href="/#" className="remove" aria-label="Remove this item">
																	<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="15px" height="15px">
																		<path fillRule="evenodd" fill="rgb(22, 22, 25)" d="M15.011,13.899 L13.899,15.012 L7.500,8.613 L1.101,15.012 L-0.012,13.899 L6.387,7.500 L-0.012,1.101 L1.101,-0.012 L7.500,6.387 L13.899,-0.012 L15.011,1.101 L8.613,7.500 L15.011,13.899 Z" />
																	</svg>
																</a>
															</td>
														</tr>
													))}
													</tbody>
												</table>
											</div>
										</div>
									</div>
								</main>
							</div>
							<div id="secondary" className="sidebar cart-collaterals order-1 col-md-3" role="complementary">
								<div id="cartAccordion" className="border border-gray-900 bg-white mb-5">
									<div className="p-4d875 border">
										<div id="cartHeadingOne" className="cart-head">
											<a className="d-flex align-items-center justify-content-between text-dark" href="#" data-toggle="collapse" data-target="#cartCollapseOne" aria-expanded="true" aria-controls="cartCollapseOne">
												<h3 className="cart-title mb-0 font-weight-medium font-size-3">Cart Totals</h3>
												<svg className="mins" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="15px" height="2px">
													<path fillRule="evenodd" fill="rgb(22, 22, 25)" d="M0.000,-0.000 L15.000,-0.000 L15.000,2.000 L0.000,2.000 L0.000,-0.000 Z" />
												</svg>
												<svg className="plus" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="15px" height="15px">
													<path fillRule="evenodd" fill="rgb(22, 22, 25)" d="M15.000,8.000 L9.000,8.000 L9.000,15.000 L7.000,15.000 L7.000,8.000 L0.000,8.000 L0.000,6.000 L7.000,6.000 L7.000,-0.000 L9.000,-0.000 L9.000,6.000 L15.000,6.000 L15.000,8.000 Z" />
												</svg>
											</a>
										</div>
										<div id="cartCollapseOne" className="mt-4 cart-content collapse show" aria-labelledby="cartHeadingOne" data-parent="#cartAccordion">
											<table className="shop_table shop_table_responsive">
												<tbody>
												<tr className="cart-subtotal">
													<th>Subtotal</th>
													<td data-title="Subtotal"><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>{totalPrice}</span></td>
												</tr>
												<tr className="order-shipping">
													<th>Shipping</th>
													<td data-title="Shipping">Free Shipping</td>
												</tr>
												</tbody>
											</table>
										</div>
									</div>
									{/*<div className="p-4d875 border">*/}
									{/*	<div id="cartHeadingThree" className="cart-head">*/}
									{/*		<a className="d-flex align-items-center justify-content-between text-dark" href="#" data-toggle="collapse" data-target="#cartCollapseThree" aria-expanded="true" aria-controls="cartCollapseThree">*/}
									{/*			<h3 className="cart-title mb-0 font-weight-medium font-size-3">Coupon</h3>*/}
									{/*			<svg className="mins" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="15px" height="2px">*/}
									{/*				<path fillRule="evenodd" fill="rgb(22, 22, 25)" d="M0.000,-0.000 L15.000,-0.000 L15.000,2.000 L0.000,2.000 L0.000,-0.000 Z" />*/}
									{/*			</svg>*/}
									{/*			<svg className="plus" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="15px" height="15px">*/}
									{/*				<path fillRule="evenodd" fill="rgb(22, 22, 25)" d="M15.000,8.000 L9.000,8.000 L9.000,15.000 L7.000,15.000 L7.000,8.000 L0.000,8.000 L0.000,6.000 L7.000,6.000 L7.000,-0.000 L9.000,-0.000 L9.000,6.000 L15.000,6.000 L15.000,8.000 Z" />*/}
									{/*			</svg>*/}
									{/*		</a>*/}
									{/*	</div>*/}
									{/*	<div id="cartCollapseThree" className="mt-4 cart-content collapse show" aria-labelledby="cartHeadingThree" data-parent="#cartAccordion">*/}
									{/*		<div className="coupon">*/}
									{/*			<label htmlFor="coupon_code">Coupon:</label>*/}
									{/*			<input type="text" name="coupon_code" className="input-text" id="coupon_code" defaultValue placeholder="Coupon code" autoComplete="off" />*/}
									{/*			<input type="submit" className="button" name="apply_coupon" defaultValue="Apply coupon" />*/}
									{/*		</div>*/}
									{/*	</div>*/}
									{/*</div>*/}
									<div className="p-4d875 border">
										<table className="shop_table shop_table_responsive">
											<tbody>
											<tr className="order-total">
												<th>Total</th>
												<td data-title="Total"><strong><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>{totalPrice}</span></strong> </td>
											</tr>
											</tbody>
										</table>
									</div>
								</div>
								<div className="wc-proceed-to-checkout">
									{localStorage.getItem('login')?
										<Link to={PATH.CHECKOUT} className="checkout-button button alt wc-forward btn btn-dark btn-block rounded-0 py-4">Proceed to checkout</Link>:
										<span onClick={()=>toast.error('please login!')}  className="checkout-button button alt wc-forward btn btn-dark btn-block rounded-0 py-4">Proceed to checkout</span>
									}
								</div>
							</div>
						</div>
					</div>
				}
			</div>
		</CommonMain>
	);
};

export default React.memo(Cart);