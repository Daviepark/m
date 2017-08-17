import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import EmployeeReducer from './employee_reducer';

const rootReducer = combineReducers({
  form: formReducer,
  employee: EmployeeReducer
});

export default rootReducer;
