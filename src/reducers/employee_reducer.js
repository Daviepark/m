import { CALCULATE_EMPLOYEE } from '../actions/index';

export default function (state = {}, action) {
	switch(action.type){
		case CALCULATE_EMPLOYEE:
			return  action.payload;
		default:
			return state;
	}
}