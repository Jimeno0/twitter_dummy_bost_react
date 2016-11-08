import React from "react";

const ContentHeader = (props) => {
	return (
			<div className="row white-bkg padding-2pc border-button">
				<div className="col-sm-3">
					<img src="http://www.placecage.com/g/200/300" height="60" width="60" alt="avatar2"/>
				</div>
				<div className="col-sm-9">
					<p>Bounty <a href="#">#96</a> on <a href="#">Helpfull</a></p>
				</div>
			</div>
		);
}

export default ContentHeader;