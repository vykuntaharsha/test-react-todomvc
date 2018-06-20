import visibilityFilter from '../../reducers/visibilityFilter';
import { actionTypes, todoFilters } from '../../constants';

describe('visibilityFilter reducer', () => {
	it('should handle default type', () => {
		expect(visibilityFilter(todoFilters.ALL, { type: 'abc' })).toEqual(
			todoFilters.ALL
		);
	});
	it('should handle SET_VISIBILITY_FILTER', () => {
		expect(
			visibilityFilter(todoFilters.ALL, {
				type: actionTypes.SET_VISIBILITY_FILTER,
				filter: todoFilters.ACTIVE
			})
		).toEqual(todoFilters.ACTIVE);
	});
});
