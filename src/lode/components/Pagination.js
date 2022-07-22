import React, {useState} from 'react';

const Pagination = () => {
	const [currentPage,setCurrentPage] = useState()
	const [newsPerPage,setNewsPerPage] = useState()

	const indexOfLastNews = currentPage * newsPerPage
	const indexOfFirstNews = indexOfLastNews - newsPerPage

	const pageNumbers = [];
	return (
		<nav aria-label="Page navigation example">
			<ul
				className="pagination pagination__custom justify-content-md-center flex-nowrap flex-md-wrap overflow-auto overflow-md-visble mb-0">

				<li className="flex-shrink-0 flex-md-shrink-1 page-item"><a className="page-link" href="#">1</a></li>
			</ul>
		</nav>
	);
};

export default Pagination;