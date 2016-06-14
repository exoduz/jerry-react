import React from 'react';

class FormRow extends React.Component {
	render() {
		return (
			<div className={ this.props.rowClass }>
				{ this.props.children }
			</div>
		)
	}
}


export default FormRow;