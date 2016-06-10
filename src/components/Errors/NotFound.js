import React from 'react';

class NotFound extends React.Component {
	render() {
		return (
			<div id="not-found">
				<div>
					<h1>Error 404</h1>
					<h3>The page you are looking for does not exist.</h3>
					<p><a href='/'>Go to home <i className="fa fa-external-link"></i></a></p>
				</div>
			</div>
		)
	}
}

export default NotFound;