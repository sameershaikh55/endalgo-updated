import React from "react";

import { useHooks } from "../hooks/useHooks";

// IMPORTING COMPONENTS
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import company from "../assets/company.webp";
import CompanyStates from "../components/CompanyStates";
import CompanyStory from "../components/CompanyStory";
import OffInv from "../components/OffInv";
import OurInvestor from "../components/OurInvestor";
import GetStarted from "../components/GetStarted";

const Company = () => {
	const { isOpen, OnClick } = useHooks();

	return (
		<div>
			<Header ClickEvent={OnClick} />
			<Sidebar ClickEvent={OnClick} isOpen={isOpen} />
			{/* HERO SECTION START */}
			<div className="company_hero hero_sec W-100">
				<div className="page_container2">
					<div className="container-fluid">
						<div className="row">
							<div className="col-11 col-md-12 mx-auto">
								<div className="text-center">
									<h1>
										Our Mission : Connecting People through Activities and
										Sports
									</h1>
									<p className="p1">
										We believe that there is no place like sports. Sports
										activities play an important role in communities. There are
										many benefits including improving the health and well-being
										of individuals, contributing to the empowerment of
										individuals, and promoting the development of inclusive
										communities. Sports and activities can be formed in
										individuals, small groups, teams or whole communities and
										are relevant to people of all different ages, abilities and
										levels of skill. We truly believe sports can make a
										community healthy.
									</p>
									<h2>
										“We believe the world becomes healthy when people connect
										through sports”
									</h2>
									<p className="p2">
										These days, many people are introverts and have difficulty
										meeting new people in their local community. We believe
										anyone in the community has the power to bring people
										together to share the interest that they want to share. So,
										ENDALGO is here to help bring people together through sports
										and activities.
									</p>
								</div>
								<img className="w-100" src={company} alt="company" />
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* HERO SECTION END */}

			<CompanyStates />
			<CompanyStory />
			<OffInv />
			<OurInvestor />
			<GetStarted />
			<Footer />
		</div>
	);
};

export default Company;
