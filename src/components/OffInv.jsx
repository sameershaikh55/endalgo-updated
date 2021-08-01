import React from "react";
import office1 from "../assets/office1.webp";
import office2 from "../assets/office2.webp";

const OffInv = () => {
	const data = [office1, office2];
	return (
		<div className="office_inv_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="text-center">
						<h1>Our Offices</h1>
						<p>
							ENDALGO is headquartered in Los Angeles. We have a oversea branch
							in Seoul.
						</p>
					</div>

					<div className="row">
						{data.map((prev, i) => {
							return (
								<div key={i} className="card_office col-12 col-md-6">
									<img className="w-100" src={prev} alt="" />
									{i === 0 && <h4>Los Angeles</h4>}
									{i === 1 && <h4>Seoul, Korea</h4>}
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default OffInv;
