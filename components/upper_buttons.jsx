import React from "react";

const UpperButtons = (props) => {
	return(
			<div className="row white-bkg padding-2pc">
				<div className="col-sm-4">
						<span className="money-munbers-color">$ 234234</span>
				</div>
				<div className="col-sm-2">
						<button className="btn btn-outline-danger btn-sm">Now</button>
				</div>
				<div className="col-sm-2">
						<button className="btn btn-outline-secondary btn-sm">HTML</button>
				</div>
				<div className="col-sm-2">
						<button className="btn btn-outline-secondary btn-sm">CSS</button>
				</div>
			</div>

		);
}

export default UpperButtons;