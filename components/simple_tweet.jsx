import React from 'react';
import TwitHeader from "./twit_header";
import ContentHeader from "./content_header";
import UpperButtons from "./upper_buttons";
import ContentParragraph from "./content_paragraph"
import ContentCommentUser from "./content_comment_btn"

class SimpleTweet extends React.Component {
	constructor(){
		super();

	}

	render(){
		return(
			
					<div>
						<TwitHeader />
						<div className="container boxshadow">
							<ContentHeader />
							<UpperButtons />
							<ContentParragraph />
							<ContentCommentUser />
						</div>
					</div>

			);
	}
}

export default SimpleTweet;