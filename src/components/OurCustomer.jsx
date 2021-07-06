import React from "react";

// IMPORTING IMAGES
import gr_1 from "../assets/gr-1-ic.svg";
import gr_2 from "../assets/gr-2-ic.webp";
import gr_3 from "../assets/gr-3-ic.svg";
import gr_4 from "../assets/gr-4-ic.webp";
import gr_5 from "../assets/gr-5-ic.webp";
import gr_6 from "../assets/gr-6-ic.svg";
import gr_7 from "../assets/gr-7-ic.svg";
import gr_8 from "../assets/gr-8-ic.svg";

const OurCustomer = () => {
	const data = [
		{
			img: gr_1,
			text: "Sports teams and clubs",
		},
		{
			img: gr_2,
			text: "Outdoor activity groups",
		},
		{
			img: gr_3,
			text: "Sports groups",
		},
		{
			img: gr_4,
			text: "Pickup groups",
		},
		{
			img: gr_5,
			text: "Fitness groups",
		},
		{
			img: gr_6,
			text: "Training academy",
		},
		{
			img: gr_7,
			text: "Private trainers",
		},
		{
			img: gr_8,
			text: "Sports Facilities",
		},
	];

	return (
		<div className="ourCustomer page_container">
			<div className="container-fluid">
				<div className="row">
					<div className="col-11 col-md-12 mx-auto">
						<h5 className="text-center fw-bold">
							Our customer group types that trust ENDALGO’s group features
						</h5>

						<div className="row">
							{data.map((prev, i) => {
								return (
									<div
										key={i}
										className="col-12 col-md-4 col-lg-3 d-flex align-items-center mt-4"
									>
										<div>
											<img src={prev.img} alt={prev.text} />
										</div>
										<div className="ms-2 fw-bold">{prev.text}</div>
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

export default OurCustomer;
