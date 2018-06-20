import React from 'react';
import TodoItem from '../../components/TodoItem';
import { createRenderer } from 'react-test-renderer/shallow';

const setup = (completed = false) => {
	const props = {
		todo: {
			id: 10,
			text: 'pick up groceries',
			completed: completed
		},
		completeTodo: jest.fn(),
		deleteTodo: jest.fn()
	};
	const renderer = createRenderer();
	renderer.render(<TodoItem {...props} />);
	return {
		props,
		renderer,
		output: renderer.getRenderOutput()
	};
};

describe('components', () => {
	describe('TodoItem', () => {
		it('should render', () => {
			const { output } = setup();
			expect(output.type).toBe('li');
		});

		it('should render completed class', () => {
			const { output } = setup(true);
			expect(output.props.className).toContain('completed');
		});

		it('complete checkbox should be disabled and checked after task completed', () => {
			const { output } = setup(true);
			const [, completeCheckbox] = output.props.children;
			expect(completeCheckbox.props.disabled).toEqual(true);
			expect(completeCheckbox.props.checked).toEqual(true);
		});

		it('complete checkbox onChange should call completeTodo ', () => {
			const { output, props } = setup();
			const [, completeCheckbox] = output.props.children;
			completeCheckbox.props.onChange();
			expect(props.completeTodo).toBeCalledWith(10);
		});

		it('delete button onClick should call deleteTodo ', () => {
			const { output, props } = setup();
			const [, , deleteButton] = output.props.children;
			deleteButton.props.onClick();
			expect(props.deleteTodo).toBeCalledWith(10);
		});

		it('hovering over delete button should add class destroy', () => {
			const { output, renderer } = setup();
			const [, , deleteButton] = output.props.children;
			deleteButton.props.onMouseEnter();
			const updated = renderer.getRenderOutput();
			expect(updated.props.className).toContain('destroy');
		});
	});
});
