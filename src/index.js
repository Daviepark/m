import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/app_heading';
import EmployeeForm from './containers/employee_form';
import EmployeeShow from './containers/employee_show';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <div>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/employee-display" component={EmployeeShow} />
          <Route path="/" component={EmployeeForm} />
        </Switch>
      </BrowserRouter>
    </div>
  </Provider>
  , document.querySelector('.container'));
