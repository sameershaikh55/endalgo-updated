import React from "react";

// IMPORTS
import connect1 from "../assets/connect1.webp";
import connect2 from "../assets/connect2.webp";
import connect3 from "../assets/connect3.webp";
import connect4 from "../assets/connect4.webp";
import { IoIosArrowForward } from "react-icons/io";

const FeatureLeader = () => {
	const data = [
		{
			i: connect1,
			t: "Management",
			d: "Take the stress out of member management.",
			btn: {
				btn1: "Member(Rostering)",
				btn2: "Subgroup",
			},
		},
		{
			i: connect2,
			t: "To do",
			d: "Easily schedule the events you want and communicate with your members.",
			btn: {
				btn1: "Scheduling",
				btn2: "Communication",
			},
		},
		{
			i: connect3,
			t: "Meet customers",
			d: "Meet new people or customers by listing your experience and registration.",
			btn: {
				btn1: "Online Registrations",
				btn2: "Experience",
			},
		},
		{
			i: connect4,
			t: "Money",
			d: "No more trips to the bank. Simply collect payments you need through the app.",
			btn: {
				btn1: "Collect Payment",
				btn2: "Invoiving",
			},
		},
	];
	return (
		<div className="feature_leader">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<h1 className="text-center">
								Leaders choose ENDALGO to connect people together
							</h1>

							<div className="row">
								{data.map((prev, ind) => {
									const {
										i,
										t,
										d,
										btn: { btn1, btn2 },
									} = prev;
									return (
										<div key={ind} className="col-12 col-md-6 feature_col">
											<div className="feature_card">
												<div className="img_cont">
													<img className="w-100" src={i} alt="" />
												</div>
												<div className="text_content d-flex flex-column justify-content-between">
													<div>
														<h5>{t}</h5>
														<p>{d}</p>
													</div>
													<div className="btn_cont d-flex">
														<button className="border-0 bg-transparent themeBtn1">
															{btn1} <IoIosArrowForward className="ms-1" />
														</button>
														<button className="border-0 bg-transparent themeBtn1 ms-3">
															{btn2} <IoIosArrowForward className="ms-1" />
														</button>
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

export default FeatureLeader;
