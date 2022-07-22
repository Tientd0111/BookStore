import React, {useEffect} from 'react';
import CommonMain from "../CommonMain";
import {useBookStore} from "../../stores/useBookStore";
import CsImage from "../components/CsImage";
import {useCategoryStore} from "../../stores/useCategoryStore";
import {useAuthorStore} from "../../stores/useAuthorStore";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import PATH from "../../routes/path";

const ShopPage = ({handleAddProduct}) => {
	const {getBook,dataBook,getBookId,data} = useBookStore(state => ({
		getBook: state.getBook,
		dataBook: state.dataBook,
		getBookId: state.getBookId,
		data: state.data
	}))
	const {getCate,cate} = useCategoryStore(state => ({
		getCate: state.getCate,
		cate: state.cate
	}))
	const {getAuthor,authors} = useAuthorStore(state => ({
		getAuthor: state.getAuthor,
		authors: state.authors
	}))
	useEffect(()=>{
		async function fetchData(){
			await getBook()
			await getCate()
			await getAuthor()
		}
		fetchData()
	},[])

	const onsubmit = async data => {
		await getBookId(data)

	}
	return (
		<CommonMain>
			<div className="page-header border-bottom mb-8">
				<div className="container">
					<div className="d-md-flex justify-content-between align-items-center py-4">
						<h1 className="page-title font-size-3 font-weight-medium m-0 text-lh-lg">Shop</h1>
					</div>
				</div>
			</div>

			<div className="site-content space-bottom-3" id="content">
				<div className="container">
					<div className="row">
						<div className={"col-md-3"}>
							<div id="secondary" className="sidebar widget-area order-1" role="complementary">
								<div id="widgetAccordion">
									<div id="woocommerce_product_categories-2" className="widget p-4d875 border woocommerce widget_product_categories">
										<div id="widgetHeadingOne" className="widget-head">
											<a className="d-flex align-items-center justify-content-between text-dark" href="#" data-toggle="collapse" data-target="#widgetCollapseOne" aria-expanded="true" aria-controls="widgetCollapseOne">
												<h3 className="widget-title mb-0 font-weight-medium font-size-3">Categories</h3>
												<svg className="mins" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="15px" height="2px">
													<path fillRule="evenodd" fill="rgb(22, 22, 25)" d="M0.000,-0.000 L15.000,-0.000 L15.000,2.000 L0.000,2.000 L0.000,-0.000 Z" />
												</svg>
												<svg className="plus" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="15px" height="15px">
													<path fillRule="evenodd" fill="rgb(22, 22, 25)" d="M15.000,8.000 L9.000,8.000 L9.000,15.000 L7.000,15.000 L7.000,8.000 L0.000,8.000 L0.000,6.000 L7.000,6.000 L7.000,-0.000 L9.000,-0.000 L9.000,6.000 L15.000,6.000 L15.000,8.000 Z" />
												</svg>
											</a>
										</div>
										<div id="widgetCollapseOne" className="mt-3 widget-content collapse show" aria-labelledby="widgetHeadingOne" data-parent="#widgetAccordion">
											<ul className="product-categories">
												{cate.map((it)=>(
													<li key={it.id} className="cat-item cat-item-9 cat-parent">
														<a href="../shop/v3.html">{it.name}</a>
													</li>
												))}
											</ul>
										</div>
									</div>
									<div id="Authors" className="widget widget_search widget_author p-4d875 border">
										<div id="widgetHeading21" className="widget-head">
											<a className="d-flex align-items-center justify-content-between text-dark" href="#" data-toggle="collapse" data-target="#widgetCollapse21" aria-expanded="true" aria-controls="widgetCollapse21">
												<h3 className="widget-title mb-0 font-weight-medium font-size-3">Author</h3>
												<svg className="mins" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="15px" height="2px">
													<path fillRule="evenodd" fill="rgb(22, 22, 25)" d="M0.000,-0.000 L15.000,-0.000 L15.000,2.000 L0.000,2.000 L0.000,-0.000 Z" />
												</svg>
												<svg className="plus" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="15px" height="15px">
													<path fillRule="evenodd" fill="rgb(22, 22, 25)" d="M15.000,8.000 L9.000,8.000 L9.000,15.000 L7.000,15.000 L7.000,8.000 L0.000,8.000 L0.000,6.000 L7.000,6.000 L7.000,-0.000 L9.000,-0.000 L9.000,6.000 L15.000,6.000 L15.000,8.000 Z" />
												</svg>
											</a>
										</div>
										<div id="widgetCollapse21" className="mt-4 widget-content collapse show" aria-labelledby="widgetHeading21" data-parent="#widgetAccordion">
											<ul className="product-categories">
												{authors.map((it)=>(
													<li key={it.id} className="cat-item cat-item-9 cat-parent">
														<a href="../others/authors-single.html">{it.name}</a>
													</li>
												))}
											</ul>
										</div>
									</div>
									<div id="Featuredbooks" className="widget p-4d875 border">
										<div id="widgetHeading25" className="widget-head">
											<a className="d-flex align-items-center justify-content-between text-dark" href="#" data-toggle="collapse" data-target="#widgetCollapse25" aria-expanded="true" aria-controls="widgetCollapse25">
												<h3 className="widget-title mb-0 font-weight-medium font-size-3">Featured Books</h3>
												<svg className="mins" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="15px" height="2px">
													<path fillRule="evenodd" fill="rgb(22, 22, 25)" d="M0.000,-0.000 L15.000,-0.000 L15.000,2.000 L0.000,2.000 L0.000,-0.000 Z" />
												</svg>
												<svg className="plus" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="15px" height="15px">
													<path fillRule="evenodd" fill="rgb(22, 22, 25)" d="M15.000,8.000 L9.000,8.000 L9.000,15.000 L7.000,15.000 L7.000,8.000 L0.000,8.000 L0.000,6.000 L7.000,6.000 L7.000,-0.000 L9.000,-0.000 L9.000,6.000 L15.000,6.000 L15.000,8.000 Z" />
												</svg>
											</a>
										</div>
										<div id="widgetCollapse25" className="mt-5 widget-content collapse show" aria-labelledby="widgetHeading25" data-parent="#widgetAccordion">
											{dataBook.map((it)=>(
												<div className="mb-5" key={it.id}>
													<div className="media d-md-flex">
														<Link to={PATH.BOOK_DETAIL} onClick={()=>onsubmit(it.id)} className="d-block">
															<CsImage uri={it.fileName}/>
														</Link>
														<div className="media-body ml-3 pl-1">
															<h6 className="font-size-2 text-lh-md font-weight-normal">
																<Link to={PATH.BOOK_DETAIL} onClick={()=>onsubmit(it.id)}>{it.name}</Link>
															</h6>
															<span className="font-weight-medium">${it.price}</span>
														</div>
													</div>
												</div>
											))}
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className={"col-md-9"}>
							<div id="primary" className="content-area order-2">
								<div className="tab-content" id="pills-tabContent">
									<div className="tab-pane fade show active" id="pills-one-example1" role="tabpanel" aria-labelledby="pills-one-example1-tab">
										<ul className="products list-unstyled row no-gutters row-cols-2 row-cols-lg-3 row-cols-wd-4 border-top border-left mb-6">
											{dataBook.map((it)=>(
												<li className="product col" key={it.id}>
													<div className="product__inner overflow-hidden p-3 p-md-4d875">
														<div className="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
															<div className="woocommerce-loop-product__thumbnail">
																<a href="/#" className="d-block"><CsImage uri={it.fileName} className="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid" alt="image-description" /></a>
															</div>
															<div className="woocommerce-loop-product__body product__body pt-3 bg-white">
																{it.categories?.map((item)=>(
																	<div key={item.id} className="text-uppercase font-size-1 mb-1 text-truncate"><a href="../shop/single-product-v1.html">{item.name}</a></div>
																))}
																<h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark"><a href="../shop/single-product-v1.html">{it.name}</a></h2>
																{it.authors?.map((item)=>(
																	<div key={item.id} className="font-size-2  mb-1 text-truncate"><a href="../others/authors-single.html" className="text-gray-700">{item.name}</a></div>
																))}
																<div className="price d-flex align-items-center font-weight-medium font-size-3">
																	<span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>{it.price}</span>
																</div>
															</div>
															<div className="product__hover d-flex align-items-center">
																<span onClick={()=>handleAddProduct(it)} className="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip" data-placement="right" title data-original-title="ADD TO CART">
																	<span className="product__add-to-cart">ADD TO CART</span>
																	<span className="product__add-to-cart-icon font-size-4"><i className="flaticon-icon-126515" /></span>
																</span>
																<Link to={PATH.BOOK_DETAIL} onClick={()=>onsubmit(it.id)} className="mr-1 h-p-bg btn btn-outline-primary border-0">
																	<FontAwesomeIcon icon={['fas','eye']}/>
																</Link>
																<a href="../shop/single-product-v1.html" className="h-p-bg btn btn-outline-primary border-0">
																	<FontAwesomeIcon icon={['fas','heart']}/>
																</a>
															</div>
														</div>
													</div>
												</li>
											))}
										</ul>
									</div>
								</div>
								<nav aria-label="Page navigation example">
									<ul className="pagination pagination__custom justify-content-md-center flex-nowrap flex-md-wrap overflow-auto overflow-md-visble">
										<li className="flex-shrink-0 flex-md-shrink-1 page-item"><a className="page-link" href="#">Previous</a></li>
										<li className="flex-shrink-0 flex-md-shrink-1 page-item"><a className="page-link" href="#">1</a></li>
										<li className="flex-shrink-0 flex-md-shrink-1 page-item"><a className="page-link" href="#">2</a></li>
										<li className="flex-shrink-0 flex-md-shrink-1 page-item active" aria-current="page"><a className="page-link" href="#">3</a></li>
										<li className="flex-shrink-0 flex-md-shrink-1 page-item"><a className="page-link" href="#">4</a></li>
										<li className="flex-shrink-0 flex-md-shrink-1 page-item"><a className="page-link" href="#">5</a></li>
										<li className="flex-shrink-0 flex-md-shrink-1 page-item"><a className="page-link" href="#">Next</a></li>
									</ul>
								</nav>
							</div>
						</div>

					</div>
				</div>
			</div>
		</CommonMain>
	);
};

export default React.memo(ShopPage);