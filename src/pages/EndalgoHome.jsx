import React from "react";

// IMPORTING HOOKS
import { useHooks } from "../hooks/useHooks";

// IMPORTING IMAGES
import handBanner from "../assets/1-hand.webp";
import google_play from "../assets/google-play-btn.webp";
import app_store from "../assets/app-store-btn.webp";

// IMPORTING COMPONENTS
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import HowEndalgo from "../components/HowEndalgo";
import MeetNewPeople from "../components/MeetNewPeople";
import EventCoaches from "../components/EventCoaches";
import PopularGroups from "../components/PopularGroups";

// IMPORTING ICONS
import { MdKeyboardArrowRight } from "react-icons/md";

const EndalgoHome = () => {
  const { isOpen, OnClick } = useHooks();

  return (
		<div>
			<Header ClickEvent={OnClick} />
			<Sidebar ClickEvent={OnClick} isOpen={isOpen} />

			{/* HERO SECTION START */}
			<div className="hero_sec groupManagement endalgoHome">
				<div className="page_container h-100">
					<div className="container-fluid h-100">
						<div className="row h-100">
							<div className="col-12 col-md-8 col-lg-6 mx-auto text-center text-lg-start align-self-center">
								<h2 className="fw-bold">
									Sports, leisure, and recreation communities near you
								</h2>
								<h6 className="mt-3">
									Find and join thousands of communities of all types - from
									organized sports teams to social groups - that bring you joy.
								</h6>
								<div className="mt-5 d-flex shareBtn mt-3 mb-4">
									<img src={app_store} alt="" />
									<img src={google_play} alt="" className="ms-3" />
								</div>
							</div>
							<div className="col-12 col-sm-8 col-lg-6 mx-auto align-self-end">
								<img width="100%" src={handBanner} alt="handBanner" />
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* HERO SECTION END */}

			<HowEndalgo />
			<MeetNewPeople />
			<EventCoaches />

			{/* TRUSTING START */}
			{/* DESKTOP */}
			<div className="page_container d-none d-md-block">
				<div className="container-fluid text-white">
					<div className="trusted home position-relative">
						<div className="rightSide position-absolute">
							<h4 className="fw-bold">
								Build and grow your sports community that can organize and track
								everything
							</h4>
							<p className="d-flex">
								From team manager, club admins, or coach to private trainer,
								facility, every level of admins and organizers is now managing
								their organizations with #1 group management solution, ENDALGO.
							</p>
							<button className="bg-transparent border-0 small greenColor">
								Learn more <MdKeyboardArrowRight />
							</button>
						</div>

						<div className="trustedCont position-relative"></div>
					</div>
				</div>
			</div>
			{/* DESKTOP */}

			{/* MOBILE */}
			<div className="page_container d-block d-md-none">
				<div className="container-fluid text-white">
					<div className="trusted2 home position-relative">
						<div className="rightSide position-absolute">
							<h4 className="fw-bold">
								Build and grow your sports community that can organize and track
								everything
							</h4>
							<div className="mt-3 d-flex small">
								From team manager, club admins, or coach to private trainer,
								facility, every level of admins and organizers is now managing
								their organizations with #1 group management solution, ENDALGO.
							</div>
							<button className="bg-transparent border-0 small mt-3 greenColor">
								Learn more <MdKeyboardArrowRight />
							</button>
						</div>

						<div className="trustedCont2"></div>
					</div>
				</div>
			</div>
			{/* MOBILE */}
			{/* TRUSTING END */}

			<PopularGroups />

			{/* TOP CITIES START */}
			<div className="topCities lightGrayBg">
				<div className="page_container">
					<div className="container-fluid">
						<div className="">
							<h4 className="fw-bolder">Top Cities</h4>
							<div className="row mt-4">
								<div className="col-4 col-md-3 col-lg-2 linkColor fw-bold">
									Los Angeles
								</div>
								<div className="col-4 col-md-3 col-lg-2 linkColor fw-bold">
									Irvine
								</div>
								<div className="col-4 col-md-3 col-lg-2 linkColor fw-bold">
									Chicago
								</div>
								<div className="col-4 col-md-3 col-lg-2 linkColor fw-bold">
									Las Vegas
								</div>
								<div className="col-4 col-md-3 col-lg-2 linkColor fw-bold">
									Charlotte
								</div>
								<div className="col-4 col-md-3 col-lg-2 linkColor fw-bold">
									Atlanta
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* TOP CITIES END */}

			<Footer />
		</div>
	);
};

export default EndalgoHome;
