import React from "react";

// IMPORTS
import story1 from "../assets/story1.webp";
import story2 from "../assets/story2.webp";
import story3 from "../assets/story3.webp";

const Stories = () => {
	const data = [
		{
			i: story1,
			m: "“We get together with a great group of guys, a super competitive group that comes out near DTLA through ENDALGO. A great opportunity to find new friends and teammates!”",
			b1: "Sam McClenney",
			b2: "DTLA Soccer Group",
		},
		{
			i: story2,
			m: "“ENDALGO helped me a lot find new friends so I played in my organized soccer group and also helped us a lot to gain new people.”",
			b1: "DTLA Soccer Group",
			b2: "Irvine Group Organizer",
		},
		{
			i: story3,
			m: "“So what ENDALGO has done is that it gives the opportunity of meeting new people. It gives you the opportunity to do things that you would love with people you have never met before.”",
			b1: "Jose Hernandez",
			b2: "Premier League",
		},
	];
	return (
		<div className="stories_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="row">
								{data.map((prev, ind) => {
									const { i, m, b1, b2 } = prev;
									return (
										<div
											key={ind}
											className={`col-12 col-md-6 col-lg-4 ${
												(ind === 0 && "mt-0 mt-md-0") ||
												(ind === 1 && "mt-5 mt-md-0") ||
												(ind === 2 && "mt-5 mt-md-0")
											}`}
										>
											<img className="w-100" src={i} alt="" />
											<div className="inner_story d-flex flex-column justify-content-between">
												<p>{m}</p>

												<div className="bottom_text d-flex align-items-center">
													<h6 className="fw-bold mb-0">{b1}</h6>
													<div className="dot"></div>
													<h6 className="mb-0">{b2}</h6>
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

export default Stories;
