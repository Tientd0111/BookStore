import React, {useEffect} from 'react';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import PATH from '../../routes/path';
import {useUserStore} from "../../stores/useUserStore";
import {useCookies} from "react-cookie";

library.add(fas, fab);

const Header = () => {

	const lotterys = [
		{
			name: 'Miền bắc',
			link: '?name=mienbac'
		},
		{
			name: 'Miền trung',
			link: '?name=mientrung'
		},
		{
			name: 'Miền nam',
			link: '?name=miennam'
		},
		{
			name: 'Lô đề siêu tốc',
			link: '?name=sieutoc'
		}
	]
	const {user, setUser} = useUserStore(state =>({
		user: state.user,
		setUser: state.setUser
	}))
	const [cookies, removeCookie] = useCookies(['cookie-user']);

	useEffect(()=>{
		setUser(cookies['cookie-user'])
	},[])
<<<<<<< HEAD

=======
>>>>>>> e8c15180445f953116f5edd31de6e9bf5bfad168
	return (
		<header className="header">
			{/* Top Header Area Start */}
			<section className="top-header">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="content">
								<div className="left-content">
									<ul className="left-list">
<<<<<<< HEAD
										{/*<li>*/}
										{/*	<p>*/}
										{/*		<FontAwesomeIcon icon={['fas','headset']} />{' Hỗ trợ'}*/}
										{/*	</p>*/}
										{/*</li>*/}
=======
										<li>
											<p>
												<FontAwesomeIcon icon={['fas','headset']} />{' Hỗ trợ'}
											</p>
										</li>
										<li>
											<p>
												<FontAwesomeIcon icon={['fas','envelope']} /><a href="/#">{' datph@hqltech.vn'}</a>
											</p>
										</li>
										{/* <li>
											<div className="language-selector">
												<select name="language" className="language">
													<option value={1}>English</option>
													<option value={2}>Việt Nam</option>
												</select>
											</div>
										</li> */}
>>>>>>> e8c15180445f953116f5edd31de6e9bf5bfad168
									</ul>
								</div>
								<div className="right-content">
									<ul className="right-list">
										<li>
											<div className="cart-icon tm-dropdown">
												<FontAwesomeIcon icon={['fas','cart-arrow-down']} />
												<span className="cart-count">10</span>
												<div className="tm-dropdown-menu">
													<ul className="list">
														<li className="list-item">
															<div className="close">
																<FontAwesomeIcon icon={['fas','times']} />
															</div>
															<ul className="number-list">
																<li>24</li>
																<li>25</li>
																<li>26</li>
																<li>27</li>
																<li>28</li>
															</ul>
														</li>
													</ul>
													<a href="/#" className="link-btn">{'Thanh toán'}</a>
												</div>
											</div>
										</li>
										<li className={"nav-item dropdown li_cha"}>
<<<<<<< HEAD
=======
											{/*{userCook?userCook.name*/}
											{/*	: <a href="/#" className={"sign-in"} data-toggle={"modal"} data-target={"#login"}>Đăng nhập</a>*/}
											{/*}*/}
>>>>>>> e8c15180445f953116f5edd31de6e9bf5bfad168
											{user?.name === undefined?(<a href="/#" className={"sign-in"} data-toggle={"modal"} data-target={"#login"}>
												{'Đăng nhập'}
											</a>): user?.name}
											{user?.name !== undefined?<ul className={"ul1"}>
<<<<<<< HEAD
												<li className={"li1"}><a href="/#" onClick={()=>{
													removeCookie("cookie-user")
													setUser(undefined)
												}}>Đăng xuất</a></li>
=======
												<li className={"li1"}><a href="/#" className={removeCookie("cookie-user")}>Đăng xuất</a></li>
>>>>>>> e8c15180445f953116f5edd31de6e9bf5bfad168
											</ul>:''}
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Top Header Area End */}
			{/*Main-Menu Area Start*/}
			<div className="mainmenu-area">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<nav className="navbar navbar-expand-lg navbar-light">
								<a className="navbar-brand" href="/#"/>
								<a className="navbar-brand" href="#">
									{/* <img src="https://hqltech.vn/assets/images/logo.svg" alt="" /> */}
								</a>
								<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_menu" aria-controls="main_menu" aria-expanded="false" aria-label="Toggle navigation">
									<span className="navbar-toggler-icon" />
								</button>
								<div className="collapse navbar-collapse fixed-height" id="main_menu">
									<ul className="navbar-nav ml-auto">
										<li className="nav-item">
<<<<<<< HEAD
											<Link className="nav-link active" to={PATH.HOME}>
												{'Trang chủ'}
												<div className="mr-hover-effect"/>
											</Link>
										</li>
										<li className="nav-item">
											<Link className="nav-link" to={PATH.PAY}>
												{'Nạp thẻ'}
												<div className="mr-hover-effect"/>
=======
											<Link className="nav-link active" to={PATH.HOME} role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												{'Trang chủ'}
											</Link>
										</li>
										<li className="nav-item">
											<Link className="nav-link" to={PATH.PAY} role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												{'Nạp thẻ'}
>>>>>>> e8c15180445f953116f5edd31de6e9bf5bfad168
											</Link>
										</li>
										<li className="nav-item">
											<a className="nav-link" href="/#">{'Trò chơi'}
												<div className="mr-hover-effect" /></a>
										</li>
										<li className="nav-item dropdown">
											<a className="nav-link dropdown-toggle"
											   href="#" role="button"
											   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												{'Lô đề'}
												<div className="mr-hover-effect" />
											</a>
											<ul className="dropdown-menu">
												{lotterys.map((item,index)=>(
													<li key={index}>
														<Link className="dropdown-item" to={`${PATH.LOTTERY}${item.link}`}>
															<FontAwesomeIcon icon={['fas','angle-double-right']} /> {item.name}
														</Link>
													</li>
												))}
											</ul>
										</li>
										<li className="nav-item">
											<Link className="nav-link " to={PATH.RE} role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												{'Đăng ký'}
											</Link>
										</li>
										<li className="nav-item">
											<a className="nav-link" href="/#">Liên hệ
												<div className="mr-hover-effect" /></a>
										</li>
									</ul>
									<a href="/#" className="mybtn1" data-toggle="modal" data-target="#signin"> {'Tham gia ngay'}</a>
								</div>
							</nav>
						</div>
					</div>
				</div>
			</div>
			{/*Main-Menu Area Start*/}
		</header>
	)
}

export default Header
