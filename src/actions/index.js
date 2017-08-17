import { calculateTax,
	calculateNettIncome,
	calculateGrossIncome,
	calculateSuper
} from "../utils/calc_fuctions";
export const CALCULATE_EMPLOYEE = 'calculate_employee';

export function calculateEmployee(values, callback) {
	
	const employee = completeEmployee(values);
	
	callback();
	
	return {
		type: CALCULATE_EMPLOYEE,
		payload: employee
	}
}

function completeEmployee( values ) {
	const { firstName, lastName, salary, superAnnuation, month } = values;
	
	return {
		firstName,
		lastName,
		tax: calculateTax(salary),
		gross: calculateGrossIncome(salary),
		nett: calculateNettIncome(salary),
		superAnnuation: calculateSuper(salary, superAnnuation),
		month
	}
}