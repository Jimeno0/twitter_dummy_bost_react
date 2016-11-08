import React from "react";

const TwitHeader = (props) => {
	return(
			<div className="row padding-2pc">
				<div className="col-sm-3">
					<img src="http://www.placecage.com/g/200/300" height="50" width="50" className="rounded-circle" alt="avatar1"/>
				</div>
				<div className="col-sm-9">
					<p> <a href="#">Whale</a> bla bla bla bla  <a href="#">Bounty</a></p>
				</div>
			</div>
		);
}

export default TwitHeader;