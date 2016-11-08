import React from "react";

const ContentCommentUser = (props) =>{
	return (
			<div className="row white-bkg padding-2pc">
				<div className="col-sm-3">
					<img src="http://www.placecage.com/g/200/300" height="50" width="50" className="rounded-circle" alt="avatar3"/>
				</div>
				<div className="col-sm-9">
					<button type="button" className="btn btn-outline-primary rounded">Comment	</button>
				</div>
			</div>

		);
}

export default ContentCommentUser;