import React from "react";

// importing images
import mockup_1 from "../assets/mockup-1.webp";

// importing icons
import { IoIosArrowForward } from "react-icons/io";
import { GoCheck } from "react-icons/go";

const Schedulling = () => {
	return (
		<div className="communityLeader scheduling w-100">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="row">
								<div className="col-12 col-md-6 mt-5 mt-md-0 pe-3 pe-md-5 order-1 order-md-0 align-self-center">
									<img className="w-100" src={mockup_1} alt="" />
								</div>
								<div className="col-12 col-md-6 align-self-center ps-3 ps-md-4 order-0 order-md-1">
									<h2 className="fw-bold">
										Beyond scheduling and communication
									</h2>
									<h6>
										Scheduling, communication, payment, registrations, and many
										more features are developed by hundreds of actual community
										leaders and feedback from our users.
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
												Host and manage events with tracking availability,
												waitlist, and payment
											</span>
										</p>
										<p className="d-flex">
											<GoCheck
												color="#fb0a12"
												className="pe-2"
												fontSize="1.5rem"
											/>
											<span>
												Online registrations to find new members or players with
												built-in payment feature
											</span>
										</p>
										<p className="d-flex">
											<GoCheck
												color="#fb0a12"
												className="pe-2"
												fontSize="1.5rem"
											/>
											<span>
												Help leaders communicate via Group chat, board, and
												email features
											</span>
										</p>
									</div>
									<button className="btnHover bg-transparent border-0 redColor h6 fw-bold">
										Learn about features <IoIosArrowForward />
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

export default Schedulling;
