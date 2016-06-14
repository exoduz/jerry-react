import React from 'react';

class Image extends React.Component {
	render() {
		var data = this.props.data,
			url = data.image_url,
			alt = data.alt,
			id = data.id;

		return <img src={ url } alt={ alt } id={ id } className="img-responsive" />
	}
}

Image.defaultProps = {
  data: {}
};

Image.propTypes = {
	data: React.PropTypes.object.isRequired
}

export default Image;