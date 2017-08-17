import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { calculateEmployee } from "../actions/index";
import { validate } from "../utils/form_validation"
import styles from '../../style/containers/employee_form.css'

class EmployeeForm extends Component {
	
	renderInputField (field) {
		const { meta: { touched, error } } = field;
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
	
	renderSelectField (field) {
		const { meta: { touched, error }, children } = field;
		const className = `form-group ${touched && error ? 'has-danger' : ''}`;
		
		return(
			<div className={className}>
				<label>{field.label}</label>
				<select className="form-control" {...field.input}>
					{children}
				</select>
				<div className="text-help">
					{ touched ? error : ''}
				</div>
			</div>
		)
	}
	
	onSubmit (values) {
		this.props.calculateEmployee(values, () => {
			this.props.history.push("/employee-display");
		})
	}
	
	
	render () {
		const { handleSubmit } = this.props;
		
		return(
			<form className={styles.form}
			      onSubmit={handleSubmit(this.onSubmit.bind(this))}
			>
				<Field
					label="FirstName"
					fieldType="text"
					name="firstName"
					component={this.renderInputField}
				/>
				<Field
					label="LastName"
					fieldType="text"
					name="lastName"
					component={this.renderInputField}
				/>
				<Field
					label="Annual Salary"
					fieldType="text"
					name="salary"
					component={this.renderInputField}
				/>
				<Field
					label="Super Percentage"
					fieldType="text"
					name="superAnnuation"
					component={this.renderInputField}
				/>
				<Field name="month" component={this.renderSelectField} label="Select Month">
					<option></option>
					<option name="January">January</option>
					<option name="February">February</option>
					<option name="March">March</option>
					<option name="April">April</option>
					<option name="May">May</option>
					<option name="June">June</option>
					<option name="July">July</option>
					<option name="August">August</option>
					<option name="September">September</option>
					<option name="October">October</option>
					<option name="November">November</option>
					<option name="December">December</option>
				</Field>
			
				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
		)
	}
};

export default reduxForm({
	validate,
	form:'EmployeeForm'
})(
	connect (null, { calculateEmployee })(EmployeeForm)
);