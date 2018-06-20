import React from 'react';
import TodoList from '../../containers/TodoList';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import { todoFilters, actionTypes } from '../../constants';
import { setVisibilityFilter } from '../../actions';
import TodoItem from '../../components/TodoItem';

const setup = filter => {
	const store = configureStore()({
		todos: [
			{
				text: 'pick up groceries',
				completed: false,
				id: 0
			},
			{
				text: 'send an email',
				completed: true,
				id: 1
			}
		],
		visibilityFilter: filter ? filter : todoFilters.ALL
	});
	const wrapper = shallow(<TodoList store={store} />);

	return {
		store,
		wrapper
	};
};

describe('containers', () => {
	describe('TodoList', () => {
		it('should render', () => {
			const { wrapper } = setup();
			expect(wrapper).toMatchSnapshot();
		});

		it('should render active todos when visibilityFilter is ACTIVE', () => {
			const { wrapper } = setup(todoFilters.ACTIVE);
			const todoItems = wrapper.shallow().find(TodoItem);
			todoItems.forEach(item => {
				expect(item.props().todo.completed).toEqual(false);
			});

			expect(todoItems.length).toEqual(1);
		});
	});
});
