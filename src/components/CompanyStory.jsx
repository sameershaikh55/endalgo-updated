import React from "react";
import our1 from "../assets/our1.webp";
import our2 from "../assets/our2.webp";
import our3 from "../assets/our3.webp";

const CompanyStory = () => {
	const data = [our1, our2, our3];

	return (
		<div className="company_story_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="page_container2 text-center">
								<h1>Our story</h1>
								<div className="p_container">
									<p>
										Founded in 2015, we started as a team and league management
										solution to serve the youth and adult sports clubs and
										leagues in San Francisco, CA. In 2018, we pivoted our
										product and launched ENDALGO 2.0 with our current group
										feature to connect the sports community across the world.
										After the number of failures with previous products, we have
										been focusing only on soccer communities in the greater Los
										Angeles area to prove its product market fit.
									</p>
									<p>
										With the love of Los Angeles soccer lovers, ENDALGO has
										grown to serve +6k soccer communities including clubs,
										teams, and casual groups from youth and adult age groups.
									</p>
									<p>
										ENDALGO is now expanding its market to all sports and
										outdoor activities with our proven product. With ENDALGO,
										the community leaders such as coaches, experts, and more,
										can focus on what matters, and keep their members happy.
									</p>
								</div>
							</div>

							<div className="row">
								{data.map((prev, i) => {
									return (
										<div key={i} className="col-12 col-sm-6 col-md-4 img_card">
											<img className="w-100" src={prev} alt="" />
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

export default CompanyStory;
