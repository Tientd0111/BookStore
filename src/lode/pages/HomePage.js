import React, {useEffect} from 'react';
import CommonMain from "../CommonMain";
import images from "../../assets/images/images";
import Slick from "../components/Slick";
import {useBookStore} from "../../stores/useBookStore";
import CsImage from "../components/CsImage";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Slick2 from "../components/Slick2";
import Slick3 from "../components/Slick3";
import {Link} from "react-router-dom";
import PATH from "../../routes/path";
import {useOrderStore} from "../../stores/useOrderStore";
import {useUserStore} from "../../stores/useUserStore";
const HomePage = ({handleAddProduct}) => {

	const {getBook,dataBook,getBookId} = useBookStore((state => ({
		getBook: state.getBook,
		dataBook: state.dataBook,
		getBookId: state.getBookId
	})))

	useEffect(()=>{
		getBook()
	},[])
	const listSale = dataBook.reduce(((previousValue, currentValue) => {
		if(currentValue?.saleprice > 0) {
			previousValue.push(currentValue)
		}
		return previousValue
	}), []);
	const onsubmit = async data => {
		await getBookId(data)

	}
	return (
		<CommonMain>
			<section className="space-bottom-3">
				<div className="bg-gray-200 space-2 space-lg-0 bg-img-hero" style={{backgroundImage: 'url(../assets/img/1920x588/img1.jpg)'}}>
					<div className="container">
						<div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
							<div className="carousel-inner">
								<div className="carousel-item active">
									<div className="js-slide">
										<div className="hero row min-height-588 align-items-center">
											<div className="col-lg-7 col-wd-6 mb-4 mb-lg-0">
												<div className="media-body mr-wd-4 align-self-center mb-4 mb-md-0">
													<p className="hero__pretitle text-uppercase font-weight-bold text-gray-400 mb-2" data-scs-animation-in="fadeInUp" data-scs-animation-delay={200}>The Bookworm Editors'</p>
													<h2 className="hero__title font-size-14 mb-4" data-scs-animation-in="fadeInUp" data-scs-animation-delay={300}>
														<span className="hero__title-line-1 font-weight-regular d-block">Featured Books of the</span>
														<span className="hero__title-line-2 font-weight-bold d-block">February</span>
													</h2>
													<a href="../shop/v1.html" className="btn btn-dark btn-wide rounded-0 hero__btn" data-scs-animation-in="fadeInLeft" data-scs-animation-delay={400}>See More</a>
												</div>
											</div>
											<div className="col-lg-5 col-wd-6" data-scs-animation-in="fadeInRight" data-scs-animation-delay={500}>
												<img className="img-fluid" src={images.banner1} alt="image-description" />
											</div>
										</div>
									</div>
								</div>
								<div className="carousel-item">
									<div className="js-slide">
										<div className="hero row min-height-588 align-items-center">
											<div className="col-lg-7 col-wd-6 mb-4 mb-lg-0">
												<div className="media-body mr-wd-4 align-self-center mb-4 mb-md-0">
													<p className="hero__pretitle text-uppercase font-weight-bold text-gray-400 mb-2" data-scs-animation-in="fadeInUp" data-scs-animation-delay={200}>The Bookworm Editors'</p>
													<h2 className="hero__title font-size-14 mb-4" data-scs-animation-in="fadeInUp" data-scs-animation-delay={300}>
														<span className="hero__title-line-1 font-weight-regular d-block">Featured Books of the</span>
														<span className="hero__title-line-2 font-weight-bold d-block">February</span>
													</h2>
													<a href="../shop/v1.html" className="btn btn-dark btn-wide rounded-0 hero__btn" data-scs-animation-in="fadeInLeft" data-scs-animation-delay={400}>See More</a>
												</div>
											</div>
											<div className="col-lg-5 col-wd-6" data-scs-animation-in="fadeInRight" data-scs-animation-delay={500}>
												<img className="img-fluid" src={images.banner1} alt="image-description" />
											</div>
										</div>
									</div>
								</div>
								<div className="carousel-item">
									<div className="js-slide">
										<div className="hero row min-height-588 align-items-center">
											<div className="col-lg-7 col-wd-6 mb-4 mb-lg-0">
												<div className="media-body mr-wd-4 align-self-center mb-4 mb-md-0">
													<p className="hero__pretitle text-uppercase font-weight-bold text-gray-400 mb-2" data-scs-animation-in="fadeInUp" data-scs-animation-delay={200}>The Bookworm Editors'</p>
													<h2 className="hero__title font-size-14 mb-4" data-scs-animation-in="fadeInUp" data-scs-animation-delay={300}>
														<span className="hero__title-line-1 font-weight-regular d-block">Featured Books of the</span>
														<span className="hero__title-line-2 font-weight-bold d-block">February</span>
													</h2>
													<a href="../shop/v1.html" className="btn btn-dark btn-wide rounded-0 hero__btn" data-scs-animation-in="fadeInLeft" data-scs-animation-delay={400}>See More</a>
												</div>
											</div>
											<div className="col-lg-5 col-wd-6" data-scs-animation-in="fadeInRight" data-scs-animation-delay={500}>
												<img className="img-fluid" src={images.banner1} alt="image-description" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="space-bottom-3">
				<div className="container">
					<header className="mb-5 d-md-flex justify-content-between align-items-center">
						<h2 className="font-size-7 mb-3 mb-md-0">Bestselling Books</h2>
					</header>
					<Slick handleAddProduct={handleAddProduct} data={
						dataBook.map((it)=>(
								<ul className="products" key={it.id}>
									<li className="product col" key={it.id} style={{listStyleType:'none'}}>
										<div className="product__inner overflow-hidden p-3 p-md-4d875">
											<div className="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
												<div className="woocommerce-loop-product__thumbnail">
													<Link to={PATH.BOOK_DETAIL} onClick={()=>onsubmit(it.id)} className="d-block"><CsImage uri={it.fileName} className="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid" alt="image-description" /></Link>
												</div>
												<div className="woocommerce-loop-product__body product__body pt-3 bg-white">
													<h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
														<a href="../shop/single-product-v1.html">{it.name}</a></h2>
													<div className="price d-flex align-items-center font-weight-medium font-size-3" style={{gap:'10px'}}>
														<span className="woocommerce-Price-amount amount">
															{it.saleprice === 0 ?
																<span className="woocommerce-Price-currencySymbol">${it.price}</span> :
																<span style={{display:'flex',alignItems:"center",gap:"10px"}}>
																	<span>${it.saleprice}</span>
																	<del className="font-size-1 font-weight-regular text-gray-700"><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>{it.price}</span></del>

																</span>
															}
														</span>
													</div>
												</div>
												<div className="product__hover d-flex align-items-center">
									<span style={{cursor:'pointer'}} onClick={()=>handleAddProduct(it)} className="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip" data-placement="right" title="ADD TO CART">
										<span className="product__add-to-cart">ADD TO CART</span>
										<span className="product__add-to-cart-icon font-size-4"><i className="flaticon-icon-126515" /></span>
									</span>
													<a href="../shop/single-product-v1.html" className="mr-1 h-p-bg btn btn-outline-primary border-0">
														<FontAwesomeIcon icon={['fas','eye']} />
													</a>
													<a href="../shop/single-product-v1.html" className="h-p-bg btn btn-outline-primary border-0">
														<FontAwesomeIcon icon={['fas','heart']} />
													</a>
												</div>
											</div>
										</div>
									</li>
								</ul>
							))
					}/>
				</div>
			</section>
			<section className="space-bottom-3">
				<header className="mb-4 container">
					<h2 className="font-size-7 text-center">Featured Books</h2>
				</header>
				<div className="container">
					<ul className="nav justify-content-md-center nav-gray-700 mb-5 flex-nowrap flex-md-wrap overflow-auto overflow-md-visible" id="onsale" role="tablist">
						<li className="nav-item mx-5 mb-1 flex-shrink-0 flex-md-shrink-1">
							<a className="nav-link px-0 active" id="onsale-tab" data-toggle="tab" href="#onsale" role="tab" aria-controls="onsale" aria-selected="false">On Sale</a>
						</li>
					</ul>
					<div className="tab-content" id="featuredBooksContent">
						<div className="tab-pane fade show active" id="onsale" role="tabpanel" aria-labelledby="onsale-tab">
								<Slick data={listSale.map((it)=>(
									<ul className="products" key={it.id}>
										<li className="product col" key={it.id} style={{listStyleType:'none'}}>
											<div className="product__inner overflow-hidden p-3 p-md-4d875">
												<div className="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
													<div className="woocommerce-loop-product__thumbnail">
														<Link to={PATH.BOOK_DETAIL} onClick={()=>onsubmit(it.id)} className="d-block"><CsImage uri={it.fileName} className="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid" alt="image-description" /></Link>
													</div>
													<div className="woocommerce-loop-product__body product__body pt-3 bg-white">
														<h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
															<a href="../shop/single-product-v1.html">{it.name}</a></h2>
														<div className="price d-flex align-items-center font-weight-medium font-size-3" style={{gap:'10px'}}>
														<span className="woocommerce-Price-amount amount">
															<span style={{display:'flex',alignItems:"center",gap:"10px"}}>
																<span>${it.saleprice}</span>
																<del className="font-size-1 font-weight-regular text-gray-700"><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>{it.price}</span></del>

															</span>
														</span>
														</div>
													</div>
													<div className="product__hover d-flex align-items-center">
														<span style={{cursor:'pointer'}} onClick={()=>handleAddProduct(it)}  className="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip" data-placement="right" title="ADD TO CART">
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
									</ul>
								))}/>
						</div>
					</div>
				</div>
			</section>
			<section className="space-bottom-3 banner-with-product">
				<div className="container">
					<header className="mb-5 d-md-flex justify-content-between align-items-center">
						<h2 className="font-size-7 mb-3 mb-md-0">New Releases</h2>
						<ul className="nav nav-gray-700 flex-nowrap flex-md-wrap overflow-auto overflow-md-visible" role="tablist">
							<li className="nav-item mx-4 flex-shrink-0 flex-md-shrink-1">
								<a className="nav-link pb-1 px-0 active" id="history-tab" data-toggle="tab" href="#history-1" role="tab" aria-controls="history-1" aria-selected="true">History</a>
							</li>
						</ul>
					</header>
					<div className="tab-content u-slick__tab">
						<div className="tab-pane fade show active" id="history-1" role="tabpanel" aria-labelledby="history-tab">
							<div className="row no-gutters">
								<div className="col-xl-4 border-right-0 border bg-gray-200 px-1">
									<div className="banner px-lg-8 px-3 py-4 py-xl-0 d-flex h-100 align-items-center justify-content-center">
										<div className="banner__body">
											<div className="banner__image pb-1 mb-5">
												<img className="img-fluid" src={images.milion} alt="image-description" />
											</div>
											<h3 className="banner_text m-0">
												<span className="d-block mb-1 font-size-10 font-weight-regular">Get Extra</span>
												<span className="d-block mb-3 font-size-12 text-primary font-weight-medium">Sale -25%</span>
												<span className="d-block mb-5 text-uppercase font-size-7 font-weight-regular text-gray-400">On Order
                            Over $100</span>
											</h3>
										</div>
									</div>
								</div>
								<div className="col-xl-8">
									<ul className="products list-unstyled row no-gutters row-cols-2 row-cols-lg-3 row-cols-wd-4 border-top border-left my-0">
										{dataBook.map((item)=>(
											<li className="product col">
												<div className="product__inner overflow-hidden p-3 p-md-4d875">
													<div className="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
														<div className="woocommerce-loop-product__thumbnail">
															<Link to={PATH.BOOK_DETAIL} onClick={()=>onsubmit(item.id)} className="d-block"><CsImage uri={item.filename} className="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid" alt="image-description" /></Link>
														</div>
														<div className="woocommerce-loop-product__body product__body pt-3 bg-white">
															<h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
																<a href="../shop/single-product-v1.html">{item.name}</a></h2>
															<div className="price d-flex align-items-center font-weight-medium font-size-3" style={{gap:'10px'}}>
														<span className="woocommerce-Price-amount amount">
															{item.saleprice === 0 ?
																<span className="woocommerce-Price-currencySymbol">${item.price}</span> :
																<span style={{display:'flex',alignItems:"center",gap:"10px"}}>
																	<span>${item.saleprice}</span>
																	<del className="font-size-1 font-weight-regular text-gray-700"><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>{item.price}</span></del>

																</span>
															}
														</span>
															</div>
														</div>
														<div className="product__hover d-flex align-items-center">
															<span style={{cursor:'pointer'}} onClick={()=>handleAddProduct(item)} className="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip" data-placement="right" title="ADD TO CART">
																<span className="product__add-to-cart">ADD TO CART</span>
																<span className="product__add-to-cart-icon font-size-4"><i className="flaticon-icon-126515" /></span>
															</span>
															<Link to={PATH.BOOK_DETAIL} onClick={()=>onsubmit(item.id)} className="mr-1 h-p-bg btn btn-outline-primary border-0">
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
						</div>
					</div>
				</div>
			</section>
			<section className="space-bottom-3">
				<div className="container box">
					<header className="mb-5 d-md-flex justify-content-between align-items-center">
						<h2 className="font-size-7 mb-3 mb-md-0">Biographies Books</h2>
					</header>
					<Slick3 handleAddProduct={handleAddProduct} data={
						dataBook.map((it)=>(
							<div key={it.id} className="product product__card border-right">
								<div className="media p-3 p-md-4d875">
									<Link to={PATH.BOOK_DETAIL} onClick={()=>onsubmit(it.id)} className="d-block"><CsImage uri={it.fileName}/></Link>
									<div className="media-body ml-4d875">

										<h2 className="woocommerce-loop-product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark"><a href="/#">
											{it.name}
										</a></h2>

										<div className="price d-flex align-items-center font-weight-medium font-size-3" style={{gap:'10px'}}>
														<span className="woocommerce-Price-amount amount">
															{it.saleprice === 0 ?
																<span className="woocommerce-Price-currencySymbol">${it.price}</span> :
																<span style={{display:'flex',alignItems:"center",gap:"10px"}}>
																	<span>${it.price}</span>
																	<del className="font-size-1 font-weight-regular text-gray-700"><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>{it.saleprice}</span></del>

																</span>
															}
														</span>
										</div>
									</div>
								</div>
							</div>
						))
					}/>
				</div>
			</section>
		</CommonMain>
	);
};

export default React.memo(HomePage);