import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

import start1 from "../assets/start1.webp";
import start2 from "../assets/start2.webp";

const GetStarted = () => {
	const data = [
		{
			img: start1,
			title: "Member",
			desc: (
				<div className="small">
					Download the ENDALGO app <br /> to Join the groups
				</div>
			),
		},
		{
			img: start2,
			title: "Leader",
			desc: (
				<div className="small">
					Download the ENDALGO app <br /> to Start your group
				</div>
			),
		},
	];
	return (
		<div>
			<div className="groupMembers w-100 py-5">
				<div className="page_container">
					<div className="container-fluid">
						<h2 className="text-center fw-bold mb-2 mb-md-4">
							How to get started
						</h2>

						<div className="row">
							{data.map((prev, i) => {
								const { img, title, desc } = prev;

								return (
									<div key={i} className="col-12 col-md-6 mt-4 mt-md-0">
										<div className="bg-white border-1 border border-blue rounded-3 d-flex align-items-center p-4">
											<img width="24%" src={img} alt={title} />
											<div className="ms-3">
												<h5 className="fw-bold">{title}</h5>
												{desc}
												<button className="bg-transparent border-0 small mt-2 redColor">
													Download App <MdKeyboardArrowRight />
												</button>
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
	);
};

export default GetStarted;
