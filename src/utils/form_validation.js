export function validate (values) {
	
	const errors = {};
	//Validate the first name field
	if (!values.firstName) {
		errors.firstName = "Please enter a First Name";
	}
	//Validate the last name field
	if (!values.lastName) {
		errors.lastName = "Please enter a Last Name";
	}
	//Validate the salary field
	if (!values.salary) {
		errors.salary = "Please enter annual salary.";
	} else if (isNaN(values.salary)){
		errors.salary = "Salary must be a number.";
	} else if (values.salary < 0.01) {
		errors.salary = "Salary must be a positive number.";
	}
	//Validate the super field
	if(!values.superAnnuation){
		errors.superAnnuation = "Please enter percentage of Superannuation"
	} else if (isNaN(values.salary)){
		errors.salary = "Super amount must be a number.";
	} else if (!Number.isInteger(values.superAnnuation)) {
		errors.superAnnuation = "Please enter whole number only."
	} else if (values.superAnnuation > 50 || values.superAnnuation < 0) {
		errors.superAnnuation = "Super must be between 0% and 50%."
	}
	//Validate the month field
	if(!values.month) {
		errors.month = "Please select month";
	}
	
	
	
	return errors;
}
