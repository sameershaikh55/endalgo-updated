import React from "react";

// importing icons
import { GoCheck } from "react-icons/go";
import share1 from "../assets/app-store-btn.webp";
import share2 from "../assets/google-play-btn.webp";

const PricingBody = () => {
	const data = [
		{
			t: "Scheduling",
			d: "Easily plan upcoming schedules with tracking availability and collecting payment function",
			p: {
				p1: "Unlimited events & tracking availability",
				p2: "Public, group, game, private event",
				p3: "Collect payment",
			},
		},
		{
			t: "Member (Rostering)",
			d: "Easily plan upcoming schedules with tracking availability and collecting payment function",
			p: {
				p1: "Unlimited members & admins",
				p2: "Add Manually",
				p3: "Family member access",
			},
		},
		{
			t: "Communication",
			d: "Easily plan upcoming schedules with tracking availability and collecting payment function",
			p: {
				p1: "Built-in group chat",
				p2: "Send email",
				p3: "Group board - photo, video, file sharing",
			},
		},
		{
			t: "Online Registration",
			d: "Easily plan upcoming schedules with tracking availability and collecting payment function",
			p: {
				p1: "Unlimited registrations",
				p2: "Built-in waiver & liability forms",
				p3: "Collect payment",
			},
		},
		{
			t: "Experience & Training",
			d: "Easily plan upcoming schedules with tracking availability and collecting payment function",
			p: {
				p1: "Unlimited listings",
				p2: "Multiple price package options",
				p3: "Collect payment",
			},
		},
		{
			t: "Subgroup",
			d: "Easily plan upcoming schedules with tracking availability and collecting payment function",
			p: {
				p1: "Unlimited subgroups",
				p2: "Member assignment",
			},
		},
		{
			t: "Collect Payment",
			d: "Easily plan upcoming schedules with tracking availability and collecting payment function",
			p: {
				p1: "Collect Payment",
				p2: "Registrations/Experiences",
				p3: "Member dues",
			},
		},
	];
	return (
		<>
			{/* HERO SECTION START */}
			<div className="hero_sec endalgo_pricing">
				<div className="page_container h-100">
					<div className="container-fluid">
						<div className="row">
							<div className="col-11 col-md-12 mx-auto">
								<div className="text-center">
									<h1>ENDALGO Pricing</h1>
									<p className="under_mainHead">
										ENDALGO's group feature gives you the tools you need for
										your community and organization. ENDALGO offers a 30-day
										free trial once you start your group. During your free trial
										period, you'll get full access to all features, just like
										any other paid subscriber.
									</p>
								</div>

								<div className="pricingBody_container bg-white">
									<div className="pricing_header">
										<div className=" d-flex flex-column flex-lg-row justify-content-lg-between align-items-lg-end">
											<div className="w-100">
												<div>
													<span className="crossText">$9.99</span>{" "}
													<strong>$0.00</strong>
													<span className="per_month">/ per month</span>
												</div>
												<p>You will be given a 30 days of free trial</p>
											</div>
											<div className="btn_containers d-flex mt-3 mt-lg-0">
												<button className="text-white border-0">
													Billed Annually <br className="d-block d-sm-none" />{" "}
													(Save 15%)
												</button>
												<button className="border-0 text-center">
													Billed monthly
												</button>
											</div>
										</div>
									</div>

									<hr className="my-0" />

									<div className="pricing_inner_body">
										<h2>
											Your subscription will be used to maintain and enhance the
											product better everyday. It will also be used to promote
											your group in your area.
										</h2>
										<h2>Your subscription includes</h2>

										{/* DETAILS START */}
										{data.map((prev, i) => {
											const {
												t,
												d,
												p: { p1, p2, p3 },
											} = prev;
											return (
												<div key={i} className="price_card">
													<h3>{t}</h3>
													<p className="under_head">{d}</p>

													<div className="points">
														<p className="d-flex">
															<GoCheck
																color="#fb0a12"
																className="pe-2"
																fontSize="1.3rem"
															/>
															<span>{p1}</span>
														</p>
														<p className="d-flex">
															<GoCheck
																color="#fb0a12"
																className="pe-2"
																fontSize="1.3rem"
															/>
															<span>{p2}</span>
														</p>
														{(p3 && (
															<p className="d-flex">
																<GoCheck
																	color="#fb0a12"
																	className="pe-2"
																	fontSize="1.3rem"
																/>
																<span>{p3}</span>
															</p>
														)) ||
															""}
													</div>
												</div>
											);
										})}

										<h2 className="bottom_line">
											You can cancel the subscription at any time by contacting
											us via email.
										</h2>
									</div>
									{/* DETAILS END */}

									{/* bottom start */}
									<div className="download_cont">
										<div className="d-flex flex-column flex-lg-row justify-content-between">
											<h2 className="mb-0 text-white">
												Download ENDALGO to get started
											</h2>
											<div className="d-flex justify-content-between justify-content-sm-start flex-wrap mt-4 mt-lg-0">
												<img src={share1} alt="" />
												<img src={share2} alt="" className="ms-0 ms-md-3" />
											</div>
										</div>
									</div>
									{/* bottom end */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default PricingBody;
