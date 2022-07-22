import React, {useState} from 'react';
import CommonMain from "../CommonMain";
import {useBookStore} from "../../stores/useBookStore";
import CsImage from "../components/CsImage";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ProductDetail = ({handleAddProduct}) => {
	const {data} = useBookStore(state => ({
		data: state.data
	}))

	const [quantity,setQuantity] = useState(1)

	console.log(quantity)
	return (
		<CommonMain>
			<div className="page-header border-bottom">
				<div className="container">
					<div className="d-md-flex justify-content-between align-items-center py-4">
						<h1 className="page-title font-size-3 font-weight-medium m-0 text-lh-lg">Shop Single</h1>
					</div>
				</div>
			</div>
			<div id="primary" className="content-area">
				<main id="main" className="site-main ">
					<div className="product">
						<div className="container">
							<div className="row">
								<div className="col-md-5 woocommerce-product-gallery woocommerce-product-gallery--with-images images">
									<figure className="woocommerce-product-gallery__wrapper pt-8 mb-0">
										<div className="js-slick-carousel u-slick" data-pagi-classes="text-center u-slick__pagination my-4">
											<div className="js-slide">
												<CsImage uri={data?.fileName}/>
											</div>
										</div>
									</figure>
								</div>
								<div className="col-md-7 pl-0 summary entry-summary border-left">
									<div className="space-top-2 px-4 px-xl-7 border-bottom pb-5">
										<h1 className="product_title entry-title font-size-7 mb-3">{data?.name}</h1>
										<div className="font-size-2 mb-4">
											{data?.authors.map((item,index)=>(
												<span key={index} className="ml-3 font-weight-medium">By ({item.name})</span>
											))}
										</div>
										<p className="price font-size-22 font-weight-medium mb-3">
											<span className="woocommerce-Price-amount amount">
											  	<span className="woocommerce-Price-currencySymbol">$</span>{data?.price}
											</span>
											{data?.saleprice === 0 ? '':
												<span className="woocommerce-Price-amount amount">
											  		<span className="woocommerce-Price-currencySymbol"> - $</span>{data?.saleprice}
												</span>
											}
										</p>
										<div className="woocommerce-product-details__short-description font-size-2 mb-5">
											<p className>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
												ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
												nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat.</p>
										</div>
										<form className="cart d-md-flex align-items-center" method="post" encType="multipart/form-data">
											<span onClick={()=>handleAddProduct(data)}
													className="btn btn-dark border-0 rounded-0 p-3 min-width-250 ml-md-4 single_add_to_cart_button button alt">Add
												to cart</span>
										</form>
									</div>
									<div className="px-4 px-xl-7 py-5 d-flex align-items-center">
										<ul className="list-unstyled nav">
											<li className="mr-6 mb-4 mb-md-0">
												<a href="#" className="h-primary"><FontAwesomeIcon icon={['fas','heart']}/> Add to Wishlist</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className="js-scroll-nav mb-10">
							<div className="woocommerce-tabs wc-tabs-wrapper  2 mx-lg-auto">
								<div id="Description" className>
									<div className="border-top border-bottom">
										<ul
											className="container tabs wc-tabs nav justify-content-md-center flex-nowrap flex-md-wrap overflow-auto overflow-md-visble">
											<li className="flex-shrink-0 flex-md-shrink-1 nav-item active">
												<a className="nav-link py-4 font-weight-medium active" href="#Description">
													Description
												</a>
											</li>
										</ul>
									</div>
									<div className="tab-content font-size-2 container">
										<div className="row">
											<div className="col-xl-8 offset-xl-2">
												<div
													className="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content wc-tab pt-9">
													<p className="mb-0">We aim to show you accurate product information. Manufacturers, suppliers and
														others provide what you see here, and we have not verified it. See our disclaimer</p>
													<p className="mb-0">#1 New York Times Bestseller</p>
													<p className="mb-0">A Reese Witherspoon x Hello Sunshine Book Club Pick</p>
													<p className="mb-4">"I can't even express how much I love this book! I didn't want this story to
														end!"--Reese Witherspoon</p>
													<p className="mb-4">"Painfully beautiful."--The New York Times Book Review</p>
													<p>"Perfect for fans of Barbara Kingsolver."--Bustle</p>
													<p className="mb-4">For years, rumors of the "Marsh Girl" have haunted Barkley Cove, a quiet town on
														the North Carolina coast. So in late 1969, when handsome Chase Andrews is found dead, the locals
														immediately suspect Kya Clark, the so-called Marsh Girl. But Kya is not what they say. Sensitive
														and intelligent, she has survived for years alone in the marsh that she calls home, finding
														friends in the gulls and lessons in the sand. Then the time comes when she yearns to be touched
														and loved. When two young men from town become intrigued by her wild beauty, Kya opens herself to
														a new life--until the unthinkable happens.</p>
													<p className="mb-4">Perfect for fans of Barbara Kingsolver and Karen Russell, Where the Crawdads
														Sing is at once an exquisite ode to the natural world, a heartbreaking coming-of-age story, and a
														surprising tale of possible murder. Owens reminds us that we are forever shaped by the children we
														once were, and that we are all subject to the beautiful and violent secrets that nature keeps</p>
													<p>WHERE THE CRAWDADS LP</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</main>
			</div>
		</CommonMain>
	);
};

export default React.memo(ProductDetail);