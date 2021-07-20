import React from "react";

import { AiTwotoneStar } from "react-icons/ai";

const Testimonials = () => {
	const data = [
		{
			t: [
				"I really enjoy having this app! Endalgo has been helping me to build my soccer community in Atlanta. It is fairly new on the market and they are constantly working on improving their features. So customers have the best experience. Customer service has been nothing but great.",
				"Thank you and keep it up! Looking forward to their new features! =)",
			],
		},
		{
			t: [
				"I highly recommend any club that is searching for a platform to schedule and communicate with their club teams. The best feature is that we can make subgroups for our club since we have 17 teams which makes things much easier for us to manage all teams in one place.",
			],
		},
		{
			t: [
				"I think ENDALGO is an excellent company with a great idea that is growing consistently. I think that by providing fields and locations for people it can help the sport grow tremendously as well as raise the level in the areas that they function in. Overall I love the App and recommend it to anyone at any level looking to find a place to soccer.",
			],
		},
		{
			t: [
				"Good app for scheduling our weekly pickup games. I have tried some other apps like opensports and meetup. So far, this one is giving me all the features I need such as automatic reminders, group chat, sending emails, and tracking RSVPs. Get this app if you want to share your pickup games with people in your area.",
			],
		},
		{
			t: [
				"Endalgo is my go to sports app that I use to host and facilitate my local pick up soccer group in Las Vegas,NV. They have helped me grow and migrate from other platforms. We love this because app developers really listen and value users' experience. They always seek for improvement to enhance both organizer and players",
			],
		},
		{
			t: [
				"be connected to athletes near my location. I meet up with my boys once a week and do pickup games which means this app works perfect for connecting people through sports. Awesome! Good to meet some new folks in my groups.",
			],
		},
	];
	return (
		<div className="testimonials_cont">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="text-center">
								<h1>Why ENDALGO</h1>
								<p className="under_head">
									Organizers and members love ENDALGO. Here's what they say:
								</p>
							</div>

							<div className="row">
								{data.map((prev, ind) => {
									const { t } = prev;
									return (
										<div
											key={ind}
											className="col-12 col-sm-6 col-lg-4 testi_col"
										>
											<div className="testi_card bg-white text-center d-flex flex-column justify-content-between">
												<div>
													<div className="star_cont">
														<AiTwotoneStar fontSize="1.5rem" />
														<AiTwotoneStar fontSize="1.5rem" />
														<AiTwotoneStar fontSize="1.5rem" />
														<AiTwotoneStar fontSize="1.5rem" />
														<AiTwotoneStar fontSize="1.5rem" />
													</div>
													{t.map((prev, i) => {
														return (
															<p key={i} className="test">
																{prev}
															</p>
														);
													})}
												</div>
												<p className="bot mb-0">-App store review-</p>
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

export default Testimonials;
