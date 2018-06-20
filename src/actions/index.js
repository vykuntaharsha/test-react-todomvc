import { actionTypes } from '../constants';

export const addTodo = text => ({ type: actionTypes.ADD_TODO, text });
export const deleteTodo = id => ({ type: actionTypes.DELETE_TODO, id });
export const completeTodo = id => ({ type: actionTypes.COMPLETE_TODO, id });
export const setVisibilityFilter = filter => ({
	type: actionTypes.SET_VISIBILITY_FILTER,
	filter
});
