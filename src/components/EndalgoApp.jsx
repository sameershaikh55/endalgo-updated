import React from "react";

// importing images
import mockup_2 from "../assets/saveTime.webp";

// importing icons
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
									<h2 className="fw-bold">Save your time</h2>
									<h6 className="centerPara">
										Easily create recurring events up to four weeks or copy the
										past events. Schedule anything for your group activities in
										one click.
									</h6>
									<hr />

									<div className="points">
										<p className="d-flex">
											<GoCheck color="#fb0a12" className="pe-2 icon" />
											<span>Recurring event </span>
										</p>
										<p className="d-flex">
											<GoCheck color="#fb0a12" className="pe-2 icon" />
											<span>Copy event </span>
										</p>
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

export default EndalgoApp;
