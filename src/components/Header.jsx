import React from "react";
import { logo } from "../assets/images";

// IMPORTING LINKS
import { NavLink } from "react-router-dom";

// IMPORTING ICONS
import { RiArrowDownSLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsDot } from "react-icons/bs";

import { useHistory } from "react-router-dom";

const Header = ({ ClickEvent }) => {
	let history = useHistory();

	return (
		<div className="headerContainer d-flex align-items-center w-100">
			<div className="innerHeaderContainer w-100">
				<div className="container-fluid">
					<div className="row">
						<div className="col-12">
							<div className="d-flex justify-content-between align-items-center">
								<div className="pointer" onClick={() => history.push("/")}>
									<img className="logo" src={logo} alt="logo" />
								</div>
								<div onClick={ClickEvent} className="d-block d-lg-none">
									<GiHamburgerMenu fontSize="1.8rem" />
								</div>
								<div className="navLinks position-absolute d-none d-lg-block">
									<ul className="list-unstyled d-flex">
										<li className="nestedOne fw-bold me-4 position-relative">
											{/* <NavLink
												to="/"
												className="d-flex align-items-center text-dark text-decoration-none"
											> */}
												Product{" "}
												<RiArrowDownSLine fontSize="1.4rem" className="ms-2" />
											{/* </NavLink> */}
											<div className="position-absolute bg-white shadow py-1 px-2 nestedNav px-3 py-3">
												<ul className="list-unstyled">
													<NavLink
														to="/group_management"
														className="text-dark text-decoration-none"
													>
														<li className="pointer small mb-2">
															Group Management
														</li>
													</NavLink>
													<li className="nestedLink pointer small py-2 px-2">
														<BsDot /> Features
													</li>
													<li className="nestedLink pointer small py-2 px-2">
														<BsDot /> Pricing
													</li>
												</ul>
											</div>
										</li>
										<li className="fw-bold me-4">
											<NavLink
												to="/why"
												className="text-dark text-decoration-none"
											>
												Why
											</NavLink>
										</li>
										<li className="fw-bold me-4">
											<NavLink
												to="/"
												className="text-dark text-decoration-none"
											>
												Community
											</NavLink>
										</li>
										<li className="fw-bold me-4">
											<NavLink
												to="/"
												className="text-dark text-decoration-none"
											>
												FAQ
											</NavLink>
										</li>
										<li className="fw-bold">
											<NavLink
												to="/"
												className="text-dark text-decoration-none"
											>
												Company
											</NavLink>
										</li>
									</ul>
								</div>
								<div className="btnContainer d-none d-lg-block">
									<button className="themeBtn2 py-1 px-3">
										Download the app
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
