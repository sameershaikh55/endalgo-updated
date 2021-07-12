import React from "react";

// importing images
import mockup_1 from "../assets/mockup-1.webp";

// importing icons
import { GoCheck } from "react-icons/go";

const MeetNewPeople = () => {
	return (
		<div className="communityPeople bgLightGray w-100">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="row">
								<div className="col-12 col-md-6 mt-5 mt-md-0 pe-3 pe-md-5 order-1 order-md-0">
									<img className="w-100" src={mockup_1} alt="" />
								</div>
								<div className="rightText col-12 col-md-6 align-self-center order-0 order-md-1">
									<h2 className="fw-bold">Meet new people in your community</h2>
									<h6>
										Thousands of communities of all sizes - from organized
										sports taems to social groups - use ENDALGO to build, and
										grow their communities.
									</h6>
									<hr />
									<div className="points">
										<p className="point d-flex">
											<GoCheck color="#fb0a12" className="pe-2 icon" />
											<span>Organized teams and clubs</span>
										</p>
										<p className="point d-flex">
											<GoCheck color="#fb0a12" className="pe-2 icon" />
											<span>Recreational groups</span>
										</p>
										<p className="point d-flex">
											<GoCheck color="#fb0a12" className="pe-2 icon" />
											<span>Leisure groups</span>
										</p>
										<p className="point d-flex">
											<GoCheck color="#fb0a12" className="pe-2 icon" />
											<span>Social groups</span>
										</p>
										<p className="point d-flex">
											<GoCheck color="#fb0a12" className="pe-2 icon" />
											<span>Facility</span>
										</p>
										<p className="point d-flex">
											<GoCheck color="#fb0a12" className="pe-2 icon" />
											<span>Training academy & fitness</span>
										</p>
									</div>
									<div className="mt-4 d-flex">
										<button className="themeBtn2 py-2 mb-0 rounded-3 themeBorder btnLg">
											Explore groups
										</button>
										<button className="bg-transparent themeBtn1 py-2 mb-0 rounded-3 ms-3 redColor btnLg">
											Start my group
										</button>
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

export default MeetNewPeople;
