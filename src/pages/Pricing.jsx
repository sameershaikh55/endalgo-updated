import React from "react";

// IMPORTING COMPONENTS
import Footer from "../components/Footer";
import Header from "../components/Header";
import PricingBody from "../components/PricingBody";
import Sidebar from "../components/Sidebar";

// IMPORTING HOOKS
import { useHooks } from "../hooks/useHooks";

const Pricing = () => {
	const { isOpen, OnClick } = useHooks();
	return (
		<div>
			<Header ClickEvent={OnClick} />
			<Sidebar ClickEvent={OnClick} isOpen={isOpen} />
			<PricingBody />
			<Footer />
		</div>
	);
};

export default Pricing;
