import React from "react";

// importing images
import mockup_1 from "../assets/beyond.webp";

// importing icons
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
								<div className="rightside col-12 col-md-6 align-self-center order-0 order-md-1">
									<h2 className="fw-bold">Beyond the scheduling</h2>
									<h6>
										Set up the fee to collect payment, guest allowance, waitlist
										features, and registration deadline. Send reminder at your
										need.
									</h6>
									<hr />
									<div className="points">
										<p className="d-flex">
											<GoCheck
												color="#fb0a12"
												className="pe-2"
												fontSize="1.5rem"
											/>
											<span>Automatic reminder</span>
										</p>
										<p className="d-flex">
											<GoCheck
												color="#fb0a12"
												className="pe-2"
												fontSize="1.5rem"
											/>
											<span>Registration deadline</span>
										</p>
										<p className="d-flex">
											<GoCheck
												color="#fb0a12"
												className="pe-2"
												fontSize="1.5rem"
											/>
											<span>Guest allowance</span>
										</p>
										<p className="d-flex">
											<GoCheck
												color="#fb0a12"
												className="pe-2"
												fontSize="1.5rem"
											/>
											<span>Waitlist - FIFO(First In - First Out)</span>
										</p>
										<p className="d-flex">
											<GoCheck
												color="#fb0a12"
												className="pe-2"
												fontSize="1.5rem"
											/>
											<span>Collect Payment</span>
										</p>
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

export default Schedulling;
