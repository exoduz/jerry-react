import React from 'react';

class Label extends React.Component {
	render() {
		return (
			<label htmlFor={ this.props.forInput } className={ !this.props.valid ? 'error' : '' }>
				{ this.props.children }
			</label>
		)
	}
}


export default Label;