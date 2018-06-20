import React from 'react';

const FilterItem = ({ onClick, active, children }) => {
	return (
		<li className={'filter ' + (active ? 'active ' : '')} onClick={onClick}>
			{children}
		</li>
	);
};

export default FilterItem;
