import React from 'react';

class Filter extends React.Component {
	renderFilter(index, data) {
		return <li key={ index }><a href="#" class="filter-options" data-filter={ data.category }>{ data.name }</a></li>;
	}

	render() {
		var filters = this.props.filters;
		
		return (
			<ul className="portfolio-filter">
				<li><strong>Filter</strong></li>
				{ Object.keys(filters).map(index => this.renderFilter(index, filters[index])) }
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