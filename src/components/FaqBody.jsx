import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const FaqBody = () => {
	const data = [
		{
			t: "General FAQ",
			a: ["What’s ENDALGO?", "How does it work?", "Who is ENDALGO for?"],
		},
		{
			t: "Leader(Organizer) FAQ",
			a: [
				"What is a ENDALGO group?",
				"How do I start a group?",
				"How can I grow my ENDALGO group?",
				"How can I monetize my ENDALGO group?",
			],
		},
		{
			t: "Member FAQ",
			a: [
				"How do I start ENDALGO?",
				"How is my data being used?",
				"How do I unsubscribe the email or push notification?",
			],
		},
	];

	return (
		<div className="hero_sec faq_container">
			<div className="page_container2 h-100">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<h1 className="text-center">Frequently Asked Questions</h1>
							{data.map((prev, i) => {
								const { t, a } = prev;
								return (
									<div key={i} className="faq_sec">
										<h2>{t}</h2>
										<div className="faq_sec_body">
											{a.map((prev, i) => {
												return (
													<Accordion key={i}>
														<AccordionSummary
															expandIcon={<ExpandMoreIcon />}
															aria-controls="panel1a-content"
															id="panel1a-header"
														>
															<Typography className="head">{prev}</Typography>
														</AccordionSummary>
														<AccordionDetails>
															<Typography>
																Lorem ipsum dolor sit amet, consectetur
																adipiscing elit. Suspendisse malesuada lacus ex,
																sit amet blandit leo lobortis eget. Lorem ipsum
																dolor sit amet consectetur, adipisicing elit.
																Eius, eveniet voluptatibus? Aut, illum?
																Aspernatur voluptate mollitia sed provident
																quaerat ut.
															</Typography>
														</AccordionDetails>
													</Accordion>
												);
											})}
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FaqBody;
