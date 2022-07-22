import React, {useEffect, useState} from 'react';
import axios from "axios";

const CsImage = ({uri}) => {
	const [stUrl, setStUrl] = useState('')

	useEffect(()=>{
		async function getImage() {
			// eslint-disable-next-line no-useless-concat
			const blob = (await axios.get('http://localhost:8080/' + 'image/' + uri, {responseType: 'blob'}))?.data
			setStUrl(URL.createObjectURL(blob))
		}
		getImage()
	},[uri])


	return (
		<img src={stUrl} alt={uri} style={{width:"100%",height:"auto"}}/>
	);
};

export default React.memo(CsImage);