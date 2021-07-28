import React, { useState } from "react";
import { logo } from "../assets/images";
import facebook from "../assets/facebook.webp";
import playstore from "../assets/playstore.jpg";
import linkedin from "../assets/linkedin.webp";
import youtube from "../assets/youtube.webp";
import instagram from "../assets/instagram.webp";
import appstore from "../assets/appstore.webp";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

// IMPORTING LINKS
import { NavLink } from "react-router-dom";

const Footer = () => {
	const [footer, setFooter] = useState({
		about: false,
		product: false,
		explore: false,
		support: false,
	});

	const aboutFunc = () => {
		setFooter({ ...footer, about: !footer.about });
	};

	const productFunc = () => {
		setFooter({ ...footer, product: !footer.product });
	};

	const exploreFunc = () => {
		setFooter({ ...footer, explore: !footer.explore });
	};

	const supportFunc = () => {
		setFooter({ ...footer, support: !footer.support });
	};
	return (
		<div className="footerContainer">
			<div className="innerFooter">
				<div className="container-fluid">
					<div className="row">
						<div className="col-12">
							<div className="row">
								<div className="col-12 col-md-3 footerPad">
									<img src={logo} alt="logo" />
								</div>
								{/* FOR MOBILE VIEW START */}
								<div className="col-12 d-block d-md-none pb-5">
									<div>
										<div
											onClick={aboutFunc}
											className="d-flex justify-content-between align-items-center pointer"
										>
											<h3 className="fw-bold mb-0">About</h3>
											{(footer.about && <IoIosArrowUp fontSize="1.4rem" />) || (
												<IoIosArrowDown fontSize="1.4rem" />
											)}
										</div>
										{footer.about && (
											<div className="mt-2">
												<h5 className="fw-bold">Company</h5>
												<h5 className="fw-bold">Jobs</h5>
												<h5 className="fw-bold">Blog</h5>
											</div>
										)}
									</div>
									<div>
										<div
											onClick={productFunc}
											className="d-flex justify-content-between align-items-center mobile_upperNav pointer"
										>
											<h3 className="fw-bold mb-0">Product</h3>
											{(footer.product && (
												<IoIosArrowUp fontSize="1.4rem" />
											)) || <IoIosArrowDown fontSize="1.4rem" />}
										</div>
										{footer.product && (
											<div className="mt-2">
												<h5 className="fw-bold">How It works</h5>
												<NavLink
													to="/group_management"
													className="text-dark text-decoration-none"
												>
													<h5 className="fw-bold">Group Management</h5>
												</NavLink>
												<ul className="list-unstyled mb-2">
													<li className="lightColor fw-bold">・ Features</li>
													<li className="lightColor fw-bold">・ Pricing</li>
												</ul>
												<h5 className="fw-bold">Blog</h5>
											</div>
										)}
									</div>
									<div>
										<div
											onClick={exploreFunc}
											className="d-flex justify-content-between align-items-center mobile_upperNav pointer"
										>
											<h3 className="fw-bold mb-0">Explore</h3>
											{(footer.explore && (
												<IoIosArrowUp fontSize="1.4rem" />
											)) || <IoIosArrowDown fontSize="1.4rem" />}
										</div>
										{footer.explore && (
											<div className="mt-2">
												<h5 className="fw-bold">Topics</h5>
												<NavLink
													to="/group_management"
													className="text-dark text-decoration-none"
												>
													<h5 className="fw-bold">Group Management</h5>
												</NavLink>
												<h5 className="fw-bold">Browse Cities</h5>
											</div>
										)}
									</div>
									<div>
										<div
											onClick={supportFunc}
											className="d-flex justify-content-between align-items-center mobile_upperNav pointer"
										>
											<h3 className="fw-bold mb-0">Support</h3>
											{(footer.support && (
												<IoIosArrowUp fontSize="1.4rem" />
											)) || <IoIosArrowDown fontSize="1.4rem" />}
										</div>
										{footer.support && (
											<div className="mt-2">
												<h5 className="fw-bold">Help Center</h5>
												<h5 className="fw-bold">Contact Us</h5>
											</div>
										)}
									</div>
								</div>
								{/* FOR MOBILE VIEW END */}
								<div className="col-9 d-none d-md-block footerPad">
									<div className="row">
										<div className="col-3">
											<h5 className="fw-bolder mb-3">About</h5>
											<h6 className="mb-3">Company</h6>
											<h6 className="mb-3">Jobs</h6>
											<h6 className="mb-3">Blog</h6>
										</div>
										<div className="col-3">
											<h5 className="fw-bolder mb-3">Product</h5>
											<h6 className="mb-3">How It works</h6>
											<NavLink
												to="/group_management"
												className="text-dark text-decoration-none"
											>
												<h6 className="mb-3">Group Management</h6>
											</NavLink>
											<ul className="list-unstyled mb-2">
												<li
													style={{ marginBottom: "12px" }}
													className="lightColor"
												>
													・ Features
												</li>
												<li className="lightColor mb-3">・ Pricing</li>
											</ul>
											<h6 className="mb-3">Blog</h6>
										</div>
										<div className="col-3">
											<h5 className="fw-bolder mb-3">Explore</h5>
											<h6 className="mb-3">Topics</h6>
											<h6 className="mb-3">Group Management</h6>
											<h6 className="mb-3">Browse Cities</h6>
										</div>
										<div className="col-3">
											<h5 className="fw-bolder mb-3">Support</h5>
											<h6 className="mb-3">Help Center</h6>
											<h6 className="mb-3">Contact Us</h6>
										</div>
									</div>
								</div>
								<hr />
								<div className="d-flex flex-wrap justify-content-md-between flex-column flex-md-row mb-2">
									<small className="lightColor">
										@2020 ENDALGO, Inc. all rights reservrd ・ Privacy ・ Terms
										・ Sitemap
									</small>
									<div className="d-flex justify-content-start flex-wrap mt-3 mt-md-0 mb-2">
										<img src={facebook} alt="facebook" />
										<img
											src={linkedin}
											className="ms-3 ms-sm-4"
											alt="linkedin"
										/>
										<img
											src={instagram}
											className="ms-3 ms-sm-4"
											alt="instagram"
										/>
										<img src={youtube} className="ms-3 ms-sm-4" alt="youtube" />
										<div className="footerLine ms-3 ms-sm-4"></div>
										<img
											src={appstore}
											className="ms-3 ms-sm-4"
											alt="appstore"
										/>
										<img
											src={playstore}
											className="ms-3 ms-sm-4"
											alt="playstore"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
