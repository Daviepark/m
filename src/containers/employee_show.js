import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import ListRow from '../components/list_row';

class EmployeeShow extends Component {
	
	render () {
		
		const renderList = _.map(this.props.employee, (value, key) => {
			return <ListRow key={key} keyName={key} val={value}/>
		})
		
		return <div>
			<ul className="list-group">
				{renderList}
			</ul>
		</div>
	}
};

function mapStateToProps (state) {
	return {
		employee: state.employee
	}
}

export default connect(mapStateToProps)(EmployeeShow);