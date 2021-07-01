import React from "react";

// importing images
import mockup_1 from "../assets/mockup-1.webp";

// importing icons
import { IoIosArrowForward } from "react-icons/io";
import { GoCheck } from "react-icons/go";

const CommunityLeaders = () => {
  return (
		<div className="communityLeader w-100">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-12 col-md-6 mt-5 mt-md-0 pe-3 pe-md-5 order-1 order-md-0">
							<img className="w-100" src={mockup_1} alt="" />
						</div>
						<div className="col-12 col-md-6 align-self-center ps-3 ps-md-4 order-0 order-md-1">
							<h2 className="fw-bold">Community leaders choose ENDALGO</h2>
							<h6 className="centerPara">
								Sports teams and clubs, outdoor activity groups, social groups,
								and many more groups utilize ENDALGO to build, manage, and grow
								their communities.
							</h6>

							<div className="points">
								<p className="mb-0 d-flex">
									<GoCheck color="#fb0a12" className="pe-2" fontSize="1.5rem" />
									<span>
										Management purpose for sports teams and clubs from youth to
										adult
									</span>
								</p>
								<p className="mb-0 d-flex">
									<GoCheck color="#fb0a12" className="pe-2" fontSize="1.5rem" />
									<span>
										Community groups to meet new people for sports, social, and
										fitness groups
									</span>
								</p>
								<p className="mb-0 d-flex">
									<GoCheck color="#fb0a12" className="pe-2" fontSize="1.5rem" />
									<span>
										Events or experiences hostings and continuing growth for
										local experts or businesses
									</span>
								</p>
							</div>
							<button className="btnHover bg-transparent border-0 redColor h6 fw-bold">
								Learn about features <IoIosArrowForward />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CommunityLeaders;
