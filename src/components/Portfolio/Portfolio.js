import React from 'react';

import Filter from './Filter';
import Grid from './Grid';

class Portfolio extends React.Component {
	constructor() {
    super();

    this.state = {
      portfolio: {}
    }
  }

	componentDidMount() {
		//retrieve data from JSON file
		var url = '/assets/data/portfolio.json';
		this.serverRequest = $.getJSON(url, function(data) {
		  this.setState({ portfolio: data });
		}.bind(this));
	}

	componentWillUnmount() {
		this.serverRequest.abort();
	}

	render() {
		return (
			<section id="portfolio">
				<div className="container text-center">
					<h2>Portfolio</h2>
					<Filter filters={ this.state.portfolio.filters } />
					<Grid data={ this.state.portfolio.portfolio } />
				</div>{/* .containter */}
			</section>
		)
	}
}

export default Portfolio