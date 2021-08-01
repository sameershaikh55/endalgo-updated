import React from "react";
import inv1 from "../assets/inv1.webp";
import inv2 from "../assets/inv2.webp";
import inv3 from "../assets/inv3.webp";
import inv4 from "../assets/inv4.webp";

const OurInvestor = () => {
	const data = [inv1, inv3, inv2, inv4];
	return (
		<div className="our_investor_container">
			<div className="page_container2">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<h1 className="text-center">Our Investors</h1>

							<div className="cardCont d-none d-md-flex justify-content-between flex-wrap">
								{data.map((prev, i) => {
									return (
										<div key={i}>
											<img className="w-100" src={prev} alt="" />
										</div>
									);
								})}
							</div>

							<div className="d-block d-md-none">
								<div className="row cardCont d-md-none">
									<div className="col-4 align-self-center mt-4">
										<img className="w-100" src={inv1} alt="" />
									</div>
									<div className="col-8 align-self-center mt-4">
										<img className="w-100" src={inv3} alt="" />
									</div>
									<div className="col-7 align-self-center mt-4">
										<img className="w-100" src={inv2} alt="" />
									</div>
									<div className="col-4 align-self-center mt-4">
										<img className="w-100" src={inv4} alt="" />
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

export default OurInvestor;
