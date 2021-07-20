import React from "react";

// IMPORTING COMPONENTS
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import FeatureLeader from "../components/FeatureLeader";
import Testimonials from "../components/Testimonials";
import GetStarted from "../components/GetStarted";

// IMPORTING IMAGES
import share1 from "../assets/app-store-btn.webp";
import share2 from "../assets/google-play-btn.webp";

// IMPORTING HOOKS
import { useHooks } from "../hooks/useHooks";

const Feature = () => {
	const { isOpen, OnClick } = useHooks();

	return (
		<div>
			<Header ClickEvent={OnClick} />
			<Sidebar ClickEvent={OnClick} isOpen={isOpen} />
			{/* HERO SECTION START */}
			<div className="hero_sec feature_hero_cont text-white">
				<div className="page_container h-100">
					<div className="container-fluid">
						<div className="text-center">
							<h1>Design your community with our group features</h1>
							<p>
								We make life easier for coaches, managers, experts, leaders, and
								organizers. We bring everything you need to manage your
								community into one connected solution. From adding members,
								hosting events, collecting payments, and invoicing, to notifying
								your members about last-minute changes, we get you up and
								running fast and save you tons of time organizing.
							</p>
							<div className="d-flex justify-content-center">
								<div className="d-flex justify-content-between justify-content-sm-start flex-wrap mt-4 mt-lg-0">
									<img src={share1} alt="" />
									<img src={share2} alt="" className="ms-3" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* HERO SECTION END */}

			<FeatureLeader />
			<Testimonials />
			<GetStarted feature />
			<Footer />
		</div>
	);
};

export default Feature;
