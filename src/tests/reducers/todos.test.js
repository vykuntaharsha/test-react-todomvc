import todos from '../../reducers/todos';
import { actionTypes } from '../../constants';

describe('todos reducer', () => {
	it('should handle default type', () => {
		expect(todos([], { type: 'abc' })).toEqual([]);
	});

	it('should handle ADD_TODO', () => {
		expect(
			todos([], { type: actionTypes.ADD_TODO, text: 'pick up groceries' })
		).toEqual([{ id: 0, text: 'pick up groceries', completed: false }]);
	});

	it('should handle COMPLETE_TODO', () => {
		expect(
			todos(
				[
					{ id: 0, text: 'pick up groceries', completed: false },
					{ id: 1, text: 'send an email', completed: false }
				],
				{ type: actionTypes.COMPLETE_TODO, id: 0 }
			)
		).toEqual([
			{ id: 0, text: 'pick up groceries', completed: true },
			{ id: 1, text: 'send an email', completed: false }
		]);
	});

	it('should handle DELETE_TODO', () => {
		expect(
			todos(
				[
					{ id: 0, text: 'pick up groceries', completed: false },
					{ id: 1, text: 'send an email', completed: false }
				],
				{ type: actionTypes.DELETE_TODO, id: 0 }
			)
		).toEqual([{ id: 1, text: 'send an email', completed: false }]);
	});
});
