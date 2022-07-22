import React, {useEffect, useState} from 'react';
import axios from "axios";
import {environmentConfig} from "../apis";
import {Skeleton} from "antd";

const CsImage = ({uri}) => {
	const [stUrl, setStUrl] = useState('')

	useEffect(()=>{
		async function getImage() {
			const blob = (await axios.get(environmentConfig.BASE_URI + 'uploads/' + uri, {responseType: 'blob'}))?.data
			setStUrl(URL.createObjectURL(blob))
		}
		getImage()
	},[uri])

	if(stUrl === '') {
		return <Skeleton.Image/>
	}

	return (
		<img src={stUrl} alt={uri} style={{width:"100%",height:"auto"}}/>
	);
};

export default React.memo(CsImage);