import React from 'react';

import Card from './Card';

class Grid extends React.Component {
	render() {
		return (
			<div className="grid">
				<Card { ...this.props } />
			</div>
		)
	}
}

Grid.defaultProps = {
  data: {}
};

Grid.propTypes = {
	data: React.PropTypes.object.isRequired
}

export default Grid;