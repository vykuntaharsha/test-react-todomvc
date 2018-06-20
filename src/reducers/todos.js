import { actionTypes } from '../constants';

const todos = (state = [], action) => {
	switch (action.type) {
		case actionTypes.ADD_TODO:
			return [
				...state,
				{
					id:
						state.reduce(
							(maxId, todo) => Math.max(todo.id, maxId),
							-1
						) + 1,
					text: action.text,
					completed: false
				}
			];

		case actionTypes.DELETE_TODO:
			return state.filter(todo => todo.id !== action.id);

		case actionTypes.COMPLETE_TODO:
			return state.map(
				todo =>
					todo.id === action.id ? { ...todo, completed: true } : todo
			);

		default:
			return state;
	}
};

export default todos;
