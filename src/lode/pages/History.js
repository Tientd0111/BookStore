import React, {useEffect, useState} from 'react';
import CommonMain from "../CommonMain";
import {useUserStore} from "../../stores/useUserStore";
import DetailBill from "../components/DetailBill";

const History = () => {

	const {find,data} = useUserStore(state=>({
		find: state.find,
		data: state.data
	}))
	const userId = localStorage.getItem('user')
	const id = JSON.parse(userId)?.id

	useEffect(()=>{
		find(id)
	},[])
	const [_id,setId] = useState()
	console.log(_id)
	return (
		<CommonMain>
			<div className="page-header border-bottom">
				<div className="container">
					<div className="d-md-flex justify-content-between align-items-center py-4">
						<h1 className="page-title font-size-3 font-weight-medium m-0 text-lh-lg">History</h1>
					</div>
				</div>
			</div>
			<div className={"container"} style={{textAlign:'center'}}>
				<table className="table">
					<thead>
					<tr>
						<th scope="col">Id</th>
						<th scope="col">Total Price</th>
						<th scope="col">Status</th>
						<th>#</th>
					</tr>
					</thead>
					<tbody>
					{data?.bills?.map((it,index)=>(
						<tr key={index}>
							<td>{it?.id}</td>
							<td>${it?.totalPrice}</td>
							<td>{it.status? 'success':'Order confirmation'}</td>
							<td>
								<span style={{cursor:"pointer"}} data-toggle="modal" data-target="#detail" onClick={()=>{
									setId(it?.id)
								}}>
									Detail
								</span>
							</td>
						</tr>
					))}
					</tbody>
				</table>
				<DetailBill billId={_id}/>
			</div>
		</CommonMain>
	);
};

export default History;