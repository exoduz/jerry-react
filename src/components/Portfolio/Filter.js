import React from 'react';

class Filter extends React.Component {
	renderFilters() {
	}

	render() {
		var filters = this.props.filters;
		console.log(filters);

		return (
			<ul className="portfolio-filter">
				<li><strong>Filter</strong></li>
			</ul>
		)
	}
}

export default Filter;