import { renderComponent, expect } from "../test_helper";
import EmployeeForm from '../../src/containers/employee_form';
import {describe, it, beforeEach} from 'mocha';

describe('Employee Form', () => {
	let component;
	
	beforeEach(() => {
		component = renderComponent(EmployeeForm);
	});

	it('has 4 inputs', () => {
		expect(component.find('Input')).to.have.length(4);
	});
	
	it('has 1 select', () => {
		expect(component.find('Select')).to.have.length(1);
	});
	
	it('has every month available', () => {
		expect(component.find('option')).to.have.length(13);
	});
	
	it('has a submit button', () => {
		expect(component.find('button')).to.exist;
	});
	
	it('has a firstName field', () => {
		expect(component.find('[name="firstName"]')).to.exist;
	});
	
	it('has a lastName field', () => {
		expect(component.find('[name="lastName"]')).to.exist;
	});
	
	it('has a salary field', () => {
		expect(component.find('[name="salary"]')).to.exist;
	});
	
	it('has a super field', () => {
		expect(component.find('[name="superAnnuation"]')).to.exist;
	});
	

	
});