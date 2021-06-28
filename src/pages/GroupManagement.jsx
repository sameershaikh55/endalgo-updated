import React from "react";

// IMPORTING COMPONENTS
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

// IMPORTING IMAGES
import groupManagementBanner from "../assets/groupManagementBanner.PNG";

// IMPORTING HOOKS
import { useHooks } from "../hooks/useHooks";

const GroupManagement = () => {
	const { isOpen, OnClick } = useHooks();

	return (
		<div>
			<Header ClickEvent={OnClick} />
			<Sidebar ClickEvent={OnClick} isOpen={isOpen} />

			{/* HERO SECTION START */}
			<div className="hero_sec groupManagement text-white">
				<div className="page_container h-100">
					<div className="container-fluid d-flex align-items-center h-100">
						<div className="row">
							<div className="col-6 align-self-center">
								<h2>Build, Manage, and Grow with Our #1 Group App</h2>
								<h6>
									Build, manage, and grow your community with our group feature.
									Save money on managing multiple websites and apps.
								</h6>
								<div>
									<button className="bg-white py-2 rounded-3 px-3 border border-2 border-white">
										Try for free
									</button>
									<button className="bg-transparent py-2 rounded-3 px-3 border border-2 border-white ms-3 text-white">
										See pricing
									</button>
								</div>
							</div>
							<div className="col-6">
								<img src={groupManagementBanner} alt="groupManagementBanner" />
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* HERO SECTION END */}

			<Footer />
		</div>
	);
};

export default GroupManagement;
