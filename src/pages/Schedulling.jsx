import React, { useState } from "react";

// IMPORTING COMPONENTS
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import EndalgoApp from "../components/EndalgoApp";
import CommunityLeaders from "../components/CommunityLeaders";
import OurCustomer from "../components/OurCustomer";
import Schedulling from "../components/Schedulling";
import GroupFeatures from "../components/GroupFeatures";
import GetStarted from "../components/GetStarted";

// IMPORTING IMAGES
import schduleTop from "../assets/schduleTop.webp";
import ft1 from "../assets/ft-1-ic.webp";
import { NavLink } from "react-router-dom";
import { RiArrowDownSLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";

// IMPORTING HOOKS
import { useHooks } from "../hooks/useHooks";

const SchedullingP = () => {
	const { isOpen, OnClick } = useHooks();
	const [schBar, setSchBar] = useState(false);
	const [feature, setfeature] = useState(false);

	const sideBarFunc = () => {
		setSchBar(!schBar);
		setfeature(false);
	};

	return (
		<div>
			<Header ClickEvent={OnClick} />
			<Sidebar ClickEvent={OnClick} isOpen={isOpen} />
			{/* HERO SECTION START */}
			<div className="hero_sec groupManagement position-relative text-white">
				<div className="page_container h-100">
					<div className="container-fluid">
						{/* SCHDULE BAR DESKTOP START */}
						<br />
						<div className="schedulleBar d-none d-md-block bg-white w-100">
							<div className="d-flex justify-content-between align-items-center h-100">
								<div className="d-flex align-items-center">
									<img src={ft1} alt="" />
									<h6 className="mb-0 text-dark ms-2">Scheduling</h6>
								</div>
								<div className="d-block d-lg-none">
									<IoIosArrowDown color="#000" fontSize="1.3rem" />
								</div>
								<div className="navLinks d-none d-lg-block">
									<ul className="list-unstyled d-flex mb-0">
										<li className="me-4">
											<NavLink
												to="/"
												className="text-dark text-decoration-none"
											>
												Overview
											</NavLink>
										</li>
										<li className="nestedOne text-dark me-3 position-relative">
											Features <RiArrowDownSLine fontSize="1.4rem" />
											{/* </NavLink> */}
											<div className="position-absolute bg-white shadow py-1 px-2 nestedNav px-3 py-3">
												<ul className="list-unstyled">
													<li className="nestedLink pointer py-2 px-2">
														Scheduling
													</li>
													<li className="nestedLink pointer py-2 px-2">
														Members
													</li>
													<li className="nestedLink pointer py-2 px-2">
														Communication
													</li>
													<li className="nestedLink pointer py-2 px-2">
														Online Registration
													</li>
													<li className="nestedLink pointer py-2 px-2">
														Experience
													</li>
													<li className="nestedLink pointer py-2 px-2">
														Collect Money
													</li>
													<li className="nestedLink pointer py-2 px-2">
														Subgroup
													</li>
													<li className="nestedLink pointer py-2 px-2">
														Invoicing
													</li>
												</ul>
											</div>
										</li>
										<li className="fw-bold me-2">
											<NavLink
												to="/"
												className="text-dark text-decoration-none"
											>
												Pricing
											</NavLink>
										</li>
									</ul>
								</div>
							</div>
						</div>
						{/* SCHDULE BAR DESKTOP END */}

						{/* SCHDULE BAR MOBILE START */}
						<div
							style={{
								height: (feature && "505px") || (schBar && "180px") || "56px",
							}}
							className="schedulleBar mobile d-block d-md-none bg-white"
						>
							<div
								style={{ height: "56px" }}
								className="d-flex justify-content-between align-items-center"
							>
								<div className="d-flex align-items-center">
									<img src={ft1} alt="" />
									<h6 className="mb-0 text-dark ms-2">Scheduling</h6>
								</div>
								<div>
									<IoIosArrowDown
										onClick={sideBarFunc}
										color="#000"
										fontSize="1.3rem"
									/>
								</div>
							</div>

							{schBar && (
								<div className="navLinks">
									<hr className="mt-0 mb-2" />
									<ul className="list-unstyled d-flex flex-column h-100 mb-0">
										<li className="uppNav me-4">
											<NavLink
												to="/"
												className="text-dark text-decoration-none"
											>
												Overview
											</NavLink>
										</li>
										<li
											style={{ height: (feature && "352px") || "22px" }}
											className="text-dark uppNav"
										>
											Features{" "}
											<RiArrowDownSLine
												onClick={() => setfeature(!feature)}
												fontSize="1.4rem"
											/>
											{feature && (
												<div className="nested mt-2 py-1 px-2 px-3">
													<ul className="list-unstyled">
														<li className="nestedLink pointer themeBtn py-2 px-2">
															Scheduling
														</li>
														<li className="nestedLink pointer py-2 px-2">
															Members
														</li>
														<li className="nestedLink pointer py-2 px-2">
															Communication
														</li>
														<li className="nestedLink pointer py-2 px-2">
															Online Registration
														</li>
														<li className="nestedLink pointer py-2 px-2">
															Experience
														</li>
														<li className="nestedLink pointer py-2 px-2">
															Collect Money
														</li>
														<li className="nestedLink pointer py-2 px-2">
															Subgroup
														</li>
														<li className="nestedLink pointer py-2 px-2">
															Invoicing
														</li>
													</ul>
												</div>
											)}
										</li>
										<li className="uppNav fw-bold me-2">
											<NavLink
												to="/"
												className="text-dark text-decoration-none"
											>
												Pricing
											</NavLink>
										</li>
									</ul>
								</div>
							)}
						</div>
						{/* SCHDULE BAR MOBILE END */}

						<div className="text-center">
							<h1>Group Scheduling</h1>
							<p>
								Easily create event that you want, track availability, and
								collect payment.
							</p>
							<button className="border-0 text-white">Try for Free</button>

							<div className="row">
								<div className="col-12">
									<div className="img_container mx-auto">
										<img className="w-100" src={schduleTop} alt="schduleTop" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* HERO SECTION END */}

			<OurCustomer />

			<CommunityLeaders />
			<EndalgoApp />
			<Schedulling />
			<GroupFeatures />

			<GetStarted />

			<Footer />
		</div>
	);
};

export default SchedullingP;
