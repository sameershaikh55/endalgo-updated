import React from "react";

const CompanyStates = () => {
	const data = [
		{ t1: "2015", t2: "Founded" },
		{ t1: "$4M+", t2: "Funding" },
		{ t1: "12K+", t2: "Communities" },
	];
	return (
		<div className="company_states_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="row">
								{data.map((prev, i) => {
									const { t1, t2 } = prev;
									return (
										<div
											key={i}
											className="col-12 col-sm-6 col-md-4 upper_card"
										>
											<div className="card text-center">
												<h1>{t1}</h1>
												<p>{t2}</p>
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

export default CompanyStates;
