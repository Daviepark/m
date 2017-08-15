import { calculateTax,
	calculateNettIncome,
	calculateGrossIncome
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
	const am = 60050;
	
	const em = {
		tax: calculateTax(am),
		gross: calculateGrossIncome(am),
		nett: calculateNettIncome(am)
	}
	
	
	console.log(em);
	
}