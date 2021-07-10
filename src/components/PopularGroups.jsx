import React from "react";

// IMPORTING ICONS
import { FaArrowCircleRight } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

// IMPORTING IMAGES
import member1 from "../assets/member1.PNG";

const PopularGroups = () => {
	const data = [
		{
			img: member1,
			title: "Soccer pick up (NILES-PARK RIDGE- SKOKIE- DES PLAINES-GLEN)",
		},
		{
			img: member1,
			title: "Playa Pickup Soccer",
		},
		{
			img: member1,
			title: "Sunday morning soccer",
		},
		{
			img: member1,
			title: "Vista Hermosa DTLA Soccer",
		},
		{
			img: member1,
			title: "Coed non-competitive soccer",
		},
		{
			img: member1,
			title: "Wednesday coed game at goals",
		},
	];
	return (
		<div className="popularGroup">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="d-flex justify-content-between">
								<h5 className="fw-bold">Popular groups</h5>
								<h6 className="greenColor">
									Popular groups <FaArrowCircleRight />
								</h6>
							</div>

							<div className="row rowCont">
								{data.map((prev, i) => {
									const { img, title } = prev;
									return (
										<div
											className="upperCardCont col-12 col-sm-6 col-md-4"
											key={i}
										>
											<div className="popularGroupCard h-100">
												<img
													className="w-100 topBordersRadius"
													src={img}
													alt={title}
												/>
												<div className="px-3 py-3 d-flex textPart flex-column justify-content-between">
													<div>
														<small className="redColor fw-bold">
															Sport Types
															<AiFillStar
																color="#ffd317"
																className="ms-1 h5 mb-0"
															/>
															<span className="lightColor ms-1">4.7(3)</span>
														</small>
														<h6 className="my-1 fw-bold twoLineElipses">
															{title}
														</h6>
													</div>
													<div>
														<small className="lightColor">
															Los Angeles, CA
														</small>
													</div>
												</div>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PopularGroups;
