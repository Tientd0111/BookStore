import React from 'react';
import Slider from "react-slick";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {library} from "@fortawesome/fontawesome-svg-core";
library.add(fas, fab);

const Slick3 = ({handleAddProduct,data}) => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1
	};

	return (
		<Slider {...settings} >
			{data}
		</Slider>
	);
};

export default Slick3;