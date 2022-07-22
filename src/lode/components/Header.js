import React from 'react';
import {Link} from "react-router-dom";
import PATH from "../../routes/path";

const Header = () => {
	return (
		<header id="site-header" className="site-header__v1">
			<div className="topbar border-bottom d-none d-md-block">
				<div className="container-fluid px-2 px-md-5 px-xl-8d75">
					<div className="topbar__nav d-md-flex justify-content-between align-items-center">
						<ul className="topbar__nav--left nav ml-md-n3">
							<li className="nav-item"><a href="#" className="nav-link link-black-100"><i
								className="glph-icon flaticon-question mr-2" />Can we help you?</a></li>
							<li className="nav-item"><a href="tel:+1246-345-0695" className="nav-link link-black-100"><i
								className="glph-icon flaticon-phone mr-2" />+1 246-345-0695</a></li>
						</ul>
						<ul className="topbar__nav--right nav mr-md-n3">
							<li className="nav-item"><a href="#" className="nav-link link-black-100"><i
								className="glph-icon flaticon-pin" /></a>
							</li>
							<li className="nav-item"><a href="#" className="nav-link link-black-100"><i
								className="glph-icon flaticon-switch" /></a></li>
							<li className="nav-item"><a href="#" className="nav-link link-black-100"><i
								className="glph-icon flaticon-heart" /></a></li>
							<li className="nav-item">
								<a id="sidebarNavToggler" href="javascript:;" role="button" className="nav-link link-black-100"
								   aria-controls="sidebarContent" aria-haspopup="true" aria-expanded="false" data-unfold-event="click"
								   data-unfold-hide-on-scroll="false" data-unfold-target="#sidebarContent" data-unfold-type="css-animation"
								   data-unfold-overlay="{
                                    &quot;className&quot;: &quot;u-sidebar-bg-overlay&quot;,
                                    &quot;background&quot;: &quot;rgba(0, 0, 0, .7)&quot;,
                                    &quot;animationSpeed&quot;: 500
                                }" data-unfold-animation-in="fadeInRight" data-unfold-animation-out="fadeOutRight"
								   data-unfold-duration={500}>
									<i className="glph-icon flaticon-user" />
								</a>
							</li>
							<li className="nav-item">
								<a id="sidebarNavToggler1" href="javascript:;" role="button"
								   className="nav-link link-black-100 position-relative" aria-controls="sidebarContent1" aria-haspopup="true"
								   aria-expanded="false" data-unfold-event="click" data-unfold-hide-on-scroll="false"
								   data-unfold-target="#sidebarContent1" data-unfold-type="css-animation" data-unfold-overlay="{
                                    &quot;className&quot;: &quot;u-sidebar-bg-overlay&quot;,
                                    &quot;background&quot;: &quot;rgba(0, 0, 0, .7)&quot;,
                                    &quot;animationSpeed&quot;: 500
                                }" data-unfold-animation-in="fadeInRight" data-unfold-animation-out="fadeOutRight"
								   data-unfold-duration={500}>
              <span
				  className="position-absolute bg-dark width-16 height-16 rounded-circle d-flex align-items-center justify-content-center text-white font-size-n9 right-0">3</span>
									<i className="glph-icon flaticon-icon-126515" />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="masthead border-bottom position-relative" style={{marginBottom: '-1px' }}>
				<div className="container-fluid px-3 px-md-5 px-xl-8d75 py-2 py-md-0">
					<div className="d-flex align-items-center position-relative flex-wrap">
						<div className="offcanvas-toggler mr-4 mr-lg-8">
							<a id="sidebarNavToggler2" href="javascript:;" role="button" className="cat-menu"
							   aria-controls="sidebarContent2" aria-haspopup="true" aria-expanded="false" data-unfold-event="click"
							   data-unfold-hide-on-scroll="false" data-unfold-target="#sidebarContent2" data-unfold-type="css-animation"
							   data-unfold-overlay="{
                            &quot;className&quot;: &quot;u-sidebar-bg-overlay&quot;,
                            &quot;background&quot;: &quot;rgba(0, 0, 0, .7)&quot;,
                            &quot;animationSpeed&quot;: 100
                        }" data-unfold-animation-in="fadeInLeft" data-unfold-animation-out="fadeOutLeft"
							   data-unfold-duration={100}>
								<svg width="20px" height="18px">
									<path fillRule="evenodd" fill="rgb(25, 17, 11)"
										  d="M-0.000,-0.000 L20.000,-0.000 L20.000,2.000 L-0.000,2.000 L-0.000,-0.000 Z" />
									<path fillRule="evenodd" fill="rgb(25, 17, 11)"
										  d="M-0.000,8.000 L15.000,8.000 L15.000,10.000 L-0.000,10.000 L-0.000,8.000 Z" />
									<path fillRule="evenodd" fill="rgb(25, 17, 11)"
										  d="M-0.000,16.000 L20.000,16.000 L20.000,18.000 L-0.000,18.000 L-0.000,16.000 Z" />
								</svg>
							</a>
						</div>
						<div className="site-navigation mr-auto d-none d-xl-block">
							<ul className="nav">
								<li className="nav-item dropdown">
									<a id="homeDropdownInvoker" href="#"
									   className="dropdown-toggle nav-link link-black-100 mx-4 px-0 py-5 font-weight-medium d-flex align-items-center"
									   aria-haspopup="true" aria-expanded="false" data-unfold-event="hover"
									   data-unfold-target="#homeDropdownMenu" data-unfold-type="css-animation" data-unfold-duration={200}
									   data-unfold-delay={50} data-unfold-hide-on-scroll="true" data-unfold-animation-in="slideInUp"
									   data-unfold-animation-out="fadeOut">
										Home
									</a>
									<ul id="homeDropdownMenu" className="dropdown-unfold dropdown-menu font-size-2 rounded-0 border-gray-900"
										aria-labelledby="homeDropdownInvoker">
										<li><a href="/#" className="dropdown-item link-black-100">Home v13</a></li>
									</ul>
								</li>
								<li className="nav-item"><a href="#"
															className="nav-link link-black-100 mx-4 px-0 py-5 font-weight-medium active border-bottom border-primary border-width-2">Categories</a>
								</li>
								<li className="nav-item dropdown">
									<a id="shopDropdownInvoker" href="#"
									   className="dropdown-toggle nav-link link-black-100 mx-4 px-0 py-5 font-weight-medium d-flex align-items-center"
									   aria-haspopup="true" aria-expanded="false" data-unfold-event="hover"
									   data-unfold-target="#shopDropdownMenu" data-unfold-type="css-animation" data-unfold-duration={200}
									   data-unfold-delay={50} data-unfold-hide-on-scroll="true" data-unfold-animation-in="slideInUp"
									   data-unfold-animation-out="fadeOut">
										Shop
									</a>
									<ul id="shopDropdownMenu" className="dropdown-unfold dropdown-menu font-size-2 rounded-0 border-gray-900"
										aria-labelledby="shopDropdownInvoker">
										<li className="position-relative">
											<a id="shopDropdownsubmenuoneInvoker" href="#"
											   className="dropdown-toggle dropdown-item dropdown-item__sub-menu link-black-100 d-flex align-items-center justify-content-between"
											   aria-haspopup="true" aria-expanded="false" data-unfold-event="hover"
											   data-unfold-target="#shopDropdownsubMenuone" data-unfold-type="css-animation"
											   data-unfold-duration={200} data-unfold-delay={100} data-unfold-hide-on-scroll="true"
											   data-unfold-animation-in="slideInUp" data-unfold-animation-out="fadeOut">Shop List
											</a>
											<ul id="shopDropdownsubMenuone"
												className="dropdown-unfold dropdown-menu dropdown-sub-menu font-size-2 rounded-0 border-gray-900"
												aria-labelledby="shopDropdownsubmenuoneInvoker">
												<li><a href="../shop/v9.html" className="dropdown-item link-black-100">Shop List v9</a></li>
											</ul>
										</li>
										<li className="position-relative">
											<a id="shopDropdownsubmenutwoInvoker" href="#"
											   className="dropdown-toggle dropdown-item dropdown-item__sub-menu link-black-100 d-flex align-items-center justify-content-between"
											   aria-haspopup="true" aria-expanded="false" data-unfold-event="hover"
											   data-unfold-target="#shopDropdownsubMenutwo" data-unfold-type="css-animation"
											   data-unfold-duration={200} data-unfold-delay={100} data-unfold-hide-on-scroll="true"
											   data-unfold-animation-in="slideInUp" data-unfold-animation-out="fadeOut">Single Product
											</a>
											<ul id="shopDropdownsubMenutwo"
												className="dropdown-unfold dropdown-menu dropdown-sub-menu font-size-2 rounded-0 border-gray-900"
												aria-labelledby="shopDropdownsubmenutwoInvoker">
												<li><a href="../shop/single-product-v7.html" className="dropdown-item link-black-100">Shop Single
													v7</a></li>
											</ul>
										</li>
										<li><a href="../shop/cart.html" className="dropdown-item link-black-100">Shop cart</a></li>
										<li><a href="../shop/checkout.html" className="dropdown-item link-black-100">Shop checkout</a></li>
										<li><a href="../shop/my-account.html" className="dropdown-item link-black-100">Shop My Account</a></li>
										<li><a href="../shop/order-received.html" className="dropdown-item link-black-100">Shop Order
											Received</a>
										</li>
										<li><a href="../shop/order-tracking.html" className="dropdown-item link-black-100">Shop Order
											Tracking</a>
										</li>
										<li><a href="../shop/store-location.html" className="dropdown-item link-black-100">Shop Store
											Location</a>
										</li>
									</ul>
								</li>
								<li className="nav-item">
									<a id="featuresDropdownInvoker" href="#"
									   className="dropdown-toggle nav-link link-black-100 mx-4 px-0 py-5 font-weight-medium d-flex align-items-center"
									   aria-haspopup="true" aria-expanded="false" data-unfold-event="hover"
									   data-unfold-target="#featuresDropdownMenu" data-unfold-type="css-animation" data-unfold-duration={200}
									   data-unfold-delay={50} data-unfold-hide-on-scroll="true" data-unfold-animation-in="slideInUp"
									   data-unfold-animation-out="fadeOut">
										Pages
									</a>
									<div id="featuresDropdownMenu"
										 className="p-0 dropdown-unfold dropdown-menu megamenu font-size-2 rounded-0 border-gray-900"
										 aria-labelledby="featuresDropdownInvoker" style={{width: '1100px' }}>
										<div className="row no-gutters">
											<div className="col-8 px-1">
												<div className="px-5 py-2 pb-5">
													<div className="row">
														<div className="col-3">
															<ul className="menu list-unstyled">
																<li><span
																	className=" d-block link-black-100 py-3 font-size-3 font-weight-medium">Home</span>
																</li>
															</ul>
														</div>
														<div className="col-3">
															<ul className="menu list-unstyled">
																<li><span className=" d-block link-black-100 py-3 font-size-3 font-weight-medium">Single
                                Product</span></li>
																<li><span className=" d-block link-black-100 py-3 font-size-3 font-weight-medium">Shop
                                Pages</span></li>
																<li><a href="../shop/cart.html" className="d-block link-black-100 py-1">Shop cart</a></li>
																<li><a href="../shop/checkout.html" className="d-block link-black-100 py-1">Shop
																	checkout</a>
																</li>
																<li><a href="../shop/my-account.html" className="d-block link-black-100 py-1">Shop My
																	Account</a></li>
																<li><a href="../shop/order-received.html" className="d-block link-black-100 py-1">Shop Order
																	Received</a></li>
																<li><a href="../shop/order-tracking.html" className="d-block link-black-100 py-1">Shop Order
																	Tracking</a></li>
																<li><a href="../shop/store-location.html" className="d-block link-black-100 py-1">Shop Store
																	Location</a></li>
															</ul>
														</div>
														<div className="col-3">
															<ul className="menu list-unstyled">
																<li><span className=" d-block link-black-100 py-3 font-size-3 font-weight-medium">Shop
                                List</span></li>
																<li><span
																	className=" d-block link-black-100 py-3 font-size-3 font-weight-medium">
																</span>
																</li>
															</ul>
														</div>
														<div className="col-3">
															<ul className="menu list-unstyled">
																<li><span
																	className=" d-block link-black-100 py-3 font-size-3 font-weight-medium">Others</span>
																</li>
																<li><a href="../others/404.html" className="d-block link-black-100 py-1">404</a></li>
																<li><a href="../others/about.html" className="d-block link-black-100 py-1">About Us</a></li>
																<li><a href="../others/authors-list.html" className="d-block link-black-100 py-1">Authors
																	List</a></li>
																<li><a href="../others/authors-single.html" className="d-block link-black-100 py-1">Authors
																	Single</a></li>
																<li><a href="../others/coming-soon.html" className="d-block link-black-100 py-1">Coming
																	Soon</a></li>
																<li><a href="../others/contact.html" className="d-block link-black-100 py-1">Contact Us</a>
																</li>
																<li><a href="../others/faq.html" className="d-block link-black-100 py-1">FAQ</a></li>
																<li><a href="../others/pricing-table.html" className="d-block link-black-100 py-1">Pricing
																	Table</a></li>
																<li><a href="../others/terms-conditions.html" className="d-block link-black-100 py-1">Terms
																	Conditions</a></li>
																<li><a href="../../documentation/index.html"
																	   className="btn btn-primary mb-3 mb-md-0 mb-xl-3 mt-4 font-size-2 btn-block">Documentation</a>
																</li>
																<li><a href="../../starter/index.html"
																	   className="btn btn-secondary font-size-2 btn-block mb-2">Starter</a></li>
															</ul>
														</div>
													</div>
												</div>
											</div>
											<div className="col-4 bg-gray-200">
												<div className="banner px-8 py-5">
													<div className="banner__body">
														<h3 className="banner_text m-0">
															<span className="d-block mb-1 font-size-7 font-weight-regular">Deals in </span>
															<span className="d-block mb-2 font-size-10 text-primary font-weight-bold">Books</span>
														</h3>
														<a href="#" className="d-block link-black-100 mb-6">Shop Now</a>
														<div className="banner__image">
															<img src="../assets/img/280x213/img1.png" className="img-fluid" alt="image-description" />
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</li>
								<li className="nav-item dropdown">
									<Link id="blogDropdownInvoker" href="#"
									   className="dropdown-toggle nav-link link-black-100 mx-4 px-0 py-5 font-weight-medium d-flex align-items-center"
									   aria-haspopup="true" aria-expanded="false" data-unfold-event="hover"
									   data-unfold-target="#blogDropdownMenu" data-unfold-type="css-animation" data-unfold-duration={200}
									   data-unfold-delay={50} data-unfold-hide-on-scroll="true" data-unfold-animation-in="slideInUp"
									   data-unfold-animation-out="fadeOut" to={PATH.BLOG}>
										Blog
									</Link>
								</li>
								<li className="nav-item dropdown">
									<a id="pagesDropdownInvoker" href="#"
									   className="dropdown-toggle nav-link link-black-100 mx-4 px-0 py-5 font-weight-medium d-flex align-items-center"
									   aria-haspopup="true" aria-expanded="false" data-unfold-event="hover"
									   data-unfold-target="#pagesDropdownMenu" data-unfold-type="css-animation" data-unfold-duration={200}
									   data-unfold-delay={50} data-unfold-hide-on-scroll="true" data-unfold-animation-in="slideInUp"
									   data-unfold-animation-out="fadeOut">
										Others
									</a>
									<ul id="pagesDropdownMenu" className="dropdown-unfold dropdown-menu font-size-2 rounded-0 border-gray-900"
										aria-labelledby="pagesDropdownInvoker">
										<li><a href="../others/404.html" className="dropdown-item link-black-100">404</a></li>
										<li><a href="../others/about.html" className="dropdown-item link-black-100">About Us</a></li>
										<li><a href="../others/authors-list.html" className="dropdown-item link-black-100">Authors List</a></li>
										<li><a href="../others/authors-single.html" className="dropdown-item link-black-100">Authors Single</a>
										</li>
										<li><a href="../others/coming-soon.html" className="dropdown-item link-black-100">Coming Soon</a></li>
										<li><a href="../others/contact.html" className="dropdown-item link-black-100">Contact Us</a></li>
										<li><a href="../others/faq.html" className="dropdown-item link-black-100">FAQ</a></li>
										<li><a href="../others/pricing-table.html" className="dropdown-item link-black-100">Pricing Table</a>
										</li>
										<li><a href="../others/terms-conditions.html" className="dropdown-item link-black-100">Terms
											Conditions</a></li>
									</ul>
								</li>
							</ul>
						</div>
						<ul className="d-md-none nav mr-md-n3 ml-auto">
							<li className="nav-item">
								<a id="sidebarNavToggler9" href="javascript:;" role="button" className="px-2 nav-link link-black-100"
								   aria-controls="sidebarContent9" aria-haspopup="true" aria-expanded="false" data-unfold-event="click"
								   data-unfold-hide-on-scroll="false" data-unfold-target="#sidebarContent9" data-unfold-type="css-animation"
								   data-unfold-overlay="{
                                    &quot;className&quot;: &quot;u-sidebar-bg-overlay&quot;,
                                    &quot;background&quot;: &quot;rgba(0, 0, 0, .7)&quot;,
                                    &quot;animationSpeed&quot;: 500
                                }" data-unfold-animation-in="fadeInRight" data-unfold-animation-out="fadeOutRight"
								   data-unfold-duration={500}>
									<i className="glph-icon flaticon-user" />
								</a>
							</li>
						</ul>
						<div className="site-search ml-xl-0 ml-md-auto w-r-100 my-2 my-xl-0">
							<form className="form-inline">
								<div className="input-group">
									<div className="input-group-prepend">
										<i className="glph-icon flaticon-loupe input-group-text py-2d75 bg-white-100 border-white-100" />
									</div>
									<input className="form-control bg-white-100 min-width-380 py-2d75 height-4 border-white-100" type="search"
										   placeholder="Search for Books by Keyword ..." aria-label="Search" />
								</div>
								<button className="btn btn-outline-success my-2 my-sm-0 sr-only" type="submit">Search</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;