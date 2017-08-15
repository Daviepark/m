import {determineTaxBracket} from "./tax_brackets";

export function calculateTax (annual){
	const {base, overAmount, percentage} = determineTaxBracket(annual);
	
	if(percentage === 0)
		return 0;
	
	const tax = ((base + (annual - overAmount) * percentage) / 12);
	return Math.round(tax);
}

export function calculateGrossIncome (annual) {
	return Math.round(annual / 12);
}

export function calculateNettIncome (annual) {
	return calculateGrossIncome(annual) - calculateTax(annual);
}

export function calculateSuper (annual, superPercenatge) {
	return Math.round(calculateNettIncome(annual) * superPercenatge);
}