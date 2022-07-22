import React from 'react';

const Footer = () => {
	return (
		<footer>
			<div className="border-top space-top-3">
				<div className="border-bottom pb-5 space-bottom-lg-3">
					<div className="container">
						<div className="space-bottom-2 space-bottom-md-3">
							<div className="text-center mb-5">
								<h5 className="font-size-7 font-weight-medium">Join Our Newsletter</h5>
								<p className="text-gray-700">Signup to be the first to hear about exclusive deals, special offers and
									upcoming
									collections</p>
							</div>
							<div className="form-row justify-content-center">
								<div className="col-md-5 mb-3 mb-md-2">
									<div className="js-form-message">
										<div className="input-group">
											<input type="text" className="form-control px-5 height-60 border-dark" name="name" id="signupSrName"
												   placeholder="Enter email for weekly newsletter." aria-label="Your name" required
												   data-msg="Name must contain only letters." data-error-class="u-has-error"
												   data-success-class="u-has-success" />
										</div>
									</div>
								</div>
								<div className="col-sm-2 ml-md-2">
									<button type="submit" className="btn btn-dark rounded-0 btn-wide py-3 font-weight-medium">Subscribe
									</button>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-4 mb-6 mb-lg-0">
								<div className="pb-6">
									<address className="font-size-2 mb-5">
                <span className="mb-2 font-weight-normal text-dark">
                  1418 River Drive, Suite 35 Cottonhall, CA 9622 <br /> United States
                </span>
									</address>
									<div className="mb-4">
										<a href="mailto:sale@bookworm.com"
										   className="font-size-2 d-block link-black-100 mb-1">sale@bookworm.com</a>
										<a href="tel:+1246-345-0695" className="font-size-2 d-block link-black-100">+1 246-345-0695</a>
									</div>
									<ul className="list-unstyled mb-0 d-flex">
										<li className="btn pl-0">
											<a className="link-black-100" href="#">
												<span className="fab fa-instagram" />
											</a>
										</li>
										<li className="btn">
											<a className="link-black-100" href="#">
												<span className="fab fa-facebook-f" />
											</a>
										</li>
										<li className="btn">
											<a className="link-black-100" href="#">
												<span className="fab fa-youtube" />
											</a>
										</li>
										<li className="btn">
											<a className="link-black-100" href="#">
												<span className="fab fa-twitter" />
											</a>
										</li>
										<li className="btn">
											<a className="link-black-100" href="#">
												<span className="fab fa-pinterest" />
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-lg-2 mb-6 mb-lg-0">
								<h4 className="font-size-3 font-weight-medium mb-2 mb-xl-5 pb-xl-1">Explore</h4>
								<ul className="list-unstyled mb-0">
									<li className="pb-2">
										<a className="widgets-hover transition-3d-hover font-size-2 link-black-100" href="#">About as</a>
									</li>
									<li className="py-2">
										<a className="widgets-hover transition-3d-hover font-size-2 link-black-100" href="#">Sitemap</a>
									</li>
									<li className="py-2">
										<a className="widgets-hover transition-3d-hover font-size-2 link-black-100" href="#">Bookmarks</a>
									</li>
									<li className="pt-2">
										<a className="widgets-hover transition-3d-hover font-size-2 link-black-100" href="#">Sign in/Join</a>
									</li>
								</ul>
							</div>
							<div className="col-lg-2 mb-6 mb-lg-0">
								<h4 className="font-size-3 font-weight-medium mb-2 mb-xl-5 pb-xl-1">Customer Service</h4>
								<ul className="list-unstyled mb-0">
									<li className="pb-2">
										<a className="widgets-hover transition-3d-hover font-size-2 link-black-100" href="#">Help Center</a>
									</li>
									<li className="py-2">
										<a className="widgets-hover transition-3d-hover font-size-2 link-black-100" href="#">Returns</a>
									</li>
									<li className="py-2">
										<a className="widgets-hover transition-3d-hover font-size-2 link-black-100" href="#">Product Recalls</a>
									</li>
									<li className="py-2">
										<a className="widgets-hover transition-3d-hover font-size-2 link-black-100" href="#">Accessibility</a>
									</li>
									<li className="py-2">
										<a className="widgets-hover transition-3d-hover font-size-2 link-black-100" href="#">Contact Us</a>
									</li>
									<li className="pt-2">
										<a className="widgets-hover transition-3d-hover font-size-2 link-black-100" href="#">Store Pickup</a>
									</li>
								</ul>
							</div>
							<div className="col-lg-2 mb-6 mb-lg-0">
								<h4 className="font-size-3 font-weight-medium mb-2 mb-xl-5 pb-xl-1">Policy</h4>
								<ul className="list-unstyled mb-0">
									<li className="pb-2">
										<a className="widgets-hover transition-3d-hover font-size-2 link-black-100" href="#">Return Policy</a>
									</li>
									<li className="py-2">
										<a className="widgets-hover transition-3d-hover font-size-2 link-black-100" href="#">Terms Of Use</a>
									</li>
									<li className="py-2">
										<a className="widgets-hover transition-3d-hover font-size-2 link-black-100" href="#">Security</a>
									</li>
									<li className="pt-2">
										<a className="widgets-hover transition-3d-hover font-size-2 link-black-100" href="#">Privacy</a>
									</li>
								</ul>
							</div>
							<div className="col-lg-2 mb-6 mb-lg-0">
								<h4 className="font-size-3 font-weight-medium mb-2 mb-xl-5 pb-xl-1">Categories</h4>
								<ul className="list-unstyled mb-0">
									<li className="pb-2">
										<a className="widgets-hover transition-3d-hover font-size-2 link-black-100" href="#">Action</a>
									</li>
									<li className="py-2">
										<a className="widgets-hover transition-3d-hover font-size-2 link-black-100" href="#">Comedy</a>
									</li>
									<li className="py-2">
										<a className="widgets-hover transition-3d-hover font-size-2 link-black-100" href="#">Drama</a>
									</li>
									<li className="py-2">
										<a className="widgets-hover transition-3d-hover font-size-2 link-black-100" href="#">Horror</a>
									</li>
									<li className="py-2">
										<a className="widgets-hover transition-3d-hover font-size-2 link-black-100" href="#">Kids</a>
									</li>
									<li className="pt-2">
										<a className="widgets-hover transition-3d-hover font-size-2 link-black-100" href="#">Romantic Comedy</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="space-1">
					<div className="container">
						<div className="d-lg-flex text-center text-lg-left justify-content-between align-items-center">
							<p className="mb-3 mb-lg-0 font-size-2">©2020 Book Worm. All rights reserved</p>
							<div className="ml-auto d-lg-flex align-items-center">
								<div className="mb-4 mb-lg-0 mr-5">
									<img className="img-fluid" src="../assets/img/324x38/img1.png" alt="Image-Description" />
								</div>
								<select className="js-select selectpicker dropdown-select mb-3 mb-lg-0"
										data-style="border px-4 py-2 rounded-0 height-5 outline-none shadow-none form-control font-size-2"
										data-dropdown-align-right="true">
									<option value="one" selected>English (United States)</option>
									<option value="two">Deutsch</option>
									<option value="three">Français</option>
									<option value="four">Español</option>
								</select>
								<select className="js-select selectpicker dropdown-select ml-md-3"
										data-style="border px-4 py-2 rounded-0 height-5 outline-none shadow-none form-control font-size-2"
										data-dropdown-align-right="true" data-width="fit">
									<option value="one" selected>$ USD</option>
									<option value="two">€ EUR</option>
									<option value="three">₺ TL</option>
									<option value="four">₽ RUB</option>
								</select>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;