import React, {useRef} from 'react';
import {Link, useHistory} from "react-router-dom";
import PATH from "../../routes/path";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useForm} from "react-hook-form";
import {useUserStore} from "../../stores/useUserStore";
import ButtonBase from "./ButtonBase";
import FormInput from "./FormInput";
import {toast} from "react-toastify";
import images from "../../assets/images/images";


library.add(fas, fab);

const Header = () => {

	const { handleSubmit, control, reset } = useForm({ shouldUseNativeValidation: true });
	const _user = localStorage.getItem('login')
	const logoutSection = async () => {
		localStorage.removeItem('login')
		localStorage.removeItem('key')
		localStorage.removeItem('user')
		localStorage.setItem('cart',JSON.stringify([]))
		toast.success("Logout success")
		window.location.reload()
	}
	const {user,loading, login} = useUserStore(state => ({
		loading: state.loading,
		login: state.login,
		user: state.user
	}));

	const onSubmit = async data => {
	 	const {isAuth} = await login(data)

		if(isAuth) {
			localStorage.setItem('login', data.username)
			reset({username: '', password: ''})
			closeRef.current?.click()
		}
	};

	const c = localStorage.getItem('cart')
	const cart = JSON.parse(c)
	const closeRef = useRef()
	return (
		<header id="site-header" className="site-header__v1">
			<div className="topbar border-bottom d-none d-md-block">
				<div className="container-fluid px-2 px-md-5 px-xl-8d75">
					<div className="topbar__nav d-md-flex justify-content-between align-items-center">
						<ul className="topbar__nav--left nav ml-md-n3">
							<li className="nav-item"><a href="#" className="nav-link link-black-100">
								<FontAwesomeIcon icon={['fas','question-circle']}/>
								Can we help you?</a></li>
							<li className="nav-item"><a href="tel:+1246-345-0695" className="nav-link link-black-100">
								<FontAwesomeIcon icon={['fas','phone']} />
								+1 246-345-0695</a></li>
						</ul>
						<ul className="topbar__nav--right nav mr-md-n3">
							<li className="nav-item"><a href="#" className="nav-link link-black-100" >
								<FontAwesomeIcon icon={['fas','heart']}/></a>
							</li>
							<li className="nav-item" >
								{_user === null?
									<span>
										<a className="nav-link link-black-100" href="/#" role="button"
										   id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
										   aria-expanded="false" >
											<FontAwesomeIcon icon={['fas','user']} />
										</a>
										<span className="dropdown-menu" style={{padding:"0",textAlign:"center"}} aria-labelledby="dropdownMenuLink">
											<span className="dropdown-item" data-toggle={"modal"} data-target={"#login"} style={{padding:'0'}} >Sign in</span>
											<a href="/#" className={"dropdown-item"} data-toggle={"modal"} data-target={"#signin"}>
															Sign up
														</a>
										</span>
									</span>
									:
									<span style={{lineHeight:"38px"}}>
										<a href="/#" role="button"
										   id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
										   aria-expanded="false">
											{_user}
										</a>
										<span className="dropdown-menu" style={{padding:"0",textAlign:"center"}} aria-labelledby="dropdownMenuLink">
											<span className="dropdown-item" style={{padding:'0'}} onClick={()=>logoutSection()}>Log out</span>
											<Link to={PATH.HISTORY} className="dropdown-item" style={{padding:'0'}} >History</Link>
										</span>

									</span>
								}
							</li>
							<li className="nav-item">
								<Link to={PATH.CART} role="button" className="nav-link link-black-100 position-relative">
								<span className="position-absolute bg-dark width-16 height-16 rounded-circle
								d-flex align-items-center justify-content-center text-white font-size-n9 right-0">{!!cart ? cart?.length :'0'}</span>
									<FontAwesomeIcon icon={['fas','shopping-cart']} />
								</Link>
							</li>

						</ul>
					</div>
				</div>
			</div>
			<div className="masthead border-bottom position-relative" style={{marginBottom: '-1px' }}>
				<div className="container-fluid px-3 px-md-5 px-xl-8d75 py-2 py-md-0">
					<div className="d-flex align-items-center position-relative flex-wrap">
						<div className={"site-branding pr-md-4"}>
							<Link to={PATH.HOME}><span style={{display:"flex"}}><span style={{fontSize:"23px",fontWeight:"bold",color:"#000"}}>book</span><img src={images.logo} style={{width:"30px",height:'30px'}}/><span style={{fontSize:"23px",fontWeight:"bold",color:"#000"}}>orm</span></span></Link>
						</div>
						<div className="site-navigation mr-auto d-none d-xl-block">
							<ul className="nav">
								<li className="nav-item ">
									<Link to={PATH.HOME} className="nav-link link-black-100 mx-4 px-0 py-5 font-weight-medium d-flex align-items-center">HOME</Link>
								</li>
								<li className="nav-item">
									<Link to={PATH.BLOG} className="link-black-100 mx-4 px-0 py-5 font-weight-medium d-flex align-items-center">BLOG</Link>
								</li>
								<li className="nav-item">
									<Link to={PATH.SHOP} className="link-black-100 mx-4 px-0 py-5 font-weight-medium d-flex align-items-center">SHOP</Link>
								</li>
							</ul>
						</div>
						<ul className="d-md-none nav mr-md-n3 ml-auto">
							<li className="nav-item" style={{lineHeight:"38px"}}>
								{localStorage.getItem('login') === null?
									<span>
										<a className="nav-link link-black-100" href="/#" role="button"
										   id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
										   aria-expanded="false" >
											<FontAwesomeIcon icon={['fas','user']} />
										</a>
										<span className="dropdown-menu" style={{padding:"0",textAlign:"center"}} aria-labelledby="dropdownMenuLink">
											<span className="dropdown-item" data-toggle={"modal"} data-target={"#login"} style={{padding:'0'}} >Sign in</span>
											<span className="dropdown-item" data-toggle={"modal"} data-target={"#signup"} style={{padding:'0'}} >Sign up</span>
										</span>
									</span>:
									<span>
										<a href="/#" role="button"
										   id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
										   aria-expanded="false">
											{localStorage.getItem('login')}
										</a>
										<span className="dropdown-menu" style={{padding:"0",textAlign:"center"}} aria-labelledby="dropdownMenuLink">
											<a className="dropdown-item" href="/#">Log out</a>
										</span>

									</span>
								}
							</li>
						</ul>
						<div className="site-search ml-xl-0 ml-md-auto w-r-100 my-2 my-xl-0">
							<form className="form-inline">
								<div className="input-group">
									<div className="input-group-prepend" style={{alignItems:"center"}}>
										<FontAwesomeIcon icon={['fas','search']}/>
									</div>
									<input className="form-control bg-white-100 min-width-380 py-2d75 height-4 border-white-100" type="search"
										   placeholder="Search for Books by Keyword ..." aria-label="Search" />
								</div>
								<button className="btn btn-outline-success my-2 my-sm-0 sr-only" type="submit">Search</button>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div className="modal fade login-modal" id="login" tabIndex={-1} role="dialog" aria-labelledby="login" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered" role="document">
					<div className="modal-content">
						<div className="modal-header" style={{borderBottom:"none"}}>
							<button onClick={()=>closeRef.current?.click()} ref={closeRef} type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">×</span>
							</button>
						</div>
						<div className="modal-body" style={{padding:"3rem"}}>
							<div className="header-area" style={{display:'flex'}}>
								<span style={{color:"#fb8691"}}><FontAwesomeIcon icon={['fas','user']}/></span>
							</div>
							<div><h4 className="title" style={{textAlign:"center"}}>Sign In</h4></div>
							<div className="form-area">
								<form onSubmit={handleSubmit(onSubmit)}>
									<FormInput name={'username'} rules={{required: "Vui lòng nhập tên đăng nhập."}}
											   placeholder={'Username'} control={control}/>
									<FormInput name={'password'} rules={{required: "Vui lòng nhập mật khẩu."}}
											   placeholder={'Password'} control={control}
											   type={'password'}/>
									<ButtonBase text={'Login'}/>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>

		</header>


	);
};

export default Header;