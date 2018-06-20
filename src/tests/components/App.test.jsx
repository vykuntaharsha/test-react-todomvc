import React from 'react';
import App from '../../components/App';
import { createRenderer } from 'react-test-renderer/shallow';
import AddTodo from '../../containers/AddTodo';
import TodoList from '../../containers/TodoList';
import FilterList from '../../containers/FilterList';

const setup = () => {
	const renderer = createRenderer();
	renderer.render(<App />);
	return renderer.getRenderOutput();
};

describe('components', () => {
	describe('AddTodo', () => {
		it('should render', () => {
			const output = setup();
			const [, addTodo] = output.props.children;
			expect(addTodo.type).toBe(AddTodo);
		});
	});

	describe('FilterList', () => {
		it('should render', () => {
			const output = setup();
			const [, , , main] = output.props.children;
			const [filterList] = main.props.children;
			expect(filterList.type).toBe(FilterList);
		});
	});

	describe('TodoList', () => {
		it('should render', () => {
			const output = setup();
			const [, , , main] = output.props.children;
			const [, todoList] = main.props.children;
			expect(todoList.type).toBe(TodoList);
		});
	});
});
