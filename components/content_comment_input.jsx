import React from "react";

const ContentCommentInput = (props) =>{
	return (
			<div className="row white-bkg padding-2pc">
				<div className="col-sm-3">
					<img src="http://www.placecage.com/g/200/300" height="50" width="50" className="rounded-circle" alt="avatar3"/>
				</div>
				<div className="col-sm-9">
					<input type="text" className="form-control" placeholder="Comment" aria-describedby="basic-comment-input" />
				</div>
			</div>

		);
}
export default ContentCommentInput;