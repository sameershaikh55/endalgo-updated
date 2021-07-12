import React from "react";

// importing images
import mockup_2 from "../assets/mockup-2White.webp";

// importing icons
import { GoCheck } from "react-icons/go";

const EventCoaches = () => {
	return (
		<div className="coachesExp w-100">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="row">
								<div className="col-12 col-md-6 pe-3 pe-md-5 align-self-center">
									<h2 className="fw-bold">
										Find events, coaches, and experiences near you
									</h2>
									<h6 className="centerPara">
										Looking for pickup games? Learning a new skill? Coaches to
										train with? Clubs to join? Join now and play.
									</h6>
									<hr />
									<div className="points">
										<p className="point d-flex">
											<GoCheck color="#fb0a12" className="pe-2 icon" />
											<span>Open pickup games and classes </span>
										</p>
										<p className="point d-flex">
											<GoCheck color="#fb0a12" className="pe-2 icon" />
											<span>Training classes </span>
										</p>
										<p className="point d-flex">
											<GoCheck color="#fb0a12" className="pe-2 icon" />
											<span>Practice and training sessions </span>
										</p>
										<p className="point d-flex">
											<GoCheck color="#fb0a12" className="pe-2 icon" />
											<span>Tryouts</span>
										</p>
										<p className="point d-flex">
											<GoCheck color="#fb0a12" className="pe-2 icon" />
											<span>Clinics and camps</span>
										</p>
										<p className="point d-flex">
											<GoCheck color="#fb0a12" className="pe-2 icon" />
											<span>Competitions</span>
										</p>
									</div>
									<div className="mt-4 d-flex">
										<button className="themeBtn2 py-2 mb-0 rounded-3 border border-2 border-white btnLg">
											Find an event
										</button>
										<button className="bg-transparent themeBtn1 py-2 mb-0  rounded-3 ms-3 rounded-3 redColor btnLg">
											Host an event
										</button>
									</div>
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

export default EventCoaches;
