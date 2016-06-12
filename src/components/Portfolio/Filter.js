import React from 'react';

class Filter extends React.Component {
	renderFilter(index) {
		var data = this.props.filters[index],
			name = data.name,
			category = data.category;
		
		return <li key={ index }><a href="#" className="filter-options" data-filter={ category }>{ name }</a></li>;
	}

	componentDidMount() {
		console.log('Filter CDM');
	}

	render() {
		var filters = this.props.filters;
		console.log('Portfolio Render');
		
		return (
			<ul className="portfolio-filter">
				<li><strong>Filter</strong></li>
				{ Object.keys(filters).map(index => this.renderFilter(index)) }
			</ul>
		)
	}
}

Filter.defaultProps = {
  filters: {}
};

Filter.propTypes = {
	filters: React.PropTypes.object.isRequired
}

export default Filter;