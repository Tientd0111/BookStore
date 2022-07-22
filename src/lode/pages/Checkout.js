import React, {useEffect} from 'react';
import CommonMain from "../CommonMain";
import {useForm} from "react-hook-form";
import {useOrderStore} from "../../stores/useOrderStore";
import {toast} from "react-toastify";
import PATH from "../../routes/path";
import { useHistory } from "react-router-dom";

const Checkout = () => {
	let history = useHistory();
	const c = localStorage.getItem('cart')
	const cart = JSON.parse(c)
	console.log(cart)
	const user = localStorage.getItem('user')
	const _user = JSON.parse(user)

	const totalPrice = cart?.reduce((price,item)=>
		price + item?.quantity * item?.price,0
	)
	const {register,handleSubmit} = useForm()
	const {addBill} = useOrderStore(state => ({
		addBill: state.addBill
	}))


	const onsubmit = async data => {
		if(localStorage.getItem('login')) {
			data.user = _user?.username
			const quan = cart.map((it) => (
				it.quantity
			))
			const name = cart.map((it) => (
				it.name
			))
			let index = 0
			quan.map((it) => {
				for (let i = 0; i < it - 1; i++) {
					name.push(name[index])
				}
				index = index + 1;
			})
			data.books = name
			data.status = false
			await addBill(data)
			history.push(PATH.HISTORY)
			toast.success("Order Success")
			localStorage.setItem('cart',JSON.stringify([]))
		}else {
			toast.error('please login!')
		}
	}
	return (
		<CommonMain>
			<div id="content" className="site-content bg-punch-light space-bottom-3">
				<div className="col-full container">
					<div id="primary" className="content-area">
						<main id="main" className="site-main">
							<article id="post-6" className="post-6 page type-page status-publish hentry">
								<header className="entry-header space-top-2 space-bottom-1 mb-2">
									<h4 className="entry-title font-size-7 text-center">Checkout</h4>
								</header>
								<div className="entry-content">
									<div className="woocommerce">
										<div className="woocommerce-info p-4 bg-white border">Have a coupon?
											<a className="showcoupon" data-toggle="collapse" href="#collapseExample9" role="button"
											   aria-expanded="false" aria-controls="collapseExample9">
												Click here to enter your code
											</a>
										</div>
										<form id="collapseExample9" className="collapse checkout_coupon mt-4 p-4 bg-white border" method="post">
											<div className="row d-flex">
												<p className="col-md-4 d-inline form-row form-row-first mb-3 mb-md-0">
													<input type="text" name="coupon_code1" className="input-text form-control" placeholder="Coupon code"
														   id="coupon_code1" defaultValue />
												</p>
												<p className="col-md-3 d-inline form-row form-row-last">
													<input type="submit" className="button form-control border-0 height-4 btn btn-dark rounded-0"
														   name="apply_coupon" defaultValue="Apply coupon" />
												</p>
											</div>
											<div className="clear" />
										</form>
										<form name="checkout" method="post" className="checkout woocommerce-checkout row mt-8"
											  action="https://themes.woocommerce.com/storefront/checkout/" encType="multipart/form-data"
											  noValidate="novalidate">
											<div className="col2-set col-md-6 col-lg-7 col-xl-8 mb-6 mb-md-0" id="customer_details">
												<div className="px-4 pt-5 bg-white border">
													<div className="woocommerce-billing-fields">
														<h3 className="mb-4 font-size-3">Billing details</h3>
														<div className="woocommerce-billing-fields__field-wrapper row">
															<p className="col-lg-6 mb-4d75 form-row form-row-first validate-required woocommerce-invalid woocommerce-invalid-required-field"
															   id="billing_first_name_field" data-priority={10}>
																<label htmlFor="billing_first_name" className="form-label">Name<abbr className="required"
																																	 title="required">*</abbr></label>
																<input type="text" className="input-text form-control" name="billing_first_name"
																	   id="billing_first_name" placeholder autoComplete="given-name" autoFocus="autofocus" defaultValue={_user?.name} />
															</p>
															<p className="col-lg-6 mb-4d75 form-row form-row-last validate-required"
															   id="billing_last_name_field" data-priority={20}>
																<label htmlFor="billing_last_name" className="form-label">Phone<abbr className="required"
																																	 title="required">*</abbr></label>
																<input type="text" className="input-text form-control" name="billing_last_name"
																	   id="billing_last_name" placeholder autoComplete="family-name" defaultValue={_user?.phone}/>
															</p>
															<p className="col-12 mb-4d75 form-row form-row-wide" id="billing_company_field"
															   data-priority={30}>
																<label htmlFor="billing_company" className="form-label">Email</label>
																<input type="text" className="input-text form-control" name="billing_company"
																	   id="billing_company" placeholder autoComplete="organization" defaultValue={_user?.email}/>
															</p>
															<p className="col-12 mb-3 form-row form-row-wide address-field validate-required"
															   id="billing_address_1_field" data-priority={50}>
																<label htmlFor="billing_address_1" className="form-label">Address<abbr className="required"
																																	   title="required">*</abbr></label>
																<input type="text" className="input-text form-control" name="billing_address_1"
																	   id="billing_address_1" autoComplete="address-line1" defaultValue={_user?.address}/>
															</p>

														</div>
													</div>
												</div>
												<div className="px-4 pt-5 bg-white border border-top-0 mt-n-one">
													<div className="woocommerce-additional-fields">
														<h3 className="mb-4 font-size-3">Additional information</h3>
														<div className="woocommerce-additional-fields__field-wrapper">
															<p className="col-12 mb-4d75 px-0 form-row notes" id="order_comments_field" data-priority>
																<label htmlFor="order_comments" className="form-label">Order
																	notes (optional)</label>
																<textarea name="order_comments" className="input-text form-control" id="order_comments"
																		  placeholder="Notes about your order, e.g. special notes for delivery." rows={8} cols={5}
																		  defaultValue={""} />
															</p>
														</div>
													</div>
												</div>
											</div>
											<h3 id="order_review_heading" className="d-none">Your order</h3>
											<div id="order_review" className="col-md-6 col-lg-5 col-xl-4 woocommerce-checkout-review-order">
												<div id="checkoutAccordion" className="border border-gray-900 bg-white mb-5">
													<div className="p-4d875 border">
														<div id="checkoutHeadingOnee" className="checkout-head">
															<a href="#" className="text-dark d-flex align-items-center justify-content-between"
															   data-toggle="collapse" data-target="#checkoutCollapseOnee" aria-expanded="true"
															   aria-controls="checkoutCollapseOnee">
																<h3 className="checkout-title mb-0 font-weight-medium font-size-3">Your
																	order</h3>
																<svg className="mins" xmlns="http://www.w3.org/2000/svg"
																	 xmlnsXlink="http://www.w3.org/1999/xlink" width="15px" height="2px">
																	<path fillRule="evenodd" fill="rgb(22, 22, 25)"
																		  d="M0.000,-0.000 L15.000,-0.000 L15.000,2.000 L0.000,2.000 L0.000,-0.000 Z" />
																</svg>
																<svg className="plus" xmlns="http://www.w3.org/2000/svg"
																	 xmlnsXlink="http://www.w3.org/1999/xlink" width="15px" height="15px">
																	<path fillRule="evenodd" fill="rgb(22, 22, 25)"
																		  d="M15.000,8.000 L9.000,8.000 L9.000,15.000 L7.000,15.000 L7.000,8.000 L0.000,8.000 L0.000,6.000 L7.000,6.000 L7.000,-0.000 L9.000,-0.000 L9.000,6.000 L15.000,6.000 L15.000,8.000 Z" />
																</svg>
															</a>
														</div>
														<div id="checkoutCollapseOnee" className="mt-4 checkout-content collapse show" aria-labelledby="checkoutHeadingOnee"
															 data-parent="#checkoutAccordion">
															<table className="shop_table woocommerce-checkout-review-order-table">
																<thead className="d-none">
																<tr>
																	<th className="product-name">Product</th>
																	<th className="product-total">Total</th>
																</tr>
																</thead>
																<tbody>
																	{cart.map((it)=>(
																		<tr key={it.id} className="cart_item">
																			<td className="product-name">
																				{it?.name}&nbsp; <strong className="product-quantity">× {it?.quantity}</strong>
																			</td>
																			<td className="product-total">
																			  <span className="woocommerce-Price-amount amount"><span
																				  className="woocommerce-Price-currencySymbol">£</span>{it?.quantity * it?.price}</span>
																			</td>
																		</tr>
																	))}
																</tbody>
															</table>
														</div>
													</div>
													<div className="p-4d875 border">
														<div id="checkoutHeadingOne" className="checkout-head">
															<a href="#" className="text-dark d-flex align-items-center justify-content-between"
															   data-toggle="collapse" data-target="#checkoutCollapseOne" aria-expanded="true"
															   aria-controls="checkoutCollapseOne">
																<h3 className="checkout-title mb-0 font-weight-medium font-size-3">Cart
																	Totals</h3>
																<svg className="mins" xmlns="http://www.w3.org/2000/svg"
																	 xmlnsXlink="http://www.w3.org/1999/xlink" width="15px" height="2px">
																	<path fillRule="evenodd" fill="rgb(22, 22, 25)"
																		  d="M0.000,-0.000 L15.000,-0.000 L15.000,2.000 L0.000,2.000 L0.000,-0.000 Z" />
																</svg>
																<svg className="plus" xmlns="http://www.w3.org/2000/svg"
																	 xmlnsXlink="http://www.w3.org/1999/xlink" width="15px" height="15px">
																	<path fillRule="evenodd" fill="rgb(22, 22, 25)"
																		  d="M15.000,8.000 L9.000,8.000 L9.000,15.000 L7.000,15.000 L7.000,8.000 L0.000,8.000 L0.000,6.000 L7.000,6.000 L7.000,-0.000 L9.000,-0.000 L9.000,6.000 L15.000,6.000 L15.000,8.000 Z" />
																</svg>
															</a>
														</div>
														<div id="checkoutCollapseOne" className="mt-4 checkout-content collapse show"
															 aria-labelledby="checkoutHeadingOne" data-parent="#checkoutAccordion">
															<table className="shop_table shop_table_responsive">
																<tbody>
																<tr className="checkout-subtotal">
																	<th>Subtotal</th>
																	<td data-title="Subtotal"><span className="woocommerce-Price-amount amount"><span
																		className="woocommerce-Price-currencySymbol">£</span>{totalPrice}</span>
																	</td>
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
													{/* <div id="checkoutHeadingTwo" className="checkout-head">*/}
													{/* <a href="#" */} {/* className="text-dark d-flex align-items-center justify-content-between"
                          */} {/* data-toggle="collapse" data-target="#checkoutCollapseTwo" */} {/*
                          aria-expanded="false" */} {/* aria-controls="checkoutCollapseTwo">*/}
													{/* <h3 className="checkout-title mb-0 font-weight-medium font-size-3">Shipping</h3>*/}
													{/* <svg className="mins" xmlns="http://www.w3.org/2000/svg" */} {/*
                            xmlnsXlink="http://www.w3.org/1999/xlink" width="15px" */} {/* height="2px">*/}
													{/*
                            <path fillRule="evenodd" fill="rgb(22, 22, 25)" */} {/*
                              d="M0.000,-0.000 L15.000,-0.000 L15.000,2.000 L0.000,2.000 L0.000,-0.000 Z" />*/}
													{/*
                          </svg>*/}
													{/* <svg className="plus" xmlns="http://www.w3.org/2000/svg" */} {/*
                            xmlnsXlink="http://www.w3.org/1999/xlink" width="15px" */} {/* height="15px">*/}
													{/*
                            <path fillRule="evenodd" fill="rgb(22, 22, 25)" */} {/*
                              d="M15.000,8.000 L9.000,8.000 L9.000,15.000 L7.000,15.000 L7.000,8.000 L0.000,8.000 L0.000,6.000 L7.000,6.000 L7.000,-0.000 L9.000,-0.000 L9.000,6.000 L15.000,6.000 L15.000,8.000 Z" />
                            */}
													{/*
                          </svg>*/}
													{/* </a>*/}
													{/* </div>*/}
													{/*</div>*/}
													{/*<div className="p-4d875 border">*/}
													{/* <div id="checkoutHeadingThree" className="checkout-head">*/}
													{/* <a href="#" */} {/* className="text-dark d-flex align-items-center justify-content-between"
                          */} {/* data-toggle="collapse" data-target="#checkoutCollapseThree" */} {/*
                          aria-expanded="true" */} {/* aria-controls="checkoutCollapseThree">*/}
													{/* <h3 className="checkout-title mb-0 font-weight-medium font-size-3">Coupon</h3>*/}
													{/* <svg className="mins" xmlns="http://www.w3.org/2000/svg" */} {/*
                            xmlnsXlink="http://www.w3.org/1999/xlink" width="15px" */} {/* height="2px">*/}
													{/*
                            <path fillRule="evenodd" fill="rgb(22, 22, 25)" */} {/*
                              d="M0.000,-0.000 L15.000,-0.000 L15.000,2.000 L0.000,2.000 L0.000,-0.000 Z" />*/}
													{/*
                          </svg>*/}
													{/* <svg className="plus" xmlns="http://www.w3.org/2000/svg" */} {/*
                            xmlnsXlink="http://www.w3.org/1999/xlink" width="15px" */} {/* height="15px">*/}
													{/*
                            <path fillRule="evenodd" fill="rgb(22, 22, 25)" */} {/*
                              d="M15.000,8.000 L9.000,8.000 L9.000,15.000 L7.000,15.000 L7.000,8.000 L0.000,8.000 L0.000,6.000 L7.000,6.000 L7.000,-0.000 L9.000,-0.000 L9.000,6.000 L15.000,6.000 L15.000,8.000 Z" />
                            */}
													{/*
                          </svg>*/}
													{/* </a>*/}
													{/* </div>*/}
													{/* <div id="checkoutCollapseThree" */} {/* className="mt-4 checkout-content collapse show" */}
													{/* aria-labelledby="checkoutHeadingThree" */} {/* data-parent="#checkoutAccordion">*/}
													{/* <div className="coupon">*/}
													{/* <label htmlFor="coupon_code">Coupon:</label>*/}
													{/* <input type="text" name="coupon_code" className="input-text" */} {/* id="coupon_code"
                            defaultValue*/} {/* placeholder="Coupon code" autoComplete="off" />*/}
													{/* <input type="submit" className="button" name="apply_coupon" */} {/*
                            defaultValue="Apply coupon" />*/}
													{/* </div>*/}
													{/* </div>*/}
													{/*</div>*/}
													<div className="p-4d875 border">
														<table className="shop_table shop_table_responsive">
															<tbody>
															<tr className="order-total">
																<th>Total</th>
																<td data-title="Total"><strong><span className="woocommerce-Price-amount amount"><span
																	className="woocommerce-Price-currencySymbol">£</span>{totalPrice}</span></strong>
																</td>
															</tr>
															</tbody>
														</table>
													</div>
													<div className="p-4d875 border">
														<div id="checkoutHeadingThreee" className="checkout-head">
															<a href="#" className="text-dark d-flex align-items-center justify-content-between"
															   data-toggle="collapse" data-target="#checkoutCollapseThreee" aria-expanded="true"
															   aria-controls="checkoutCollapseThreee">
																<h3 className="checkout-title mb-0 font-weight-medium font-size-3">Payment</h3>
																<svg className="mins" xmlns="http://www.w3.org/2000/svg"
																	 xmlnsXlink="http://www.w3.org/1999/xlink" width="15px" height="2px">
																	<path fillRule="evenodd" fill="rgb(22, 22, 25)"
																		  d="M0.000,-0.000 L15.000,-0.000 L15.000,2.000 L0.000,2.000 L0.000,-0.000 Z" />
																</svg>
																<svg className="plus" xmlns="http://www.w3.org/2000/svg"
																	 xmlnsXlink="http://www.w3.org/1999/xlink" width="15px" height="15px">
																	<path fillRule="evenodd" fill="rgb(22, 22, 25)"
																		  d="M15.000,8.000 L9.000,8.000 L9.000,15.000 L7.000,15.000 L7.000,8.000 L0.000,8.000 L0.000,6.000 L7.000,6.000 L7.000,-0.000 L9.000,-0.000 L9.000,6.000 L15.000,6.000 L15.000,8.000 Z" />
																</svg>
															</a>
														</div>
														<div id="checkoutCollapseThreee" className="mt-4 checkout-content collapse show"
															 aria-labelledby="checkoutHeadingThreee" data-parent="#checkoutAccordion">
															<div id="payment" className="woocommerce-checkout-payment">
																<ul className="wc_payment_methods payment_methods methods">
																	<li className="wc_payment_method payment_method_cod">
																		<input id="payment_method_cod" type="radio" className="input-radio" name="payment_method"
																			   defaultValue="cod" defaultChecked="checked" data-order_button_text />
																		<label htmlFor="payment_method_cod">Cash on
																			delivery </label>
																		<div className="payment_box payment_method_cod" style={{display: 'block' }}>
																			<p>Pay with cash upon delivery.</p>
																		</div>
																	</li>
																</ul>
															</div>
														</div>
													</div>
												</div>
												<div className="form-row place-order">
													<button onClick={handleSubmit(onsubmit)}
													   className="button alt btn btn-dark btn-block rounded-0 py-4">Place
														order</button>
													<input type="hidden" id="_wpnonce" name="_wpnonce" defaultValue="926470d564" />
													<input type="hidden" name="_wp_http_referer" defaultValue="/storefront/?wc-ajax=update_order_review" />
												</div>
											</div>
										</form>
									</div>
								</div>
							</article>
						</main>
					</div>
				</div>
			</div>
		</CommonMain>
	);
};

export default Checkout;