import React from "react";

// importing images
import schedulling from "../assets/schedulling.webp";

// importing icons
import { GoCheck } from "react-icons/go";

const CommunityLeaders = () => {
	return (
		<div className="communityLeader w-100">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="row">
								<div className="col-12 col-md-6 mt-5 mt-md-0 pe-3 pe-md-5 order-1 order-md-0">
									<img
										data-aos="zoom-in"
										data-aos-duration="800"
										className="w-100"
										src={schedulling}
										alt=""
									/>
								</div>
								<div
									data-aos="fade"
									data-aos-duration="800"
									data-aos-delay="100"
									className="rightText col-12 col-md-6 align-self-center order-0 order-md-1"
								>
									<h2 className="fw-bold">Schedule what you want</h2>
									<h6 className="centerPara">
										Public event to meet new people, group event for members
										only, private event for 1on1, and games for competition - Do
										it all in one place.
									</h6>
									<hr />

									<div className="points">
										<p className="d-flex">
											<GoCheck color="#fb0a12" className="pe-2 icon" />
											<span>Public event</span>
										</p>
										<p className="d-flex">
											<GoCheck color="#fb0a12" className="pe-2 icon" />
											<span>Group event</span>
										</p>
										<p className="d-flex">
											<GoCheck color="#fb0a12" className="pe-2 icon" />
											<span>Game</span>
										</p>
										<p className="d-flex">
											<GoCheck color="#fb0a12" className="pe-2 icon" />
											<span>Private event</span>
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

export default CommunityLeaders;
