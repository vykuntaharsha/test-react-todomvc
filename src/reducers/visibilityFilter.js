import { actionTypes, todoFilters } from '../constants';

const visibilityFilter = (state = todoFilters.ALL, action) => {
	switch (action.type) {
		case actionTypes.SET_VISIBILITY_FILTER:
			return action.filter;
		default:
			return state;
	}
};

export default visibilityFilter;
