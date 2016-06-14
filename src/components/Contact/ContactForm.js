import React from 'react';
import update from 'immutability-helper';

import FormRow from './FormRow';
import InputText from './InputText';
import TextArea from './TextArea';
import Validate from './../Helpers/Validate'

class ContactForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: {
				value: '',
				valid: true,
				errorMessage: ''
			},
			email: {
				value: '',
				valid: true,
				errorMessage: ''
			},
			message: {
				value: '',
				valid: true,
				errorMessage: ''
			}
		};

		this.handleBlur = this.handleBlur.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	/**
	 All data stored here
	 @param key { string } Key to return part of object
	*/
	_getData(key) {
		var fields = {
			name: {
				type: 'text',
				fieldName: 'name',
				class_name: 'form-control input-lg',
				validation: {
      		isRequired: {
        		errorMessage: 'This field is required.'
      		}
      	}
			},
			email: {
				type: 'email',
				fieldName: 'email',
				class_name: 'form-control input-lg',
				validation: {
      		isRequired: {
        		errorMessage: 'This field is required.'
      		},
        	isEmail: {
        		errorMessage: 'Please enter a valid email address.'
      		}
      	}
      },
      message: {
				type: 'textarea',
				fieldName: 'message',
				class_name: 'form-control',
				validation: {
      		isRequired: {
        		errorMessage: 'This field is required.'
      		}
      	}
			}
		}

		return key ? fields[key] : fields;
	}

	handleBlur(field, value, validation) {
		var isValid = true,
			rules = Object.keys(validation),
			results = null;

		for (var i = 0; i < rules.length; i++) {
			var rule = rules[i],
				result = Validate[rule](value);
			console.log(result);
			var newState = update(
				this.state, {
					[field]: {
						valid: { $set: (result ? true : false) },
						errorMessage: { $set: (result ? '' : this._getData(field).validation[rule].errorMessage) } //get error message		
					}
				}
			);
			this.setState(newState);
		}

		return result ? '' : rule; //return/break on first error
	}

	handleChange(e) {
		var name = e.target.name,
			value = e.target.value;

		//use immutability-helper to update value without losing the others in the object
		//Problem: http://stackoverflow.com/questions/24898012/react-js-setstate-overwriting-not-merging
		//Solution: http://stackoverflow.com/a/24900248/3940083
		var newState = update(this.state, {
			[name]: {
				value:
				{ $set: value }
			}
		});
		this.setState(newState);
	}

	handleSubmit(e) {
		e.preventDefault();

		var name = this.state.name.value.trim(),
			email = this.state.email.value.trim(),
			message = this.state.message.value.trim();
		
		if (!name || !email || !message) { //if default state or any field empty then return
			var fields = ['name', 'email', 'message'],
				currentState = this.state;

			//validate fields on submit
			fields.map(function(field) {
				if (!currentState[field].value) {
					currentState = update(
						currentState, {
							[field]: {
								valid: { $set: false },
								errorMessage: { $set: this._getData(field).validation.isRequired.errorMessage } //get error message		
							}
						}
					);
				}
			}.bind(this));

			this.setState(currentState);
			return;
		}
		
		//valid so send email
		var $form = $("#home-contact-form"),
			$submitButton = $("#contact .btn-submit"),
			data = JSON.parse(JSON.stringify({ name: name, email: email, message: message })),  //values
			url = 'send_mail.php';

		$submitButton.button('loading');

  	$.post(
	    url,
	    data,
	    function(response){
        if (response === "ok") {
        	//success
        	$submitButton.text("Email Sent").addClass('success');
        	setTimeout(function() {
        		$submitButton.removeClass('success').button('reset'); //reset text after 1.5secs
        	}, 1500);

        	this.setState({
						name: {
							value: '',
							valid: true,
							errorMessage: ''
						},
						email: {
							value: '',
							valid: true,
							errorMessage: ''
						},
						message: {
							value: '',
							valid: true,
							errorMessage: ''
						}
					});

					$form.trigger('reset'); //reset form values
        } else {
        	//uh oh!
        	$submitButton.html("Something went wrong. Please try again.").addClass('error');
        	setTimeout(function() {
        		$submitButton.removeClass('error').button('reset'); //reset text after 1.5secs
        	}, 1500);
        }
	    }.bind(this)
		);
	}

	/**
	 Render fields
	 @param key { string } Key to return part of object
	*/
	renderFields(key) {
		var data = this._getData(key),
			ret = null;

		if (data.type === 'textarea') {
			ret = <TextArea
				key={ data.fieldName }
      	name={ data.fieldName }
      	placeholder={ data.placeholder }
      	value={ this.state[key].value }
      	class_name={ data.class_name }
      	validate={ data.validation }
      	valid={ this.state[key].valid }
		    errorMessage={ this.state[key].errorMessage }
      	onBlur={ this.handleBlur }
      	onChange={ this.handleChange }
      />
		} else {
			ret = <InputText
				key={ data.fieldName }
				type={ data.type }
      	name={ data.fieldName }
      	placeholder={ data.placeholder }
      	value={ this.state[key].value }
      	class_name={ data.class_name }
      	validate={ data.validation }
      	valid={ this.state[key].valid }
		    errorMessage={ this.state[key].errorMessage }
      	onBlur={ this.handleBlur }
      	onChange={ this.handleChange }
      />
		}

		return ret;
	}

	render() {
		return (
			<div id="contact-form">
       <h2>Contact</h2>

      <form id="home-contact-form" onSubmit={ this.handleSubmit } novalidate>
        <h4>Please fill out all the fields</h4>
        
				{ Object.keys(this._getData()).map(key => this.renderFields(key)) }

        <FormRow rowClass={ 'btn-container' }>
					<button type="submit" className="btn btn-submit btn-lg btn-success-outline" data-loading-text="Sending..." formnovalidate="formnovalidate">Send</button>
				</FormRow>
        
       </form>
		  </div>
		)
	}
}


export default ContactForm;