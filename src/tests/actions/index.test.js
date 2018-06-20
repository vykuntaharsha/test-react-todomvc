import * as actions from '../../actions';
import { actionTypes } from '../../constants';

describe('todo actions', () => {
	it('addTodo should create ADD_TODO action', () => {
		expect(actions.addTodo('pick up groceries')).toEqual({
			type: actionTypes.ADD_TODO,
			text: 'pick up groceries'
		});
	});

	it('deleteTodo should create DELETE_TODO action', () => {
		expect(actions.deleteTodo(10)).toEqual({
			type: actionTypes.DELETE_TODO,
			id: 10
		});
	});

	it('completeTodo should create COMPLETE_TODO action', () => {
		expect(actions.completeTodo(27)).toEqual({
			type: actionTypes.COMPLETE_TODO,
			id: 27
		});
	});

	it('setVisibilityFilter should create SET_VISIBILITY_FILTER action', () => {
		expect(actions.setVisibilityFilter('ACTIVE')).toEqual({
			type: actionTypes.SET_VISIBILITY_FILTER,
			filter: 'ACTIVE'
		});
	});
});
