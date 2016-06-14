import React from 'react';

import FormRow from './FormRow';
import Label from './Label';
import InputError from './InputError';

class TextArea extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			value: this.props.value || ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
	}

	handleBlur(e) {
		var validate = this.props.validate,
			result = '';
		result = this.props.onBlur(this.props.name, e.target.value, validate); //pass value and validation methods to parent onBlur function
	}
	
	handleChange(e) {
		this.props.onChange(e);
		this.setState({ value: e.target.value })
	}

	render() {
		return (
			<FormRow rowClass={ 'form-group' }>
        <Label forInput={ this.props.name }>{ this.props.name }</Label>
				<textarea
					className={ this.props.class_name + " " + (!this.props.valid ? 'error' : '') }
					id={ this.props.name }
					name={ this.props.name }
					value={ this.state.value }
					onChange={ this.handleChange }
					onBlur={ this.handleBlur }
				/>

				{ !this.props.valid ? <InputError forInput={ this.props.name }>{ this.props.errorMessage }</InputError> : '' }
      </FormRow>
		)
	}
}

TextArea.defaultProps = {
  name: ''
};

TextArea.propTypes = {
	name: React.PropTypes.string.isRequired,
	onChange: React.PropTypes.func.isRequired,
}

export default TextArea;