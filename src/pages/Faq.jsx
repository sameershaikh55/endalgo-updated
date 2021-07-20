import React from "react";

// IMPORTING COMPONENTS
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import FaqBody from "../components/FaqBody";
import GetStarted from "../components/GetStarted";

// IMPORTING HOOKS
import { useHooks } from "../hooks/useHooks";

const Faq = () => {
	const { isOpen, OnClick } = useHooks();
	return (
		<div>
			<Header ClickEvent={OnClick} />
			<Sidebar ClickEvent={OnClick} isOpen={isOpen} />
			<FaqBody />
			<GetStarted />
			<Footer />
		</div>
	);
};

export default Faq;
