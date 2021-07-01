import React from "react";

// IMPORTING ICONS
import { IoIosArrowForward } from "react-icons/io";

// IMPORTING IMAGES
import arrive1 from "../assets/arrive1.PNG";
import arrive2 from "../assets/arrive2.PNG";
import arrive3 from "../assets/arrive3.PNG";


const EmailArrive = () => {
  const data = [
		{
			img: arrive1,
			title: "Opportunity",
			desc: "Create your own community to earn your extra income by hosting events and teaching your expertise.",
		},
		{
			img: arrive2,
			title: "Scalability",
			desc: "Having difficulty reaching out to the right audiences for your business? We got your back to promote for you.",
		},
		{
			img: arrive3,
			title: "Sustainability",
			desc: "ENDALGO provides resources for you to manage, build, and grow your organization with 24/7 support.",
		},
	];
  return (
		<div className="emailArriveCont">
			<div className="page_container">
				<div className="container-fluid">
					<div className="text-center mb-5">
						<h6 className="lightColor fw-bolder">Why ENDALGO</h6>
						<h3 className="fw-bold mt-1 mb-3">
							Truest that emails arrive securely and your data is safe.
						</h3>
					</div>
					<div className="row">
						{data.map((prev, i) => {
							const { img, title, desc } = prev;
							return (
								<div key={i} className="col-12 col-md-4 mt-4 mt-md-0">
									<img src={img} alt="" />
									<h5 className="mt-1 fw-bold">{title}</h5>
									<h6 className="small desc darkColor mt-3 mb-4">{desc}</h6>
									<button className="btnHover bg-transparent redColor border-0 fw-bold h6">
										Learn about features <IoIosArrowForward fontSize="1.2rem" />
									</button>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default EmailArrive;
