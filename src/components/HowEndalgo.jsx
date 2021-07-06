import React from "react";

// IMPORTING IMAGES
import member1 from "../assets/member1.PNG";
import member2 from "../assets/member2.PNG";
import member3 from "../assets/member3.PNG";

const HowEndalgo = () => {
	const data = [
		{
			img: member1,
			title: "Join a group",
			desc: "Join a group that matches your interests. Be a part of your local community.",
		},
		{
			img: member2,
			title: "Play & Learn",
			desc: "Join events or esperiences that are happening near you. Do what you love to do.",
		},
		{
			img: member3,
			title: "Start a group",
			desc: "Host events? Manage organized teams? Share your experience with people in your area.",
		},
	];

	return (
		<div className="howEndalgo w-100">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="mt-2 mb-4 text-center">
								<h2 className="fw-bold mb-0">How ENDALGO works </h2>
								<h6>
									Join a sports teams or meet new friends who share your
									interests.
								</h6>
							</div>
							<div className="row">
								{data.map((prev, i) => {
									const { img, title, desc } = prev;
									return (
										<div
											key={i}
											className="col-12 col-sm-6 col-md-4 mt-4 mt-md-0"
										>
											<div className="memberCard">
												<img className="w-100 rounded-3" src={img} alt="" />
												<h5 className="fw-bold mt-4">{title}</h5>
												<h6 className="small">{desc}</h6>
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

export default HowEndalgo;
