import React from "react";

// IMPORTING COMPONENTS
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useHooks } from "../hooks/useHooks";
import { BiMessageDetail } from "react-icons/bi";

const Contact = () => {
	const { isOpen, OnClick } = useHooks();
	return (
		<>
			<Header ClickEvent={OnClick} />
			<Sidebar ClickEvent={OnClick} isOpen={isOpen} />

			{/* CONTACT BODY START */}
			<div className="contact_body hero_sec">
				<div className="page_container">
					<div className="container-fluid">
						<div className="head text-center">
							<h1>Contact Us</h1>
							<p>
								Fill out the form below to ask questions, send feedback, or
								submit the feature request, etc.
							</p>
						</div>

						<div className="row">
							<div className="col-11 col-xl-12 mx-auto">
								<div className="row cRow h-100">
									<div className="col-12 col-lg-6 order-1 order-lg-0 text-white">
										<div className="icons_container">
											<BiMessageDetail color="#fb0a12" fontSize="1.5rem" />
										</div>
										<div>
											<h2>We’re here to help</h2>

											<ul>
												<li className="mb-2">Question about the product</li>
												<li className="mb-2">Feedback or request</li>
												<li className="mb-2">Schedule a demo</li>
												<li className="mb-2">Account Information</li>
												<li className="mb-2">Delete your account or group</li>
											</ul>
										</div>

										<div className="sport_sec">
											<h2>Support</h2>
											<p className="inner_p">
												Already a user? or a group organizer? If you are
												encountering a technical or payment issue, the customer
												team will be happy to assist you.
											</p>
											<p className="mb-0">
												Our customer support will respond in 48 hours on your
												submission.
											</p>
										</div>
									</div>
									<div className="col-12 col-lg-6">
										<div className="mb-4 d-flex flex-column flex-lg-row w-100">
											<div className="w-100 mb-4 mb-lg-0">
												<label for="First Name">First Name</label>
												<br />
												<input
													className="w-100"
													type="text"
													name="First Name"
													placeholder="First Name"
												/>
											</div>
											<div className="w-100 ms-0 ms-lg-3">
												<label for="Last Name">Last Name</label>
												<br />
												<input
													className="w-100"
													type="text"
													name="Last Name"
													placeholder="Last Name"
												/>
											</div>
										</div>

										<div className="mb-4 w-100">
											<label for="Last Name">Group Name</label>
											<br />
											<input
												className="w-100"
												type="text"
												name="Last Name"
												placeholder="Group Name"
											/>
										</div>

										<div className="mb-4 w-100">
											<label for="Last Name">Email Address</label>
											<br />
											<input
												className="w-100"
												type="text"
												name="Last Name"
												placeholder="Email Address"
											/>
										</div>

										<div className="mb-4 w-100">
											<label for="Last Name">Subject</label>
											<br />
											<input
												className="w-100"
												type="text"
												name="Last Name"
												placeholder="Subject"
											/>
										</div>

										<div className="mb-4 w-100">
											<label for="Last Name">Message</label>
											<br />
											<textarea
												className="w-100"
												rows="4"
												cols="50"
												placeholder="Message"
											></textarea>
										</div>

										<p className="mt-2 mb-4">
											By clicking the submit button, you are to allow ENDALGO to
											store and process the information above for contact
											purposes.
										</p>

										<div className="d-flex w-100">
											<button className="w-100 border-0 text-white">
												Submit
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* CONTACT BODY END */}

			<Footer />
		</>
	);
};

export default Contact;
