import React, {useEffect} from 'react';
import CommonMain from "../CommonMain";
import {useBlogStore} from "../../stores/useBlogStore";
import CsImage from "../components/CsImage";
import Pagination from "../components/Pagination";

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
	console.log(data)
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
						<div className="tab-content">
							<div className="tab-pane fade show active" id="featured" role="tabpanel" aria-labelledby="featured-tab">
								<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
									{data.map((it,index)=>(
										<div className="col" key={index}>
											<div className="mb-5" >
												<a className="d-block mb-3" href="../blog/blog-single.html">
													<CsImage uri={it.fileName} style={{width:'100%'}}/>
													{/*<img src={`http://localhost:8080/image/${it.fileName}`} alt=""/>*/}
												</a>
												<div className="mb-2">
													<a className="font-size-2" href="../blog/blog-single.html">Romance</a>
												</div>
												<h6 className="font-size-26 crop-text-2 font-weight-medium text-lh-1dot4">
													<a href="../blog/blog-single.html">{it.title}</a>
												</h6>
												<p className="font-size-2 text-secondary-gray-700">
													{it.content}
												</p>
											</div>
									</div>
									))}

								</div>
							</div>
						</div>
					</div>
				</div>
				<Pagination/>
			</div>
		</CommonMain>
	);
};

export default BlogPage;