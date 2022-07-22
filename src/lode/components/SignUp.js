import React, {useRef} from 'react';
import {useForm} from "react-hook-form";
import {useUserStore} from "../../stores/useUserStore";
import FormInput from "./FormInput";
import ButtonBase from "./ButtonBase";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const SignUp = () => {
	const {loading, register} = useUserStore(state => ({
		loading: state.loading,
		register: state.register,
	}))
	const closeRef = useRef()
	const {handleSubmit, control } = useForm();
	const onSubmit = async data => {
		await register(data)
		closeRef.current?.click()
	};

	// const closeRef = useRef()
	return (
		<div className="modal fade login-modal sign-in" id="signin" tabIndex={-1} role="dialog" aria-labelledby="signin" aria-hidden="true">
			<div className="modal-dialog modal-dialog-centered " role="document">
				<div className="modal-content">
					{/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
					<div className="modal-header" style={{borderBottom:"none"}}>
						<button onClick={()=>closeRef.current?.click()} type="button" className="close" data-dismiss="modal" aria-label="Close" ref={closeRef} style={{padding:"4px 16px"}}>
							<span style={{color:"#fff"}} aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body" style={{padding:"3rem"}}>
						<div className="header-area" style={{display:'flex'}}>
							<span style={{color:"#fb8691"}}><FontAwesomeIcon icon={['fas','user']}/></span>
						</div>
						<div>
							<h4 className="title" style={{textAlign:"center"}}>{'Sign Up !'}</h4>
						</div>
						<div className="form-area">
							<form onSubmit={handleSubmit(onSubmit)}>
								<FormInput control={control} name={'username'} placeholder={'Username'} />
								<FormInput control={control} name={'password'} placeholder={'Password'} type={'password'}/>
								<FormInput control={control} name={'name'} placeholder={'Full Name'} />
								<FormInput control={control} name={'phone'} placeholder={'Phone'} />
								<FormInput control={control} name={'email'} placeholder={'Email'}/>
								<FormInput control={control} name={'address'} placeholder={'Address'}/>
								<div style={{display:'flex',gap:'10px'}}>
									<FormInput control={control} type={"radio"} name={'gender'} placeholder={'Address'} value={true}/> <span style={{marginTop:"10px"}}>male</span>
									<FormInput control={control} type={"radio"} name={'gender'} placeholder={'Address'} value={false}/> <span style={{marginTop:"10px"}}>female</span>
								</div>

								<ButtonBase text={'Đăng ký'} isLoading={loading}/>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;