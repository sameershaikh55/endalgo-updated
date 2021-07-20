import React from "react";

const GetStarted = ({ feature }) => {
	return (
		<div>
			{/* GET STARTED START */}
			<div style={{ marginTop: feature && "0px" }} className="getStartedCont">
				<div className="page_container">
					<div className="container-fluid">
						<div className="row">
							<div className="col-11 col-md-12 mx-auto">
								<div className="text-center text-white">
									<h1 className="fw-bolder">Ready to get started?</h1>
									<h5>Free to get started. Free to create your group.</h5>
								</div>
								<div className="mt-5 d-flex flex-column flex-md-row justify-content-center">
									<button className="bg-white py-2 mb-0 rounded-3 border border-2 border-white mx-auto mx-md-0">
										Start my group
									</button>
									<button className="bg-transparent py-2 mb-0 rounded-3 border border-2 border-white ms-md-3 mt-3 mt-md-0 text-white mx-auto mx-md-0">
										Try for free
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* GET STARTED END */}
		</div>
	);
};

export default GetStarted;
