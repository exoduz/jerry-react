import React from 'react';

class InputError extends React.Component {
	render() {
		return <label id={ this.props.forInput + '-error' } className="error" htmlFor={ this.props.forInput }>{ this.props.children }</label>;
	}
}


InputError.defaultProps = {
  forInput: ''
};

InputError.propTypes = {
	forInput: React.PropTypes.string.isRequired
}

export default InputError;