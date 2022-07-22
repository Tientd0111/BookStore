import React, {forwardRef, useEffect, useState} from 'react';
import {callService} from "../../apis/baseRequest";

const DetailBill = forwardRef((props, ref) => {
	const {billId} = props
	const [dataResult, setDataResult] = useState(null)

	useEffect(()=>{
		if(billId)
			callService( 'bill/findById?id=' + billId, 'GET', {}, true)
				.then((res)=>{
					setDataResult(res)
				}).catch()
	},[billId])


	return (
		<div className="modal" tabIndex="-1" role="dialog" id='detail'>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Order detail</h5>
						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">
						{dataResult?.books.map((it)=>(
							<div>
								<span key={it.id}>{it?.name} x {it?.quantity}</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
});

export default DetailBill;