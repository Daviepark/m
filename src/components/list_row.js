import React from 'react';

const ListRow = (props) => {
	return (
		<li className="list-group-item" >{`${props.keyName} : ${props.val}`}</li>
	);
}

export default ListRow;