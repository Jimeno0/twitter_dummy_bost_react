import React from 'react';
import ReactDOM from 'react-dom';
import SimpleTweet from './components/simple_tweet';
import TwoCommentsTweet from './components/two_comments_tweet';

class App extends React.Component {
	constructor() {
		super();
	}

	render(){
		return(
			<div className="container">

				<div className="col-md-5">
					<SimpleTweet />
					<TwoCommentsTweet />
					
					<SimpleTweet />
				</div>

				<div className="col-md-2"></div>

				<div className="col-md-5">
						<SimpleTweet />
						<SimpleTweet />
						<SimpleTweet />
				</div>

			</div>	

			);
	}

}

ReactDOM.render(<App />, document.getElementById('container'));

