import React from "react";

// importing images
import mockup_2 from "../assets/mockup-2.webp";

// importing icons
import { IoIosArrowForward } from "react-icons/io";
import { GoCheck } from "react-icons/go";

const EndalgoApp = () => {
	return (
		<div className="endalgoApp bgLightGray w-100">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="row">
								<div className="col-12 col-md-6 pe-3 pe-md-5 align-self-center">
									<h2 className="fw-bold">Start with ENDALGO App</h2>
									<h6 className="centerPara">
										Simply start your group with the ENDALGO aoo for free.
										ENDALGO provides an intuitive and user friendly app for
										leaders to connect with people in their community.
									</h6>
									<hr />

									<div className="points">
										<p className="d-flex">
											<GoCheck
												color="#fb0a12"
												className="pe-2"
												fontSize="1.5rem"
											/>
											<span>
												Simply set up your group profile. So, ENDALGO can
												promote to the right audience for your group.
											</span>
										</p>
										<p className="d-flex">
											<GoCheck
												color="#fb0a12"
												className="pe-2"
												fontSize="1.9rem"
											/>
											<span>
												Invite your friends and people you know who share the
												same interest with you. or simply add members with their
												email address.
											</span>
										</p>
										<p className="d-flex">
											<GoCheck
												color="#fb0a12"
												className="pe-2"
												fontSize="1.5rem"
											/>
											<span>
												Earn money or meet new people by listing your experience
												and registrations, and host events.
											</span>
										</p>
									</div>
									<button className="btnHover bg-transparent border-0 redColor h6 fw-bold">
										Learn about features <IoIosArrowForward />
									</button>
								</div>
								<div className="col-12 col-md-6 align-self-center ps-3 ps-md-4 mt-5 mt-md-0">
									<img className="w-100" src={mockup_2} alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EndalgoApp;
