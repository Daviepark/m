import { expect } from '../test_helper';
import { calculateEmployee } from '../../src/actions/index';
import { CALCULATE_EMPLOYEE } from "../../src/actions/index";

describe('actions', () => {
	
	describe('calculateEmployee', () => {
		
		const testEmployee = {
			firstName:'test',
			lastName:'tester',
			superAnnuation:'5',
			salary:'60000',
			month:'July'
		};
		const nullFunction = () => {
			return null;
		}
		
		it('has the correct type', () => {
			expect(calculateEmployee(testEmployee, nullFunction).type).to.equal(CALCULATE_EMPLOYEE);
		})
	});
});
