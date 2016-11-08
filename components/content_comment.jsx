import React from "react";

const ContentComment = (props) =>{
	return (
			<div className="row white-bkg padding-2pc">
				<div className="col-sm-3">
					<img src="http://www.placecage.com/g/200/300" height="50" width="50" className="rounded-circle" alt="avatar3"/>
				</div>
				<div className="col-sm-9">
					<a href="#">UserName</a>
					<p>Heeeeey yoooo this is a dummy coment!! blablablablaa</p>
				</div>
			</div>
		);
}
export default ContentComment;