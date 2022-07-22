import React from 'react';
import {Link} from "react-router-dom";
import PATH from "../../routes/path";
import CsImage from "./CsImage";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ProductComponent = ({key,id,fileName,it,name,handleAddProduct}) => {
	return (
		<ul className="products" key={key}>
			<li className="product col" style={{listStyleType:'none'}}>
				<div className="product__inner overflow-hidden p-3 p-md-4d875">
					<div className="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
						<div className="woocommerce-loop-product__thumbnail">
							<Link to={PATH.BOOK_DETAIL} onClick={()=>onsubmit(id)} className="d-block"><CsImage uri={fileName} className="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid" alt="image-description" /></Link>
						</div>
						<div className="woocommerce-loop-product__body product__body pt-3 bg-white">
							{it?.categories.map((cate)=>(
								<div key={cate.id} className="text-uppercase font-size-1 mb-1 text-truncate"><a href="../shop/single-product-v1.html">{cate?.name}</a></div>
							))}

							<h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
								<a href="../shop/single-product-v1.html">{name}</a></h2>
							{it?.authors.map((authors)=>(
								<div key={authors.id} className="font-size-2  mb-1 text-truncate"><a href="others/authors-single.html" className="text-gray-700">{authors?.name}</a></div>
							))}
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
						<div className="product__hover d-flex align-items-center">
									<span style={{cursor:'pointer'}} onClick={handleAddProduct(it)} className="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip" data-placement="right" title="ADD TO CART">
										<span className="product__add-to-cart">ADD TO CART</span>
										<span className="product__add-to-cart-icon font-size-4"><i className="flaticon-icon-126515" /></span>
									</span>
							<a href="../shop/single-product-v1.html" className="mr-1 h-p-bg btn btn-outline-primary border-0">
								<i className="flaticon-switch" />
							</a>
							<a href="../shop/single-product-v1.html" className="h-p-bg btn btn-outline-primary border-0">
								<FontAwesomeIcon icon={['fas','heart']} />
							</a>
						</div>
					</div>
				</div>
			</li>
		</ul>
	);
};

export default ProductComponent;