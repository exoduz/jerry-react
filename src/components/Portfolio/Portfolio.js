import React from 'react';

import Filter from './Filter';
import data from 'json!./../../../build/assets/data/portfolio.json';

class Portfolio extends React.Component {
	constructor() {
    super();

    this.state = {
      portfolio: {}
    }
  }

  /**
	 Retrieve data from JSON file
	*/
	_loadData() {
		var url = '/assets/data/portfolio.json';
		this.serverRequest = $.getJSON(url, function(data) {
		  //this.setState({ portfolio: data });
		}.bind(this));

		this.setState({
			portfolio: {
				filters: {
					filter1: { name: "All", category: "*" },
					filter2: { name: "Alli", category: "asdf" }
				}
			}
		});
	};

	componentDidMount() {
		this._loadData();
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
				</div>{/* .containter */}
			</section>
		)
	}
}

export default Portfolio