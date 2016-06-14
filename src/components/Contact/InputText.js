import React from 'react';

import FormRow from './FormRow';
import Label from './Label';
import InputError from './InputError';

class InputText extends React.Component {
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
				<input
					type={ this.props.type }
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

InputText.defaultProps = {
	type: 'text',
  name: ''
};

InputText.propTypes = {
	type: React.PropTypes.string.isRequired,
	name: React.PropTypes.string.isRequired,
	onChange: React.PropTypes.func.isRequired,
}

export default InputText;