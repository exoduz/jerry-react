import React from 'react';

class Card extends React.Component {
	renderCard(key) {
		var name = this.props.data[key].name,
			description = this.props.data[key].description,
			category = this.props.data[key].category,
			image = this.props.data[key].image;

		return (
			<div key={ key } className={ 'grid-item ' + category }>
				<div className="card">
					<a href={ image } target="_blank">
						<img src={ image } alt={ name ? name : category } />
					</a>
					{ name ? <h4>{ name }</h4> : '' }
					{ description ? <p classNameName="name">{ description }</p> : '' }
				</div>{/* .card */}
			</div>
		)
	}

	render() {
		var data = this.props.data;

		return (
			<div>
				{ Object.keys(data).map(key => this.renderCard(key)) }
			</div>
		)
	}
}

Card.defaultProps = {
  data: {}
};

Card.propTypes = {
	data: React.PropTypes.object.isRequired
}

export default Card;