import React, {useEffect} from 'react';
import CommonMain from "../CommonMain";
import {useBlogStore} from "../../stores/useBlogStore";

const BlogPage = () => {
	const {getBlog,data} = useBlogStore(state => ({
		getBlog: state.getBlog,
		data: state.dataBlog
	}))
	useEffect(()=>{
		async function fetchData(){
			await getBlog()
		}
		fetchData()
	},[])
	return (
		<CommonMain>
			<div className="mb-5 mb-lg-8">
				<div className="mb-5">
					<div className="mb-5 mb-lg-7 pb-xl-1">
						<div className="page-header border-bottom">
							<div className="container">
								<div className="d-md-flex justify-content-between align-items-center py-4">
									<h1 className="page-title font-size-3 font-weight-medium m-0 text-lh-lg">Blog List</h1>
									<nav className="woocommerce-breadcrumb font-size-2">
										<a href="../home/index.html" className="h-primary">Home</a>
										<span className="breadcrumb-separator mx-1"><i className="fas fa-angle-right" /></span>
										<span>Blog List</span>
									</nav>
								</div>
							</div>
						</div>
					</div>
					<div className="container">
						<ul
							className="nav justify-content-md-center nav-gray-700 mb-5 flex-nowrap flex-md-wrap overflow-auto overflow-md-visible"
							id="featuredBooks" role="tablist">
							<li className="nav-item mx-5 mb-1 flex-shrink-0 flex-md-shrink-1">
								<a className="nav-link px-0 active" id="featured-tab" data-toggle="tab" href="#featured" role="tab"
								   aria-controls="featured" aria-selected="true">History
								</a>
							</li>
							<li className="nav-item mx-5 mb-1 flex-shrink-0 flex-md-shrink-1">
								<a className="nav-link px-0" id="onsale-tab" data-toggle="tab" href="#onsale" role="tab"
								   aria-controls="onsale" aria-selected="false">Science &amp; Math</a>
							</li>
							<li className="nav-item mx-5 mb-1 flex-shrink-0 flex-md-shrink-1">
								<a className="nav-link px-0" id="mostviewed-tab" data-toggle="tab" href="#mostviewed" role="tab"
								   aria-controls="mostviewed" aria-selected="false">Romance</a>
							</li>
							<li className="nav-item mx-5 mb-1 flex-shrink-0 flex-md-shrink-1">
								<a className="nav-link px-0" id="view-tab" data-toggle="tab" href="#view" role="tab" aria-controls="view"
								   aria-selected="false">Travel</a>
							</li>
						</ul>
						<div className="tab-content">
							<div className="tab-pane fade show active" id="featured" role="tabpanel" aria-labelledby="featured-tab">
								<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
									{data.map((it,index)=>(

									))}
									<div className="col">
										<div className="mb-5">
											<a className="d-block mb-3" href="../blog/blog-single.html">
												<img className="img-fluid" src="../assets/img/445x300/img1.jpg" alt="Image-Description" />
											</a>
											<div className="mb-2">
												<a className="font-size-2" href="../blog/blog-single.html">Romance</a>
											</div>
											<h6 className="font-size-26 crop-text-2 font-weight-medium text-lh-1dot4">
												<a href="../blog/blog-single.html">Signficant reading has a more info
													number</a>
											</h6>
											<p className="font-size-2 text-secondary-gray-700">It’s nice to win awards. Last
												night, the Ueno team in Reykjavík came home from the Icelandic Web Awards.
											</p>
											<div className="font-size-2 text-secondary-gray-700">
												<span>10 November, 2020</span>
												<span className="ml-3">0 comments</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="tab-pane fade" id="onsale" role="tabpanel" aria-labelledby="onsale-tab">
								<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
									<div className="col">
										<div className="mb-5">
											<a className="d-block mb-3" href="../blog/blog-single.html">
												<img className="img-fluid" src="../assets/img/445x300/img5.jpg" alt="Image-Description" />
											</a>
											<div className="mb-2">
												<a className="font-size-2" href="../blog/blog-single.html">Romance</a>
											</div>
											<h6 className="font-size-26 crop-text-2 font-weight-medium text-lh-1dot4">
												<a href="../blog/blog-single.html">Books with Horrible Dating Advice</a>
											</h6>
											<p className="font-size-2 text-secondary-gray-700">It’s nice to win awards. Last
												night, the Ueno team in Reykjavík came home from the Icelandic Web Awards.
											</p>
											<div className="font-size-2 text-secondary-gray-700">
												<span>10 November, 2020</span>
												<span className="ml-3">0 comments</span>
											</div>
										</div>
									</div>
									<div className="col">
										<div className="mb-5">
											<a className="d-block mb-3" href="../blog/blog-single.html">
												<img className="img-fluid" src="../assets/img/445x300/img2.jpg" alt="Image-Description" />
											</a>
											<div className="mb-2">
												<a className="font-size-2" href="../blog/blog-single.html">Romance</a>
											</div>
											<h6 className="font-size-26 crop-text-2 font-weight-medium text-lh-1dot4">
												<a href="../blog/blog-single.html">Activities of the Frankfurt Book
													International</a>
											</h6>
											<p className="font-size-2 text-secondary-gray-700">It’s nice to win awards. Last
												night, the Ueno team in Reykjavík came home from the Icelandic Web Awards.
											</p>
											<div className="font-size-2 text-secondary-gray-700">
												<span>10 November, 2020</span>
												<span className="ml-3">0 comments</span>
											</div>
										</div>
									</div>
									<div className="col">
										<div className="mb-5">
											<a className="d-block mb-3" href="../blog/blog-single.html">
												<img className="img-fluid" src="../assets/img/445x300/img3.jpg" alt="Image-Description" />
											</a>
											<div className="mb-2">
												<a className="font-size-2" href="../blog/blog-single.html">Romance</a>
											</div>
											<h6 className="font-size-26 crop-text-2 font-weight-medium text-lh-1dot4">
												<a href="../blog/blog-single.html">The London Book Fair is to be packed with
													exciting</a>
											</h6>
											<p className="font-size-2 text-secondary-gray-700">It’s nice to win awards. Last
												night, the Ueno team in Reykjavík came home from the Icelandic Web Awards.
											</p>
											<div className="font-size-2 text-secondary-gray-700">
												<span>10 November, 2020</span>
												<span className="ml-3">0 comments</span>
											</div>
										</div>
									</div>
									<div className="col">
										<div className="mb-5">
											<a className="d-block mb-3" href="../blog/blog-single.html">
												<img className="img-fluid" src="../assets/img/445x300/img1.jpg" alt="Image-Description" />
											</a>
											<div className="mb-2">
												<a className="font-size-2" href="../blog/blog-single.html">Romance</a>
											</div>
											<h6 className="font-size-26 crop-text-2 font-weight-medium text-lh-1dot4">
												<a href="../blog/blog-single.html">Signficant reading has a more info
													number</a>
											</h6>
											<p className="font-size-2 text-secondary-gray-700">It’s nice to win awards. Last
												night, the Ueno team in Reykjavík came home from the Icelandic Web Awards.
											</p>
											<div className="font-size-2 text-secondary-gray-700">
												<span>10 November, 2020</span>
												<span className="ml-3">0 comments</span>
											</div>
										</div>
									</div>
									<div className="col">
										<div className="mb-5 mb-md-0">
											<a className="d-block mb-3" href="../blog/blog-single.html">
												<img className="img-fluid" src="../assets/img/445x300/img4.jpg" alt="Image-Description" />
											</a>
											<div className="mb-2">
												<a className="font-size-2" href="../blog/blog-single.html">Romance</a>
											</div>
											<h6 className="font-size-26 crop-text-2 font-weight-medium text-lh-1dot4">
												<a href="../blog/blog-single.html">Should You Feel Embarrassed for Reading
													Kids Books?</a>
											</h6>
											<p className="font-size-2 text-secondary-gray-700">It’s nice to win awards. Last
												night, the Ueno team in Reykjavík came home from the Icelandic Web Awards.
											</p>
											<div className="font-size-2 text-secondary-gray-700">
												<span>10 November, 2020</span>
												<span className="ml-3">0 comments</span>
											</div>
										</div>
									</div>
									<div className="col">
										<div>
											<a className="d-block mb-3" href="../blog/blog-single.html">
												<img className="img-fluid" src="../assets/img/445x300/img6.jpg" alt="Image-Description" />
											</a>
											<div className="mb-2">
												<a className="font-size-2" href="../blog/blog-single.html">Romance</a>
											</div>
											<h6 className="font-size-26 crop-text-2 font-weight-medium text-lh-1dot4">
												<a href="../blog/blog-single.html">A New Restaurant &amp; Bookshop Opens in
													Raleigh</a>
											</h6>
											<p className="font-size-2 text-secondary-gray-700">It’s nice to win awards. Last
												night, the Ueno team in Reykjavík came home from the Icelandic Web Awards.
											</p>
											<div className="font-size-2 text-secondary-gray-700">
												<span>10 November, 2020</span>
												<span className="ml-3">0 comments</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="tab-pane fade" id="mostviewed" role="tabpanel" aria-labelledby="mostviewed-tab">
								<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
									<div className="col">
										<div className="mb-5">
											<a className="d-block mb-3" href="../blog/blog-single.html">
												<img className="img-fluid" src="../assets/img/445x300/img5.jpg" alt="Image-Description" />
											</a>
											<div className="mb-2">
												<a className="font-size-2" href="../blog/blog-single.html">Romance</a>
											</div>
											<h6 className="font-size-26 crop-text-2 font-weight-medium text-lh-1dot4">
												<a href="../blog/blog-single.html">Books with Horrible Dating Advice</a>
											</h6>
											<p className="font-size-2 text-secondary-gray-700">It’s nice to win awards. Last
												night, the Ueno team in Reykjavík came home from the Icelandic Web Awards.
											</p>
											<div className="font-size-2 text-secondary-gray-700">
												<span>10 November, 2020</span>
												<span className="ml-3">0 comments</span>
											</div>
										</div>
									</div>
									<div className="col">
										<div className="mb-5">
											<a className="d-block mb-3" href="../blog/blog-single.html">
												<img className="img-fluid" src="../assets/img/445x300/img2.jpg" alt="Image-Description" />
											</a>
											<div className="mb-2">
												<a className="font-size-2" href="../blog/blog-single.html">Romance</a>
											</div>
											<h6 className="font-size-26 crop-text-2 font-weight-medium text-lh-1dot4">
												<a href="../blog/blog-single.html">Activities of the Frankfurt Book
													International</a>
											</h6>
											<p className="font-size-2 text-secondary-gray-700">It’s nice to win awards. Last
												night, the Ueno team in Reykjavík came home from the Icelandic Web Awards.
											</p>
											<div className="font-size-2 text-secondary-gray-700">
												<span>10 November, 2020</span>
												<span className="ml-3">0 comments</span>
											</div>
										</div>
									</div>
									<div className="col">
										<div className="mb-5">
											<a className="d-block mb-3" href="../blog/blog-single.html">
												<img className="img-fluid" src="../assets/img/445x300/img3.jpg" alt="Image-Description" />
											</a>
											<div className="mb-2">
												<a className="font-size-2" href="../blog/blog-single.html">Romance</a>
											</div>
											<h6 className="font-size-26 crop-text-2 font-weight-medium text-lh-1dot4">
												<a href="../blog/blog-single.html">The London Book Fair is to be packed with
													exciting</a>
											</h6>
											<p className="font-size-2 text-secondary-gray-700">It’s nice to win awards. Last
												night, the Ueno team in Reykjavík came home from the Icelandic Web Awards.
											</p>
											<div className="font-size-2 text-secondary-gray-700">
												<span>10 November, 2020</span>
												<span className="ml-3">0 comments</span>
											</div>
										</div>
									</div>
									<div className="col">
										<div className="mb-5">
											<a className="d-block mb-3" href="../blog/blog-single.html">
												<img className="img-fluid" src="../assets/img/445x300/img1.jpg" alt="Image-Description" />
											</a>
											<div className="mb-2">
												<a className="font-size-2" href="../blog/blog-single.html">Romance</a>
											</div>
											<h6 className="font-size-26 crop-text-2 font-weight-medium text-lh-1dot4">
												<a href="../blog/blog-single.html">Signficant reading has a more info
													number</a>
											</h6>
											<p className="font-size-2 text-secondary-gray-700">It’s nice to win awards. Last
												night, the Ueno team in Reykjavík came home from the Icelandic Web Awards.
											</p>
											<div className="font-size-2 text-secondary-gray-700">
												<span>10 November, 2020</span>
												<span className="ml-3">0 comments</span>
											</div>
										</div>
									</div>
									<div className="col">
										<div className="mb-5">
											<a className="d-block mb-3" href="../blog/blog-single.html">
												<img className="img-fluid" src="../assets/img/445x300/img4.jpg" alt="Image-Description" />
											</a>
											<div className="mb-2">
												<a className="font-size-2" href="../blog/blog-single.html">Romance</a>
											</div>
											<h6 className="font-size-26 crop-text-2 font-weight-medium text-lh-1dot4">
												<a href="../blog/blog-single.html">Should You Feel Embarrassed for Reading
													Kids Books?</a>
											</h6>
											<p className="font-size-2 text-secondary-gray-700">It’s nice to win awards. Last
												night, the Ueno team in Reykjavík came home from the Icelandic Web Awards.
											</p>
											<div className="font-size-2 text-secondary-gray-700">
												<span>10 November, 2020</span>
												<span className="ml-3">0 comments</span>
											</div>
										</div>
									</div>
									<div className="col">
										<div>
											<a className="d-block mb-3" href="../blog/blog-single.html">
												<img className="img-fluid" src="../assets/img/445x300/img6.jpg" alt="Image-Description" />
											</a>
											<div className="mb-2">
												<a className="font-size-2" href="../blog/blog-single.html">Romance</a>
											</div>
											<h6 className="font-size-26 crop-text-2 font-weight-medium text-lh-1dot4">
												<a href="../blog/blog-single.html">A New Restaurant &amp; Bookshop Opens in
													Raleigh</a>
											</h6>
											<p className="font-size-2 text-secondary-gray-700">It’s nice to win awards. Last
												night, the Ueno team in Reykjavík came home from the Icelandic Web Awards.
											</p>
											<div className="font-size-2 text-secondary-gray-700">
												<span>10 November, 2020</span>
												<span className="ml-3">0 comments</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="tab-pane fade" id="view" role="tabpanel" aria-labelledby="view-tab">
								<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
									<div className="col">
										<div className="mb-5">
											<a className="d-block mb-3" href="../blog/blog-single.html">
												<img className="img-fluid" src="../assets/img/445x300/img1.jpg" alt="Image-Description" />
											</a>
											<div className="mb-2">
												<a className="font-size-2" href="../blog/blog-single.html">Romance</a>
											</div>
											<h6 className="font-size-26 crop-text-2 font-weight-medium text-lh-1dot4">
												<a href="../blog/blog-single.html">Signficant reading has a more info
													number</a>
											</h6>
											<p className="font-size-2 text-secondary-gray-700">It’s nice to win awards. Last
												night, the Ueno team in Reykjavík came home from the Icelandic Web Awards.
											</p>
											<div className="font-size-2 text-secondary-gray-700">
												<span>10 November, 2020</span>
												<span className="ml-3">0 comments</span>
											</div>
										</div>
									</div>
									<div className="col">
										<div className="mb-5">
											<a className="d-block mb-3" href="../blog/blog-single.html">
												<img className="img-fluid" src="../assets/img/445x300/img2.jpg" alt="Image-Description" />
											</a>
											<div className="mb-2">
												<a className="font-size-2" href="../blog/blog-single.html">Romance</a>
											</div>
											<h6 className="font-size-26 crop-text-2 font-weight-medium text-lh-1dot4">
												<a href="../blog/blog-single.html">Activities of the Frankfurt Book
													International</a>
											</h6>
											<p className="font-size-2 text-secondary-gray-700">It’s nice to win awards. Last
												night, the Ueno team in Reykjavík came home from the Icelandic Web Awards.
											</p>
											<div className="font-size-2 text-secondary-gray-700">
												<span>10 November, 2020</span>
												<span className="ml-3">0 comments</span>
											</div>
										</div>
									</div>
									<div className="col">
										<div className="mb-5">
											<a className="d-block mb-3" href="../blog/blog-single.html">
												<img className="img-fluid" src="../assets/img/445x300/img3.jpg" alt="Image-Description" />
											</a>
											<div className="mb-2">
												<a className="font-size-2" href="../blog/blog-single.html">Romance</a>
											</div>
											<h6 className="font-size-26 crop-text-2 font-weight-medium text-lh-1dot4">
												<a href="../blog/blog-single.html">The London Book Fair is to be packed with
													exciting</a>
											</h6>
											<p className="font-size-2 text-secondary-gray-700">It’s nice to win awards. Last
												night, the Ueno team in Reykjavík came home from the Icelandic Web Awards.
											</p>
											<div className="font-size-2 text-secondary-gray-700">
												<span>10 November, 2020</span>
												<span className="ml-3">0 comments</span>
											</div>
										</div>
									</div>
									<div className="col">
										<div className="mb-5">
											<a className="d-block mb-3" href="../blog/blog-single.html">
												<img className="img-fluid" src="../assets/img/445x300/img4.jpg" alt="Image-Description" />
											</a>
											<div className="mb-2">
												<a className="font-size-2" href="../blog/blog-single.html">Romance</a>
											</div>
											<h6 className="font-size-26 crop-text-2 font-weight-medium text-lh-1dot4">
												<a href="../blog/blog-single.html">Should You Feel Embarrassed for Reading
													Kids Books?</a>
											</h6>
											<p className="font-size-2 text-secondary-gray-700">It’s nice to win awards. Last
												night, the Ueno team in Reykjavík came home from the Icelandic Web Awards.
											</p>
											<div className="font-size-2 text-secondary-gray-700">
												<span>10 November, 2020</span>
												<span className="ml-3">0 comments</span>
											</div>
										</div>
									</div>
									<div className="col">
										<div>
											<a className="d-block mb-3" href="../blog/blog-single.html">
												<img className="img-fluid" src="../assets/img/445x300/img5.jpg" alt="Image-Description" />
											</a>
											<div className="mb-2">
												<a className="font-size-2" href="../blog/blog-single.html">Romance</a>
											</div>
											<h6 className="font-size-26 crop-text-2 font-weight-medium text-lh-1dot4">
												<a href="../blog/blog-single.html">Books with Horrible Dating Advice</a>
											</h6>
											<p className="font-size-2 text-secondary-gray-700">It’s nice to win awards. Last
												night, the Ueno team in Reykjavík came home from the Icelandic Web Awards.
											</p>
											<div className="font-size-2 text-secondary-gray-700">
												<span>10 November, 2020</span>
												<span className="ml-3">0 comments</span>
											</div>
										</div>
									</div>
									<div className="col">
										<div>
											<a className="d-block mb-3" href="../blog/blog-single.html">
												<img className="img-fluid" src="../assets/img/445x300/img6.jpg" alt="Image-Description" />
											</a>
											<div className="mb-2">
												<a className="font-size-2" href="../blog/blog-single.html">Romance</a>
											</div>
											<h6 className="font-size-26 crop-text-2 font-weight-medium text-lh-1dot4">
												<a href="../blog/blog-single.html">A New Restaurant &amp; Bookshop Opens in
													Raleigh</a>
											</h6>
											<p className="font-size-2 text-secondary-gray-700">It’s nice to win awards. Last
												night, the Ueno team in Reykjavík came home from the Icelandic Web Awards.
											</p>
											<div className="font-size-2 text-secondary-gray-700">
												<span>10 November, 2020</span>
												<span className="ml-3">0 comments</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<nav aria-label="Page navigation example">
					<ul
						className="pagination pagination__custom justify-content-md-center flex-nowrap flex-md-wrap overflow-auto overflow-md-visble mb-0">
						<li className="flex-shrink-0 flex-md-shrink-1 page-item"><a className="page-link" href="#">Previous</a></li>
						<li className="flex-shrink-0 flex-md-shrink-1 page-item"><a className="page-link" href="#">1</a></li>
						<li className="flex-shrink-0 flex-md-shrink-1 page-item"><a className="page-link" href="#">2</a></li>
						<li className="flex-shrink-0 flex-md-shrink-1 page-item active" aria-current="page"><a className="page-link"
																											   href="#">3</a></li>
						<li className="flex-shrink-0 flex-md-shrink-1 page-item"><a className="page-link" href="#">4</a></li>
						<li className="flex-shrink-0 flex-md-shrink-1 page-item"><a className="page-link" href="#">5</a></li>
						<li className="flex-shrink-0 flex-md-shrink-1 page-item"><a className="page-link" href="#">Next</a></li>
					</ul>
				</nav>
			</div>
		</CommonMain>
	);
};

export default BlogPage;