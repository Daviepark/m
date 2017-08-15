import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { calculateEmployee } from "../actions/index";

class EmployeeForm extends Component {
	
	renderField (field) {
		// const { meta: { touched, error } } = field;
		const touched = field.meta.touched;
		const error = field.meta.error;
		
		const className = `form-group ${touched && error ? 'has-danger' : ''}`;
		
		return(
			<div className={className}>
				<label>{field.label}</label>
				<input
					className="form-control"
					type={field.fieldType}
					{...field.input}
				/>
				<div className="text-help">
					{ touched ? error : ''}
				</div>
			</div>
		)
	}
	
	onSubmit (values) {
		this.props.calculateEmployee(values, () => {
			console.log("fdsd");
		})
	}
	
	
	render () {
		const { handleSubmit } = this.props;
		
		return(
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<Field
					label="FirstName"
					fieldType="text"
					name="firstName"
					component={this.renderField}
				/>
				<Field
					label="LastName"
					fieldType="text"
					name="lastName"
					component={this.renderField}
				/>
				<Field
					label="Annual Salary"
					fieldType="text"
					name="salary"
					component={this.renderField}
				/>
				<Field
					label="Super Percentage"
					fieldType="text"
					name="super"
					component={this.renderField}
				/>
				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
		)
	}
	
	
};


function validate (values) {
	
	const errors = {};
	
	if (!values.firstName) {
		errors.firstName = "Please enter a First Name";
	}
	
	if (!values.lastName) {
		errors.lastName = "Please enter a Last Name";
	}
	
	
	if (!values.salary) {
		errors.salary = "Please enter annual salary.";
	} else if (isNaN(values.salary)){
		errors.salary = "Salary must be a number.";
	} else if (values.salary < 0.01) {
		errors.salary = "Salary must be a positive number.";
	}
	
	
	return errors;
}




export default reduxForm({
	validate,
	form:'EmployeeForm'
})(
	connect (null, { calculateEmployee })(EmployeeForm)
);