import React from 'react';

class ExternalLink extends React.Component {
	render() {
		var data = this.props.data,
			url = data.link_url,
			text = data.text,
			icon = data.icon,
			class_name = data.class_name;

		return (
			<a href={ url } target="_blank" className={ "btn btn-external-link " + class_name } role="button">
				 { text } { icon ? <i className={ icon }></i> : '' }
			</a>
		)
	}
}

ExternalLink.defaultProps = {
  data: {}
};

ExternalLink.propTypes = {
	data: React.PropTypes.object.isRequired
}

export default ExternalLink;